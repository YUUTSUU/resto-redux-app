import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux'
import {menuLoaded, menuRequested, menuError, menuAddCart} from '../../actions'
import WithRestoService from '../hoc'
import Spinner from '../spinner'
import Error from '../error'

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        const {RestoService, menuLoaded, menuRequested, menuError} = this.props

        menuRequested()
        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(() => menuError())
    }

    render() {
        const {menu, loading, error, menuAddCart} = this.props

        if(error) {
            return <Error/>
        }

        if(loading) {
            return <Spinner/>
        }

        const menuItems = menu.map(item => {
            return <MenuListItem key={item.id} menu={item} onAddCart={() => menuAddCart(item.id)}/>
        })

        return (
            <View items={menuItems}/>
        )
    }
};

const View = ({items}) => {
    return (
        <ul className="menu__list">
            {items}
        </ul>
    )
}

const mapStateToProps = ({menu, loading, error}) => {
    return {
        menu,
        loading,
        error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    menuAddCart
}

export default WithRestoService(connect(mapStateToProps, mapDispatchToProps)(MenuList))