import {Social} from "../../../../components/social/Social.tsx";
import {Menu} from "../menu/Menu.tsx";
import React from "react";
import type {SocialItem} from "../../Header.tsx";
import {S} from './../HeaderMenu_Styles.ts'

export const DesktopMenu: React.FC<{ socialIcons: Array<SocialItem> }> = (props: {
    socialIcons: Array<SocialItem>
}) => {
    return (
        <S.DesktopMenu>
            <Menu/>
            <Social socialIcons={props.socialIcons}/>
        </S.DesktopMenu>
    );
};



