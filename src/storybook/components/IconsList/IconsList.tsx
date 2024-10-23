import React, { useState, useEffect, FC, SVGProps } from 'react';
import { FlexBox } from "../../../components/FlexBox";
import classes from './styles/index.module.scss';
import { Popover } from "../../../components/Popover";
import { convertToTitleCase } from "../../../utils/convertToTitleCase.ts";
import { useMessageContext } from "../../../providers/Message/hooks/useMessageContext.ts";

const icons = import.meta.glob('/src/icons/*.tsx');

const IconsList: React.FC = () => {
    const [iconComponents, setIconComponents] = useState<Record<string, FC<SVGProps<SVGSVGElement>>>>({});
    const { openMessage } = useMessageContext();

    useEffect(() => {
        const loadIcons = async () => {
            const loadedIcons: Record<string, React.FC> = {};
            for (const path in icons) {
                const module = await icons[path]();
                const iconName = path.replace('/src/icons/', '').replace('.tsx', '');
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                loadedIcons[iconName] = module[iconName];
            }
            setIconComponents(loadedIcons);
        };

        loadIcons();
    }, []);

    return (
        <FlexBox gap='small' style={{ width: '450px', flexWrap: 'wrap' }}>
            {Object.keys(iconComponents).map((iconName) => {
                const IconComponent = iconComponents[iconName];
                const handleIconClick = async (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
                    await navigator.clipboard.writeText(`<${iconName}/>`);
                    await openMessage(`Copied <${iconName}/>`, event);
                }
                return (
                    <Popover content={convertToTitleCase(iconName.split('Icon')[0])} key={iconName} trigger='hover'>
                        <IconComponent
                            width='32'
                            height='32'
                            style={{ flexShrink: 0, cursor: 'pointer' }}
                            className={classes.icon}
                            onClick={handleIconClick}
                        />
                    </Popover>
                );
            })}
        </FlexBox>
    );
};

export default IconsList;
