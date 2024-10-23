export type HelmetStateType = {
    data: HelmetDataType;
    setData: (data: Partial<HelmetDataType>) => void;
}

export type HelmetDataType = {
    title: string;
    description?: string;
}