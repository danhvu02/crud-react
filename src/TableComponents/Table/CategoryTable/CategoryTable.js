import React from "react";
import CategoryTableRow from "../../TableRow/CategoryTableRow/CategoryTableRow";
import './CategoryTable.css';

const CategoryTable = props => {

    const _editCategory = category => {
        console.log("Table _editCategory triggered");
        props.onEditCategory(category);
    }

    const _deleteCategory = category => {
        console.log("Table _deleteCategory triggered");
        props.onDeleteCategory(category);
    }

    return(
        <div className="Table">
            <table style={{ marginTop:'16px' }} border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.categories.map(
                            (category, index) => (
                                <CategoryTableRow index={ index } category={ category } key={ index } onEditCategory={ _editCategory } onDeleteCategory={ _deleteCategory } />
                            )
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}
export default CategoryTable;