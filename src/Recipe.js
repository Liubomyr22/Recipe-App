import React from 'react';
import s from './Recipe.module.css'

const Recipe = ({title ,img}) => {
    return(
        <div className={s.border}>
        <img src={img} alt="" />
         <h1>{title}</h1>
         <p>description</p>
        </div>
    )
}

export default Recipe;