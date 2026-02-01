import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionDescription></SectionDescription>
            <FlexWrapper>
                <Icon iconId={}/>
                <Icon iconId={}/>
                <Icon iconId={}/>
                <Icon iconId={}/>
                <Icon iconId={}/>
                <Icon iconId={}/>
                <Icon iconId={}/>
                <Icon iconId={}/>
                <Icon iconId={}/>
                <Icon iconId={}/>
                <Icon iconId={}/>
                <Icon iconId={}/>
            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #f3a0c4;
    min-height: 100vh;
`
