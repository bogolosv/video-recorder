import { TitleSize, TitleWeight } from "./const";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export enum TopographyKeys {
    Size = 'size',
    Weight = 'weight',
}

export type TopographyProps = {
    [TopographyKeys.Size]?: keyof typeof TitleSize;
    [TopographyKeys.Weight]?: keyof typeof TitleWeight;
};

export type TitleType = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & TopographyProps;

export type ParagraphPropsType = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & TopographyProps;
export type SpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & TopographyProps;