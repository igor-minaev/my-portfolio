import photo from "../../../assets/images/photo.jpg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify="space-around" alignItem="center">
                <div>
                    <p>Hi 👋,</p>
                    <p>My name is</p>
                    <Name>Ihar Minayeu</Name>
                    <MainTitle> I build things for web</MainTitle>
                </div>
                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
`
const Photo = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 50%;
    object-fit: cover;
    border: 9px solid rgba(70, 3, 170, 0.7);
`
const MainTitle = styled.h1`

`

const Name = styled.h2`
     background: ${theme.gradients.primaryFont};
     background-clip: text;
     color: transparent;

`


