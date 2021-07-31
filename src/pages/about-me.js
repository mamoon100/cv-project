import Header from "../component/header";
import { Row, Col } from "react-bootstrap";
import CV from "../component/cv";
// @ts-ignore
import logo from "../img/IMG_1029.JPG";

function AboutME() {
  const basic = {
    fullName: "Mamoun Hussein",
    title: "Software Developer",
    email: "mamoon.husen1006@gmail.com",
    phone: "+962789072104",
    date: "06-04-1998",
    address: "Amman, Jordan",
  };
  let photo = logo;
  let edu = [
    {
      major: "Physics",
      school: "Balqa-applied university",
      degree: "Bachelor",
      startStudy: "09/2016",
      graduation: "05/2020",
      gpa: "3.3",
    },
    {
      major: "Software Developer",
      school: "Luminus College ",
      degree: "Diploma",
      startStudy: "05/2021",
      graduation: "Present",
      gpa: "",
    },
  ];
  let work = [
    {
      title: "Call Center Agent (3 weeks project)",
      company: "It beep",
      address: "Amman Al-madinah st.",
      start: "01/2020",
      end: "02/2020",
    },
    {
      title: "Part time Sales and Social media manager ",
      company: "Acrylic & More",
      address: "Amman 7th circle",
      start: "08/2017",
      end: "02/2019",
    },
  ];
  let skills = [
    { skill: "Self-motivation" },
    { skill: "Python 3" },
    { skill: "Java script" },
  ];
  let language = [
    {
      language: "Arabic",
      prof: "Native Speaker",
    },
    { language: "English", prof: "Work Professionality " },
  ];
  let certificate = [
    {
      certificate: "Work Ethic From INJAZ",
      certificateStart: "02/2017",
      certificateEnd: "05/2017",
    },
  ];
  return (
    <>
      <Header />
      {/* <Card> */}
      <Row
        className="mt-4"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col lg={10} xs={10}>
          <CV
            basic={basic}
            photo={photo}
            edu={edu}
            work={work}
            skills={skills}
            language={language}
            certificate={certificate}
          />
        </Col>
      </Row>

      {/* </Card> */}
    </>
  );
}

export default AboutME;
