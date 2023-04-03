import React, {useEffect, useState} from "react";
import './AddItemForm.css';
import Button from "../../Button/Button";

const AddItemForm = props => {
    const [category_id, setCategoryId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSky] = useState('');
    const [item, setItem] = useState({});
    
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

    useEffect(() => {
        setItem({
          'category_id': category_id,
          'title': title,
          'description': description,
          'price': price,
          'quantity': quantity,
          'sku': sku
        });
        console.log("setItem Changed");
    }, [category_id, title, description, price, quantity, sku]);
    
    const _add = () => {
    console.log("AddItemForm _add triggered");
    props.onAddItem(item);
    _clear();
    }

    const _clear = () => {
    setItem({});
    setCategoryId('');
    setTitle('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setSku('');
    console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={_add} title="Add Item"/>
            <br/>
            <label>Category:</label>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="">Select category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.category_name}>{category.category_name}</option>
                ))}
            </select>
            <br/>
            <label>Title:</label>
            <input type="text" placeholder="Title" value={title}
                    onChange={e => _detectTitleTextChanged('title', e.target.value)}/>
            <br/>
            <label>Description:</label>
            <input type="text" placeholder="Description" value={description}
                    onChange={e => _detectDescriptionTextChanged('description', e.target.value)}/>
            <br/>
            <label>Price:</label>
            <input type="text" placeholder="Price" value={price}
                    onChange={e => _detectPriceTextChanged('price', e.target.value)}/>
            <br/>
            <label>Quantity:</label>
            <input type="text" placeholder="Quantity" value={quantity}
                    onChange={e => _detectQuantityTextChanged('quantity', e.target.value)}/>
            <br/>
            <label>Sku:</label>
            <input type="text" placeholder="Sku" value={sku}
                    onChange={e => _detectSkuTextChanged('sku', e.target.value)}/>
        </div>
    );
}
export default AddItemForm;