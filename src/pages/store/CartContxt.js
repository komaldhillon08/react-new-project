    import { createContext, useReducer } from "react";

    // Create context
    export const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    });

    // Reducer
    function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
        );

        let updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
        // If item already in cart, increase qty
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
        } else {
        // If not, add new one
        updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === "REMOVE_ITEM") {
        const updatedItems = state.items.filter((item) => item.id !== action.id);
        return { ...state, items: updatedItems };
    }

    return state;
    }

   /*  // Provider
    export default function CartContextProvider({ children }) {
    const [cart, dispatchAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchAction({ type: "addItem", item });
    }

    function removeItem(id) {
        dispatchAction({ type: "removeItem", id });
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}  ✅
        </CartContext.Provider>
    );
    }
 */
export default function CartContextProvider({ children }) {
  const [cart, dispatchAction] = useReducer(cartReducer, { items: [] });

  const cartContext = {
    items: cart.items,
    addItem: (item) => dispatchAction({ type: "ADD_ITEM", item }),
    removeItem: (id) => dispatchAction({ type: "REMOVE_ITEM", id }),
  };

 /*  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  ); */
}
