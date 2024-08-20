import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { BASEURL } from "../../../BaseURL/BaseURL";
import "./computer.css";
import { toast } from "react-toastify";

const ComputerWrite = () => {
  const getInitialState = () => {
    const value = "Computer";
    return value;
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [odd, setOdd] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState(getInitialState);
  const [series, setSeries] = useState("");
  const [model, setModel] = useState("");
  const [weight, setWeight] = useState("");
  const [dimension, setdimension] = useState("");
  const [item, setItem] = useState("");
  const [color, setColor] = useState("");
  const [hardware, setHardware] = useState("");
  const [os, setOs] = useState("");
  const [processor, setProcessor] = useState("");
  const [number, setNumber] = useState("");
  const [memory, setMemory] = useState("");
  const [ram, setRam] = useState("");
  const [drive, setDrive] = useState("");
  const [display, setDisplay] = useState("");
  const [resolution, setResolution] = useState("");
  const [graphics, setGraphics] = useState("");
  const [voltage, setVoltage] = useState("");
  const [battery, setBattery] = useState("");
  const [wireless, setWireless] = useState("");
  const [images, setImages] = useState([]);

  // Handle Price
  const handleChangePrice = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPrice(value);
  };

  // Handle Odd
  const handleChangeOdd = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOdd(value);
  };
  // Handle Quantity
  const handleChangeQuantity = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setQuantity(value);
  };

  //handle images
  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages((oldArray) => [...oldArray, reader.result]);
      };
    });
  };

  const navigate = useNavigate();
  //submit the form
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newData = {
        name,
        description,
        price,
        brand,
        odd,
        quantity,
        category,
        series,
        model,
        weight,
        dimension,
        item,
        color,
        hardware,
        os,
        processor,
        number,
        memory,
        ram,
        drive,
        display,
        resolution,
        graphics,
        voltage,
        battery,
        wireless,
        images
      };

      await axios.post(
        `http://localhost:6100/api/v1/product/create`,
        newData
      );
      setImages([]);
      toast.success("Product Added Successfully");
      navigate("/shop");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <>
      <div
        class="container-fluid bg-dark py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 "></div>
      </div>

      <div className="container my-5 py-5" style={{ marginTop: "5rem" }}>
        <h4 className="text-center pt-4 fw-bold pb-4">
          Computer Product Upload
        </h4>
        <div className="row">
          <div class="mb-3 col-md-6">
            <label for="exampleInputEmail1" class="form-label fw-bold">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Gadget Name"
              onChange={(e) => setName(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="exampleInputEmail1" class="form-label fw-bold">
              Brand
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Brand Name"
              onChange={(e) => setBrand(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div className="row">
          <div class="mt-2 col-md-4">
            <label for="price" className="fw-bold">
              Price
            </label>
            <input
              type="text"
              id="price"
              class="form-control"
              name="price"
              value={price}
              onChange={handleChangePrice}
              placeholder="Enter price"
            ></input>
          </div>
          <div class="mb-3 col-md-4">
            <label for="formFile" class="form-label fw-bold">
              File
            </label>
            <input
              onChange={handleImage}
              type="file"
              id="formupload"
              name="image"
              className="form-control"
              multiple
            />
          </div>
          <div class="mb-3 col-md-4">
            <label for="exampleInputEmail1" class="form-label fw-bold">
              Categories
            </label>
            <select
              class="form-select "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="inputGroupSelect01"
            >
              <option className="mt-4" value="Computer">
                Computer
              </option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mt-2 mb-3">
            <label for="price" className="fw-bold">
              Discount
            </label>
            <input
              type="text"
              id="price"
              class="form-control"
              value={odd}
              onChange={handleChangeOdd}
              name="price"
              placeholder="Enter price"
            ></input>
          </div>
          <div class=" col-md-6 mb-3 ">
            <label for="exampleInputEmail1" class="form-label fw-bold">
              Quantity
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Quantity"
              value={quantity}
              onChange={handleChangeQuantity}
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        {/* =======================================================================  Table ====================================================  */}
        <table class="table table-bordered" style={{ width: "100%" }}>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" style={{ width: "40%" }}>
                Series
              </th>
              <td style={{ width: "60%" }}>
                {" "}
                <input
                  type="text"
                  onChange={(e) => setSeries(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Item model number</th>
              <td colspan="2">
                <input
                  type="text"
                  onChange={(e) => setModel(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Item Weight</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setWeight(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Product Dimensions</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setdimension(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Item Dimensions LxWxH</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setItem(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Color</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setColor(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Hardware Platform</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setHardware(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Operating System</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setOs(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Processor Brand</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setProcessor(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Number of Processors</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setNumber(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Computer Memory Type</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setMemory(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">RAM</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setRam(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Hard Drive</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setDrive(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Screen display size</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setDisplay(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Screen Resolution</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setResolution(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Graphics Comprocessor</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setGraphics(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Voltage</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setVoltage(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Batteries</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setBattery(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Wireless Type</th>
              <td>
                <input
                  type="text"
                  onChange={(e) => setWireless(e.target.value)}
                  class="form-control form-controli border-0"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/*  */}
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <div className="editorContainer" id="exampleFormControlTextarea1">
            <ReactQuill
              className="editor"
              theme="snow"
              onChange={(value) => setDescription(value)}
            />
          </div>
        </div>
        <div className="col-md-5 mt-3">
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default ComputerWrite;
