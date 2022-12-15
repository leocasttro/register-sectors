import { Work } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import jobFetch from "../axios/config";
import Sectors from "../components/Sectors";


const Container = styled.div`
  max-width: 700px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 2px solid gray;
  padding: 30px;
`;

const Title = styled.h1`
  margin: 10px 0;
`;



const Home = () => {

  const [sectors, setSectors] = useState([]);



  const getSectors = async() => {
    try {
      const {data} = await jobFetch.get("/setores");
      setSectors(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSectors()
  }, []);


  return (
    <Container>
      <Link to="/create">
        <Work style={{"font-size": "40px"}}/> 
      </Link>
      <Title>SETORES</Title>
        <Sectors sectors={sectors} />
    </Container>
  )
}

export default Home