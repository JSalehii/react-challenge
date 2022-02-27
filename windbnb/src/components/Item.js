import React from 'react';
import ItemInfo from './ItemInfo';

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.img} className="item__img" />
        <ItemInfo detail={props.detail} star={props.star} type={props.type} />
        <p className="item__des">{props.des}</p>
    </div>
  )
}

export default Item;