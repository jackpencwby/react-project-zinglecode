import React from 'react'
import './Item.css'

function Item(props) {

    const { item, onOpenItemClick } = props;

    return (
        <div className='app-item'>
            <img src={item.imgUrl} alt="" onClick={() => onOpenItemClick(item)} />
            <h2>{item.name}</h2>
        </div>
    )
}

export default Item