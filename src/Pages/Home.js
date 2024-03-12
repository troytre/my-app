
import styled from "styled-components";

function Home() {
    const ContentContainer = styled.div`
  width:auto;
  min-height:500px;`
    const Banner = styled.div`
  width:auto;
  height:400px;
  margin-bottom:20px;
  img {
    width:100%;
    height:100%;
  }
  `
    const CardContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  gap:10px;
  `


    const Card = styled.div`
  padding:10px;
  display:flex;
  flex-direction:column;
  width:350px;
  height:300px;
  background:#ccc;
  img {
    width:auto;
    height:150px;
  }
  a{
    color:red;
    font-size:20px;
  }
  p{
    font-size:20px;
  }
  `
    return (
        <ContentContainer>
            <Banner>
                <img src="./banner.jpg" alt="Banner Here" />
            </Banner>
            <CardContainer>
                <Card>
                    <img src="./lob.png" alt="Image here" />
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p>
                    <a>Read More...</a>
                </Card>
                <Card>
                    <img src="./lob.png" alt="Image here" />
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p>
                    <a>Read More...</a>
                </Card>
                <Card>
                    <img src="./lob.png" alt="Image here" />
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p>
                    <a>Read More...</a>
                </Card>
                <Card>
                    <img src="./lob.png" alt="Image here" />
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p>
                    <a>Read More...</a>
                </Card>
                <Card>
                    <img src="./lob.png" alt="Image here" />
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p>
                    <a>Read More...</a>
                </Card>
                <Card>
                    <img src="./lob.png" alt="Image here" />
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p>
                    <a>Read More...</a>
                </Card>
                <Card>
                    <img src="./lob.png" alt="Image here" />
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p>
                    <a>Read More...</a>
                </Card>
                <Card>
                    <img src="./lob.png" alt="Image here" />
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p>
                    <a>Read More...</a>
                </Card>

            </CardContainer>
        </ContentContainer>
    );
}

export default Home;
