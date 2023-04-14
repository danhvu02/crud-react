import React, {useState, useEffect} from 'react';
import axios from "axios";

import ItemTable from '../TableComponents/Table/ItemTable/ItemTable';
import AddItemForm from '../FormComponents/AddForm/AddItemForm/AddItemForm';
import EditItemForm from '../FormComponents/EditForm/EditItemForm/EditItemForm';

const Items = props => {
    const [items, setItems] = useState([]);
    const [editing, setEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
  
    //useEffect that fires when the component renders
    useEffect( ( )=>{ 
    let itemsUrl = "http://127.0.0.1:3001/items";

    axios.get(itemsUrl)
    .then(res => {
      setItems(res.data.items);
    })
    .catch(error => {
      console.log(error);
    });    
    }, [ ]);//empty array like ready
    
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
        let url = `http://127.0.0.1:3001/items/${item.item_id}`;  
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
        let url = `http://127.0.0.1:3001/items/${item.item_id}`;  
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
        <div>
            { editing ? (
                <EditItemForm onEditItem={ _updateItem } item={ selectedItem } />
            ) : (
                <AddItemForm onAddItem={ _addItem } />
            ) }
            <ItemTable items={ items } onEditItem={ _editItem } onDeleteItem={ _deleteItem } />
        </div>
    );
}

export default Items;