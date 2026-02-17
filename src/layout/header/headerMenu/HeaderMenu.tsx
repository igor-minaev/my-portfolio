import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Social} from "../../../components/social/Social.tsx";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <HeaderMenuList>
                {props.menuItems.map((item) => (
                    <ListItem key={crypto.randomUUID()}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                ))}
            </HeaderMenuList>
            <Social/>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    display: flex;
    gap: 40px;
    align-items: center;

    @media ${theme.media.laptop} {
        gap: 15px;
    }
    @media ${theme.media.miniLaptop} {
        display: none;
    }

`

const HeaderMenuList = styled.ul`
    display: flex;
    gap: 40px;
    list-style-type: none;

    @media ${theme.media.laptop} {
        gap: 15px;
    }
    
`

const Link = styled.a`
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: transparent;
`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.secondaryFont};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 2px;
        background: ${theme.gradients.primaryFont};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(10deg) translateX(2px);
            color: ${theme.colors.tertiaryFont};

            & + ${Mask} {
                transform: skewX(10deg) translateX(-2px);
            }
        }

    }
`
