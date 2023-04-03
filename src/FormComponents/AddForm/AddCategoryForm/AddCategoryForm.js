import React, {useEffect, useState} from "react";
import './AddCategoryForm.css';
import Button from "../../Button/Button";

const AddCategoryForm = props => {
    const [category_name, setCategoryName] = useState('');
    const [category, setCategory] = useState({});

    const _detectCategoryNameTextChanged = (key, value) => {
        setCategoryName(value);
        console.log("_detectCategoryNameTextChanged event fired");
    }

    useEffect( () => {
        setCategory({'category_name':category_name});
        console.log("setCategory Changed");
    }, [category_name]);

    const _add = () => {
        console.log("AddCategoryForm _add triggered");
        props.onAddCategory(category);
        _clear();
    }

    const _clear = () => {
        setCategory({});
        setCategory('');
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _add } title="Add Category" />
            <br />
            <label>Category name:</label>
            <input type="text" placeholder="Category name" value={ category_name } 
              onChange={ e => _detectCategoryNameTextChanged('category_name', e.target.value) } />
            </div>
    );
}
export default AddCategoryForm;