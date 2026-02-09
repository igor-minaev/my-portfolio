import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type SectionTitle = {
    title: string
    description: string
}


export const SectionTitle = (props: SectionTitle) => {
    return (
        <StyledSectioTitle>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </StyledSectioTitle>
    );
};

const StyledSectioTitle = styled.div`
    text-align: center;
`
const Title = styled.h3`
    font-weight: 700;
    font-size: 48px;
    color: ${theme.colors.primaryFont};
`
const Description = styled.p`
    font-weight: 400;
    font-size: 32px;
    color: ${theme.colors.secondaryFont};
    margin: 49px 0 140px;
`



