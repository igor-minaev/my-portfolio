import styled from "styled-components"
import figure from "../../../assets/images/Abstract.png"
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

const Main = styled.section`
    min-height: 100vh;
    display: flex;
    overflow-x: clip;
    margin: 0 auto;
`
const PhotoContainer = styled.div`
    position: relative;
    margin-top: 30px;

    &::before {
        content: "";
        display: inline-block;
        width: 628px;
        height: 628px;
        background-image: url('${figure}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        bottom: -140px;
        left: -119px;
        @media ${theme.media.mobile}{
            width: 500px;
            height: 500px;
            bottom: -95px;
            left: -90px;
        }
    }
`
const Photo = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 50%;
    object-fit: cover;
    border: 9px solid transparent;
    background: linear-gradient(#eee, #eee 0) padding-box,
    ${theme.gradients.primaryBorder} border-box;
    @media ${theme.media.mobile}{
        width: 300px;
        height: 300px;
    }
`

const TextContainer = styled.div`
    letter-spacing: -0.02em;
    ${font({weight: 700, color: theme.colors.tertiaryFont, Fmax: 58, Fmin: 40})};
`

const Text = styled.span`

`

const MainTitle = styled.h3`
    letter-spacing: -0.02em;
    ${font({weight: 700, Fmax: 58, Fmin: 40})};

    p {
        display: none;
    }
`

const Name = styled.h2`
    ${font({weight: 700, Fmax: 58, Fmin: 40})}
    background: ${theme.gradients.primaryFont};
    background-clip: text;
    color: transparent;
    letter-spacing: -0.02em;
`

export const S={
    Main,
    PhotoContainer,
    Photo,
    TextContainer,
    Text,
    MainTitle,
    Name
}