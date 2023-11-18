import styled, {css} from "styled-components"

const StyledWrapper = styled.div`
    max-width: 1366px;
    margin: auto;
    height: 100%;
    padding: 0 1rem;
    ${props=> props.mt && css`
      margin-top: 12rem;
    `}
`

const Wrapper = (props) => {
  return <StyledWrapper {...props}/>
}

export default Wrapper