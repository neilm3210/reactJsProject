import React, { Component } from "react";
import "./empdetails.css";

const Person = ({img, name, job, children}) => {
    return(
        <article className="person">
            <img src={img} alt="person" height="150" width="150"/>
            <h3>{name}</h3>
            <h3>{job}</h3>
            {children}
        </article>
    );
};
const PersonList = () => {
    return(
        <pre>
            <section className="person-list">
                <Person img="https://cdn.pixabay.com/photos/2016/09/24/03/20/passion-1690965_340.jpg" name="john" job="developer"/>
                <Person img="https://cdn.pixabay.com/photos/2018/04/27/03/50/portrait-3353699_340.jpg" name="bob" job="designer">
                    <p>Hello All</p>
                    </Person>
                    <Person img="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_340.jpg" name="david" job="the boss"/>
                </section>
            </pre>
    )
}
export default PersonList;