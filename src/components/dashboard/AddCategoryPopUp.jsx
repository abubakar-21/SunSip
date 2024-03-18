import { useState } from 'react';
import { add, close, bigCategory } from '../../../public/icons/icons.js';
import './popUpOverlay.css';
import axios from 'axios';
import Image from "next/image";

const AddCategory = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState(null);

  const handleClose = () => {
    onClose();
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains('popup-overlay')) {
      onClose();
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCategoryName(value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryName.trim() || !image) {
        return;
    }

    const formData = new FormData();
    formData.append('categoryName', categoryName);
    formData.append('imageFile', image);

    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]); // pair[0] is the key, pair[1] is the value
    }

    axios.post('http://localhost:3000/api/categories', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => {
        if (response.status === 201) {
            console.log('Category added successfully');
            onClose();
        } else {
            throw new Error('Failed to add category');
        }
    })
    .catch(error => {
        console.error('Error adding category:', error);
    });
};


  return (
    <div className="popup-overlay" onClick={handleClickOutside}>
      <div className="popup-container category">
        <div className="popup-header">
          <h2>Add Category</h2>
          <button onClick={handleClose}>
            <Image src={close} alt="Close" />
          </button>
        </div>
        <div className="popup-content">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-6">
              <Image
                src={image ? URL.createObjectURL(image) : bigCategory}
                alt=""
                className="w-48 h-48 cursor-pointer"
                onClick={() => document.getElementById('fileInput').click()}
              />
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="hidden"
                name="img"
                onChange={handleImageUpload}
              />
            </div>
            <div className="input-fields-container flex flex-col">
              <div className="input-row flex mb-4 items-center">
                <input
                  type="text"
                  name="productName"
                  value={categoryName}
                  onChange={handleInputChange}
                  className="border-b-2 border-gray-300 bg-transparent focus:outline-none w-48 mr-4"
                  placeholder="Category Name"
                />
              </div>
            </div>
            <button type="submit" className="popup-submit-button">
              <Image src={add} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
