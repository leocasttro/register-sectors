import styled from "styled-components";
import Job from "./Job";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1150px;
  margin: 25px 0px;
`;

const Jobs = ({jobs}) => {
  return (
    <Container>
      {jobs.map((job) => (
        <Job 
          job={job} 
          key={job.id}
        />
      ))}
    </Container>
  )
}

export default Jobs