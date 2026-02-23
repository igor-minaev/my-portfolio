import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.ts";
import {font} from "../../styles/Common.ts";


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

