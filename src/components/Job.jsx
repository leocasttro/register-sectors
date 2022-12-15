import { HighlightOff } from "@mui/icons-material";
import styled from "styled-components";
import jobFetch from "../axios/config";


const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const Card = styled.span`
  border: 1px solid #4e4c4c;
  background-color: white;
  padding: 10px 30px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  text-align: center;
`;

const Icon = styled.button`
  border: none;
  margin: 0px 10px;
  background-color: white;
  cursor: pointer;
`;


const Job = ({job}) => {


  const handleJobDelete = async (jobId) => {

    await jobFetch.delete(`/cargos/${jobId}`);

    job.filter(jobid => jobid.id !== jobId)
  }

  return (
    <Container>
      <Wrapper>
        <Card>
          <Title>{job.job}</Title>
          <Icon onClick={() => handleJobDelete(job.id)}><HighlightOff /></Icon>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Job