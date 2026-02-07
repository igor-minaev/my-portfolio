import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import type {SocialItem} from "../../layout/header/Header.tsx";
import {theme} from "../../styles/Theme.ts";


export const Social = (props: { socialItems: Array<SocialItem> }) => {
    return (
        <StyledSocial>
            {props.socialItems.map((item) => (
                <ListItem key={item.id}>
                    <Link href="#">
                        <Icon iconId={item.iconId} width={item.width} height={item.height} viewBox={item.viewBox}/>
                    </Link>
                </ListItem>
            ))}
        </StyledSocial>
    );
};

const StyledSocial = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
    padding-left: 40px;

`
const ListItem = styled.li`

`
const Link = styled.a`
    display: flex;
    align-items: center;
    color: ${theme.colors.secondaryFont};

    &:hover {
        color: ${theme.colors.tertiaryFont};
        transform: translateY(-4px) ;
    }
`


