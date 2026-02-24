import styled from "styled-components"
import {theme} from "../../../styles/Theme.ts";

const Skills = styled.section`
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    align-items: center;
    row-gap: 70px;
    @media ${theme.media.miniLaptop} {
        grid-template-columns: repeat(4, 1fr);
    }
    @media ${theme.media.mobile} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${theme.media.mobileMini} {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const S = {
    Skills,
    GridWrapper
}