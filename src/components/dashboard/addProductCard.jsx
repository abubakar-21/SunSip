import { useState } from 'react';
import { addPhoto, add, close } from '../../../public/icons/icons.js';
import './popUpOverlay.css';
import Image from "next/image";

const AddProductCard = ({ onClose }) => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [wholeSale, setWholeSale] = useState('');
  const [discount, setDiscount] = useState('');
  const [price, setPrice] = useState('');

  const handleClose = () => {
    onClose();
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains('popup-overlay')) {
      onClose();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'productName':
        setProductName(value);
        break;
      case 'wholeSale':
        setWholeSale(value);
        break;
      case 'discount':
        setDiscount(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName.trim() || !wholeSale || !discount || !price) {
      return;
    }

    const product = {
      image,
      name: productName,
      wholeSale,
      discount,
      price
    };

    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    existingProducts.push(product);
    localStorage.setItem('products', JSON.stringify(existingProducts));

    setProductName('');
    setWholeSale('');
    setDiscount('');
    setPrice('');
    setImage(null);
  };

  return (
    <div className="popup-overlay" onClick={handleClickOutside}>
      <div className="popup-container">
        <div className="popup-header">
          <h2>Add Product</h2>
          <button onClick={handleClose}>
            <Image src={close} alt="Close" />
          </button>
        </div>
        <div className="popup-content">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="image-uploader-container flex flex-col items-center mb-6">
              <Image
                src={image || addPhoto}
                alt=""
                className="w-48 h-48 cursor-pointer"
                onClick={() => document.getElementById('fileInput').click()}
              />
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="hidden"
                name="Image"
                onChange={handleImageUpload}
              />
            </div>
            <div className="input-fields-container flex flex-col">
              <div className="input-row flex mb-4 items-center">
                <input
                  type="text"
                  name="productName"
                  value={productName}
                  onChange={handleInputChange}
                  className="border-b-2 border-gray-300 bg-transparent focus:outline-none w-48 mr-4"
                  placeholder="Product Name"
                />
                <input
                  type="number"
                  name="wholeSale"
                  value={wholeSale}
                  onChange={handleInputChange}
                  className="border-b-2 border-gray-300 bg-transparent focus:outline-none w-48 ml-4"
                  placeholder="WholeSale $"
                />
              </div>
              <div className="input-row flex mb-4 items-center">
                <input
                  type="number"
                  name="discount"
                  value={discount}
                  onChange={handleInputChange}
                  className="border-b-2 border-gray-300 bg-transparent focus:outline-none w-48 mr-4"
                  placeholder="Discount %"
                />
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={handleInputChange}
                  className="border-b-2 border-gray-300 bg-transparent focus:outline-none w-48 ml-4"
                  placeholder="Price $"
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

export default AddProductCard;
