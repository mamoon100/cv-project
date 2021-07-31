import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
function Work(prop) {
  const [work, setWork] = useState([
    { title: "", company: "", address: "", start: "", end: "" },
  ]);
  let addWorkFields = () => {
    setWork([
      ...work,
      {
        title: "",
        company: "",
        address: "",
        start: "",
        end: "",
      },
    ]);
  };
  let removeWorkFields = (i) => {
    let newWork = [...work];
    newWork.splice(i, 1);
    setWork(newWork);
  };
  const handleInputChange = (e, index) => {
    const { id, value } = e.target;
    const list = [...work];
    list[index][id] = value;
    setWork(list);
    prop.setWork(work);
  };
  return (
    <Card bg="light" text="dark" className="mb-3">
      <Card.Header>Work Experience</Card.Header>
      <Card.Body>
        <Form id="work-form">
          {work.map((item, index) => (
            <>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="sales"
                    id="title"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Facebook"
                    id="company"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Amman, Jordan"
                    id="address"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="month"
                    id="start"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="month"
                    id="end"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Button
                  variant="danger"
                  className="mb-2 mt-2"
                  onClick={() => {
                    removeWorkFields(index);
                  }}
                >
                  Remove
                </Button>
              </Row>
            </>
          ))}
          <Row className="mb-3">
            <Button type="button" onClick={addWorkFields}>
              Add New Work
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Work;
