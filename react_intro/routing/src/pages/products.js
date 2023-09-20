import React from 'react';
import monster from '../Monster.webp';


const Products = () => {
    return (
        <>
            <h1 id="Kont">MONSTER ENERGY DRINK</h1>
            <p id="Kont">KJØP NÅ</p>
            <div className="cube">
                <div className="face front"><img className='monster' src={monster} alt="monster" />;</div>
                <div className="face back"><img className='monster' src={monster} alt="monster" />;</div>
                <div className="face right"><img className='monster' src={monster} alt="monster" />;</div>
                <div className="face left"><img className='monster' src={monster} alt="monster" />;</div>
                <div className="face top"><img className='monster' src={monster} alt="monster" />;</div>
                <div className="face bottom"><img className='monster' src={monster} alt="monster" />;</div>
            </div>
        </>
    );
}

export default Products;

