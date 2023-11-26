import React, { useState, useRef } from "react";
import "../css/Addproducts.css";
import selectImage from "../images/select-image.jpg";

function Addproducts() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDiscription] = useState("");
  const [colors, setColors] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [imageSrcList, setImageSrcList] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const imageList = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        imageList.push(e.target.result);
        if (imageList.length === selectedFiles.length) {
          setImageSrcList(imageList);
        }
      };

      fileReader.readAsDataURL(selectedFiles[i]);
    }
  };
  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  const addProduct = () => {
    if (
      name === "" ||
      category === "" ||
      description === "" ||
      colors === "" ||
      type === "" ||
      price === "" ||
      count === ""
    ) {
      alert("Please fill the form");
    } else {
      uploadData();
    }
  };

  function uploadData() {
    fetch("https://ecomerce-api-8lpr.onrender.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        category,
        description,
        colors,
        type,
        price,
        count,
        imageSrcList,
      }),
    }).then((responce) => {
      responce
        .json()
        .then(() => {
          alert(`Product ${name} Added successfully.`);
          setName("");
          setCategory("");
          setDiscription("");
          setType("");
          setColors("");
          setPrice("");
          setCount("");
          setImageSrcList([]);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  const box = document.querySelector(".image-container");
  const nextButton = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  const prevButton = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  return (
    <div className="add-products-wrapper">
      <h1>Add Products</h1>
      <div className="send-child-div">
        <div className="add-product-inner">
          <div className="product-images-wrapper">
            <div className="image-container">
              {imageSrcList.length === 0 ? (
                <img
                  className="product-images"
                  src={selectImage}
                  alt="no image found"
                />
              ) : (
                imageSrcList.map((src, index) => (
                  <img key={index} src={src} alt={selectImage} />
                ))
              )}
            </div>
            {imageSrcList.length > 1 ? (
              <div>
                <button className="left-btn" onClick={prevButton}>
                  &lt;
                </button>
                <button className="right-btn" onClick={nextButton}>
                  &gt;
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            className="select-product-images-btn"
            onClick={handleChooseFileClick}
          >
            Select Images
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            multiple // Enable multiple file selection
          />
        </div>
        <div className="product-details-div">
          <input
            className="product-inputs"
            type="text"
            placeholder="product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="product-inputs"
            type="text"
            placeholder="product category (male/female)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="product-inputs"
            type="text"
            placeholder="product description"
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
          />
          <input
            className="product-inputs"
            type="text"
            placeholder="product colors"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
          />
          <input
            className="product-inputs"
            type="text"
            placeholder="product type i.e (summer/winter)"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <input
            className="product-inputs"
            type="text"
            placeholder="product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="product-inputs"
            type="text"
            placeholder="available items"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="add-new-product-btn" onClick={addProduct}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addproducts;
