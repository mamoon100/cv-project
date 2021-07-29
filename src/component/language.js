import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
function Language(prop) {
  const [language, setLanguage] = useState([{ language: "", prof: "" }]);
  let addLanguageFields = () => {
    setLanguage([
      ...language,
      {
        language: "",
        prof: "",
      },
    ]);
  };
  let removeLanguageFields = (i) => {
    let newEdu = [...language];
    newEdu.splice(i, 1);
    setLanguage(newEdu);
  };
  const handleInputChange = (e, index) => {
    const { id, value } = e.target;
    const list = [...language];
    list[index][id] = value;
    setLanguage(list);
    prop.setLanguage(list);
  };
  return (
    <Card bg="light" text="dark" className="mb-3">
      <Card.Header>Languages</Card.Header>
      <Card.Body>
        <Form id="language">
          {language.map((item, index) => (
            <>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Arabic"
                    id="language"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Professionality</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Work Professional"
                    id="prof"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Button
                  variant="danger"
                  className="mb-2 mt-2"
                  onClick={() => {
                    removeLanguageFields(index);
                  }}
                >
                  Remove
                </Button>
              </Row>
            </>
          ))}
          <Row className="mb-3">
            <Button type="button" onClick={addLanguageFields}>
              Add New Education
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Language;
