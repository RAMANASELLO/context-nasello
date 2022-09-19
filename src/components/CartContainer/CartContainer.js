import React, {useContext} from 'react';
import { CartContext } from '../CartContext/CartContext';

export const CartContainer = () => {
    const {productCartList, removeItem, clear, isInCart} = useContext(CartContext)

    return (
        <div>
            CartContainer
            <div>
                {productCartList.map(item=>(
                    <>
                    {console.log("hola", item)}
                        <p>{item.name} - {item.quantity} - {item.price}</p>
                        <button onClick={()=>removeItem(item.id)}>eliminar producto</button>
                    </>
                    
                ))}
                <button onClick={clear}>Vaciar el carrito</button>
                {/* <button onClick={isInCart}>validacion</button> */}
            </div>
        </div>
    )
}