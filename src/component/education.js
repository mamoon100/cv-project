import { Button } from "react-bootstrap";
import { Row, Form, Col, Card } from "react-bootstrap";
import { useState } from "react";

function Education(prop) {
  const [edu, setEdu] = useState([
    {
      major: "",
      school: "",
      degree: "",
      startStudy: "",
      graduation: "",
      gpa: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { id, value } = e.target;
    const list = [...edu];
    list[index][id] = value;
    setEdu(list);
    prop.setEdu(edu);
  };

  let addEduFields = () => {
    setEdu([
      ...edu,
      {
        major: "",
        school: "",
        degree: "",
        startStudy: "",
        graduation: "",
        gpa: "",
      },
    ]);
  };
  let removeEduFields = (i) => {
    let newEdu = [...edu];
    newEdu.splice(i, 1);
    setEdu(newEdu);
  };
  return (
    <Card bg="light" text="dark" className="mb-3">
      <Card.Header>Education</Card.Header>
      <Card.Body>
        <Form id="educationInfo">
          {edu.map((element, index) => (
            <>
              <Row className="mb-3" key={index}>
                <Form.Group as={Col}>
                  <Form.Label>Degree</Form.Label>
                  <Form.Control
                    placeholder="Bachelor"
                    id="degree"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Major</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Physics"
                    id="major"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>School</Form.Label>
                  <Form.Control
                    placeholder="Stanford"
                    id="school"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Start Year</Form.Label>
                  <Form.Control
                    type="month"
                    placeholder="2016"
                    id="startStudy"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Graduation Year</Form.Label>
                  <Form.Control
                    type="month"
                    placeholder="2020"
                    id="graduation"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>GPA</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="3.3"
                    max="4.0"
                    min="0.0"
                    id="gpa"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Button
                  variant="danger"
                  className="mb-2 mt-2"
                  onClick={() => {
                    removeEduFields(index);
                  }}
                >
                  Remove
                </Button>
              </Row>
            </>
          ))}
          <Row className="mb-3">
            <Button type="button" onClick={addEduFields}>
              Add New Education
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Education;
