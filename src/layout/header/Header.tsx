import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Social} from "../../components/social/Social.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";


const menuTitles: Array<string> = ["Home", "About", "Tech Stack", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" alignItem="center" wrap="wrap">
                    <HeaderTitle>Frontend developer</HeaderTitle>
                    <Logo iconId="logoColor"/>
                    <FlexWrapper gap="40px" alignItem="center">
                        <Menu menuItems={menuTitles}/>
                        <Social/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: rgba(25, 25, 25, 0.9);
    padding: 20px 0;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 99999;
`

const HeaderTitle = styled.h1`
    display: none;
`

