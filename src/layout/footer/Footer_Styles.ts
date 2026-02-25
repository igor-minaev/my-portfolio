import styled from "styled-components"
import { theme } from "../../styles/Theme"
import {font} from "../../styles/Common.ts";

const Footer = styled.footer`
    background-color: ${theme.colors.background};
    padding: 20px 0;
`

const ConnectionWrapper = styled.footer`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    ${font({family: "'DM Sans', sans-serif", weight: 400, Fmax: 18, Fmin: 14})}
    @media ${theme.media.mobile}{
    gap: 15px;
    justify-content: flex-end;
}
`

const PhoneNumber = styled.a`
    color: ${theme.colors.secondaryFont};
    &:hover{
        background: ${theme.gradients.primaryFont};
        background-clip: text;
        color: transparent;
    }
`
const Email = styled.a`
    color: ${theme.colors.secondaryFont};
    &:hover{
        background: ${theme.gradients.primaryFont};
        background-clip: text;
        color: transparent;
    }
`

export const S={
    Footer,
    ConnectionWrapper,
    PhoneNumber,
    Email
}