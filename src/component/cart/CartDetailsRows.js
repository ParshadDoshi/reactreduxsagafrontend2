import React from "react";
export default function CartDetailsRows({ cart, cartPrice, userId }) {
    return (
        <React.Fragment>
            {cart.map(item =>
                <tr key={item.id}>
                    <td>
                        <input type="number" value={item.quantity}
                            onChange={() => { }} />
                    </td>
                    <td>{item.productName}</td>

                    <td>${item.total.toFixed(2)}</td>
                    <td>
                        <button className="btn btn-sm btn-danger"
                            onClick={() => { }}>
                            Remove
</button>
                    </td>
                </tr>
            )}
            <tr>
                <th colSpan="3" className="text-right">Total:</th>
                <th colSpan="2">${cartPrice.toFixed(2)}</th>
            </tr>
        </React.Fragment>
    )
}