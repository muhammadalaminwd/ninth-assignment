import React from 'react';
import useHooks from '../../Hooks/useHooks';
import './Reviews.css'

const Reviews = () => {
    const [data, setData] = useHooks();
    // console.log(data[0].name)
    return (
        <div>
            <h1>What our customers say!</h1>
            {
                data.map(item => <div>
                    <h2>{item.name}</h2>
                    <img className='book-name' src={item.picture} alt="" />
                    <h2>{item.comment}</h2>
                    <h2 className='ratings'>Ratings: {item.ratings}</h2>
                    </div>)
            }
        </div>
    );
};

export default Reviews;