import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import type {SocialItem} from "../../layout/header/Header.tsx";


export const Social = (props: { socialItems: Array<SocialItem> }) => {
    debugger
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
    gap: 10px;
    list-style-type: none;

`
const ListItem = styled.li`

`
const Link = styled.a`
    display: flex;
    align-items: center;
`


