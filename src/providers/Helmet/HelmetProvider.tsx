import { FC, ReactNode, useCallback, useState } from 'react';
import { HelmetContext } from './const';
import { Helmet } from 'react-helmet';
import { HelmetDataType } from "./types.ts";
import { SITE_DESCRIPTION, SITE_NAME } from "../../CONST.ts";

type HelmetProviderPropsType = {
    children: ReactNode;
}

export const HelmetProvider: FC<HelmetProviderPropsType> = ({children}) => {
    const [data, setData] = useState<HelmetDataType>({
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
    });

    const setHelmetData = useCallback((data: Partial<HelmetDataType>) => {
        setData(prevState => ({ ...prevState, ...data }));
    }, []);

    return (
        <HelmetContext.Provider value={{
            data,
            setData: setHelmetData,
        }}>
            <Helmet>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
            </Helmet>
            {children}
        </HelmetContext.Provider>
    );
}