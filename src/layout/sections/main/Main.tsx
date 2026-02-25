import photo from "../../../assets/images/photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from './Main_Styles.ts'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify="space-around" alignItem="center" wrap="wrap">
                    <S.TextContainer>
                        <S.Text>Hi 👋,</S.Text> <br/>
                        <S.Text>My name is</S.Text>
                        <S.Name>Ihar Minayeu</S.Name>
                        <S.MainTitle> I build things for web</S.MainTitle>
                    </S.TextContainer>
                    <S.PhotoContainer>
                        <S.Photo src={photo} alt="photo"/>
                    </S.PhotoContainer>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};








