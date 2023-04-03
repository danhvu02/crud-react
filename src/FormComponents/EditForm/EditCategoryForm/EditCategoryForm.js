import React, {useEffect, useState} from "react";
import './EditCategoryForm.css';
import Button from "../../Button/Button";

const EditCategoryForm = props => {
    const [category_id , setCategoryId ] = useState('');
    const [category_name, setCategoryName] = useState('');
    const [category, setCategory] = useState({});

    useEffect(()=>{
        setCategoryId(props.category.category_id);
        setCategoryName(props.category.category_name);      
    }, [props]);

    const _detectCategoryNameTextChanged = (key, value) => {
        setCategoryName(value);
        console.log("_detectCategoryNameTextChanged event fired");
    }

    useEffect( () => {
        setCategory({'category_id':category_id, 'category_name':category_name});
        console.log("setCategory Changed");
    }, [category_id, category_name]);

    const _edit = () => {
        console.log("EditCategoryForm _edit triggered");
        props.onEditCategory(category);
        _clear();
    }

    const _clear = () => {
        setCategory({});
        setCategoryId(''); 
        setCategoryName('');
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _edit } title="Save Category" />
            <br />
            <label>Category name:</label>
            <input type="text" placeholder="Category name" value={ category_name } 
              onChange={ e => _detectCategoryNameTextChanged('category_name', e.target.value) } />
            </div>
    );
}
export default EditCategoryForm;