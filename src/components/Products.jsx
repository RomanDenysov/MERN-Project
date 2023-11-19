import styled from "styled-components"
import { popularProducts } from "../data"
import ProductItem from "./ProductItem"
import Wrapper from "./styled-components/Wrapper"
import Grid from "./styled-components/Grid"
import { useEffect, useState } from "react"
import axios from 'axios'

const StyledProducts = styled.div`
	margin-top: 4rem;
	width: 100%;
    height: 100%;
    background-color: ${props=>props.bg || 'white'};
`

const Products = ({cat, filter, sort}) => {
	console.log({cat, filter, sort})

	const [ products, setProducts ] = useState()
	const [filteredProducts, setFilteredProducts ] = useState([])

	useEffect(()=>{
		const source = axios.CancelToken.source()
		const getProducts = async () => {
			try {
				const res = await axios.get(
					cat 
					? `http://localhost:5000/api/products?category=${cat}` 
					: 'http://localhost:5000/api/products', 
					{
					params: filter,
					}
				);
				console.log(res.data)
				setProducts(res.data)
			} catch (err) {
				if(!axios.isCancel(err))
				console.error("Ошибка при получении данных:", err);
			}
		};
		getProducts()

		return ()=>{source.cancel()}
	}, [cat, filter])

	useEffect(()=> {
		if (cat) {
			setFilteredProducts(
			products.filter(item=>
				Object.entries(filter).every(([key, value]) => item[key].includes(value)))
			)
		} 
	}, [products, cat, filter])

	return (
		<StyledProducts>
			<Wrapper>
				<Grid>
					{filteredProducts.map((item)=>(
						<ProductItem item={item} key={item.id}/>
					))}
				</Grid>
			</Wrapper>
		</StyledProducts>
	)
}

export default Products