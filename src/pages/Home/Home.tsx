import { FC } from 'react';
import { useHelmetContext } from "../../providers/Helmet/hooks/useHelmetContext.ts";
import { Layout } from "../../features/Layout";

export const Home: FC = () => {
    useHelmetContext({
        title: "Main"
    });
    return (
        <Layout>
            Home
        </Layout>
    );
}