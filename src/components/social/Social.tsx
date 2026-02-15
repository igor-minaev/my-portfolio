import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type SocialItem = {
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

export const Social = () => {
    return (
        <StyledSocial>
            {socialIcons.map((item) => (
                <ListItem key={item.id}>
                    <Link href="#">
                        <Icon iconId={item.iconId} width={item.width} height={item.height} viewBox={item.viewBox}/>
                    </Link>
                </ListItem>
            ))}
        </StyledSocial>
    );
};

const StyledSocial = styled.ul`
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


