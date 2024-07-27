import React, { useState } from "react";
import Axios from "axios";

function AddProperty() {
  const [property, setProperty] = useState({
    title: "",
    description: "",
    image: "",
    contact: "",
  });
  const handleProperty = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProperty({ ...property, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://localhost:8000/api/v1/property", {
        title: property.title,
        description: property.description,
        image: property.image,
        contact: property.contact,
      });
      if (res.status === 200) {
        alert("Property Add Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="add-property-form">
        <h2 style={{ textAlign: "center" }}>Add Property</h2>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={property.title}
            onChange={handleProperty}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={property.description}
            onChange={handleProperty}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={property.image}
            onChange={handleProperty}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="number"
            name="contact"
            value={property.contact}
            onChange={handleProperty}
            required
          />
        </div>
        <button type="submit" onClick={postData}>
          Add Property
        </button>
      </form>
    </>
  );
}

export default AddProperty;
