import Header from "../component/header";
import RForm from "../component/form";
import { Container, Row, Col } from "react-bootstrap";
import CV from "../component/cv";
import { useState } from "react";

function CvMaker() {
  const [basic, setBasic] = useState({});
  const [edu, setEdu] = useState();
  const [work, setWork] = useState();
  const [skills, setSkills] = useState();
  const [language, setLanguage] = useState();
  const [certificate, setCertificate] = useState();
  const [photo, setPhoto] = useState(null);
  // console.log(basic);
  // console.log(edu);
  // console.log(work);
  // console.log(skills);
  // console.log(language);
  // console.log(Certificate);
  // console.log(photo);
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            <Col lg={4} xs={12} className="mt-2 mb-2">
              <RForm
                setBasic={setBasic}
                setEdu={setEdu}
                setWork={setWork}
                setSkills={setSkills}
                setLanguage={setLanguage}
                setCertificate={setCertificate}
                setPhoto={setPhoto}
              />
            </Col>
            <Col lg={8} xs={12} className="mt-2 mb-2">
              <CV
                basic={basic}
                edu={edu}
                work={work}
                skills={skills}
                language={language}
                certificate={certificate}
                photo={photo}
              />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default CvMaker;
