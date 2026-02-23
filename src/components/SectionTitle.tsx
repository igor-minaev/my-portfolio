import styled from "styled-components";
import {theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

type SectionTitle = {
    title: string
    description: string
}


export const SectionTitle = (props: SectionTitle) => {
    return (
        <StyledSectionTitle>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.div`
    text-align: center;
`
const Title = styled.h2`
    ${font({weight: 700, color: theme.colors.primaryFont, Fmax: 48, Fmin: 36})}
`
const Description = styled.p`
    ${font({weight: 400, color: theme.colors.secondaryFont, Fmax: 32, Fmin: 26})}
    margin: 49px 0 80px;
    @media ${theme.media.mobile}{
        margin: 30px 0 60px;
    }
`



