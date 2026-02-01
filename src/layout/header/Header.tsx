import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <a href="">
                <img src=""
                     alt=""/>
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Tech Stack</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #67d112;
    display: flex;
    justify-content: space-between;
`

