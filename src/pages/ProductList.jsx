import styled from "styled-components"
import Navbar from "../components/Navbar"
import Filter from "../components/Filter"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Product from "./Product"

const StyledProductList = styled.div`
    height: 100%;
    width: 100%;
`


const ProductList = () => {
  return (
    <StyledProductList>
        <Navbar/>
          <Filter/>
          <Products/>
          <Product/>
        <Newsletter/>
        <Footer/>
    </StyledProductList>
  )
}

export default ProductList