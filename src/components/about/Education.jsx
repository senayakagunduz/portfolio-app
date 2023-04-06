import React from "react";
import "./education.css";

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Institude</th>
          <th>Department</th>
          <th>Tutor-Company</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Patika.dev</td>
          <td>Front-End Patikası</td>
          <td>Hakan Yalçınkaya</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>Udemy</td>
          <td>Modern Web Geliştirme Kursu</td>
          <td>Engin Demiroğ & Mustafa Murat Coşkun</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>Udemy</td>
          <td>React Tutorial and Projects</td>
          <td>John Simulga</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>Unite BT</td>
          <td>İş analisti ve yazılım geliştirme</td>
          <td>Work Experience</td>
          <td>2012-1014</td>
        </tr>
        <tr>
        <td>BBA</td>
          {/* <td>Computer Engineering</td>
          <td>Baku Engineering University</td>
          <td>2005-2010</td> */}
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
