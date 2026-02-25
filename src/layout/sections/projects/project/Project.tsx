import {Icon} from "../../../../components/icon/Icon.tsx";
import {S} from './../Projects_Styles.ts'
import React from "react";

type ProjectPropsType = {
    src: string
    title: string
    description: string
    technologies: string

}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Image src={props.src} alt=""/>
            <S.Description>
                <S.ProjectTitle>{props.title}</S.ProjectTitle>
                <S.ProjectDescription>{props.description}</S.ProjectDescription>
                <S.ProjectTechnologies>Tech stack : <span>{props.technologies}</span></S.ProjectTechnologies>
                <S.LinksContainer>
                    <S.Link href="#">
                        <Icon iconId="chain" width="20" height="20" viewBox="0 0 20 20"/> Live Preview
                    </S.Link>
                    <S.Link href="#">
                        <Icon iconId="github3" width="20" height="20" viewBox="0 0 20 20"/> View Code
                    </S.Link>
                </S.LinksContainer>
            </S.Description>
        </S.Project>
    );
};



