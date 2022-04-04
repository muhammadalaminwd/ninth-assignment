import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
        <h1 className='question-one'>Q1: What is contexApi?</h1>
        <h3>Ans: Context API is a way for a react to effectively produce global variables that can be passed around. this is the alternative to prop drilling from grandperent to child , child to child and child to perent .Context is also touted as an easier,lighter approach to state management using Redux. The context API can be used to share data multiple components whith out pass data manually. some cases use context api example: theming,userl language , authentication, etc.</h3>


        <h1 className='question-one'>Q2. Difference between inline vs inline-block?</h1>
        <h3> Ans:
        </h3>
        </div>
    );
};

export default Blogs;