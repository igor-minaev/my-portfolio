import React from 'react';
import {S} from './../HeaderMenu_Styles.ts'

const menuItems = ["Home", "Tech Stack", "Projects", "Contacts"]

export const Menu: React.FC = () => {

    return (
        <S.MenuList>
            {menuItems.map((item) => (
                <S.ListItem key={crypto.randomUUID()}>
                    <S.NavLink activeClass="active"  to={`${item.toLowerCase()}`} smooth={true} spy={true}>
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.ListItem>
            ))}
        </S.MenuList>
    );
};


