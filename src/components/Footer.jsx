import styled from "styled-components"
import Wrapper from "./styled-components/Wrapper"
import Flex from "./styled-components/Flex"
import Logo from "./styled-components/Logo"
import { Facebook, Instagram, LocationOn, MailOutline, Phone, Pinterest } from "@mui/icons-material"
import Title from "./styled-components/Title"
import paymentIcons from '../assets/payment-methods.png'
import Grid from "./styled-components/Grid"

const StyledFooter = styled.div`
    width: 100%;
    height: 34vh;
    background-color: coral;
    padding: 2rem 0;
`
const FooterBox = styled.div`
    flex: 1;
    height: 100%;

`
const Descr = styled.p`
    font-size: 1rem;
    font-weight: 400;
`
const SocIcon = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: #${props=>props.color || 'fff'};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    color: #e9f5f5;
    transition: all .2s ease;
    &:hover {
        background-color: rgba(0,0,0,0.1);
        transform: scale(1.1);
    }
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: .6rem;
    cursor: pointer;
    padding: 0.4rem;
    transition: all .2s ease;
    position: relative;
    &:before{
        content: '';
        width: 0%;
        position: absolute;
        height: 1px;
        background-color: black;
        top: 85%;
        left: 4%;
        transition: all .3s ease-in-out
    }
    &:hover:before {
        width: 25%;
    }
`

const ContactItem = styled.div`
    margin: .8rem 0 .4rem 0;
    cursor: pointer;
    padding: 0.4rem;
    transition: all .2s ease;
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`
const Payment = styled.img`
    width: 90%;
`

const Footer = () => {
  return (
    <StyledFooter>
        <Wrapper>
            <Grid tempCol={'repeat(3, auto)'} gap={'1rem'}>
                <FooterBox>
                    <Flex directon={'column'} justify={'space-between'} align={'start'} gap={'1rem'}>
                        <Logo color={'black'}/>
                        <Descr>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores placeat voluptatem, perspiciatis vel nihil pariatur, earum qui ducimus commodi voluptatum provident doloribus, cum libero facere quibusdam eaque veniam numquam culpa.
                        </Descr>
                        <Flex gap={'.6rem'} justify={'flex-start'} align={'end'}>
                            <SocIcon color="385999">
                                <Facebook/>
                            </SocIcon>
                            <SocIcon color="E4405F">
                                <Instagram/>
                            </SocIcon>
                            <SocIcon color="E60023">
                                <Pinterest/>
                            </SocIcon>
                        </Flex>
                    </Flex>
                </FooterBox>
                <FooterBox>
                    <Flex align={'start'} directon={'column'} gap={'1rem'}>
                        <Title fs={'2rem'} fw={'600'}>Our links</Title>
                        <List>
                            <ListItem>Home</ListItem>
                            <ListItem>Cart</ListItem>
                            <ListItem>Our partners</ListItem>
                            <ListItem>Merch</ListItem>
                            <ListItem>Withlist</ListItem>
                            <ListItem>Terms</ListItem>
                            <ListItem>Terms</ListItem>
                            <ListItem>Terms</ListItem>
                            <ListItem>Terms</ListItem>
                            <ListItem>Terms</ListItem>
                        </List>
                    </Flex>
                </FooterBox>
                <FooterBox>
                    <Flex align={'start'} directon={'column'} justify={'space-between'}>
                        <Title fs={'2rem'} fw={'600'}>Contact</Title>
                        <ContactItem><LocationOn style={{marginRight: "1rem"}}/>Presov Slovakia 08001 Presov</ContactItem>
                        <ContactItem><Phone style={{marginRight: "1rem"}}/>+421 951 712 415</ContactItem>
                        <ContactItem><MailOutline style={{marginRight: "1rem"}}/> example@gmail.com</ContactItem>
                        <Payment src={paymentIcons} />
                    </Flex>
                </FooterBox>
            </Grid>
        </Wrapper>
    </StyledFooter>
  )
}

export default Footer