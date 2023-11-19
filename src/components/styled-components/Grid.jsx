import styled, {css} from "styled-components"

const StyldeGrid = styled.div`
    display: grid;
    grid-template-columns: ${props=>props.tempcol || "repeat(4, auto)"};
    grid-template-rows: ${props=>props.temprow || 'repeat(auto-fill, auto)'};
    grid-auto-flow: row;
    gap: ${props=>props.gap || '1rem'};
    justify-items: ${props=>props.justify || 'center'};
    align-items: ${props=>props.align || 'stretch'};
    ${props=>props.center && css`
        align-content: center;
    `}
`

const Grid = (props) => {
  return <StyldeGrid {...props}/>
}

export default Grid