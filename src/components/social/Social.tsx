import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";


export const Social = () => {
    return (
        <StyledSocial>
            <ListItem>
                <Link href="#">
                    <Icon iconId="github" width="30" height="30" viewBox="0 0 30 30"/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="#">
                    <Icon iconId="twitter" width="30" height="30" viewBox="0 0 30 30"/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="#">
                    <Icon iconId="linkedin" width="30" height="30" viewBox="0 0 30 30"/>
                </Link>
            </ListItem>
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


