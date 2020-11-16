import React from 'react';

interface PictureProps {
    picture: Picture;
    style?: React.CSSProperties;
    className?: string;
}

export interface Picture {
    webPUrl: string;
    jpegOrPngUrl: string;
    alt: string;
    title: string;
}

export const WebshopPicture: React.FunctionComponent<PictureProps> = (props: PictureProps) => {
    return <picture>
        <source srcSet={`${process.env.PUBLIC_URL}${props.picture?.webPUrl}`} type="image/webp"/>
        <img style={props.style}
             className={props.className}
             src={`${process.env.PUBLIC_URL}${props.picture?.jpegOrPngUrl}`}
             alt={props.picture.alt}
             title={props.picture?.title}/>
    </picture>;
};
