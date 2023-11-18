import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";

const StyledSearch = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const SearchBG = styled(motion.div)`
    top: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    background-color: aqua;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled(motion.input)`
    height: 2.4rem;
    width: 10rem;
    font-size: 1.2rem;
    padding: 0.4rem;
    margin: auto;
`;

const variants = {
    open: {
        clipPath: "circle(1366px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const SearchBar = ({ isOpen, toggleSearch }) => {
    return (
        <StyledSearch animate={isOpen ? "open" : "closed"}>
            <SearchBG variants={variants}>
                <Input variants={variants} placeholder="Поиск..." />
                {/* Добавим кнопку для закрытия */}
                <ToggleButton onClick={toggleSearch}>✖</ToggleButton>
            </SearchBG>
        </StyledSearch>
    );
};

export default SearchBar;