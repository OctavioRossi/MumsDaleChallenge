import styled from "styled-components";

const GridCardContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlockCardContainer = styled.div`
  display: flex;
  gap: 0 100px;
  margin: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid black;
`;

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const CardTitle = styled.h2`
  font-family: Roboto;
  font-weight: 900;
  font-size: 1.5rem;
  text-align: center;
`;

const ProductInfo = styled.h4`
  font-family: Roboto;
  font-weight: 700;
  font-size: 1rem;
  text-transform: capitalize;
  align-self: flex-start;
  margin: 0;
`;

const ProductQuantitySold = styled.h4`
  font-family: Roboto;
  font-weight: 400;
  font-size: 1rem;
  text-transform: capitalize;
  align-self: flex-start;
`;

const Card = ({ title, image, quantitySold, product_type, grid, variants }) => {
  return (
    <>
      {grid ? (
        <GridCardContainer>
          <CardImage src={image} alt={title} />
          <CardTitle>{title}</CardTitle>
          <ProductInfo>{product_type}</ProductInfo>
          <ProductQuantitySold>
            Quantity Sold: {quantitySold}
          </ProductQuantitySold>
        </GridCardContainer>
      ) : (
        <BlockCardContainer>
          <CardImage src={image} alt={title} />
          <div>
            <CardTitle>{title}</CardTitle>
            <ProductInfo>{product_type}</ProductInfo>
            <ProductQuantitySold>
              Quantity Sold: {quantitySold}
            </ProductQuantitySold>
          </div>
        </BlockCardContainer>
      )}
    </>
  );
};

export default Card;
