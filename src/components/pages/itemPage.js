import React, {Component} from 'react';
import {connect} from 'react-redux'
import WithRestoService from '../hoc'
import Spinner from '../spinner'
import {menuLoaded, menuRequested, menuError, menuAddCart} from '../../actions'
import './itemPage.css'

class ItemPage extends Component {

  componentDidMount() {
    const {RestoService, menuLoaded, menuRequested, menuError, menu} = this.props

    if(menu.length === 0) {
      menuRequested()
    }

    RestoService.getMenuItems()
      .then(res => menuLoaded(res))
      .catch(() => menuError())
  }

  render() {
    const {loading, menu, menuAddCart, match} = this.props

    if(loading) {
      return <div className="spinner"><Spinner/></div>
    }

    const menuItem = menu.find(item => +item.id === +match.params.id)
    const{title, url, category, price, id} = menuItem;

    return (
        <div className = "item_page">
            <div className="menu__item item_block">
                  <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={() => menuAddCart(id)} className="menu__btn">Add to cart</button>
                <span className = {`menu__category_Img ${category}`}></span> 
            </div>
        </div>
    )
  }
}

const mapStateToProps = ({menu, loading, error}) => {
  return {
      menu,
      loading,
      error,
  }
}

const mapDispatchToProps = {
  menuLoaded,
  menuRequested,
  menuError,
  menuAddCart
}

export default WithRestoService(connect(mapStateToProps, mapDispatchToProps)(ItemPage))