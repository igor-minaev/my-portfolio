import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.ts";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify="space-between" alignItem="center">
                    <Logo iconId="logo"/>
                    <ConnectionWrapper>
                        <PhoneNumber href="tel:+3445762358252"> +3445762358252</PhoneNumber>
                        <Email href="mailto:someemail@gmail.com">someemail@gmail.com</Email>
                    </ConnectionWrapper>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.background};
`

const ConnectionWrapper = styled.footer`
    display: flex;
    gap: 50px;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
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

