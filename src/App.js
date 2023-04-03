import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from "axios";

const App = props => {
  const [categories , setCategories] = useState([]);
  const [items , setItems] = useState([]);
  const [editing, setEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedItem, setSelectedItem] = useState({});

  //useEffect that fires when the component renders
  useEffect( ( )=>{ 
  let categoriesUrl = "http://127.0.0.1:3001/categories";
  let itemsUrl = "http://127.0.0.1:3001/items";

  axios.get(categoriesUrl)
    .then( res => {
      console.log(res.data.categories);
      setCategories(res.data.categories);
    })
    .catch(error => {
      console.log(error);
    });

  axios.get(itemsUrl)
  .then(res => {
    setItems(res.data.items);
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
    let url = `http://127.0.0.1:3001/categories/${category.id}`;  
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
    let url = `http://127.0.0.1:3001/categories/${category.id}`;  
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

  //Item crud functions
  //add item function to pass into AddForm
  const _addItem = item => {
    //send item to server via axios
    //update items with response
    console.log("App _addItem triggered");

    let url = "http://127.0.0.1:3001/items";  
    axios.post(url, {
            item: item
         })
         .then( res => {
            console.log(res.data.items);
            setItems(res.data.items);
         })
         .catch(error => {
            console.log(error);
         });
  }

  //edit item function to pass into EditForm
  const _editItem = item => {
    //set selectedItem to item that we will be editing
    setSelectedItem(item);
    setEditing(true);
    //setEditing to true
    console.log("App _editItem triggered");
  }

  const _updateItem = item => {
    //send item to server via axios
    let url = `http://127.0.0.1:3001/items/${item.id}`;  
    axios.patch(url, {
            item: item
         })
         .then( res => {
            console.log(res.data.items);
            setItems(res.data.items);
         })
         .catch(error => {
            console.log(error);
         });

    //update items with response
    setEditing(false);
    console.log("App _updateItem triggered");
  }

  const _deleteItem = item => {
    //send item to server via axios to delete
    let url = `http://127.0.0.1:3001/items/${item.id}`;  
    axios.delete(url, {
            item: item
         })
         .then( res => {
            console.log(res.data.items);
            setItems(res.data.items);
         })
         .catch(error => {
            console.log(error);
         });

    //update items with response
    console.log("App _deleteItem triggered");
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
