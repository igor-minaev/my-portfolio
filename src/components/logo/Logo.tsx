import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
    return (
        <Link href="">
            <Icon iconId="logoColor"/>
        </Link>
    );
};

const Link = styled.a`
    display: flex;
    align-items: center;
`

