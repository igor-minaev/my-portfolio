import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item) => (
                    <li key={crypto.randomUUID()}>
                        <a href="">{item}</a>
                    </li>
                ))}

            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 20px;
        list-style-type: none;

    }
`
