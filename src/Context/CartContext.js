import React, { Component, createContext} from 'react'

export const CartContext=createContext();
export default class CartContextProvider extends Component {
    state={
        item:0,
        price:0
    }
    render() {
        return (
            <CartContext.Provider value={{...this.state}}>{this.props.children}</CartContext.Provider>
        )
    }
}
