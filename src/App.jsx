import Filter from "../components/Filter";
import Seeker from "../components/Seeker";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  text-align: center;
  padding: 30px 0;
  border-bottom: 1px solid black;
  margin: 0;
`;

const FlexContainer = styled.div`
  display: flex;
`;

function App() {
  const [typeFilter, setTypeFilter] = useState("All products");

  const handleFilter = (e) => {
    setTypeFilter(e.target.id);
  };
  return (
    <Container>
      <Title>Welcome to the Mum's Deals Page!</Title>
      <FlexContainer>
        <Filter handleFilter={handleFilter} />
        <Seeker typeFilter={typeFilter} />
      </FlexContainer>
    </Container>
  );
}

export default App;
