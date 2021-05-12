import React from 'react';
import './menu-list-item.scss';
import {withRouter} from 'react-router-dom'

const MenuListItem = ({menu, onAddCart, history}) => {
    const {title, price, url, category, id} = menu
    return (
        <>
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={() => onAddCart()} className="menu__btn">Add to cart</button>
                <button onClick={() => history.push(`/menu/${id}`)} 
                        className="menu__btn menu__btn_detail">More details</button>
            </li>
        </>
    )
}

export default withRouter(MenuListItem)