import { SearchOutlined, Close } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useState } from "react"
import styled from "styled-components"

const StyledSearch = styled(motion.div)`
    position: relative;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const InputBox = styled(motion.div)`
    display: flex;
    position: fixed;
    top: -50%;
    left: 0;
    height: 14rem;
    width: 100%;
    background-color: teal;
    align-items: center;
    justify-content: center;
    z-index: 999;
`
const Input = styled(motion.input)`
    width: 24rem;
    height: 2.4em;
    border: none;
    background: transparent;
    color: white;
    border-bottom: 1px solid lightgrey;
    font-size: 1.6rem;
    padding: .4rem;
    &::placeholder{
        color: white;
        opacity: .8;
    }
    &:focus{
        outline: none;
    }
`
const ToggleButton = styled(motion.button)`
    position: absolute;
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: white;
    z-index: 1000;
    &:hover{
        background: rgba(0,0,0,0.2);
    }
    &:focus{
        outline: none;
    }
`
const variants = {
    open: {
        clipPath: "circle(200% at 50px 50px)",
        top: "0",
        left: "0",
        transition: {
            type: "spring",
            stiffness: 50,
        },
    },
    closed: {
        clipPath: "circle(1rem at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
        },
    },
};

const Search = () => {
    const [open, setOpen] = useState(false)



  return (
    <StyledSearch animate={open ? "open" : "closed"}>
        <ToggleButton onClick={()=>setOpen((prev)=>!prev)}>
            {!open ? <SearchOutlined style={{fontSize: '1.8rem'}}/> : <Close style={{fontSize: '1.8rem'}}/>}
        </ToggleButton>
        <InputBox variants={variants}>
            <Input
                placeholder="Поиск..."/>
        </InputBox>
    </StyledSearch>
  )
}

export default Search