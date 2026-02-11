import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.ts";


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle title="Contacts" description="For any questions please mail me:"/>
                <StyledForm>
                    <Field placeholder="name"></Field>
                    <Field placeholder="subject"></Field>
                    <Field placeholder="message" as="textarea"></Field>
                    <Button type="submit">Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`
const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.cardBackground};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 12px;
    color: ${theme.colors.primaryFont};

    &::placeholder {
        color: ${theme.colors.secondaryFont};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
    
    

`


