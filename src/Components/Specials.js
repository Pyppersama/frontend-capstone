import React from 'react'
import {FOOD} from '../Food.js'

function Specials() {
  return (
        <div className='specials'>
           <div className='specials-head'>
                <h1>This Week's Specials</h1>
                <a href='#' className='primary-btn'>
                    Online Menu
                </a>
           </div>
           <div className='specials-body'>
                {FOOD.map((food) => {
                    return (
                        <div className='specials-item'>
                            <div className='item-head'>
                                <img src={food.foodImage}/>
                            </div>
                            <div className='item-body'>
                                <div className='item-title'>
                                    <h4>{food.name}</h4>
                                    <h5>${food.price}</h5>
                                </div>
                                <div className='item-description'>
                                    <p>{food.description}</p>
                                    <a href='#'>Order a Delivery</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
           </div>
        </div>
  )
}

export default Specials