import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AddProduct.css";
import { useNavigate, Link } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();


  const [departments, setDepartments] = useState(false);
  const [error, setError] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const data = {
    product: [
      {
        name: title,
        image: image,
        brand: brand,
        category: category,
        department: department,
        description: description,
        price: price,
        countInStock: stock,
        rating: rating,
        numReviews: review,
      },
    ],
  };

  const add_product = () => {
    const url = "/api/products/add";
    axios
      .post(url, data)
      .then(navigate("/admin/products"))
      .catch(function (error) {
        console.log(error);
      });
  };

  const department_list = async () => {
    try {
      const url = "/api/departments";
      const { data } = await axios.post(url);
      setDepartments(data);
    } catch (error) {
      
      setError(error.message);
    }
  };

  useEffect(() => {
    department_list();
  }, []);

  return (
    <div>
      <section className="adminAddProductSection">
        <div className="AddProductContainer">
          <div className="adminPanelOverviewTitleDiv">
            <p className="adminPanelOverviewTitle">Add Products</p>
          </div>
          <div className="adminPanelOverviewSubTitleDiv addProductSubTitle">
            <p className="adminPanelOverviewSubTitleText">
              <Link to="/admin" style={{ textDecoration: "none" }}>
                <span className="adminPanelOverviewSubDashboardTitle">
                  Dashboard
                </span>
              </Link>
              {">"}

              <Link to="/admin/products" style={{ textDecoration: "none" }}>
                <span className="adminPanelOverviewSubAmazonDashboardTitle">
                  Products
                </span>
              </Link>
              {">"}
              <span className="adminPanelOverviewSubAmazonDashboardTitle">
                Add Products
              </span>
            </p>
          </div>
          <hr />
          <div className="addProductInputContainer">
            <form onSubmit={(e) => {
                    add_product(data);
                  }}>
              <p className="addNewAddressText">Add a new product</p>
              <div className="addProductFormLeft">
                <label htmlFor="" className="addProductInputLabel">
                  Product
                </label>
                <br />
                <input required
                  type="text"
                  className="inputSpace"
                  placeholder="Product title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Price
                </label>
                <br />
                <input required
                  type="number"
                  className="inputSpace"
                  placeholder="Price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                    setRating(Math.floor(Math.random() * (10 - 0 + 1)) + 0);
                    setReview(Math.floor(Math.random() * (1000 - 0 + 1)) + 0);
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Category
                </label>
                <br />
                <input required
                  type="text"
                  className="inputSpace"
                  placeholder="Category"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Brand
                </label>
                <br />
                <input required
                  type="text"
                  className="inputSpace"
                  placeholder="Brand"
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
                <br />
                <br />
                  {departments && (
                    <>
                    <label htmlFor="" className="addProductInputLabel">
                  Department
                </label>
                <br />
                      <select required className="inputSpace" onChange={(e) => { setDepartment(e.target.value);
                        console.log(e.target.value);
                      }}>
                        <option value="">Select Department</option>
                        {departments.map((department) => (
                          <option key={department._id} value={department.name}>
                            {department.name}
                          </option>
                        ))}
                      </select>

                <br />
                    </>
                  )}
              </div>
              <div className="addProductFormRight">
                <label htmlFor="" className="addProductInputLabel">
                  Description
                </label>
                <br />
                <textarea
                  type="text"
                  className="inputSpaceDescription"
                  placeholder="Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Stock
                </label>
                <br />
                <input required
                  type="number"
                  className="inputSpace"
                  placeholder="Stock"
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
                <br />
                <br />

                <label htmlFor="" className="addProductInputLabel">
                  Image
                </label>
                <img
                  src={image}
                  style={{ height: "8.5rem", width: "auto", marginLeft: "1rem" }}
                  alt=""
                />
                <br />
                <input required
                  type="text"
                  className="inputSpace"
                  placeholder="Image url"
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
                <br />
                <br />
                <button type="submit"
                  className="btn btn-warning btn-addProduct"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddProduct;
