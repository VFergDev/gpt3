import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <section className='gpt3__header section__padding' id='home'>
      <div className='pgt3__header-content'>
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Yet bed any for traveling Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore maxime provident dolorum esse magnam ut eius nam odit pariatur quam dolore libero, expedita est, accusantium veniam repudiandae sequi animi perspiciatis?</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Enter Your Email' />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
        </div>
        <p></p>
      </div>
    </section>
  )
}

export default Header
