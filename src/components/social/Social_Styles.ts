import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Social = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;

`
const ListItem = styled.li`

`
const Link = styled.a`
    display: flex;
    align-items: center;
    color: ${theme.colors.secondaryFont};

    svg {

    }

    &:hover {
        color: ${theme.colors.tertiaryFont};
        transform: translateY(-4px);
    }
`

export const S = {
    Social,
    ListItem,
    Link
}