import styled from "styled-components"
import Wrapper from "../components/styled-components/Wrapper"
import Title from "../components/styled-components/Title"
import Flex from "../components/styled-components/Flex"
import Button from "../components/styled-components/Button"
import { Add, Remove } from "@mui/icons-material"

const StyledProduct = styled.div`
    width: 100%;
    height: 100vh;
`
const ImageBox = styled.div`
    flex: 1;
    padding-left: 2rem;
`
const Image = styled.img`

`
const InfoBox = styled.div`
    flex: 1;
    padding-right: 2rem;
`
const ProdDescr = styled.p`
    font-size: 1rem;
    font-weight: 400;
`
const Price = styled.span`
    font-weight: 300;
    font-size: 3rem;
`
const FilterText = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: .6rem;
`
const ProductWeight = styled.select`
    padding: 0.4rem;
    margin-right: .6rem;
    font-size: 1.2rem;
    &:focus {
        outline: none;
    }
    box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const WeightItem = styled.option`
    border: none;
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: .6rem;
    .icon {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        transition: all .3s ease;
        
        &:hover {
            background-color: rgba(0,0,0, 0.2);
            box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.15);
        }
    }
`
const Amount = styled.span`
    font-weight: 600;
    font-size: 1.4rem;
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    border: 1px solid darkgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.15);
`

const Product = () => {
  return (
    <StyledProduct>
        <Wrapper>
            <Flex align={'center'} gap={'2rem'}>
                <ImageBox>
                    <Image src="https://t3.ftcdn.net/jpg/05/39/90/48/360_F_539904827_5k9ndXrLqodNuG3OiZlaGF6UxGuwsBwq.jpg"/>
                </ImageBox>
                <InfoBox>
                    <Flex directon={'column'} gap={'2rem'} align={'start'}>
                        <Title fw={400}>Product 1</Title>
                        <ProdDescr>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum architecto commodi consequatur illum error vitae debitis optio! Veniam, libero cum? Illum adipisci quo eveniet ipsum nihil officiis, vero expedita?
                        </ProdDescr>
                        <Price>$ 20</Price>
                        <Flex align={"center"}>
                            <FilterText>Weight</FilterText>
                            <ProductWeight>
                                <WeightItem disable selected>coffe weight</WeightItem>
                                <WeightItem>100mg</WeightItem>
                                <WeightItem>250mg</WeightItem>
                                <WeightItem>500mg</WeightItem>
                                <WeightItem>1kg</WeightItem>
                            </ProductWeight>
                        </Flex>
                        <Flex align={'center'} justify={'space-between'} width={'80%'} margin={'4rem 0 0 0'}>
                            <AddContainer>
                                <Remove className="icon"/>
                                <Amount>1</Amount>
                                <Add className="icon"/>
                            </AddContainer>
                            <Button outlined color={'black'} fs={'1rem'} fw={'600'} align={'end'}>Add to cart</Button>
                        </Flex>
                    </Flex>
                </InfoBox>
            </Flex>
        </Wrapper>
    </StyledProduct>
  )
}

export default Product