import React from 'react';
import { Route } from 'react-router-dom';
import "./About.css";

const About = () => {
    return(
        <Route>
            <div className="about" id="about" >
            <h3>About me</h3>
            <ul className="about">
                <li>Name: 原田佳奈</li>
                <li>Gender: 女</li>
                <li>Date of birth: 1998/05/07</li>
                <li>Birth Place: 鳥取県</li>
                <li>Blood type: B型</li>
                <li>Tel: 080-8244-4329</li>
                <li>Mail: kana.harada@force-corp.co.jp</li>
            </ul>
            <p className="coment">亜細亜大学経営学部経営学科卒業後フォース株式会社に入社。 
                社会人1年目の23歳。</p>
            </div>
        </Route>
);
}

export default About;