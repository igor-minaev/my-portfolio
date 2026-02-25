import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Container} from "../../components/Container.ts";
import React from "react";
import {S} from './Footer_Styles.ts'

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify="space-between" alignItem="center">
                    <Logo iconId="logo"/>
                    <S.ConnectionWrapper>
                        <S.PhoneNumber href="tel:+3445762358252"> +3445762358252</S.PhoneNumber>
                        <S.Email href="mailto:someemail@gmail.com">someemail@gmail.com</S.Email>
                    </S.ConnectionWrapper>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};



