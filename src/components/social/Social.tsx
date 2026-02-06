import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";


export const Social = () => {
    return (
        <StyledSocial>
            <li>
                <a href="">
                    <Icon iconId="github" width="30" height="30" viewBox="0 0 30 30"/>
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId="twitter" width="30" height="30" viewBox="0 0 30 30"/>
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId="linkedin" width="30" height="30" viewBox="0 0 30 30"/>
                </a>
            </li>
        </StyledSocial>
    );
};

const StyledSocial = styled.ul`
    display: flex;
    gap: 10px;
    list-style-type: none;

`


