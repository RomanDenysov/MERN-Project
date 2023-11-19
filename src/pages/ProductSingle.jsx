import styled from "styled-components"
import Product from "../components/Product"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const StyledProductSingle = styled.div`
    height: 100%;
    width: 100%;
`

const ProductSingle = () => {
  return (
    <StyledProductSingle>
        <Navbar/>
        <Product/>
        <Newsletter/>
        <Footer/>
    </StyledProductSingle>
  )
}

export default ProductSingle