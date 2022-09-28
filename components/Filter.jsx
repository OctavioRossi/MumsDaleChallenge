import { useState, useEffect } from "react";
import styled from "styled-components";

const ContainerFilter = styled.div`
  min-width: 300px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  height: 70vh;
  padding: 5px 20px;
`;

const Title = styled.h3`
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
`;

const Subtitle = styled.h4`
  font-family: Roboto;
`;

const CheckboxsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #afacab;
  font-size: 18px;
  font-family: Roboto;
  margin-left: 20px;
`;

const RadioLabels = styled.div`
  padding: 15px;
`;

const Radios = styled.input`
  transform: scale(1.5);
  margin-right: 10px;
`;

const Filter = ({ handleFilter }) => {
  return (
    <ContainerFilter>
      <Title>Filter Results</Title>
      <div>
        <Subtitle>Product Type</Subtitle>
        <CheckboxsContainer>
          <RadioLabels>
            <Radios
              id="diapers"
              type="radio"
              name="radioFilter"
              onChange={(e) => {
                handleFilter(e);
              }}
            />{" "}
            <label htmlFor="diapers">Diapers</label>
          </RadioLabels>
          <RadioLabels>
            <Radios
              id="baby wipes"
              type="radio"
              name="radioFilter"
              onChange={(e) => {
                handleFilter(e);
              }}
            />{" "}
            <label htmlFor="baby wipes">Baby Wipes</label>
          </RadioLabels>
          <RadioLabels>
            <Radios
              id="feeding"
              type="radio"
              name="radioFilter"
              onChange={(e) => {
                handleFilter(e);
              }}
            />{" "}
            <label htmlFor="feeding">Feeding</label>
          </RadioLabels>
          <RadioLabels>
            <Radios
              id="bath time"
              type="radio"
              name="radioFilter"
              onChange={(e) => {
                handleFilter(e);
              }}
            />{" "}
            <label htmlFor="bath time">Bath Time</label>
          </RadioLabels>
          <RadioLabels>
            <Radios
              id="All products"
              type="radio"
              name="radioFilter"
              onChange={(e) => {
                handleFilter(e);
              }}
            />{" "}
            <label htmlFor="All products">All products</label>
          </RadioLabels>
        </CheckboxsContainer>
      </div>
      <div>
        <Subtitle>Price Range</Subtitle>
        <input type="range" min={"0"} max={"10"} />
      </div>
    </ContainerFilter>
  );
};

export default Filter;
