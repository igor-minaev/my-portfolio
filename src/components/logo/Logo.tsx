import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import React from "react";


export const Logo: React.FC<{ iconId: string }> = (props: { iconId: string }) => {
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

