import {Social} from "../../../../components/social/Social.tsx";
import {Menu} from "../menu/Menu.tsx";
import type {SocialItem} from "../../Header.tsx";
import React from "react";
import {S} from './../HeaderMenu_Styles.ts'


export const MobileMenu: React.FC<{ menuItems: Array<string>, socialIcons: Array<SocialItem> }> = (props: {
    menuItems: Array<string>,
    socialIcons: Array<SocialItem>
}) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
                <Social socialIcons={props.socialIcons}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};





