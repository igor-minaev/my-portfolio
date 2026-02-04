import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Social} from "../../components/social/Social.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify="space-between">
                <Logo/>
                <Menu/>
                <Social/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgb(255, 253, 129);
`

