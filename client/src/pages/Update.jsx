import Axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
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
      const res = await Axios.put(
        "http://localhost:8000/api/v1/property/" + id,
        {
          title: property.title,
          description: property.description,
          image: property.image,
          contact: property.contact,
        }
      );
      if (res.status === 200) {
        alert("Property Updated Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="add-property-form" onSubmit={postData}>
      <h2 style={{ textAlign: "center" }}>Update Property</h2>
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
      <button type="submit">Update Property</button>
    </form>
  );
}

export default Update;
