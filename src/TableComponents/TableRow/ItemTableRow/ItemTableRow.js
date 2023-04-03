import React from "react";
import './ItemTableRow.css';

const ItemTableRow = props => {
    return(
        <tr key={props.index}>
            <td>{ props.index + 1 }</td>
            <td>{ props.item.category_id }</td>
            <td>{ props.item.title }</td>
            <td>{ props.item.description }</td>
            <td>{ props.item.price }</td>
            <td>{ props.item.quantity }</td>
            <td>{ props.item.sku }</td>
            <td><button onClick={ () => props.onEditItem(props.item) }>Edit</button></td>
            <td><button onClick={ () => { if (window.confirm('Are you sure you want to delete this item?')) props.onDeleteItem(props.item) } }>Delete</button></td>
        </tr>
    );
}
export default ItemTableRow;