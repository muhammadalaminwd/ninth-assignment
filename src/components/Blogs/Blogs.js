import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
        <h1 className='question'>Q1: What is contexApi?</h1>
        <h3 className='answer'>Ans: The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc. So, The React Context API is a way for a React app to effectively produce global variables that can be passed around.<br></br>
        To start with the Context API, the first thing we need to do is create a context using the createContext function from React. After you wrap all the components that are going to need access to the context with the Provider component, you need to tell which component is going to consume that data.
        The Provider component is going to be used to wrap the components that are going to have access to our context. React Hooks allow us to manage state data inside functional components; now we don't need to create class components just to manage state data. The useContext is way better and cleaner than the Consumer component—we can easily understand what's going on and increase the maintainability of our application.
        </h3>
        <h1 className='question'>Q2: What is Semantic tag?</h1>
        <h3 className='answer'> Ans: Semantic means relating to meaning in a topic. In HTML semantics refers to the tags that provide meaning to an HTML page. It makes HTML more comprehensible by better defining the different sections and layout of web pages. The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. For example, header, nav, section, article, aside, footer, all these tags are semantic. Some explanation given below:<br></br>
        article: The article element specifies independent, self-contained content.<br></br>
        nav: The nav element defines a set of navigation links.<br></br>
        section: It represents the section of the document.<br></br>
        main: This specifies the main page content and should be unique.
        header: The header element represents a container for introductory content or a set of navigational links.<br></br>
        footer: The footer element defines a footer for a document or section.
        </h3>
        </div>
    );
};

export default Blogs;