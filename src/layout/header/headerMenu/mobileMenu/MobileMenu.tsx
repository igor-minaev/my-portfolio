import {Social} from "../../../../components/social/Social.tsx";
import {Menu} from "../menu/Menu.tsx";
import type {SocialItem} from "../../Header.tsx";
import React, {useState} from "react";
import {S} from './../HeaderMenu_Styles.ts'


export const MobileMenu: React.FC<{ menuItems: Array<string>, socialIcons: Array<SocialItem> }> = (props: {
    menuItems: Array<string>,
    socialIcons: Array<SocialItem>
}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerButtonClick = () => setMenuIsOpen(!menuIsOpen)
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerButtonClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <Menu menuItems={props.menuItems}/>
                <Social socialIcons={props.socialIcons}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};





