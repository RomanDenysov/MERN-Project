import styled from "styled-components"
import Wrapper from "./styled-components/Wrapper"
import Title from "./styled-components/Title"
import Flex from "./styled-components/Flex"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const StyledFilter = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 1rem;
`
const FilterItem = styled.div`
    margin-top: 1rem;
`
const FilterText = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: .6rem;
`
const Select = styled.select`
    padding: 0.4rem;
    margin-right: .6rem;
`
const Option = styled.option`

`

const Filter = ({ onFilterChange }) => {
    const [filter, setFilter] = useState()
    const location = useLocation()
    const [sort, setSort] = useState('newest')

    const cat = location.pathname.split('/')[2]

    const handleFilters = (e) => {
        const updateFilter = {
            ...filter,
            [e.target.name]: e.target.value
        }

        setFilter(updateFilter)

        onFilterChange(updateFilter)
    }

    const handleSort = (e) => {
        const updateSort = e.target.value
        setSort(updateSort)
        onFilterChange(filter, updateSort)
    }
    console.log(cat)
    // console.log(filter)
    // console.log(sort)

  return (
    <StyledFilter>
        <Wrapper>
            <Title fs={'3rem'} fw={'600'}>Coffee</Title>
            <Flex justify={'space-between'}>
                <FilterItem>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='type' onChange={handleFilters}>
                        <Option value='arabica'>arabica</Option>
                        <Option value='robusta'>robusta</Option>
                        <Option value='merch'>merch</Option>
                        <Option value='espresso'>espresso</Option>
                    </Select>    
                    <Select name='weight' onChange={handleFilters}>
                        <Option >250g</Option>
                        <Option>500g</Option>
                        <Option>1kg</Option>
                        <Option>5kg</Option>
                        <Option>10kg</Option>
                        <Option></Option>
                    </Select>    
                </FilterItem>
                <FilterItem>
                    <FilterText>Sort Products:</FilterText>
                    <Select name='sorts' onChange={handleSort}>
                        <Option value='newest'>Newest</Option>
                        <Option value='lowest'>Price (lowest)</Option>
                        <Option value='highest'>Price (highest)</Option>
                    </Select>
                </FilterItem>
            </Flex>
        </Wrapper>
    </StyledFilter>
  )
}

export default Filter