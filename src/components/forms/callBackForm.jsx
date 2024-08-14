import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import { useNavigate } from "react-router-dom";

const CallBackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeNumber = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonDisabled(true);
      const newData = {
        name,
        email,
        subject,
        number,
        message
      };

      const response = await axios.post(
        `${BASEURL}/api/v1/email/contact`,
        newData,
        { headers: { "Content-Type": "application/json" } }
      );
      setLoading(true);
      setTimeout(() => {
        toast.success("Contact Form Sent!!!", { toastId: response.data });
      }, 3000);
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      toast.error(error.response.data, { toastId: error.response.data });
      setButtonDisabled(false);
    }
  };

  return (
    <>
      <button
        className="btn btn-primary cvb border border-light text-light mt-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal4"
      >
        <h6 className="mt-1">Click Here</h6>
      </button>
      {/* ================================================ body  ============================================== */}
      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title fs-4 fw-bold text-dark"
                id="exampleModalLabel"
              >
                Get in Touch with us
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-dark">
              <form>
                <div class="mb-2 mt-4">
                  <label for="name" class="form-label float-start fw-bold">
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    aria-describedby="nameHelp"
                  />
                  <label
                    for="exampleInputEmail1"
                    class="form-label float-start fw-bold  mt-2"
                  >
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                  <label for="what" class="form-label float-start fw-bold mt-2">
                    Subject<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control "
                    onChange={(e) => setSubject(e.target.value)}
                    id="what"
                    aria-describedby="whatHelp"
                  />

                  <label for="what" class="form-label float-start fw-bold mt-2">
                    Phone Number<span className="text-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    id="what"
                    value={number}
                    onChange={handleChangeNumber}
                  />

                  <div className="mt-3">
                    <h6 className="text-start fw-bold">
                      Message<span className="text-danger">*</span>
                    </h6>
                  </div>
                  <div className="mt-2">
                    <ReactQuill
                      theme="snow"
                      className=""
                      placeholder="Message"
                      style={{ height: "100px" }}
                      onChange={(value) => setMessage(value)}
                    />
                  </div>
                  <div
                    id="emailHelp"
                    style={{ color: "transparent" }}
                    class="form-text mt-2"
                  >
                    We'll never share your email with anyone else.
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                disabled={buttonDisabled}
                onClick={handleSubmit}
                class="btn btn-danger onliyu"
              >
                {loading ? "Submitting.." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallBackForm;
