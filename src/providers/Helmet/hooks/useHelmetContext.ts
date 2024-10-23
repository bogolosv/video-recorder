import { useContext, useEffect } from 'react';
import { HelmetContext } from '../const';
import { HelmetDataType } from "../types.ts";

export function useHelmetContext(data: HelmetDataType) {
    const context = useContext(HelmetContext);

    if (!context) {
        throw new Error('useHelmetContext must be used within a HelmetProvider');
    }

    const { setData } = context;

    useEffect(() => {
        setData(data)
    }, []);

    return context;
}