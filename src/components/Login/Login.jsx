import React, { useState } from "react";
import axios from "axios";
import "../Login/login.css";
import { GroupAdd, School } from "@mui/icons-material";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/studentLanding");
          } else if (res.data === "not exist") {
            alert("user have not logged in");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <div className="login-buttons" style={{ zIndex: "0" }}>
        <div className="loginheading">
          <span className="heading">Sign In As</span>
        </div>
        <div className="loginbuttons">
          <div className="LoginButton col-md-12 text-center">
            <Button
              variant="outline-primary"
              size="lg"
              className="loginbuttonadmin"
            >
              <GroupAdd className="loginIcon" sx={{ fontSize: "35px" }} />
              Admin
            </Button>{" "}
            <Button
              variant="outline-secondary"
              size="lg"
              className="loginbuttonstudent"
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              <School className="loginIcon" sx={{ fontSize: "35px" }} />
              Student
            </Button>
          </div>
        </div>
      </div>

      <Modal
        className="shadow bd-example-modal-sm modellogin"
        id="example-modal-sizes-title-sm"
        tabindex="-1"
        role="dialog"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{ zIndex: "1" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content text-center">
            <div className="modal-footer">
              <button
                type="button"
                onClick={() => setModalIsOpen(false)}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h5 className="modal-title model-heading col-md-12">
                Login as a student
              </h5>
            </div>
            <div className="modal-body">
              <Form action="POST">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Full Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted emailtext">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4 mt-3" controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Link to="/StudentLanding">
                  <Button variant="primary" type="submit" onClick={submit}>
                    Sign in
                  </Button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
