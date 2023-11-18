import styled from "styled-components"
import Title from "./styled-components/Title"
import Button from "./styled-components/Button"


const Blur = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all .5s ease;
`
const StyledCategoryItem = styled.div`
    max-width: 26rem;
    height: 54vh;
    position: relative;
    box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
    transition: all .5s ease;


    &:hover ${Blur} {
        backdrop-filter: blur(2px);
        background-color: rgba(0,0,0, 0.1);
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`
const InfoBox = styled.div`
    position: absolute;
    padding: 1rem;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

const CategoryItem = ({item}) => {
    return (
        <StyledCategoryItem>
            <Image src={item.img}/>
            <Blur/>
            <InfoBox>
                <Title AS color={"white"} fs={'4rem'}>{item.title}</Title>
                <Button outlined fw={'600'} align={'center'} fs={'1rem'} bs={'2px'}>Shop Now</Button>
            </InfoBox>
        </StyledCategoryItem>
    )
}

export default CategoryItem