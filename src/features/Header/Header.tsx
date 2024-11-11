import { FC } from 'react';
import classes from './styles/index.module.scss';
import logo from '../../../public/logo.png';
import { FlexBox } from "../../components/FlexBox";
import { Title } from "../../components/Topography/Title";
import { PAGES, SITE_NAME } from "../../CONST.ts";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

type HeaderPropsType = {}

export const Header: FC<HeaderPropsType> = () => {
    return (
        <header className={classes.header}>
            <FlexBox align='middle' justify='space-between'>
                <FlexBox gap='small' align='middle'>
                    <img src={logo} alt=""/>
                    <Title level={1}>
                        {SITE_NAME}
                    </Title>
                </FlexBox>
                <nav>
                    <ul>
                        <li>
                            <Link to={PAGES.Recorder}>
                                <Button link>Recorder</Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </FlexBox>
        </header>
    );
}