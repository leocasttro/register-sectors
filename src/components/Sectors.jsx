import styled from "styled-components"
import Sector from "./Sector";

const Container = styled.div`
  padding: 20px;
`;

const Sectors = ({sectors}) => {
  return (
    <Container>
      {sectors.map((sector) => (
        <Sector sector={sector}
        key={sector.id}/>
      ))}
    </Container>
  )
}

export default Sectors