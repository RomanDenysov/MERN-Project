import styled from "styled-components"
import { categoryItem } from "../data"
import CategoryItem from "./CategoryItem"
import Wrapper from "./styled-components/Wrapper"
import Grid from "./styled-components/Grid"

const StyledCategories = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props=>props.bg || 'white'};
`

const Categories = (props) => {
    return (
        <StyledCategories {...props}>
            <Wrapper>
                <Grid tempcol={'repeat(3, auto)'}>
                    {categoryItem.map((item)=>(
                        <CategoryItem item={item} key={item.id}/>
                    ))}
                </Grid>
            </Wrapper>
        </StyledCategories>
    )
}

export default Categories