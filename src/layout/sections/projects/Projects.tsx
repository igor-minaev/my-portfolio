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
import React from "react";
import {S} from './Projects_Styles.ts'

const projectItems = [
    {
        id: crypto.randomUUID(),
        src: project1,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: "HTML , JavaScript, SASS, React"
    },
    {
        id: crypto.randomUUID(),
        src: project2,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: "HTML , JavaScript, SASS, React"
    },
    {
        id: crypto.randomUUID(),
        src: project3,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: "HTML , JavaScript, SASS, React"
    },
    {
        id: crypto.randomUUID(),
        src: project4,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: "HTML , JavaScript, SASS, React"
    },
    {
        id: crypto.randomUUID(),
        src: project5,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: "HTML , JavaScript, SASS, React"
    },
    {
        id: crypto.randomUUID(),
        src: project6,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: "HTML , JavaScript, SASS, React"
    },

]

export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle title="Projects" description="Things I’ve built so far"/>
                <FlexWrapper justify="space-around" wrap="wrap" gap="65px 15px">
                    {projectItems.map(p => (
                        <Project key={p.id}
                                 src={p.src}
                                 title={p.title}
                                 description={p.description}
                                 technologies={p.technologies}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};


