import photo from "../../../assets/images/photo.jpg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.tsx";
import abstract from "../../../assets/images/Abstract.png"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify="space-between" alignItem="center">
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
`

const PhotoContainer=styled.div`
    position: relative;
    
    &::before {
        content: "";
        display:inline-block;
        width: 636px;
        height: 636px;
        background-image: url(${abstract});
        background-repeat: no-repeat;
        background-size: cover;
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

const Text = styled.span`
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -0.02em;
    color: #d9d9d9;
`

const MainTitle = styled.h3`
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -0.02em;
    color: #d9d9d9;
`

const Name = styled.h2`
    background: ${theme.gradients.primaryFont};
    background-clip: text;
    color: transparent;
    font-weight: 700;
    font-size: 58px;
    letter-spacing: -0.02em;

`

const TextContainer = styled.div`
`




