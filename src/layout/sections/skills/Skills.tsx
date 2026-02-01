import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
// import {Icon} from "../../../components/icon/Icon.tsx";
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
                <Skill iconId="github" viewBox="0 0 120 120"/>
                {/*<Icon iconId="html"/>*/}
                {/*<Icon iconId="css"/>*/}
                {/*<Icon iconId="js"/>*/}
                {/*<Icon iconId="react"/>*/}
                {/*<Icon iconId="redux"/>*/}
                {/*<Icon iconId="bootstrap"/>*/}
                {/*<Icon iconId="tailwind"/>*/}
                {/*<Icon iconId="sass"/>*/}
                {/*<Icon iconId="git"/>*/}
                {/*<Icon iconId="greensock"/>*/}
                {/*<Icon iconId="vscode"/>*/}
                {/*<Icon iconId="github"/>*/}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #f3a0c4;
    min-height: 100vh;
`
