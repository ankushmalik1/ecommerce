export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) }
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                ),
            };
        default:
            return state;
    }
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload }
        default:
            return state
    }
}

export const checkoutReducer = (state, action) => {
    switch (action.type) {
        case "SAVE_SHIPPING_ADDRESS":
            return {
                ...state,
                shippingAddress: action.payload,
            };
        case "SAVE_PAYMENT_INFO":
            return {
                ...state,
                paymentInfo: action.payload,
            };
        default:
            return state;
    }
};
