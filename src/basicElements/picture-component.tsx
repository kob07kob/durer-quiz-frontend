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
        <source srcSet={props.picture?.jpegOrPngUrl}/>
        <img style={props.style}
             className={props.className}
             src={props.picture?.jpegOrPngUrl}
             alt={props.picture.alt}
             title={props.picture?.title}/>
    </picture>;
};
