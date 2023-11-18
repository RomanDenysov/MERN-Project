import { AddShoppingCart, Favorite, Search } from "@mui/icons-material"
import styled from "styled-components"

const InfoBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    opacity: 0;
    transition: all .3s ease;
`
const StyledProductItem = styled.div`
    max-width: 18rem;
    aspect-ratio: 2 / 3;
    position: relative;
    box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    margin-top: 1rem;


    &:hover ${InfoBox} {
        opacity: 1;
        backdrop-filter: blur(2px);
    }
`
const Circle = styled.div`
    width: 15.4rem;
    height: 15.4rem;
    border-radius: 50%;
    background-color: lightcoral;
    opacity: 0.1;
    position: absolute;
    z-index: 1;
`
const Image = styled.img`
    width: 100%;
    height: 75%;
    object-fit: contain;
    z-index: 2;
`
const IconBox = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const ProductItem = ({item}) => {
  return (
    <StyledProductItem>
            {/* <Circle/> */}
            <Image src={item.img}/>
            <InfoBox>
                    <IconBox>
                        <AddShoppingCart/>    
                    </IconBox>
                    <IconBox>
                        <Search/>
                    </IconBox>
                    <IconBox>
                        <Favorite/>
                    </IconBox>
            </InfoBox>
    </StyledProductItem>
  )
}

export default ProductItem