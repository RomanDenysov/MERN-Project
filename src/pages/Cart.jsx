import styled, {css} from "styled-components"
import Title from "../components/styled-components/Title"
import Button from "../components/styled-components/Button"
import Wrapper from "../components/styled-components/Wrapper"
import Flex from "../components/styled-components/Flex"
import { Add, Remove } from "@mui/icons-material"

const StyledCart = styled.div`
    
`
const CartBox = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 1rem;
`
const CartLink = styled.a`
    text-decoration: underline;
    font-size: 1.2rem;
    font-weight: 300;
    padding: 0.4rem;
    transition: all .2s ease;
    border-radius: 10px;
    white-space: nowrap;
    &:hover {
        background-color: rgba(0,0,0,0.2);
    }

`
const Product = styled.div`
    flex: 3;
    padding: 1rem;
`
const Hr = styled.hr`
    background-color: #dbdbdb;
    border: none;
    height: 1px;
    margin: 2rem 0;
`
const Image = styled.img`
    flex: 1;
    width: 8rem;
    aspect-ratio: 5 / 6;
    object-fit: cover;
`
const Details = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
`
const ProductPrice = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5rem;
`
const Price = styled.span`
    font-weight: 300;
    font-size: 3.4rem;
`
const AmountBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: .6rem;
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid darkgrey;
    .icon {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        transition: all .3s ease;
        &:hover {
            background-color: rgba(0,0,0, 0.2);
            box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.15);
        }
    }
`
const Amount = styled.span`
    font-weight: 400;
    font-size: 2rem;
`

const Summary = styled.div`
    flex: 1;
    box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.15);
    border: 1px solid darkgray;
    border-radius: 10px;
    height: 50vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const SummaryItem = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    h3 {
        font-size: 1.2rem;
        font-weight: 400;
    }
    span {
        font-size: 1.4rem;
    }
    ${props=>props.bold && css`
        h3{
            font-size: 1.6rem;
            font-weight: 600;
        }
        font-size: 1.6rem;
        font-weight: 700;
    `}
`

const Cart = () => {
  return (
    <Wrapper>
        <StyledCart>
            <Title AS fw={'300'}>YOUR BAG</Title>
            <Flex align={'center'} justify={'space-between'} gap={'2rem'} directon={'column'}>
                <Flex align={'center'} justify={'space-between'} gap={'2rem'}>
                    <Button outlined color={'black'} bcol={'black'} hbg={'none'}>CONTINUE SHOPPING</Button>
                    <CartBox>
                        <CartLink>Shopping Bag (2)</CartLink>
                        <CartLink>Your Wishlist (0)</CartLink>
                    </CartBox>
                    <Button primary background={'black'} color={"white"}>CHECKOUT NOW</Button>
                </Flex>
                <CartBox>
                    <Flex align={'flex-start'} justify={'space-around'}>
                        <Product>
                            <Flex align={'center'} justify={'center'} gap={'1rem'}>
                                <Image src='https://m.media-amazon.com/images/I/61QsQ9GOstL.jpg'/>
                                <Flex align={'start'} justify={'space-between'} gap={'2rem'} directon={'column'} style={{flex: '1', minWidth: '10rem'}}>
                                        <Details><b>Product:</b> Brooklyn Coffee OLDE</Details>
                                        <Details>Brooklyn Coffee OLDE witn medium roast whole bean</Details>
                                        <Details><b>Weight:</b> 250g</Details>
                                        <Details><b>ID:</b> 3213442151</Details>
                                </Flex>
                                <ProductPrice>
                                    <AmountBox>
                                        <Add className="icon"/>
                                        <Amount>1</Amount>
                                        <Remove className="icon"/>
                                    </AmountBox>
                                    <Price>
                                        $ 20
                                    </Price>
                                </ProductPrice>
                            </Flex>
                            <Hr/>
                            <Flex align={'center'} justify={'center'} gap={'1rem'}>
                                <Image src='https://m.media-amazon.com/images/I/61QsQ9GOstL.jpg'/>
                                <Flex align={'start'} justify={'space-between'} gap={'2rem'} directon={'column'} style={{flex: '1', minWidth: '10rem'}}>
                                        <Details><b>Product:</b> Brooklyn Coffee OLDE</Details>
                                        <Details>Brooklyn Coffee OLDE witn medium roast whole bean</Details>
                                        <Details><b>Weight:</b> 250g</Details>
                                        <Details><b>ID:</b> 3213442151</Details>
                                </Flex>
                                <ProductPrice>
                                    <AmountBox>
                                        <Add className="icon"/>
                                        <Amount>1</Amount>
                                        <Remove className="icon"/>
                                    </AmountBox>
                                    <Price>
                                        $ 20
                                    </Price>
                                </ProductPrice>
                            </Flex>
                            <Hr/>
                        </Product>
                        <Summary>
                            <Title fs={'2rem'}>ORDER SUMMARY</Title>
                            <SummaryItem>
                                <h3>Subtotal:</h3>
                                <span>$ 40</span>
                            </SummaryItem>
                            <SummaryItem>
                                <h3>Estimated Shipping:</h3>
                                <span>$ 4</span>
                            </SummaryItem>
                            <SummaryItem>
                                <h3>Shipping Discount:</h3>
                                <span>$ 4</span>
                            </SummaryItem>
                            <SummaryItem bold>
                                <h3>Total:</h3>
                                <span>$ 40</span>
                            </SummaryItem>
                            <Button primary background={'black'} color={"white"} fw={'600'}>CHECKOUT NOW</Button>
                        </Summary>
                    </Flex>
                </CartBox>
            </Flex>
        </StyledCart>
    </Wrapper>
  )
}

export default Cart