import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Social} from "../../components/social/Social.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper  justify="space-between" alignItem="center">
                <Logo/>
                <PhoneNumber> +3445762358252</PhoneNumber>
                <Email>someemail@gmail.com</Email>
                <Social/>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #f893bf;
    min-height: 20vh;
`

const PhoneNumber = styled.span`
   
`
const Email = styled.span`
   
`

