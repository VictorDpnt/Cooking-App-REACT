import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import axios from "axios";
import Cards from "../components/Cards";

const Cooking = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [inputActive, setInputActive] = useState(false);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setData(res.data.meals));
  }, [search]);

  const inputValue = (e) => {
    setSearch(e.target.value);
    setInputActive(true);
  };

  return (
    <div className="cooking-page">
      <Logo />
      <form>
        <input
          placeholder="Rechercher un aliment (en anglais) "
          type="text"
          onChange={(e) => inputValue(e)}
        />
        <button style={{ display: inputActive ? "flex" : "none" }}>X</button>
      </form>

      <ul>
        {data.map((meal) => (
          <Cards key={meal.idMeal} meal={meal} />
        ))}
      </ul>
    </div>
  );
};

export default Cooking;
