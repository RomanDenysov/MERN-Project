import styled from "styled-components"
import Title from "../components/styled-components/Title"
import Flex from "../components/styled-components/Flex"
import Button from "../components/styled-components/Button"

const StyledLogin = styled.div`
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
const LoginBox = styled.div`
    width: 20rem;
    height: max-content;
    padding: 2rem;
    box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`
const Input = styled.input`
    padding: .6rem;
    font-size: 1.2rem;
    &:focus {
        outline: none;
    }
`
const Link = styled.a`
    font-size: .8rem;
    margin-top: .6rem;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <StyledLogin>
                <Blur>
            <Flex align={'center'} justify={'center'}>
                <LoginBox>
                    <Flex align={'center'} directon={'column'} justify={'center'} gap={'2rem'}>
                        <Title fw={'600'}fs={'2rem'}>SIGN IN</Title>
                        <Form>
                            <Input placeholder='username'/>
                            <Input placeholder='password'/>
                            <Button wid width={'10rem'}primary color={'white'} background={'teal'} align={'center'} hbg={'rgba(255,255,255,0.1)'}>Create</Button>
                            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                            <Link>CREATE A NEW ACCOUNT</Link>
                        </Form>
                    </Flex>
                </LoginBox>
            </Flex>
        </Blur>
    </StyledLogin>
  )
}

export default Login