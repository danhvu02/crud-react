import React from "react";
import './CategoryTableRow.css';

const CategoryTableRow = props => {
    return(
        <tr key={props.index}>
            <td>{ props.index + 1 }</td>
            <td>{ props.category.category_name }</td>
            <td><button onClick={ () => props.onEditCategory(props.category) }>Edit</button></td>
            <td><button onClick={ () => { if (window.confirm('Are you sure you want to delete this category?')) props.onDeleteCategory(props.category) } }>Delete</button></td>
        </tr>
    );
}
export default CategoryTableRow;

