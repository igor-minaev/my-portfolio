import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

type ProjectPropsType = {
    src: string
    title: string
    description: string
    technologies: string

}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectDescription>{props.description}</ProjectDescription>
            <ProjectTechnologies>{`Tech stack : ${props.technologies}`}</ProjectTechnologies>
            <Link href="#">
                <Icon iconId="chain"/> Live Preview
            </Link>
            <Link href="#">
                <Icon iconId="github3"/> View Code
            </Link>

        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #e689fa;
    max-width: 373px;
    width: 100%;
    border-radius: 20px;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius:  20px 20px 0 0;

`

const ProjectTitle = styled.h3`

`

const ProjectDescription = styled.p`

`

const ProjectTechnologies = styled.p`

`

const Link = styled.a`

`

