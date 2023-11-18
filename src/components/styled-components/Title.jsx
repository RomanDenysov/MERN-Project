import styled, {css} from 'styled-components'

const StyledTitle = styled.h1`
    color: ${props => props.color};
    font-size: calc(${props=>props.fs || '5rem'} - 20%);
    font-weight: ${props=>props.fw || '900'};
    ${props=>props.AS && css`
      align-self: center;
      text-align: center;
    `}
`

const Title = (props) => {
  return (
    <StyledTitle {...props}/>
  )
}

export default Title