import React, {useEffect, useState} from "react";
import axios from "axios";
import './EditItemForm.css';
import Button from "../../Button/Button";

const EditItemForm = props => {
    const [category_id, setCategoryId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSku] = useState('');
    const [item, setItem] = useState({});

    const [selectedCategory, setSelectedCategory] = useState({});
    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        setTitle(props.item.title);
        setDescription(props.item.description);
        setPrice(props.item.price);
        setQuantity(props.item.quantity);
        setSku(props.item.sku);
        setCategoryId(props.item.category_id);      
    }, [props]);

    const _detectTitleTextChanged = (key, value) => {
        setTitle(value);
        console.log("_detectTitleTextChanged event fired");
    }

    const _detectDescriptionTextChanged = (key, value) => {
        setDescription(value);
        console.log("_detectDescriptionTextChanged event fired");
    }

    const _detectPriceTextChanged = (key, value) => {
        setPrice(value);
        console.log("_detectPriceTextChanged event fired");
    }

    const _detectQuantityTextChanged = (key, value) => {
        setQuantity(value);
        console.log("_detectQuantityTextChanged event fired");
    }

    const _detectSkuTextChanged = (key, value) => {
        setSku(value);
        console.log("_detectSkuTextChanged event fired");
    }

    const _detectCategoryTextChanged = (key, value) => {
        setSelectedCategory(value);
        setCategoryId(value)
      };

      
    useEffect(() => {
        setItem({
            'title': title,
            'description': description,
            'price': price,
            'quantity': quantity,
            'sku': sku,
            'category_id': category_id
        });
        console.log("setItem Changed");
    }, [title, description, price, quantity, sku, category_id]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/categories')
          .then(res => {
            setCategories(res.data.categories);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    const _edit = () => {
        console.log("EditItemForm _edit triggered");
        props.onEditItem(item);
        _clear();
    }

    const _clear = () => {
        setItem({});
        setTitle('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setSku('');
        setCategoryId('');
        setSelectedCategory('');
        console.log("_clear event fired");
    }
    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _edit } title="Save Item" />
            <br />
            <label>Title:</label>
            <input type="text" placeholder="Title" value={title} 
              onChange={e => _detectTitleTextChanged('title', e.target.value)} />
            <br />
            <label>Category:</label>
            <select value={selectedCategory} onChange={e => _detectCategoryTextChanged('Category', e.target.value)}>
                <option value="">Select category</option>
                {categories.map(category => (
                    <option key={category.category_id} value={category.category_name}>{category.category_name}</option>
                ))}
            </select>
            <br/>
            <label>Description:</label>
            <input type="text" placeholder="Description" value={description} 
              onChange={e => _detectDescriptionTextChanged('description', e.target.value)} />
            <br />
            <label>Price:</label>
            <input type="text" placeholder="Price" value={price} 
              onChange={e => _detectPriceTextChanged('price', e.target.value)} />
            <br />
            <label>Quantity:</label>
            <input type="text" placeholder="Quantity" value={quantity} 
              onChange={e => _detectQuantityTextChanged('quantity', e.target.value)} />
            <br />
            <label>Sku:</label>
            <input type="text" placeholder="Sku" value={sku} 
              onChange={e => _detectSkuTextChanged('sku', e.target.value)} />
        </div>
    );
}
export default EditItemForm;