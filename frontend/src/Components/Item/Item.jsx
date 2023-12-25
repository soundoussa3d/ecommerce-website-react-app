import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
export const Item = (props) => {
  return (
    //onclick {window.scrollTo(0,0)}
    //this will help us to whenever we click on a product .it will give us the page from the top not stay at the bottom of the page
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
            ${props.new_price}
            </div>
            <div className="item-price-old">
            ${props.old_price}
            </div>
        </div>
    </div>
  )
}
