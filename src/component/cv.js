import { Card, Image } from "react-bootstrap";
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
  return (
    <Card bg="light" text="dark">
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
    </Card>
  );
}

export default CV;
