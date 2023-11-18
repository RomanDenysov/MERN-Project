import styled from "styled-components"

const StyledLogo = styled.div`
    font-size: calc(3rem - 10%);
    font-weight: 900;
    cursor: pointer;
    text-align: center;
    color: ${props=>props.color || 'white'};
`

const Logo = (props) => {
  return <StyledLogo {...props}>Boo.</StyledLogo>
}

export default Logo