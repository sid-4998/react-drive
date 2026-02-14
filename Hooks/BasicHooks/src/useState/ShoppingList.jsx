import { useState } from "react";

export default function ShoppingList() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleItemChange = (event) => {
        setItem(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!item || !quantity) return;

        setList([...list, {
            item,
            quantity: parseInt(quantity)
        }])
        setItem('');
        setQuantity('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    type="text" 
                    name="item" 
                    placeholder="Enter the item" 
                    value={item}
                    onChange={handleItemChange}/>
                </div>
                <div>
                    <input 
                    type="number" 
                    name="quantity" 
                    placeholder="Enter the quantity" 
                    value={quantity}
                    onChange={handleQuantityChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>

            <ul>
                {list.map((data, index) => (
                    <li key={index}>{data.item}{' - '}{data.quantity}</li>
                ))}
            </ul>
        </>
    )
}