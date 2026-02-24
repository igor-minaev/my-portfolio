import React from 'react';
import {S} from './../HeaderMenu_Styles.ts'

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MenuList>
            {props.menuItems.map((item) => (
                <S.ListItem key={crypto.randomUUID()}>
                    <S.Link href="">
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.Link>
                </S.ListItem>
            ))}
        </S.MenuList>
    );
};


