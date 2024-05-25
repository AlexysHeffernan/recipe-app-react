import React, { useState } from "react";
import "./App.css";

function RecipeCreate({createRecipe}) {
   
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
   
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table >
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Actions</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td>
            <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name} />
                </td>
            <td>
            <input
            id="cuisine"
            type="text"
            name="cuisine"
            placeholder="Cuisine"
            onChange={handleChange}
            value={formData.cuisine} />
                </td>
            <td>
            <input
            id="photo"
            type="url"
            name="photo"
            placeholder="URL"
            onChange={handleChange}
            value={formData.photo} />
                </td>
            <td>
                <textarea name="ingredients"
                id="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}>
                </textarea>
                </td>
            <td>
                <textarea name="preparation"
                id="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}>
                </textarea>
                </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;