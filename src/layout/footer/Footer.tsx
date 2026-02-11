import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
 // import {Social} from "../../components/social/Social.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify="space-between" alignItem="center">
                <Logo/>
                <PhoneNumber href="tel:+3445762358252"> +3445762358252</PhoneNumber>
                <Email href="mailto:someemail@gmail.com">someemail@gmail.com</Email>
                {/*<Social/>*/}
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #f893bf;
    min-height: 20vh;
`

const PhoneNumber = styled.a`

`
const Email = styled.a`

`

