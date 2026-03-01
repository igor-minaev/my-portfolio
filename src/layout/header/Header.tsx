import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Container} from "../../components/Container.ts";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import React from "react";
import {S} from './Header_Styles.ts'

export type SocialItem = {
    id: string
    iconId: string
    width: string
    height: string
    viewBox: string
}


const socialIcons: Array<SocialItem> = [
    {id: crypto.randomUUID(), iconId: "github", width: "30", height: "30", viewBox: "0 0 30 30"},
    {id: crypto.randomUUID(), iconId: "twitter", width: "30", height: "30", viewBox: "0 0 30 30"},
    {id: crypto.randomUUID(), iconId: "linkedin", width: "30", height: "30", viewBox: "0 0 30 30"}
]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 835;
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between" alignItem="center">
                    <S.HeaderTitle>Frontend developer</S.HeaderTitle>
                    <Logo iconId="logoColor"/>
                    {width < breakpoint ? <MobileMenu socialIcons={socialIcons}/> :
                        <DesktopMenu socialIcons={socialIcons}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};









