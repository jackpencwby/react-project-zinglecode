import React from 'react'
import './Post.css'

function Post(props) {

    const { item, onCloseItemClick } = props;

    return (
        <div className='post'>
            <div className='post-background' onClick={onCloseItemClick}></div>
            <div className='post-content'>
                <img src={item.imgUrl} alt="" />
                <h2>{item.name}</h2>
            </div>
        </div>
    )
}

export default Post