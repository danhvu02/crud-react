import React from "react";
import ItemTableRow from "../../TableRow/ItemTableRow/ItemTableRow";
import './ItemTable.css';

const ItemTable = props => {

    const _editItem = item => {
        console.log("Table _editItem triggered");
        props.onEditItem(item);
    }

    const _deleteItem = item => {
        console.log("Table _deleteItem triggered");
        props.onDeleteItem(item);
    }

    return(
        <div className="Table">
            <table style={{ marginTop:'16px' }} border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sku</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map(
                            (item, index) => (
                                <ItemTableRow index={ index } item={ item } key={ index } onEditItem={ _editItem } onDeleteItem={ _deleteItem } />
                            )
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}
export default ItemTable;