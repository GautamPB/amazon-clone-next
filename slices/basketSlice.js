import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        //actions exist here
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            )
            let newBasket = [...state.items]

            if (index >= 0) {
                //the item exists in the basket
                newBasket.splice(index, 1)
            } else {
                //the item does not exist
                console.warn(
                    `Cannot remove product with prodcuct id ${action.payload.id}`
                )
            }

            state.items = newBasket
        },
    },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectItems = (state) => state.basket.items

export default basketSlice.reducer
