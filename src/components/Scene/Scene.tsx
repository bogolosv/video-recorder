import { FC, useEffect } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { util, Control } from 'fabric';
import { Transform, Circle } from 'fabric';
import classes from './styles/index.module.scss';
import { Button } from "../Button";
import { ToolsIcon } from "../../icons/ToolsIcon.tsx";
import { ThreeVerticalDotsIcon } from "../../icons/ThreeVerticalDotsIcon.tsx";
import { Popover } from "../Popover";
import { FlexBox } from "../FlexBox";

type ScenePropsType = {}

export const Scene: FC<ScenePropsType> = () => {
    const { editor, onReady, selectedObjects } = useFabricJSEditor({ defaultFillColor: '#000' });
    const onAddCircle = () => {
        // editor?.setFillColor('#fff');
        // editor?.addCircle();
        const circle = new Circle({
            fill: 'red',
            top: Math.random() * editor?.canvas.height!, left: Math.random() * editor?.canvas.width!, width: 80, height: 50,
        })
        circle.set({

        })
        editor?.canvas.add(circle)
        editor?.canvas.requestRenderAll();
    };

    useEffect(() => {
        editor?.canvas.set({
            // backgroundColor: '#000',
        })
        // editor?.canvas.setHeight(1080);
        // editor?.canvas.setWidth(1920);
    }, [editor]);

    function deleteObject() {
        const canvas = editor?.canvas;
        editor?.deleteSelected();
        canvas?.requestRenderAll();
    }
    console.log(editor?.canvas._objects);

    return (
        <div className={classes.container}>
            <FabricJSCanvas onReady={onReady} />
            <Popover
                content={
                    <FlexBox column gap='tiny'>
                        <Button onClick={onAddCircle}>
                            Add circle
                        </Button>
                        <Button onClick={deleteObject}>
                            Delete selected
                        </Button>
                    </FlexBox>
                }
            >
                <Button Icon={ThreeVerticalDotsIcon} className={classes.options} size='small'/>
            </Popover>
        </div>
    );
}