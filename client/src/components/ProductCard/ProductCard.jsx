import './ProductCard.css'
import React from 'react'

import { Link } from 'react-router-dom'


export const ProductCard = (data) => {
  return (
    <div className="product__card">
      <span className="product__price">{data.price} $</span>
<div className="cardImages">

      <img src={data.image} alt="" className="product__image" />
</div>

      <div className="size">
        <h1 className="product__title">{data.title}</h1>
      </div>
      <Link className='buy__btn btn1'>
        <i className="fas fa-shopping-cart"></i>
      </Link>
      <Link to={`/shop/${'data.type'}/${'data._id'}/details`}
        className='details__btn btn1'>
        <i className="fas fa-info-circle"></i>
      </Link>
    </div>
  )
}
