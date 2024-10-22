import { FC, SVGProps } from "react";

export const StopRecordIcon: FC<SVGProps<SVGSVGElement> & { isRecording?: boolean }> = ({ isRecording, ...props }) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {isRecording ? (
                <rect x="14" y="14" width="40" height="40" rx="4" fill="#1C274C"/>
            ) : (
                <rect x="6" y="6" width="52" height="52" rx="26" fill="#1C274C"/>
            )}
        </svg>
    )
}