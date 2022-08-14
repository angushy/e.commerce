import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
`;

const Announcement = () => {
  return <Container>REGISTER NOW TO GET 5% OFF </Container>;
};

export default Announcement;