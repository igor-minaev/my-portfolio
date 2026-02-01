import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";


export const Social = () => {
    return (
        <StyledSocial>
            <li>
                <a href="">
                    <Icon iconId="github"/>
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId="twitter"/>
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId="linkedin"/>
                </a>
            </li>
        </StyledSocial>
    );
};

const StyledSocial = styled.ul`
    display: flex;

`


