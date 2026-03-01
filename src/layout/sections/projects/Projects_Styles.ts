import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

const Projects = styled.section`
`
const Project = styled.div`
    background-color: ${theme.colors.cardBackground};
    width: 340px;
    border-radius: 20px;
    flex-grow: 1;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;

`
const Description = styled.div`
    padding: 27px 28px 25px;

`


const ProjectTitle = styled.h4`
    ${font({weight: 500, Fmax: 28, Fmin: 20})}
`

const ProjectDescription = styled.p`
    ${font({weight: 300, Fmax: 18, Fmin: 16})}
    margin: 17px 0 12px;
`

const ProjectTechnologies = styled.h5`
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 21px;

    span {
        font-weight: 300;
        font-size: 14px;
    }
`

const Link = styled.a`
    display: inline-flex;
    gap: 10px;
    font-weight: 400;
    font-size: 16px;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.colors.linkFont};
    transition: ${theme.animations.transition};

    &:hover {
        transform: scale(1.2);
        background: ${theme.gradients.primaryFont};
        background-clip: text;
        color: transparent;
        text-decoration: none;
    }
`

const LinksContainer = styled.div`
    max-width: 280px;
    display: flex;
    gap: 30px;
    justify-content: space-between;
`

export const S = {
    Projects,
    Project,
    Image,
    Description,
    ProjectTitle,
    ProjectDescription,
    ProjectTechnologies,
    Link,
    LinksContainer
}