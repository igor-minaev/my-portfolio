import {Social} from "../../../../components/social/Social.tsx";
import {Menu} from "../menu/Menu.tsx";
import React from "react";
import type {SocialItem} from "../../Header.tsx";
import {S} from './../HeaderMenu_Styles.ts'

export const DesktopMenu: React.FC<{ menuItems: Array<string>, socialIcons: Array<SocialItem> }> = (props: {
    menuItems: Array<string>,
    socialIcons: Array<SocialItem>
}) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
            <Social socialIcons={props.socialIcons}/>
        </S.DesktopMenu>
    );
};



