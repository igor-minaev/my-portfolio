import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    viewBox: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} viewBox={props.viewBox}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 15%;
`

