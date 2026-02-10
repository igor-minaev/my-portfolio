import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import project1 from "../../../assets/images/proj-1.png"
import project2 from "../../../assets/images/proj-2.png"
import project3 from "../../../assets/images/proj-3.png"
import project4 from "../../../assets/images/proj-4.png"
import project5 from "../../../assets/images/proj-5.png"
import project6 from "../../../assets/images/proj-6.png"
import {Container} from "../../../components/Container.tsx";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle title="Projects" description="Things I’ve built so far"/>
                <FlexWrapper justify="space-between" wrap="wrap" gap="65px 10px">
                    <Project
                        src={project1}
                        title="Project Tile goes here"
                        description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" technologies="HTML , JavaScript, SASS, React"/>
                    <Project
                        src={project2}
                        title="Project Tile goes here"
                        description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" technologies="HTML , JavaScript, SASS, React"/>
                    <Project
                        src={project3}
                        title="Project Tile goes here"
                        description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" technologies="HTML , JavaScript, SASS, React"/>
                    <Project
                        src={project4}
                        title="Project Tile goes here"
                        description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" technologies="HTML , JavaScript, SASS, React"/>
                    <Project
                        src={project5}
                        title="Project Tile goes here"
                        description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" technologies="HTML , JavaScript, SASS, React"/>
                    <Project
                        src={project6}
                        title="Project Tile goes here"
                        description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" technologies="HTML , JavaScript, SASS, React"/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
`

