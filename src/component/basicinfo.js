import { Card, Form, Row, Col } from "react-bootstrap";

function Basic(prop) {
  return (
    <Card bg="light" text="dark" className="mb-3">
      <Card.Header>Basic Info</Card.Header>
      <Card.Body>
        <Form id="basicInfo">
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Michel Star"
                id="fullName"
                onChange={(e) => {
                  prop.setBasic((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }));
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Software Developer"
                id="title"
                onChange={(e) => {
                  prop.setBasic((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }));
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@example.com"
                id="email"
                onChange={(e) => {
                  prop.setBasic((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }));
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                placeholder="+962789072104"
                id="phone"
                onChange={(e) => {
                  prop.setBasic((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }));
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Birth Day</Form.Label>
              <Form.Control
                type="date"
                id="date"
                onChange={(e) => {
                  prop.setBasic((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }));
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="Amman Jordan"
                id="address"
                onChange={(e) => {
                  prop.setBasic((prev) => ({
                    ...prev,
                    [e.target.id]: e.target.value,
                  }));
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Upload a picture</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  // @ts-ignore
                  prop.setPhoto(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </Form.Group>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Basic;
