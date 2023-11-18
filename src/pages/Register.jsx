import styled from "styled-components"
import Title from "../components/styled-components/Title"
import Button from "../components/styled-components/Button"
import Flex from "../components/styled-components/Flex"


const StyledRegister = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('https://mugshotscoffeeco.com/wp-content/uploads/2018/01/coffee-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
`
const Blur = styled.div`
    height: 100%;
    width: 100%;
    backdrop-filter: blur(3px);
`
const RegisterBox = styled.div`
    width: 40%;
    min-width: 20rem;
    height: max-content;
    padding: 2rem;
    box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`
const Input = styled.input`
    flex: 1;
    padding: .6rem;
    font-size: 1.2rem;
    &:focus {
        outline: none;
    }
`
const Agreement = styled.span`
    font-weight: 300;
    line-height: 1.6;
`

const Register = () => {
  return (
    <StyledRegister>
        <Blur>
            <Flex align={'center'} justify={'center'}>
                <RegisterBox>
                    <Flex align={'center'} directon={'column'} justify={'center'} gap={'2rem'}>
                        <Title fw={'600'}fs={'2rem'}>CREATE AN ACCOUNT</Title>
                        <Form>
                            <Input placeholder='first name'/>
                            <Input placeholder='last name'/>
                            <Input placeholder='username'/>
                            <Input placeholder='email'/>
                            <Input placeholder='password'/>
                            <Input placeholder='confirm password'/>
                            <Agreement>
                                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY LEGACY</b>
                            </Agreement>
                            <Button wid width={'10rem'}primary color={'white'} background={'teal'} align={'center'} hbg={'rgba(255,255,255,0.1)'}>Create</Button>
                        </Form>
                    </Flex>
                </RegisterBox>
            </Flex>
        </Blur>
    </StyledRegister>
  )
}

export default Register