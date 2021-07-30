import { Card, Image, Button, Row, Col } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
/*photo // name and title*/
/*basic // edu*/
/*skill // work*/
/*language // certificate*/
function CV(prop) {
  function getInfo(target, name) {
    let x = "";
    if (target) {
      // @ts-ignore
      x = target.map((e, i) => {
        return e[name];
      });
    }
    return x;
  }
  const componentRef = useRef();
  /**  <Card bg="light" text="dark">
      {prop.photo ? (
        <Image
          src={prop.photo}
          alt="profile"
          width="200px"
          height="200px"
          roundedCircle
        />
      ) : null}
      <p>{prop.basic.fullName}</p>
      <p>{prop.basic.title}</p>
      <p>{prop.basic.email}</p>
      <p>{prop.basic.phone}</p>
      <p>{prop.basic.address}</p>
      <p>{prop.basic.date}</p>
      {getInfo(prop.edu, "major") &&
        // @ts-ignore
        getInfo(prop.edu, "major").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.edu, "major") &&
        // @ts-ignore
        getInfo(prop.edu, "school").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.edu, "major") &&
        // @ts-ignore
        getInfo(prop.edu, "degree").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.edu, "major") &&
        // @ts-ignore
        getInfo(prop.edu, "startStudy").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.edu, "major") &&
        // @ts-ignore
        getInfo(prop.edu, "graduation").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.edu, "major") &&
        // @ts-ignore
        getInfo(prop.edu, "gpa").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.work, "title") &&
        // @ts-ignore
        getInfo(prop.work, "title").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.work, "company") &&
        // @ts-ignore
        getInfo(prop.work, "company").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.work, "address") &&
        // @ts-ignore
        getInfo(prop.work, "address").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.work, "start") &&
        // @ts-ignore
        getInfo(prop.work, "start").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.work, "end") &&
        // @ts-ignore
        getInfo(prop.work, "end").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.skills, "skill") &&
        // @ts-ignore
        getInfo(prop.skills, "skill").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.language, "language") &&
        // @ts-ignore
        getInfo(prop.language, "language").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.language, "prof") &&
        // @ts-ignore
        getInfo(prop.language, "prof").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}

      {getInfo(prop.certificate, "certificate") &&
        // @ts-ignore
        getInfo(prop.certificate, "certificate").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.certificate, "certificateStart") &&
        // @ts-ignore
        getInfo(prop.certificate, "certificateStart").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      {getInfo(prop.certificate, "certificateEnd") &&
        // @ts-ignore
        getInfo(prop.certificate, "certificateEnd").map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
    </Card>**/
  return (
    <>
      <Card>
        <Card.Body ref={componentRef}>
          {/* CV Header */}
          <Row
            className="mb-4"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* CV Photo of header cv */}
            <Col
              lg={3}
              xs={3}
              style={
                {
                  // backgroundColor: "pink",
                }
              }
            >
              {prop.photo ? (
                <Image
                  src={prop.photo}
                  alt="profile"
                  width="130px"
                  height="130px"
                  // className="m-2"
                  roundedCircle
                  style={{
                    margin: "0",
                  }}
                />
              ) : null}
            </Col>
            {/* End of CV photo */}
            {/* CV Name and title header*/}
            <Col
              lg={9}
              xs={9}
              style={{
                display: "flex",
                height: "150px",
                flexDirection: "column",
                justifyContent: "center",
                gap: "0",
                alignItems: "flex-start",
                backgroundColor: "#479099",
                color: "white",
                // backgroundColor: "black",
              }}
            >
              <h1
                style={{
                  margin: "0",
                }}
              >
                {prop.basic.fullName}
              </h1>

              <h2
                style={{
                  margin: "0",
                }}
              >
                {prop.basic.title}
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#FFFFFF",
                    color: "#FFFFFF",
                    width: "250px",
                  }}
                />
              </h2>
            </Col>
            {/* End of CV name and title header */}
          </Row>
          {/* End of CV header */}
          {/* CV body */}
          <Row>
            {/* CV contact info */}
            <Col
              lg={3}
              xs={3}
              className="mb-4"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                // width: "25%",
              }}
            >
              <p
                style={{
                  margin: "0",
                  width: "100%",
                  textAlign: "justify",
                  // height: "100px",
                }}
              >
                ({prop.basic.email.split("@")[0]}
                <br />@{prop.basic.email.split("@")[1]})
              </p>
              <p
                style={{
                  margin: "0",
                }}
              >
                {prop.basic.phone}
              </p>
              <p
                style={{
                  margin: "0",
                }}
              >
                {prop.basic.date}
              </p>
              <p
                style={{
                  margin: "0",
                }}
              >
                {prop.basic.address}
              </p>
            </Col>
            {/* End of CV contact info */}
            {/* CV edu info */}
            <Col
              lg={9}
              xs={9}
              className="mb-4"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>
                <h3
                  style={{
                    color: "#479099",
                    fontWeight: "bold",
                  }}
                >
                  EDUCATION
                  <hr
                    style={{
                      height: "3px",
                      backgroundColor: "#479099",
                      // width: "110%",
                    }}
                  />
                </h3>
              </span>
              <span></span>
            </Col>
            {/* End of CV edu info */}
            {/* Cv skill info */}
            <Col
              lg={3}
              xs={3}
              className="mb-4"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>
                <h3
                  style={{
                    color: "#479099",
                    fontWeight: "bold",
                  }}
                >
                  SKILLS
                </h3>
                <hr
                  style={{
                    height: "3px",
                    backgroundColor: "#479099",
                  }}
                />
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "flex-start",
                  gap: "5px",
                }}
              >
                {getInfo(prop.skills, "skill") &&
                  // @ts-ignore
                  getInfo(prop.skills, "skill").map((e, i) => {
                    return (
                      <p
                        key={i}
                        style={{
                          backgroundColor: "#479099",
                          color: "white",
                          textAlign: "center",
                          width: "auto",
                          borderRadius: "15px",
                          padding: "10px",
                        }}
                      >
                        {e}
                      </p>
                    );
                  })}
              </span>
            </Col>
            {/* End of CV skill info */}
          </Row>
          {/* End of CV body */}
        </Card.Body>
      </Card>
      <ReactToPrint
        content={() => componentRef.current}
        documentTitle={`${prop.basic.fullName} Resume`}
        trigger={() => <Button variant="primary">Print to PDF</Button>}
      />
    </>
  );
}

export default CV;
