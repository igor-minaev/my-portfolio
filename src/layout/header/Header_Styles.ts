import styled from "styled-components";

const Header = styled.header`
    background: rgba(25, 25, 25, 0.9);
    padding: 20px 0;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 99999;
`

const HeaderTitle = styled.h1`
    display: none;
`

export const S = {
    Header,
    HeaderTitle
}