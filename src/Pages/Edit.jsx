
import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {

    const location = useLocation()
    const navigator = useNavigate();
    const {record} = location.state || {};

    const [title, setTitle] = useState(record.title);
    const [instruction, setInstruction] = useState(record.instruction);
    const [ingredients ,setIngredients] = useState(record.ingredients);
    const [cookingTime, setCookingTime] = useState(record.cookingTime);
    const [img, setImg] = useState(record.img);


    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            id: Math.floor(Math.random()*1000),
            title,
            ingredients,
            instruction,
            cookingTime,
            img 
        };

        const all = JSON.parse(localStorage.getItem('user')) || [];
        const newRecords = all.map(r => (r.id === record.id ? obj : r));
        localStorage.setItem('user', JSON.stringify(newRecords))

        alert("Recipe edit sucessfully!");
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
                    <h3 className='text-center mb-4'>Edit Recipe</h3>
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
                        <button type="submit" className="btn  w-100 bodyColor bg-dark text-light">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Edit
