import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionDescription> Technologies I’ve been working with recently</SectionDescription>
            <FlexWrapper wrap="wrap" justify="space-around">
                <Skill iconId="html" viewBox="0 0 120 120"/>
                <Skill iconId="css" viewBox="0 0 120 120"/>
                <Skill iconId="js" viewBox="0 0 120 120"/>
                <Skill iconId="react" viewBox="0 0 120 120"/>
                <Skill iconId="redux" viewBox="0 0 120 120"/>
                <Skill iconId="bootstrap" viewBox="0 0 120 120"/>
                <Skill iconId="tailwind" viewBox="0 0 120 120"/>
                <Skill iconId="sass" viewBox="0 0 120 120"/>
                <Skill iconId="git" viewBox="0 0 120 120"/>
                <Skill iconId="greensock" viewBox="0 0 120 120"/>
                <Skill iconId="vscode" viewBox="0 0 120 120"/>
                <Skill iconId="github2"  viewBox="0 0 120 120"/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
`
