import React from 'react';
import './Main.module.css'
import MainHeader from "./MainHeader/MainHeader";
import MainFooter from "./MainFooter/MainFooter";

const Main = ({current,fiveDays,date,setDate,isLight}) => {

        return(
            <section>

<div className="container">
    <MainHeader isLight={isLight} current={current}/>
    <MainFooter isLight={isLight} date={date} setDate={setDate} fiveDays={fiveDays}/>

</div>
            </section>
        )

};

export default Main;