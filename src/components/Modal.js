import { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/button";
import { Modal } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import "../assets/css/upload.css";
function BGModal() {
  const [show, setShow] = useState(false);
  const handleClose = async () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="btn-container" onClick={handleShow}>
        <form className="container">
          <Button className="image-upload">
            <FaPen style={{ color: "white" }} /> &nbsp; customise background
          </Button>
        </form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customize background</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="upload-container">
            <div className="uploadArea">
              <div className="option">
                <form action="#">
                  <div className="input-file-container">
                    <input
                      className="input-file"
                      id="my-file"
                      type="file"
                      onChange={handleClose}
                    />
                    <label className="input-file-trigger">Upload Image..</label>
                  </div>
                  <p className="file-return"></p>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" /*  onClick={handleFireBaseUpload} */>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default BGModal;
