import { useState } from "react";
import axios from "axios";
import { BASEURL } from "../../BaseURL/BaseURL";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./blogWrite.css";
import { toast } from "react-toastify";

const BlogWrite = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [cloudinary_id, setCloudinary_id] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = {
        title,
        description,
        author,
        category,
        cloudinary_id: cloudinary_id
      };
      const res = await axios.post(`${BASEURL}/api/v1/blog/create`, newData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      if (res) {
        toast.success("Blog Publish Successfully");
        setTimeout(() => {
          navigate("/blog");
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <>
      {/*======================================================== header =====================================*/}
      <div
        class="container-fluid  py-5 "
        style={{
          height: "500px",
          background: "#11253d",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Blog</h2>
          <h5 class=" mt-4 text-white text-center"></h5>
          <p class="lead text-white text-center"></p>
        </div>
      </div>
      <div className="container py-5">
        <div className="container my-5 py-5 ">
          <form className=" ">
            <div className="container  mb-5">
              <div className="row">
                <div className="col-md-8">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fw-bold">
                      Title
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      onChange={(e) => setTitle(e.target.value)}
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div class="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label fw-bold"
                    >
                      Description
                    </label>
                    <div
                      className="editorContainer"
                      id="exampleFormControlTextarea1"
                    >
                      <ReactQuill
                        className="editor"
                        theme="snow"
                        onChange={(value) => setDescription(value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="mb-3 mt-2">
                    <label for="formFile" class="form-label"></label>
                    <input
                      class="form-control"
                      type="file"
                      onChange={(e) => setCloudinary_id(e.target.files[0])}
                      id="formFile"
                    />
                  </div>

                  <div class="mb-3">
                    <label
                      for="exampleInputPassword1"
                      class="form-label fw-bold"
                    >
                      Author
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => setAuthor(e.target.value)}
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked={category === "trends"}
                      name="cat"
                      value="trends"
                      onChange={(e) => setCategory(e.target.value)}
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label fw-bold"
                      for="flexCheckDefault"
                    >
                      Trends
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked={category === "news"}
                      name="cat"
                      value="news"
                      onChange={(e) => setCategory(e.target.value)}
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label fw-bold"
                      for="flexCheckDefault"
                    >
                      News
                    </label>
                  </div>
                </div>

                <div className="col-md-5 mt-3">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogWrite;
