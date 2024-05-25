import "./App.css";


function RecipeView({ recipe, deleteRecipe }) {
    return (
       
          <tr>
            <td><p>{recipe.name}</p></td>
            <td><p>{recipe.cuisine}</p></td>
            <td><img src={recipe.photo} alt="user provided url" /></td>
                <td className="content_td"><p>{recipe.ingredients}</p></td>
                <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="delete" onClick={()=>deleteRecipe(recipe.name)}>Delete</button></td>
          </tr>
        
    );
  }
  
  export default RecipeView;


