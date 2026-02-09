import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

// const skills = [
//     {id: crypto.randomUUID(), iconId: "html", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "css", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "js", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "react", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "redux", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "bootstrap", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "tailwind", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "sass", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "git", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "greensock", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "vscode", viewBox: "0 0 120 120"},
//     {id: crypto.randomUUID(), iconId: "github2", viewBox: "0 0 120 120"}
// ]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle title="My Tech Stack" description="Technologies I’ve been working with recently"/>
                <GridWrapper>
                    <Icon iconId="html" height="120" width="120" viewBox="0 0 120 120"/>
                    <Icon iconId="css" height="120" width="120" viewBox="0 0 120 120"/>
                    <Icon iconId="js" height="120" width="120" viewBox="0 0 120 120"/>
                    <Icon iconId="react" height="101" width="113" viewBox="0 0 101 113"/>
                    <Icon iconId="redux" height="100" width="105" viewBox="0 0 100 105"/>
                    <Icon iconId="bootstrap" height="87" width="88" viewBox="0 0 87 88"/>
                    <Icon iconId="tailwind" height="131" width="131" viewBox="0 0 131 131"/>
                    <Icon iconId="sass" height="87" width="117" viewBox="0 0 117 87"/>
                    <Icon iconId="git" height="105" width="105" viewBox="0 0 105 105"/>
                    <Icon iconId="greensock" height="120" width="120" viewBox="0 0 120 120"/>
                    <Icon iconId="vscode" height="120" width="120" viewBox="0 0 120 120"/>
                    <Icon iconId="github2" height="88" width="88" viewBox="0 0 88 88"/>
                </GridWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    row-gap: 70px;
`