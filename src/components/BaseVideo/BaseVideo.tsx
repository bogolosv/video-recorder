import { DetailedHTMLProps, forwardRef, useImperativeHandle, useRef, VideoHTMLAttributes } from 'react';
import classes from './styles/index.module.scss';
import classNames from "classnames";

export type BaseVideoPropsType = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

export type BaseVideoRef = {
    video: HTMLVideoElement;
    container: HTMLDivElement;
}

export const BaseVideo = forwardRef<BaseVideoRef, BaseVideoPropsType>((
    { children, className, ...props },
    ref
) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const containerClasses = classNames(classes.container, className);

    useImperativeHandle(ref, () => ({
        video: videoRef.current!, container: containerRef.current!
    }), [videoRef.current]);

    return (
        <div
            ref={containerRef}
            className={containerClasses}
        >
            <video ref={videoRef} {...props}/>
            {children}
        </div>
    );
})