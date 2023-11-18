import styled from "styled-components"
import Wrapper from "./styled-components/Wrapper"
import Title from "./styled-components/Title"
import Flex from "./styled-components/Flex"

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

const Filter = () => {
  return (
    <StyledFilter>
        <Wrapper>
            <Title fs={'3rem'} fw={'600'}>Coffee</Title>
            <Flex justify={'space-between'}>
                <FilterItem>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disable selected>Color</Option>
                        <Option>Red</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                    </Select>    
                    <Select>
                        <Option disable selected>Taste</Option>
                        <Option>Red</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                    </Select>    
                </FilterItem>
                <FilterItem>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option disable selected>Newest</Option>
                        <Option>Price (lowest)</Option>
                        <Option>Price (highest)</Option>
                    </Select>
                </FilterItem>
            </Flex>
        </Wrapper>
    </StyledFilter>
  )
}

export default Filter