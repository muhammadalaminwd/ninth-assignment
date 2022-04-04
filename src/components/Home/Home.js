import React from 'react';
import './Home.css'
import books from '../../images/books.jpg'

const Home = () => {
    return (
        <div>
        <div className='home'>
        <div>
        <h1>Read Books <br />Gain Knowledge</h1>
        <h2>Books are our best friend. They give us Knowledge and ask for nothing in return. By reading books, improves our focus, memory, empathy and communications skills. All the successful person in the world like to read books. Reading also allows you to learn new things to help you succeed in your work and relationships.</h2>
        <button className='read-me'>Read Me</button>
        </div>
        <img src={books}></img>
    </div>
        </div>

        
    );
};

export default Home;