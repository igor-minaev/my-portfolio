import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <SectionDescription>Things I’ve built so far</SectionDescription>
            <FlexWrapper>

            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.div`
    background-color: #59f89c;
    min-height: 100vh;
`

