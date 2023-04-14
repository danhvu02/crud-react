import React, {useState, useEffect} from 'react';
import axios from "axios";

import CategoryTable from '../TableComponents/Table/CategoryTable/CategoryTable';
import AddCategoryForm from '../FormComponents/AddForm/AddCategoryForm/AddCategoryForm';
import EditCategoryForm from '../FormComponents/EditForm/EditCategoryForm/EditCategoryForm';

const Categories = props => {
    const [categories , setCategories] = useState([]);
    const [editing, setEditing] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({});

    //useEffect that fires when the component renders
    useEffect( ( )=>{ 
    let categoriesUrl = "http://127.0.0.1:3001/categories";
  
    axios.get(categoriesUrl)
      .then( res => {
        console.log(res.data.categories);
        setCategories(res.data.categories);
      })
      .catch(error => {
        console.log(error);
      });
    }, [ ]);//empty array like ready
  
    //Category crud functions
    //add category function to pass into AddForm
    const _addCategory = category => {
      //send category to server via axios
      //update categories with response
      console.log("App _addCategory triggered");
  
      let url = "http://127.0.0.1:3001/categories";  
      axios.post(url, {
              category: category
           })
           .then( res => {
              console.log(res.data.categories);
              setCategories(res.data.categories);
           })
           .catch(error => {
              console.log(error);
           });
    }
  
    //edit category function to pass into EditForm
    const _editCategory = category => {
      //set selectedCategory to category that we will be editing
      setSelectedCategory(category);
      setEditing(true);
      
      //setEditing to true
      console.log("App _editCategory triggered");
    }
  
    const _updateCategory = category => {
     
      //send category to server via axios
      let url = `http://127.0.0.1:3001/categories/${category.category_id}`;  
      axios.patch(url, {
              category: category
           })
           .then( res => {
              console.log(res.data.categories);
              setCategories(res.data.categories);
           })
           .catch(error => {
              console.log(error);
           });
  
      //update categories with response
      setEditing(false);
      console.log("App _updateCategory triggered");
    }
  
    const _deleteCategory = category => {
      //send category to server via axios to delete
      let url = `http://127.0.0.1:3001/categories/${category.category_id}`;  
      axios.delete(url, {
              category: category
           })
           .then( res => {
              console.log(res.data.categories);
              setCategories(res.data.categories);
           })
           .catch(error => {
              console.log(error);
           });
  
      //update categories with response
      console.log("App _deleteCategory triggered");
    }
  
    return (
        <div>
            { editing ? (
                <EditCategoryForm onEditCategory={ _updateCategory } category={ selectedCategory } />
            ) : (
                <AddCategoryForm onAddCategory={ _addCategory } />
            ) }
            <CategoryTable categories={ categories } onEditCategory={ _editCategory } onDeleteCategory={ _deleteCategory } />
         
        </div>
    );
}     
export default Categories;