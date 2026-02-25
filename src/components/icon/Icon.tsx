import iconSprite from "../../assets/images/icons-sprite.svg"
import React from "react";

type IconPropsType = {
    iconId?: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "97"}
             height={props.height || "59"}
             viewBox={props.viewBox || "0 0 97 59"}
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
};

