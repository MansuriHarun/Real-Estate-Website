import React, { useState, useEffect } from "react";
import Axios from "axios";
import { MdDelete } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

function DisplayProperty() {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("http://localhost:8000/api/v1/property", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Fetching Data: ", res.data);
        if (res.status === 200) {
          setProperty(res.data.property);
        } else {
          console.log("Data is not available");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteProperty = async (id) => {
    try {
      await Axios.delete(`http://localhost:8000/api/v1/property/${id}`);
      alert("Property deleted successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="title">All Property</h1>
      <div className="card-grid">
        {property.map((properties, index) => (
          <div key={index} className="card">
            <Link to={`/update/${properties._id}`}><HiOutlinePencilSquare
              className="update-icon"
            /></Link>
            <MdDelete
              className="delete-icon"
              onClick={() => deleteProperty(properties._id)}
            />
            <img
              src={properties.image}
              alt={properties.title}
              className="card-image"
            />
            <h2 className="card-title">{properties.title}</h2>
            <p className="card-description">{properties.description}</p>
            <button className="card-button">
              <a href={`tel:${properties.contact}`} className="card-link">
                {properties.contact}
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProperty;
