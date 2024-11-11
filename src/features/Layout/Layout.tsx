import { FC, ReactNode } from 'react';
import classes from './styles/index.module.scss';
import { FlexBox } from "../../components/FlexBox";
import { Header } from "../Header";

type LayoutPropsType = {
    children: ReactNode;
}

export const Layout: FC<LayoutPropsType> = ({ children }) => {
    return (
        <FlexBox column>
            <Header/>
            {children}
        </FlexBox>
    );
}