import React from 'react'
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 1rem 1.6rem;
    box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: ${props=>props.fs || '1.4rem;'};
    font-weight: ${props=>props.fw || '400'};
    cursor: pointer;
    position: relative;
    z-index: 2;
    white-space: nowrap;
    ${props=>props.wid && css`
        width: ${props=>props.width};
    `}

    &:focus {
        outline: none;
    }
    align-self: ${props => props.align || 'stretch'};

    ${props => props.primary && css`
        color: ${props => props.color || 'black'};
        background: ${props => props.background || 'white'};
    `};
    ${props => props.outlined && css`
        color: ${props => props.color || 'white'};
        border: ${props=>props.bs || '1px'} solid ${props => props.bcol || 'white'};
        background: transparent;
    `};

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: ${props=>props.hbg || "lightcoral"};
        border-radius: 5px;
        transition: all .2s ease;
        z-index: -1;
    }
    &:hover:before {
        height: 100%;
    }
`;

const Button = (props) => {
  return <StyledButton {...props}/>
}

export default Button