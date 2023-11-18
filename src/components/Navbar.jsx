import React from 'react'
import styled from 'styled-components'
import Wrapper from './styled-components/Wrapper';
import Flex from './styled-components/Flex'
import Logo from './styled-components/Logo';

import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Language } from '@mui/icons-material';
import Search from './styled-components/Search';


const StyledNavbar = styled.div`
    width: 100%;
    height: fit-content;
    background-color: lightcoral;
    color: white;
    padding: .4rem 0;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.1);
`;
const NavBox = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    text-align: center;
`
const MenuItem = styled.div`
    font-size: calc(1.4rem - 20%);
    cursor: pointer;
    font-weight: 400;
    white-space: nowrap;
    padding: 0.4rem;
    transition: all .2s ease;
    border-radius: 10px;
    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
`

const Navbar = () => {
  return (
    <StyledNavbar>
        <Wrapper >
            <Flex justify={'space-between'} align={'center'} gap={'1rem'}>
                <NavBox>
                       <Search/>
                </NavBox>
                <NavBox>
                    <Logo/>
                </NavBox>
                <NavBox>
                    <Flex justify={'flex-end'} align={'center'} gap={'1.6rem'}>
                        <MenuItem>SIGN IN</MenuItem>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem style={{borderRadius: '50%'}}>
                            <Badge badgeContent={'EN'} color="secondary">
                                <Language  style={{outline: 'none'}}/>
                            </Badge>
                        </MenuItem>
                        <MenuItem style={{borderRadius: '50%'}}>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon style={{outline: 'none'}}/>
                            </Badge>
                        </MenuItem>
                    </Flex>
                </NavBox>
            </Flex>
        </Wrapper>
    </StyledNavbar>
  )
}

export default Navbar