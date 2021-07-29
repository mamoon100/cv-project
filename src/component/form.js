// import { useState, useEffect, useCallback } from "react";
import Education from "./education";
import Basic from "./basicinfo";
import Work from "./work";
import Language from "./language";
import Skills from "./skills";
import Certificates from "./certificates";

function RForm(prop) {
  return (
    <>
      <Basic setBasic={prop.setBasic} setPhoto={prop.setPhoto} />
      <Education setEdu={prop.setEdu} />
      <Work setWork={prop.setWork} />
      <Skills setSkills={prop.setSkills} />
      <Language setLanguage={prop.setLanguage} />
      <Certificates setCertificate={prop.setCertificate} />
    </>
  );
}

export default RForm;
