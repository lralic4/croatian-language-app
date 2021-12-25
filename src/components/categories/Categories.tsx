import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

require("./Categories.css");

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Greetings");

  const categories = require("./../../data/categories.json");

  const setCategory = (e: any) => {
    setSelectedCategory(e.target.innerHTML);
  };

  const getCategories = () => {
    let items = [];
    for (let i in categories) {
      items.push(
        <Dropdown.Item
          key={i}
          value={categories[i].category}
          onClick={setCategory}
        >
          {categories[i].category}
        </Dropdown.Item>
      );
    }
    return items;
  };

  return (
    <>
      <div className="categorySection">
        <DropdownButton
          id="dropdown-basic-button"
          title="Choose a Category"
          variant="success"
        >
          {getCategories()}
        </DropdownButton>
        <h2>{selectedCategory}</h2>
      </div>
    </>
  );
};

export default Categories;
