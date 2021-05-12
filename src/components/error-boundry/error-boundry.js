import React, {Component} from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        const {error} = this.state
        const {children} = this.props

        if(error) {
            return <Error/>
        }
        
        return children
    }
}