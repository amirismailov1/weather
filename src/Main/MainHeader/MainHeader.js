import React from 'react';
import styles from './MainHeader.module.css'
import Therm from '../../assets/icons/thermometer.svg'
import Humidity from '../../assets/icons/humidity.svg'
import Evaporator from '../../assets/icons/evaporator.svg'
import Wind from '../../assets/icons/wind.svg'

const MainHeader = ({current,isLight}) => {
    const addZero = (num) => {
        if (num < 10) return `0${num}`;
        else return num
    };

    const cityTime = () => {
        let d = new Date(),
            utc = d.getTime() + (d.getTimezoneOffset() * 60000),
            nd = new Date(utc + (1000 * current.timezone)),
            hours = addZero(nd.getHours()),
            minutes = addZero(nd.getMinutes());
        return `${hours} : ${minutes}`
    };


    return (
        <div className={styles.MainHeader}>

            <div  className={`${styles.left} ${isLight?styles.light:''}`}>
                <div className={styles.leftTop}>
                    <div className={styles.leftTopLeft}>
                        <p className={styles.deg}>{(current.main.temp - 273.15).toFixed()}°</p>
                        <p className={styles.today}>Today</p>

                    </div>
                    <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`} alt=""/>

                </div>
                <p className={styles.infoText}>Time : {cityTime()}        </p>
                <p className={styles.infoText}>City : {current.name}</p>
            </div>
            <div  className={`${styles.right} ${isLight?styles.light:''}`}>

                <ul className={styles.col}>
                    <li className={styles.row}>
                        <div className={styles.icon}><img src={Therm} alt="Temp"/></div>
                        <p className={styles.text}>Temperature</p>
                        <p className={styles.descr}>{(current.main.temp - 273.15).toFixed()}° - feels like {(current.main.feels_like - 273.15).toFixed()}°</p>
                    </li>
                    <li className={styles.row}>
                       <div className={styles.icon}> <img src={Humidity} alt="Humidity"/></div>
                        <p className={styles.text}>Pressure</p>
                        <p className={styles.descr}>{current.main.pressure} mmHg - normal</p></li>
                    <li className={styles.row}>
                        <div className={styles.icon}><img src={Evaporator} alt="Evaporator"/></div>
                        <p className={styles.text}>Precipitation</p>
                        <p className={styles.descr}>{current.weather[0].description}</p>
                    </li>
                    <li className={styles.row}>
                       <div className={styles.icon}> <img src={Wind} alt="Wind"/></div>
                        <p className={styles.text}>Wind</p>
                        <p className={styles.descr}>{(current.wind.speed)} m/s  </p>
                    </li>
                </ul>

                </div>
            </div>

    );
};

export default MainHeader;