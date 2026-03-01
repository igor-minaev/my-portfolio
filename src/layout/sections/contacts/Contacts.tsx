import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from './Contacts_Styles.ts'


export const Contacts: React.FC = () => {
    return (
        <S.Contacts id="contacts">
            <Container>
                <SectionTitle title="Contacts" description="For any questions please mail me:"/>
                <S.Form>
                    <S.Field placeholder="name"></S.Field>
                    <S.Field placeholder="subject"></S.Field>
                    <S.Field placeholder="message" as="textarea"></S.Field>
                    <Button type="submit">Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};




