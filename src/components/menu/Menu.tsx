import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Tech Stack</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId="github"/>
                    </a>
                    <a href="">
                        <Icon iconId="twitter"/>
                    </a>
                    <a href="">
                        <Icon iconId="linkedin"/>
                    </a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }
`
