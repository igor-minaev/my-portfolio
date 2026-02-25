import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const Button = styled.button`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    width: 170px;
    height: 27px;
    position: relative;
    z-index: 0;

    &:hover {
        &::before {
            height: 100%;
            width: 100%;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        height: 7px;
        width: 50%;
        background: ${theme.gradients.primaryFont};

        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: -1;
        transform: translateX(-50%);

`