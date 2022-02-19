import React from 'react';
import axios from "axios";
import styles from "../Header/Header.module.css";

const Form = ({setCurrent, setFiveDays, setDate,isLight}) => {
    const getWeatherUseCityName = (e)=>{
        e.preventDefault();

        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=e31457d78de91afd9f8257cd647fc931`)
            .then(({data})=> setCurrent(data))
            .catch(()=>alert('Увы такого города нет, попробуйте заново!'));
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${e.target[0].value}&appid=e31457d78de91afd9f8257cd647fc931`)
            .then(({data})=> {
                setFiveDays(data.list);
                setDate(data.list[0].dt_txt.slice(0, 10))
            });
        e.target[0].value = ''
    };

    return (
        <div>
            <form className={styles.form} onSubmit={getWeatherUseCityName}>
                <input placeholder='Write city...' className={`${styles.input} ${isLight?styles.light:''}`} type="search" required/>
                <button className={`${styles.button} ${isLight ? styles.light : ''}`} type='submit'>Search</button>
            </form>
        </div>
    );
};

export default Form;