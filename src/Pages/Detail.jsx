import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Detail = () => {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null)

    const navigator = useNavigate()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user')) || []
        const selectedRecipe = data.find((val) => val.id === parseInt(id))
        setRecipe(selectedRecipe);
    }, [id]);


    const handleDelete = (id) => {
        const updatedRecipes = JSON.parse(localStorage.getItem('user')) || [];
        const filteredRecipes = updatedRecipes.filter(recipe => recipe.id !== id);
        localStorage.setItem('user', JSON.stringify(filteredRecipes));
        alert('Recipe deleted sucessfully!');
        navigator('/')
    };

    const handleEdit = (record) => {
        navigator('/edit', { state: { record } });
    };


    return (
        <div>

            {/* All recipes cards */}
            {
                recipe ? (
                    <div key={recipe.id}>
                        <div>
                            <div className='msg'>
                                <img src={recipe.img} alt={recipe.title} />
                                <div>
                                    <div className='info'>
                                        <h3 className='mb-4 text-capitalize'>{recipe.title}</h3>
                                        <b>Ingridiants:</b>
                                        <p>The main ingredients are {recipe.ingredients}</p>
                                        <b>Instructions:</b>
                                        <p>{recipe.instruction}</p>
                                        <b>Cooking time:</b>
                                        <p>{recipe.cookingTime} to cook</p>
                                    </div>
                                    {/* Conditionally render Edit and Delete buttons */}
                                    {!recipe.isDefault && (
                                        <div className='buttons'>
                                            <button onClick={() => handleEdit(recipe)} className='me-3 px-4'>Edit</button>
                                            <button onClick={() => handleDelete(recipe.id)} className='px-4'>Delete</button>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Recipe not found!</p>
                )
            }

        </div>
    );
};

export default Detail;
