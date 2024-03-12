import styled from "styled-components"

const Footer = () => {
    const FooterContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:pink;
    width:auto;
    height:150px;
    margin-top:20px;
    `
    return (
        <FooterContainer>
            <span>&copy;Copyright 2024</span>
        </FooterContainer>
    )
}

export default Footer