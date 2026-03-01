import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import React from "react";
import {S} from './Skills_Styles.ts'


type SkillType = {
    id: string
    iconId: string
    height: string
    width: string
    viewBox: string
}
const skillsItems: Array<SkillType> = [
    {
        id: crypto.randomUUID(), iconId: "html", height: "120", width: "120", viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(), iconId: "css", height: "120", width: "120", viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(), iconId: "js", height: "120", width: "120", viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(), iconId: "react", height: "101", width: "113", viewBox: "0 0 101 113"
    },
    {
        id: crypto.randomUUID(), iconId: "redux", height: "100", width: "105", viewBox: "0 0 100 105"
    },
    {
        id: crypto.randomUUID(), iconId: "bootstrap", height: "87", width: "88", viewBox: "0 0 87 88"
    },
    {
        id: crypto.randomUUID(), iconId: "tailwind", height: "131", width: "131", viewBox: "0 0 131 131"
    },
    {
        id: crypto.randomUUID(), iconId: "sass", height: "87", width: "117", viewBox: "0 0 87 117"
    },
    {
        id: crypto.randomUUID(), iconId: "git", height: "105", width: "105", viewBox: "0 0 105 105"
    },
    {
        id: crypto.randomUUID(), iconId: "greensock", height: "120", width: "120", viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(), iconId: "vscode", height: "120", width: "120", viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(), iconId: "github2", height: "88", width: "88", viewBox: "0 0 88 88"
    }
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id="tech stack">
            <Container>
                <SectionTitle title="My Tech Stack" description="Technologies I’ve been working with recently"/>
                <S.GridWrapper>
                    {skillsItems.map(s => (
                        <Icon key={s.id} iconId={s.iconId} height={s.height} width={s.width} viewBox={s.viewBox}/>
                    ))}
                </S.GridWrapper>
            </Container>
        </S.Skills>
    );
};

