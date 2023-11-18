import styled from "styled-components"
import { popularProducts } from "../data"
import ProductItem from "./ProductItem"
import Wrapper from "./styled-components/Wrapper"
import Grid from "./styled-components/Grid"

const StyledProducts = styled.div`
	margin-top: 4rem;
	width: 100%;
    height: 100%;
    background-color: ${props=>props.bg || 'white'};
`

const Products = () => {
return (
	<StyledProducts>
		<Wrapper>
			<Grid>
				{popularProducts.map((item)=>(
					<ProductItem item={item} key={item.id}/>
				))}
			</Grid>
		</Wrapper>
	</StyledProducts>
)
}

export default Products