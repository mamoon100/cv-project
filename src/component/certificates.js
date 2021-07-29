import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function Certificates(prop) {
  const [certificate, setCertificate] = useState([
    { certificate: "", certificateStart: "", certificateEnd: "" },
  ]);
  let addSkillFields = () => {
    setCertificate([
      ...certificate,
      {
        certificate: "",
        certificateStart: "",
        certificateEnd: "",
      },
    ]);
  };
  let removeSkillFields = (i) => {
    let newEdu = [...certificate];
    newEdu.splice(i, 1);
    setCertificate(newEdu);
  };
  const handleInputChange = (e, index) => {
    const { id, value } = e.target;
    const list = [...certificate];
    list[index][id] = value;
    setCertificate(list);
    prop.setCertificate(list);
  };
  return (
    <Card bg="light" text="dark" className="mb-3">
      <Card.Header>Certificates</Card.Header>
      <Card.Body>
        <Form id="certificates">
          {certificate.map((item, index) => (
            <>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Certificate Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Work Ethic"
                    id="certificate"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Start</Form.Label>
                  <Form.Control
                    type="month"
                    id="certificateStart"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>End</Form.Label>
                  <Form.Control
                    type="month"
                    id="certificateEnd"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Button
                  variant="danger"
                  className="mb-2 mt-2"
                  onClick={() => {
                    removeSkillFields(index);
                  }}
                >
                  Remove
                </Button>
              </Row>
            </>
          ))}
          <Row className="mb-3">
            <Button type="button" onClick={addSkillFields}>
              Add New Education
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Certificates;
