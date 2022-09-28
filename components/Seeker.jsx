import GridResults from "./GridResults";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { reqAPI } from "../services/reqApi";
import Select from "react-select";

const Container = styled.div`
  width: 100%;
`;

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid black;
`;

const DetailsTitle = styled.h4`
  font-family: Roboto;
`;

const NavbarFilters = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 30%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-right: 20px;
`;

const SortOptions = styled(Select)`
  font-family: Roboto;
  margin: 0 3px;
  padding: 5px;
  border-radius: 5px;
  width: 180px;
`;

const options = [
  { value: "a-z", label: "A-Z" },
  { value: "high-to-low", label: "High to Low" },
  { value: "low-to-high", label: "Low to High" },
];

const Seeker = ({ typeFilter }) => {
  const [grid, setGrid] = useState(true);
  const [card, setCard] = useState([]);
  const [numberOfResults, setNumberOfResults] = useState("a-z");
  const [value, setValue] = useState({ value: "a-z" });

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const results = await reqAPI();
      setCard(results);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const cardFilter = card.filter(
    (card) => card.product_type == typeFilter || typeFilter == "All products"
  );

  useEffect(() => {
    setNumberOfResults(cardFilter.length);
  }, [cardFilter]);

  const handleGridView = () => {
    setGrid(true);
  };

  const handleListView = () => {
    setGrid(false);
  };

  const onDropdownChange = (value) => {
    setValue(value);
  };

  const cardOrder = () => {
    switch (value.value) {
      case "a-z":
        cardFilter.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        });
        break;
      case "high-to-low":
        cardFilter.sort((a, b) => b.variants[0].price - a.variants[0].price);
        break;
      case "low-to-high":
        cardFilter.sort((a, b) => a.variants[0].price - b.variants[0].price);
        break;
      default:
        cardFilter;
    }
  };
  //const minPrice = variants[0]
  //const maxPrice = variants[variants.length-1]

  return (
    <Container>
      <Navbar>
        <DetailsTitle>Available Deals: {numberOfResults}</DetailsTitle>
        <NavbarFilters>
          <ButtonsContainer>
            <Icon
              src="../public/grip-solid.svg"
              alt="Grid-Icon"
              onClick={handleGridView}
            />
            <Icon
              src="../public/list-solid.svg"
              alt="List-Icon"
              onClick={handleListView}
            />
          </ButtonsContainer>
          <ButtonsContainer>
            <p>Sort Results:</p>
            <SortOptions
              options={options}
              onChange={onDropdownChange}
              value={value}
            />
          </ButtonsContainer>
        </NavbarFilters>
      </Navbar>
      <GridResults grid={grid} cardFilter={cardFilter} cardOrder={cardOrder} />
    </Container>
  );
};

export default Seeker;
