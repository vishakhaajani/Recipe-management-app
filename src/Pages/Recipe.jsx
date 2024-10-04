import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';

const Recipe = () => {

    const [title, setTitle] = useState("");
    const [instruction, setInstruction] = useState("");
    const [ingredients ,setIngredients] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [img, setImg] = useState(null);

    let data = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    const [record, setRecord] = useState(data);

    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !ingredients || !instruction || !cookingTime) {
            alert("Recipe can not be empty!");
            return false;
        }

        const obj = {
            id: Math.floor(Math.random() * 1000),
            title,
            ingredients,
            instruction,
            cookingTime,
            img
        };

        const all = [...record, obj];
        localStorage.setItem('user', JSON.stringify(all))
        setRecord(all);

        alert("Recipe add sucessfully!");
        setTitle('');
        setIngredients('');
        setInstruction('');
        setCookingTime('');
        setImg(null);
        navigator('/')
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-5 mx-auto mt-5">
                        <form className='p-5 bg-light' onSubmit={handleSubmit}>
                            <h3 className='text-center mb-4'>Add New Recipe</h3>
                            <div className="mb-3">
                                <label className="form-label">Title:</label>
                                <input type="text" className="form-control" value={title || ""}
                                    onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Instruction:</label>
                                <input type="text" className="form-control" value={instruction || ""}
                                    onChange={(e) => setInstruction(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Ingridiants:</label>
                                <input type="text" className="form-control" value={ingredients || ""}
                                    onChange={(e) => setIngredients(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Cooking time:</label>
                                <input type="text" className="form-control" value={cookingTime || ""}
                                    onChange={(e) => setCookingTime(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Input File:</label>
                                <input type="file" className='d-block'
                                    onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} />
                            </div>
                            <div className="button mt-5">
                                <button type="submit" className="btn w-100 bg-dark text-light">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe
