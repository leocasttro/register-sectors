import { useEffect, useState } from "react";
import styled from "styled-components"
import Jobs from "../components/Jobs"
import AddJob from "../components/AddJob";
import jobFetch from "../axios/config";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 1200px;
  height: 550px;
  position: absolute;
`;

const Title = styled.h1`
  display: inline-block;
  margin: 70px 20px 10px;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  padding: 0px 20px;
`;

const Desc = styled.p`
  font-size: 18px;
  margin: 10px 0;
  color: #0a0a0a;

`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 90%;
  padding: 8px 0;
  font-size: 20px;
  margin: 10px 0;
  background-color: #5a5a5a;
  border: solid 1px #ccc;
`;

const Btn = styled.div`
  position: absolute;
  margin-left: 940px;
  margin-top: 400px;
`;

const Button = styled.button`
  padding: 10px 30px;
  background-color: #5a5a5a;
`;


const Register = () => {

  const [nome, setNome] = useState("");
  const [jobs, setJobs] = useState([]);

  localStorage.setItem("nome", nome)

  useEffect(() => {
    const fetchSectors = async () => {
      const {data} = await jobFetch.get(`/cargos`);

      setJobs(data)
    }
    fetchSectors();
  }, []);

  const add = async () => {
  const post = {id: Math.floor(Math.random() * 2000),
    nome,
    jobs
  };

  await jobFetch.post("/setores", post)
};

  const del =  () => {
     jobs.forEach( async (job) => (
      await jobFetch.delete(`/cargos/${job.id}`)
    ))
  }

  return (
    <Container>
      <Link to="/">
        <Home style={{"font-size": "30px", "margin-left": "20px"}}/>
      </Link>
      <Title>ADICIONAR SETOR</Title>
      <Wrapper>
        <Form>
          <Desc>Nome:</Desc>
          <Input onChange={(e) => setNome(e.target.value)}/>
          <Desc>Cargo(s):</Desc>
          <AddJob />
          <Jobs jobs={jobs}/>
          <Btn onClick={del}>
            <Button onClick={add}>SALVAR</Button>
          </Btn>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register