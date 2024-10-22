import { FC } from 'react';
import { ColorSwatch } from "../ColorSwatch";
import colors from '../../../styles/const/colors/index.module.scss'
import { FlexBox } from "../../../components/FlexBox";

export const ColorsList: FC = () => {
    return (
        <FlexBox gap='small' style={{ flexWrap: 'wrap' }}>
            {Object.keys(colors).map(colorName => (
                <ColorSwatch
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    color={colors[colorName]}
                    title={colorName}
                />
            ))}
        </FlexBox>
    );
}