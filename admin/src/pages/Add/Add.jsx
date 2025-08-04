import React, { useState } from 'react';
import './Add.css';
import uploadIcon from '../../assets/upload_area.png'; // ✅ Direct image import
import axios from "axios"

const Add = () => {
    const url= "http://locahost:4000";
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: '',
        description: '',
        category: '',
        price: ''
    });
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]: value}));
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', Number(data.price));
        formData.append('category', data.category);
        formData.append('image', image);
        const response = await axios.post(`${url}/api/food/add`, formData)
        if (response.data.success){
            setData({
                name: '',
                description: '',
                category: '',
                price: ''
            })
            setImage(false);
        }
        else {
            console.error('Failed to add the product.');
        }
        
    }
    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                {/* Upload Image */}
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img
                            src={image ? URL.createObjectURL(image) : uploadIcon}
                            alt=""
                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                        />
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        id='image'
                        hidden
                        required
                    />
                </div>

                
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
                </div>

                {/* Product Description */}
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required />
                </div>

                {/* Category and Price */}
                <div className="add-category-price">
                    <div className="add-product-price flex-col">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure veg">Pure veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>

                    <div className="add-product-price flex-col">
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' />
                    </div>
                </div>

                {/* Submit Button */}
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    );
};

export default Add;
