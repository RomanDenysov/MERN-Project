import styled from "styled-components"
import Title from "./styled-components/Title"
import Button from "./styled-components/Button"
import { Send } from "@mui/icons-material"
import Wrapper from "./styled-components/Wrapper"
import Flex from "./styled-components/Flex"

const StyledNewsletter = styled.div`
    width: 100%;
    height: 60vh;
`
const NewsDescr = styled.p`
    font-size: calc(1.8rem - 20%);
    font-weight: 400;
    letter-spacing: .2rem;
    color: ${props=>props.color || 'black'};
    margin: 2.8rem 0;
`
const InputContainer = styled.div`
    width: 50%;
    height: 4rem;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Input = styled.input`
    height: 100%;
    border: none;
    width: 80%;
    padding: 1rem;
    font-size: 1.4rem;
    &:focus {
        outline: none;
    }
`
const InputButton = styled.button`
    width: 20%;
    height: 100%;
    border: 0;
    background-color: teal;
    color: white;
    position: relative;
    transition: all .2s ease;
    &:hover {
        opacity: .8;
    }
`
const Newsletter = () => {
  return (
    <StyledNewsletter>
        <Wrapper>
            <Flex align={'center'} justify={'center'} directon={'column'}>
                <Title>Newsletter</Title>
                <NewsDescr>Get timely update from your favorite products.</NewsDescr>
                <InputContainer>
                    <Input placeholder="Your email"/>
                    <InputButton>
                        <Send style={{fontSize: '1.8rem'}}/>
                    </InputButton>
                </InputContainer>
            </Flex>
        </Wrapper>
    </StyledNewsletter>
  )
}

export default Newsletter