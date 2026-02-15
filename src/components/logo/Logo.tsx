import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";


export const Logo = (props: { iconId: string }) => {
    return (
        <Link href="">
            <Icon iconId={props.iconId}/>
        </Link>
    );
};

const Link = styled.a`
    display: flex;
    align-items: center;
`

