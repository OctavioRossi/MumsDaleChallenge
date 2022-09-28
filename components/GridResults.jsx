import styled from "styled-components";
import Card from "./Card";

const ContainerGrid = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const ContainerList = styled.div`
  width: 100%;
  display: block;
`;
const GridResults = ({ grid, cardFilter, cardOrder }) => {
  const cardFilterRender = () => {
    cardOrder();
    return cardFilter.map((e, index) => (
      <Card
        key={index}
        title={e.title}
        image={e.image}
        quantitySold={e.quantitySold}
        product_type={e.product_type}
        variants={e.variants}
        grid={grid}
      />
    ));
  };

  return (
    <>
      {grid ? (
        <ContainerGrid>{cardFilterRender()}</ContainerGrid>
      ) : (
        <ContainerList>{cardFilterRender()}</ContainerList>
      )}
    </>
  );
};

export default GridResults;
