import { useState } from 'react';
import { TopographyKeys, TopographyProps } from '../types';

type PropsWithoutTopography<T> = Omit<T, keyof TopographyProps>;

function usePropsWithoutTopography<T extends TopographyProps>(props: T): PropsWithoutTopography<T> {
    const [filteredProps] = useState<PropsWithoutTopography<T>>(
        () => {
            const filtered: Partial<PropsWithoutTopography<T>> = {};
            Object.entries(props).forEach(([key, value]) => {
                if (!Object.values(TopographyKeys).includes(key as TopographyKeys)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    filtered[key as keyof PropsWithoutTopography<T>] = value;
                }
            });
            return filtered as PropsWithoutTopography<T>;
        }
    );
    return filteredProps;
}

export default usePropsWithoutTopography;
