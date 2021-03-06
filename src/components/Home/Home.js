import React, { useState } from "react";
import "./Home.css";
import books from "../../images/books.jpg";
import useHooks from "../../Hooks/useHooks";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useHooks([]);
  const navigate = useNavigate();

  const showReviews = () => {
    navigate("/reviews");
  };
  return (
    <div>
      <div className="home">
        <div>
          <h1>
            Read Books <br />
            Gain Knowledge
          </h1>
          <h2>
            Books are our best friend. They give us Knowledge and ask for
            nothing in return. By reading books, improves our focus, memory,
            empathy and communications skills. All the successful person in the
            world like to read books. Reading also allows you to learn new
            things to help you succeed in your work and relationships.
          </h2>
          <button className="read-me">Read Me</button>
        </div>
        <img src={books}></img>
      </div>
      <div className="reviewsBooks">
        {data.slice(0, 3).map((item) => (
          <div>
            <h2>{item.name}</h2>
            <img className="book-name" src={item.picture} alt="" />
            <h2>{item.comment}</h2>
            <h2 className="ratings">Ratings: {item.ratings}</h2>
          </div>
        ))}
      </div>
      <button onClick={showReviews} className="reviews">
        See All Reviews
      </button>
    </div>
  );
};

export default Home;
