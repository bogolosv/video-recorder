import { ButtonHTMLAttributes, DetailedHTMLProps, FC, useCallback, useEffect, useState } from 'react';
import classes from './styles/index.module.scss';
import { StopRecordIcon } from "../../../../icons/StopRecordIcon.tsx";
import classNames from "classnames";

type RecordingButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    /**
     * The value shows the stop or record button
     */
    isRecording?: boolean;
}

export const RecordingButton: FC<RecordingButtonPropsType> = (
    {
        isRecording = false,
        onClick,
        className,
    }
) => {
    const [isRecordingT, setIsRecordingT] = useState(isRecording);
    const buttonClasses = classNames(classes.button, className);

    const handleButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onClick && onClick(event);
        setIsRecordingT(prevState => !prevState);
    }, [onClick]);

    useEffect(() => {
        setIsRecordingT(isRecording);
    }, [isRecording]);

    return (
        <button className={buttonClasses} onClick={handleButtonClick}>
            <StopRecordIcon isRecording={isRecordingT} className={classes.icon}/>
        </button>
    );
}