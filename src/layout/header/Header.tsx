import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Social} from "../../components/social/Social.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.ts";

export type SocialItem = {
    id: string
    iconId: string
    width: string
    height: string
    viewBox: string
}

const menuTitles: Array<string> = ["Home", "About", "Tech Stack", "Tech Stack", "Projects", "Contact"]
const socialIcons: Array<SocialItem> = [
    {id: crypto.randomUUID(), iconId: "github", width: "30", height: "30", viewBox: "0 0 30 30"},
    {id: crypto.randomUUID(), iconId: "twitter", width: "30", height: "30", viewBox: "0 0 30 30"},
    {id: crypto.randomUUID(), iconId: "linkedin", width: "30", height: "30", viewBox: "0 0 30 30"}
]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" alignItem="center">
                    <Logo/>
                    <Menu menuItems={menuTitles}/>
                    <Social socialItems={socialIcons}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: ${theme.colors.background};
    padding: 20px;
`

