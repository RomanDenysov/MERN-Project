import styled from "styled-components"
import Navbar from "../components/Navbar"
import Filter from "../components/Filter"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const StyledProductList = styled.div`
    height: 100%;
    width: 100%;
`


const ProductList = ({cat, filter, sort}) => {

  const handleFilterChange = (newFilter) => {

    console.log('Новые фильтры:', newFilter)
  }

  return (
    <StyledProductList>
        <Navbar/>
          <Filter onFilterChange={handleFilterChange}/>
          <Products cat={cat} filter={filter} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </StyledProductList>
  )
}

export default ProductList