import React, { ReactNode } from "react";

export type MessageStateType = {
    openMessage: (message: ReactNode, event?: React.MouseEvent<Element, MouseEvent>) => Promise<void> ;
}