import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import fetchHomeRight from "../../store/actions/homeRightAction";
import updateHome from "../../store/actions/updateHomeRight";
export default function homeright() {

  console.log("running the home right")
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.homeRight);
  const initialState = {
    heading: "",
    box: [
      {
        heading: "",
        description: "",
      },
    ],
  };
  const [formData, setFormData] = useState(initialState);
  // const fetchData = async () => {
  //   dispatch(await fetchHomeRight());
  // };
  // useState(fetchData, []);
  console.log(state)
  // add more boxes function
  const addMore = () => {
    const newFormData = _.cloneDeep(formData);
    newFormData.box.push(initialState["box"][0]);
    setFormData(newFormData);
  };
  // on Change function
  const onChange = (e, i) => {
    const newState = _.cloneDeep(formData);
    const key = e.target.name;

    if (i === -1) {
      newState[key] = e.target.value;
    } else {
      newState.box[i][key] = e.target.value;
    }
    setFormData(newState);

  };
  // on Update form
  const onUpdate = async () => {
    dispatch(await updateHome(formData));
  };
  // setting the state when ther eis a change in the store state
  useEffect(() => {
    setFormData(state);
  }, [state]);
  useEffect(() => {
    console.log(formData, "form data");
  }, [formData]);

  return (
    <>
      <Container
        className="mx-3"
        style={{
          background: "white",
          widht: "60%",
          border: "3px solid gray",
          borderRadius: "8px",
        }}
      >
        <h2 className="my-3 mx-2  text-dark"> Home Right</h2>
        <p className="text-danger px-2">
          Befor submiting any form checks that you filled every filled{" "}
        </p>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="heading">
            <Form.Label>Heading</Form.Label>
            <Form.Control
              type="text"
              value={formData.heading}
              placeholder="welcome"
              onChange={(e) => onChange(e, -1)}
              name="heading"
            />
          </Form.Group>
          {formData?.box?.map((e, index) => (
            <Container
              className="p-3 shadow-lg m-2 mr-3"
              style={{ border: "2px solid gray", borderRadius: "5px" }}
            >
              <h5> Box id {index + 1}</h5>
              <Form.Group className="mr-3" controlId={index + 1}>
                <Form.Label>Heading </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    return onChange(e, index);
                  }}
                  value={e.heading}
                  type="text"
                  name="heading"
                  placeholder="welcome"
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Enter your text here"
                  rows={2}
                  value={e.description}
                  onChange={(e) => {
                    return onChange(e, index);
                  }}
                />
              </Form.Group>
            </Container>
          ))}
        </Form>
        <div className="d-flex justify-content-between">
          <div>
            <Button className="mb-2" variant="secondary" onClick={addMore}>
              Add More Box
            </Button>
            <Button
              className="mb-2 mx-3"
              variant="secondary"
              onClick={() => {
                setFormData({ ...formData, ...initialState });
              }}
            >
              Clear
            </Button>
          </div>
          <Button className="mb-2" variant="primary" onClick={onUpdate}>
            Update
          </Button>
        </div>
      </Container>
    </>
  );
}
