
import { useEffect, useState } from "react";
import styled from "styled-components";

function Home() {
  const [photos, setPhotos] = useState([])
  const start = 0;
  const limit = 10;
  const apiUrl = `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`

  const fetchData = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    setPhotos(data)
  }

  const getCardData = () => (
    photos.map((photo) => (
      <Card>
        <img src={"../yeh-jawaani-hai-deewani-1-one_one.webp"} alt="Image here" />
        <p>{photo.title}</p>
        <a href={photo.url} target="_blank">Read More...</a>
      </Card>
    ))
  )

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ContentContainer>
      <Banner>
        <img src="./banner.jpg" alt="Banner Here" />
      </Banner>
      <CardContainer>
        {getCardData()}
      </CardContainer>
    </ContentContainer>
  );
}
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
export default Home;
