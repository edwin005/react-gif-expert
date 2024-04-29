import { useState } from "react";

export const AddCategory = ({ categories, onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event)=>{
    event.preventDefault();
    console.log(event);
    if(categories.includes(inputValue)) return;
    if(inputValue.trim().length <2) return null;

    // setCategories(categories => [inputValue, ...categories]) Primer solucion
    onNewCategory(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        id="searchInput"
        placeholder="Search for gifs"
        value={inputValue}
        onChange={(x) => changeInputValue(x)}
      />
    </form>
  );
};