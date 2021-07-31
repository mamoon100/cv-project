import { Card, Image, Button, Row, Col } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
function CV(prop) {
  // console.log(prop.basic.photo)
  const componentRef = useRef();
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
            <Col lg={3} xs={3}>
              {prop.photo ? (
                <Image
                  src={prop.photo}
                  alt="profile"
                  width="130px"
                  height="130px"
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
              }}
            >
              <h1
                style={{
                  margin: "0",
                }}
              >
                {prop.basic.fullName}
              </h1>

              <h5
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
              </h5>
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
              }}
            >
              {prop.basic.email ? (
                <p
                  style={{
                    margin: "0",
                    width: "100%",
                    textAlign: "justify",
                  }}
                >
                  {prop.basic.email.split("@")[0]}
                  <br />@{prop.basic.email.split("@")[1]}
                </p>
              ) : null}

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
              {prop.edu && (
                <>
                  <span>
                    <h3
                      style={{
                        color: "#479099",
                        fontWeight: "bold",
                        textIndent: "25px",
                      }}
                    >
                      EDUCATION
                      <hr
                        style={{
                          height: "3px",
                          backgroundColor: "#479099",
                        }}
                      />
                    </h3>
                  </span>
                  {prop.edu
                    ? prop.edu.map((e, index) => {
                        return (
                          <span
                            style={{
                              textIndent: "25px",
                            }}
                          >
                            <h4
                              style={{
                                color: "#479099",
                                fontWeight: "bold",
                              }}
                            >
                              {e.major.toUpperCase()}
                              {e.degree ? `  (${e.degree})` : null}
                            </h4>
                            <h5>{e.school.toUpperCase()}</h5>
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "#479099",
                              }}
                            >
                              {e.startStudy && (
                                <>
                                  <p
                                    style={{}}
                                  >{`${e.startStudy} 🠮 ${e.graduation}`}</p>
                                  {e.gpa && <p>{`${e.gpa}/4.0 `}</p>}
                                </>
                              )}
                            </span>
                          </span>
                        );
                      })
                    : null}
                </>
              )}
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
              {prop.skills ? (
                <>
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
                      flexWrap: "wrap",
                    }}
                  >
                    {prop.skills &&
                      // @ts-ignore
                      prop.skills.map((e, i) => {
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
                            {e.skill}
                          </p>
                        );
                      })}
                  </span>
                </>
              ) : null}
            </Col>
            {/* End of CV skill info */}
            {/* Start of CV Work info */}
            <Col
              lg={9}
              xs={9}
              className="mb-4"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {prop.work && (
                <>
                  <span>
                    <h3
                      style={{
                        color: "#479099",
                        fontWeight: "bold",
                        textIndent: "25px",
                      }}
                    >
                      WORK EXPERIENCE
                      <hr
                        style={{
                          height: "3px",
                          backgroundColor: "#479099",
                          // width: "110%",
                        }}
                      />
                    </h3>
                  </span>
                  {prop.work
                    ? prop.work.map((e, index) => {
                        return (
                          <span
                            style={{
                              textIndent: "25px",
                            }}
                          >
                            <h4
                              style={{
                                color: "#479099",
                                fontWeight: "bold",
                              }}
                            >
                              {e.title}
                            </h4>
                            <h5 style={{}}>{e.company}</h5>
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "#479099",
                              }}
                            >
                              {e.start && (
                                <p style={{}}>{`${e.start} 🠮 ${e.end}`}</p>
                              )}
                              <p>{e.address}</p>
                            </span>
                          </span>
                        );
                      })
                    : null}
                </>
              )}
            </Col>
            {/* End of CV work info */}
            {/* start of CV Language info */}
            <Col
              lg={3}
              xs={3}
              className="mb-4"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {prop.language ? (
                <>
                  <span>
                    <h3
                      style={{
                        color: "#479099",
                        fontWeight: "bold",
                      }}
                    >
                      LANGUAGE
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
                      display: "grid",
                      gap: "5px",
                    }}
                  >
                    {prop.language.map((e, i) => {
                      return (
                        <>
                          <h5
                            style={{
                              color: "#479099",
                            }}
                          >
                            {e.language}
                          </h5>
                          <p>{e.prof}</p>
                        </>
                      );
                    })}
                  </span>
                </>
              ) : null}
            </Col>
            {/* End of CV Language info  */}
            {/* Start of Certificate info */}
            <Col
              lg={9}
              xs={9}
              className="mb-4"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {prop.certificate && (
                <>
                  <span>
                    <h3
                      style={{
                        color: "#479099",
                        fontWeight: "bold",
                        textIndent: "25px",
                      }}
                    >
                      CERTIFICATE
                      <hr
                        style={{
                          height: "3px",
                          backgroundColor: "#479099",
                        }}
                      />
                    </h3>
                  </span>
                  {prop.certificate
                    ? prop.certificate.map((e, index) => {
                        return (
                          <span
                            style={{
                              textIndent: "25px",
                            }}
                          >
                            <h4
                              style={{
                                color: "#479099",
                                fontWeight: "bold",
                              }}
                            >
                              {e.certificate}
                            </h4>
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                color: "#479099",
                              }}
                            >
                              {e.certificateStart && (
                                <p
                                  style={{}}
                                >{`${e.certificateStart} 🠮 ${e.certificateEnd}`}</p>
                              )}
                            </span>
                          </span>
                        );
                      })
                    : null}
                </>
              )}
            </Col>
            {/* End of Certificate */}
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
