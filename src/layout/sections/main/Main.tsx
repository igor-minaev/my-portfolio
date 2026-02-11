import photo from "../../../assets/images/photo.jpg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.tsx";
import figure from "../../../assets/images/Abstract.png"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify="space-between" alignItem="center" wrap="wrap">
                    <TextContainer>
                        <Text>Hi 👋,</Text> <br/>
                        <Text>My name is</Text>
                        <Name>Ihar Minayeu</Name>
                        <MainTitle> I build things for web</MainTitle>
                    </TextContainer>
                    <PhotoContainer>
                        <Photo src={photo} alt="photo"/>
                    </PhotoContainer>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    overflow-x: clip;
`
const PhotoContainer = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 628px;
        height: 628px;
        background-image: url('${figure}');
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
        position: absolute;
        bottom: -140px;
        left: -119px;
    }
`
const Photo = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 50%;
    object-fit: cover;
    border: 9px solid transparent;
    background: linear-gradient(#eee, #eee 0) padding-box,
    ${theme.gradients.primaryBorder} border-box;
`

const TextContainer = styled.div`
    color: ${theme.colors.tertiaryFont};
    letter-spacing: -0.02em;
    font-weight: 700;
    font-size: 58px;
`

const Text = styled.span`

`

const MainTitle = styled.h3`
    letter-spacing: -0.02em;
    font-weight: 700;
    font-size: 58px;
`

const Name = styled.h2`
    background: ${theme.gradients.primaryFont};
    background-clip: text;
    color: transparent;
    letter-spacing: -0.02em;
    font-weight: 700;
    font-size: 58px;
`






