import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const Contacts = styled.section`

`

const Form = styled.form`
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

export const S = {
    Contacts,
    Form,
    Field
}