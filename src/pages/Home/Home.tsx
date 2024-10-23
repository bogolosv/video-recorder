import { FC } from 'react';
import { useHelmetContext } from "../../providers/Helmet/hooks/useHelmetContext.ts";

export const Home: FC = () => {
    useHelmetContext({
        title: "Main"
    });
    return (
        <>Home</>
    );
}