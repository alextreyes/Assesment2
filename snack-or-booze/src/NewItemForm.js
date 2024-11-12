import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SnackOrBoozeApi from "./Api";

function NewItemForm() {
  const [formData, setFormData] = useState({
    type: "snacks", // Default type
    name: "",
    description: "",
    recipe: "",
    serve: "",
  });
  const history = useHistory();

  async function handleSubmit(evt) {
    evt.preventDefault();
    await SnackOrBoozeApi.addItem(formData.type, {
      name: formData.name,
      description: formData.description,
      recipe: formData.recipe,
      serve: formData.serve,
    });
    history.push(`/${formData.type}`);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="type">Type:</label>
      <select
        id="type"
        name="type"
        value={formData.type}
        onChange={handleChange}
      >
        <option value="snacks">Snack</option>
        <option value="drinks">Drink</option>
      </select>

      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="recipe">Recipe:</label>
      <input
        id="recipe"
        name="recipe"
        value={formData.recipe}
        onChange={handleChange}
      />

      <label htmlFor="serve">Serve:</label>
      <input
        id="serve"
        name="serve"
        value={formData.serve}
        onChange={handleChange}
      />

      <button type="submit">Add Item</button>
    </form>
  );
}

export default NewItemForm;
