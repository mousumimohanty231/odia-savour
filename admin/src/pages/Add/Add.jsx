import React, { useState, useRef } from 'react';
import './Add.css';
import uploadIcon from '../../assets/upload_area.png';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const url = "http://localhost:4000";
  const imageInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    description: '',
    category: '',
    price: ''
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        toast.success("Item added successfully!");

        // Reset form
        setData({
          name: '',
          description: '',
          category: '',
          price: ''
        });
        setImage(null);
        if (imageInputRef.current) {
          imageInputRef.current.value = '';
        }
      } else {
        toast.error("Failed to add item.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product. Check console.");
    }
  };

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
            ref={imageInputRef}
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          />
        </div>

        <div className="add-category-price">
          <div className="add-product-price flex-col">
            <p>Product category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              value={data.category}
              required
            >
              <option value="" disabled>Select</option>
              <option value="Main course">Main course</option>
              <option value="Non-veg">Non-veg</option>
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
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              required
            />
          </div>
        </div>

        <button type="submit" className="add-btn" style={{ marginTop: '20px' }}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
