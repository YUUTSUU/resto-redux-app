import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux'
import {menuDeleteCart} from '../../actions'


const CartTable = ({items, menuDeleteCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, url, price, id, quantity} = item
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt="Cesar salad"></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$ = {quantity}шт</div>
                                <div onClick={() => menuDeleteCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    menuDeleteCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)