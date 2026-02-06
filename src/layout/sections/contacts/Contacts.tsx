import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {Button} from "../../../components/Button.tsx";


export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <SectionDescription>For any questions please mail me:</SectionDescription>
            <StyledForm>
                <Field placeholder="name"></Field>
                <Field placeholder="subject"></Field>
                <Field placeholder="message" as="textarea"></Field>
                <Button type="submit">Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`

`


