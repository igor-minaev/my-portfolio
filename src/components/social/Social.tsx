import {Icon} from "../icon/Icon.tsx";
import type {SocialItem} from "../../layout/header/Header.tsx";
import React from "react";
import {S} from './Social_Styles.ts'


export const Social: React.FC<{ socialIcons: Array<SocialItem> }> = (props: { socialIcons: Array<SocialItem> }) => {
    return (
        <S.Social>
            {props.socialIcons.map((item) => (
                <S.ListItem key={item.id}>
                    <S.Link href="#">
                        <Icon iconId={item.iconId} width={item.width} height={item.height} viewBox={item.viewBox}/>
                    </S.Link>
                </S.ListItem>
            ))}
        </S.Social>
    );
};




