import React from "react";
import style from './Recipe.module.css';

function Recipe({ title, calories, image, ingredients }) {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <img className={style.image} src={image} alt="" />
            <ul key={title}> <b><u>INGREDIENTS:</u></b>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p className={style.calorie}><b><i>CALORIES:</i></b> {calories}</p>
        </div>
    );
}
export default Recipe;