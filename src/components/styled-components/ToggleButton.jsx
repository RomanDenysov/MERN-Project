import React from "react";
import styled from "styled-components";

const StyledToggle = styled.button`
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    cursor: pointer;
    top: 2rem;
    left: 2rem;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 1000;
`;

const ToggleButton = ({ children, onClick }) => {
    return <StyledToggle onClick={onClick}>{children}</StyledToggle>;
};

export default ToggleButton;