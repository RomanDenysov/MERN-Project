import styled, { keyframes } from "styled-components"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const MarqueeAnimation = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
`
const StyledAnnouncement = styled.div`
    padding: .2rem 0;
    height: max-content;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`
const StyledTitle = styled.div`
    flex: 3;
    min-height: 10%;
    color: white;
    font-size: .8rem;
    font-weight: 400;
    text-align: center;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
    animation: ${MarqueeAnimation} 20s linear infinite;
`

const Announcement = () => {
    return (
        <StyledAnnouncement>
            <StyledTitle>
                <p>Free Shipping on Orders Over 20 eur!</p>
            </StyledTitle>
            <StyledTitle>
                <LocalShippingIcon style={{fontSize: '1rem', flex: '1'}} />
            </StyledTitle>
            <StyledTitle>
                <p>Free Shipping on Orders Over 20 eur!</p>
            </StyledTitle>
            <StyledTitle>
                <LocalShippingIcon style={{fontSize: '1rem', flex: '1'}} />
            </StyledTitle>
            <StyledTitle>
                <p>Free Shipping on Orders Over 20 eur!</p>
            </StyledTitle>
        </StyledAnnouncement>
    )
}

export default Announcement