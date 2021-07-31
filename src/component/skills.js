import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
function Skills(prop) {
  const [skill, setSkill] = useState([{ skill: "" }]);
  let addSkillFields = () => {
    setSkill([
      ...skill,
      {
        skill: "",
      },
    ]);
  };
  let removeSkillFields = (i) => {
    let newEdu = [...skill];
    newEdu.splice(i, 1);
    setSkill(newEdu);
  };
  const handleInputChange = (e, index) => {
    const { id, value } = e.target;
    const list = [...skill];
    list[index][id] = value;
    setSkill(list);
    prop.setSkills(skill);
  };
  return (
    <Card bg="light" text="dark" className="mb-3">
      <Card.Header>skills</Card.Header>
      <Card.Body>
        <Form id="skill">
          {skill.map((item, index) => (
            <>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Skill</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Work Under Pressure "
                    id="skill"
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
              Add New Skill
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Skills;
