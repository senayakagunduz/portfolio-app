import React from "react";
import "./education.css";

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Institude</th>
          <th>Department</th>
          <th>Tutor</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BBA</td>
          <td>Computer Engineering</td>
          <td>Baku Engineering University</td>
          <td>2006</td>
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
          <td>Patika.dev</td>
          <td>Front-End Patikası</td>
          <td>Hakan Yalçınkaya</td>
          <td>2022</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
