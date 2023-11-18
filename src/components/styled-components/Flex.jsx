import styled, {css} from 'styled-components'

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.directon || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${({margin}) => margin || '0'};
    gap: ${({gap}) => gap || ''};
    height: 100%;
    width: ${props=>props.width || '100%'};
    
    ${props=>props.wrap && css`
      flex-wrap: wrap;
    `};
`

const Flex = (props) => {
  return <StyledFlex {...props}/>
}

export default Flex