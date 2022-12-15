import { ExpandCircleDown } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import jobFetch from "../axios/config";

const Container = styled.div`
  background-color: #A09F9F;
  margin-bottom: 20px;
`;

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px;
  cursor: pointer;
`;

const Title = styled.h2`
`;

const DropDown = styled.div`
  padding: 20px;
`;

const Cards = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Item = styled.span`
  border: 1px solid #4e4c4c;
  background-color: white;
  padding: 10px 30px;
  margin: 5px 10px;
  display: flex;
  align-items: center;
`;

const Btn = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;
const Edit = styled.button`
  border: 1px solid #4e4c4c;
  background-color: white;
  padding: 10px 30px;
  margin: 5px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Delete = styled.button`
  border: 1px solid #4e4c4c;
  background-color: white;
  padding: 10px 30px;
  margin: 5px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Sector = ({sector}) => {
  const [isOpen, setOpen] = useState(false);


  const toggleDropdown = () => {
    setOpen(!isOpen)
  };


  const del = async (sectorId) => {
    await jobFetch.delete(`/setores/${sectorId}`);
    window.location.reload(false);
}


  return (
    <Container>
      <Cont onClick={toggleDropdown}>
        <Title>{sector.nome}</Title>
        <ExpandCircleDown />
      </Cont>
      {isOpen ? <DropDown>
        <Cards >
          {sector.jobs.map((item) => (
            <Item key={item.id}>{item.job}</Item>
          ))}
        </Cards>
        <Btn>
          <Edit>Editar</Edit>
          <Delete onClick={() => del(sector.id)}>Deletar</Delete>
        </Btn>
      </DropDown> : null}
      
    </Container>
  )
}

export default Sector