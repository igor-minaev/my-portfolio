import photo from "../../../assets/images/photo.jpg"
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <div>
                <p>Hi 👋,</p>
                <p>My name is</p>
                <Name>Pavan MG</Name>
                <MainTitle> I build things for web</MainTitle>
            </div>
            <Photo src={photo} alt=""/>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    background-color: rgb(253, 170, 133);
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

`


