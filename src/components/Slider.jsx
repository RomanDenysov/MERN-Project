import styled from "styled-components"
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import Title from './styled-components/Title'
import Button from "./styled-components/Button"
import { useState } from "react"
import { sliderItem } from '../data'

const StyledSlider = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    margin: auto;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #fff7f7;
    box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && '2rem'};
    right: ${props => props.direction === "right" && '2rem'};
    z-index: 2;
    .sliderIcon{
        font-size: 140%;
    }
    opacity: .5;
    transition: all .2s ease-in-out;
    &:hover {
        opacity: 1;
    }
`
const SliderWrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all .5s ease;
    transform: translateX(${props=>props.sliderIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 10rem;
    background-color: ${props=>props.bg || ''};
`
const ImageBox = styled.div`
    flex: 1;
    height: 100%;
    align-self: center;
`
const Image = styled.img`
    height: 80%;
    width: 80%;
    object-fit: contain;
    background-repeat: no-repeat;
`
const InfoBox = styled.div`
    flex: 1;
`
const StyledDescr = styled.p`
    font-size: calc(2rem - 20%);
    font-weight: 300;
    letter-spacing: .4rem;
    color: ${props=>props.color || 'white'};
    margin: 2.8rem 0;
`

const Slider = () => {
    const [sliderIndex, setSlideIndex] = useState(0)
    const sliderLenght = sliderItem.length;
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(sliderIndex > 0 ? sliderIndex-1 : sliderLenght - 1 );
        } else {
            setSlideIndex(sliderIndex < sliderLenght - 1 ? sliderIndex+1 : 0)
        }
    }
  return (
    <StyledSlider>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowBackIos className="sliderIcon"/>
        </Arrow>
        <SliderWrapper sliderIndex={sliderIndex}>
            {sliderItem.map((item) => (
            <Slide bg={item.bg} key={item.id}>
                <ImageBox>
                    <Image src={item.img}/>
                </ImageBox>
                <InfoBox>
                    <Title color={'black'}>{item.title}</Title>
                    <StyledDescr color={'black'}>{item.descr}</StyledDescr>
                    <Button outlined color={'black'} bcol={'black'}>{item.btn}</Button>
                </InfoBox>
            </Slide>
            ))}
        </SliderWrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIos className="sliderIcon"/>
        </Arrow>
    </StyledSlider>
  )
}

export default Slider