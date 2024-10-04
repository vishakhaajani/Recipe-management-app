import React, { useEffect, useState } from 'react';
import { IoIosAddCircle } from "react-icons/io"; // Add btn
import { Link } from 'react-router-dom';
import img1 from '../img/img1.jpeg';
import img3 from '../img/img3.jpeg';
import img4 from '../img/img4.jpeg';
import img5 from '../img/img5.jpeg';
import img6 from '../img/img6.jpeg';


const Home = () => {
    const defaultRecipes = [
        {
            id: Math.floor(Math.random() * 10000),
            img: img1,
            title: 'Spaghetti Bolognese',
            ingredients: 'onions, carrots, celery, tomatoes, and milk',
            instruction: '1. Finely chop the onions, carrots, and celery. 2. In a large pan, heat oil and sauté the chopped vegetables until soft. 3. Add minced meat and cook until browned. 4. Stir in chopped tomatoes and milk; simmer for 20 minutes. 5. Serve over cooked spaghetti.',
            cookingTime: '20 mins',
            isDefault: true,
        },
        {
            id: Math.floor(Math.random() * 10000),
            img: img3,
            title: 'Pasta',
            ingredients: 'wheat flour and water or eggs',
            instruction: '1. Mix flour and eggs (or water) in a bowl until a dough forms. 2. Knead the dough for 5-10 minutes until smooth. 3. Roll out the dough thinly and cut into desired shapes. 4. Cook in boiling salted water for 8-10 minutes.',
            cookingTime: '8-10 mins',
            isDefault: true,
        },
        {
            id: Math.floor(Math.random() * 10000),
            img: img4,
            title: 'Biryani',
            ingredients: 'rice, meat (chicken, goat, lamb, beef, prawn, or fish), and spices',
            instruction: '1. Marinate meat with yogurt and spices for at least 30 minutes. 2. Cook rice until it is 70% done. 3. In a large pot, layer marinated meat, partially cooked rice, and fried onions. 4. Cover and cook on low heat for about 45 minutes until fully cooked.',
            cookingTime: '45 mins',
            isDefault: true,
        },
        {
            id: Math.floor(Math.random() * 10000),
            img: img5,
            title: 'Pancake',
            ingredients: 'flour, baking powder, sugar, salt, milk, eggs, and butter',
            instruction: '1. In a bowl, mix flour, baking powder, sugar, and salt. 2. In another bowl, whisk milk, eggs, and melted butter. 3. Combine both mixtures until smooth. 4. Pour batter onto a hot, greased skillet and cook until bubbles form; flip and cook until golden brown.',
            cookingTime: 'about 10 mins',
            isDefault: true,
        },
        {
            id: Math.floor(Math.random() * 10000),
            img: img6,
            title: 'Dosa',
            ingredients: 'rice, urad dal (split lentils), and fenugreek seeds',
            instruction: '1. Soak rice, urad dal, and fenugreek seeds overnight. 2. Grind to a smooth batter and let it ferment for 8 hours. 3. Heat a skillet and pour a ladleful of batter, spreading it thinly. 4. Cook until crisp; serve with chutney and sambar.',
            cookingTime: '2–45 minutes',
            isDefault: true, 
        },
        {
            id: Math.floor(Math.random() * 10000),
            img: img6,
            title: 'Burger',
            ingredients: 'The main ingredients are Burger Buns, Cheese, Egg',
            instruction: '1.Prepare the Ingredients 2.Make the Burger Patties 3.Preheat the Grill or Pan 4.Cook the Patties 5.Toast the Buns 6.Assemble the Burgers 7.Serve.',
            cookingTime: '10-15 minutes',
            isDefault: true, 
        },
    ];



    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user')) || [];
        if (data.length === 0) {
            localStorage.setItem('user', JSON.stringify(defaultRecipes));
            setRecipes(defaultRecipes);
        } else {
            setRecipes(data);
        }
    }, []);

    const getData = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredRecord = recipes.filter(val => val.title.toLowerCase().includes(searchValue));
        setRecipes(filteredRecord);
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between mt-2'>
                        <h1 className='text-light'>Recipe Management App</h1>
                        <Link to={'/new'}><IoIosAddCircle className="add-icon" /></Link>
                    </div>

                    <div className='search-bar d-flex justify-content-center my-5'>
                        <input
                            placeholder='Search recipe...'
                            type='text'
                            className='w-25 py-2 px-3 rounded-pill search-input'
                            onInput={getData}
                        />
                    </div>

                    {/* All recipes cards */}
                    {
                        recipes.length > 0 ? recipes.map((val) => (
                            <div className='col-lg-4 col-md-6 col-sm-12 mt-3' key={val.id}>
                                <div className='card recipe-card'>
                                    <div className='d-flex  align-items-center'>
                                        <div className='col-md-6'>
                                            <img src={val.img} className='card-img' alt={val.title} style={{width: "200px", height: "200px", objectFit: "cover"}} />
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='card-body'>
                                                <h5 className='card-title text-capitalize'>{val.title}</h5>
                                                <Link to={`/detail/${val.id}`}>
                                                    <button className='view-button'>View Recipe</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <p className='text-light text-center'>No recipes found!</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
