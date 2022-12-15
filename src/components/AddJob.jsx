import { useState } from "react";
import jobFetch from "../axios/config";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  height: 60px;
  display: flex;
`;

const Input = styled.input`
  width: 80%;
  padding: 20px 0;
  font-size: 20px;
  margin: 0px 15px 10px 0;
  background-color: #5a5a5a;
  border: solid 1px #ccc;
`;

const Button = styled.button`
  padding: 12px;
  margin-bottom: 10px;
  background-color: #5a5a5a;
  display: inline-block;
`;

const AddJob = () => {

  const [job, setJob] = useState("")
  
  const handleInputChange = (e) => {
    setJob(e.target.value);
    
  };

  const handleAddSectorClick = async () => {
    const post = {id: Math.floor(Math.random() * 2000), job};

    await jobFetch.post("/cargos", post)
  };

  return (
    <Container>
      <Input  onChange={handleInputChange} />
      <Button onClick={handleAddSectorClick}>ADICIONAR</Button>
    </Container>
  )
}

export default AddJob