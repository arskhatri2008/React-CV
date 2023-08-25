import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Hi() {
  return (
    <div className="cv-container">
      <div className="header">
        <h1>Curriculum Vitae</h1>
      </div>
      <div className=".contact-info">
        <span>
          <h3>Arsalan Ahmed</h3>
        </span>
        <span>
          <p>Karachi, Sindh, Pakistan</p>
        </span>
        <span>
          <p>
            <label>Mobile: </label>
            <a href="tel:+923208374982">
              <strong>0320-8374982</strong>
            </a>
          </p>
        </span>
        <span>
          <p>
            Email:{" "}
            <strong>
              <a href="mailto:arskhatri2008@gmail.com">
                arskhatri2008@gmail.com
              </a>
            </strong>
          </p>
        </span>
        <span>
          <p>
            LinkedIn:{" "}
            <strong>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/arsalan-ahmed-858965121"
              >
                www.linkedin.com/in/arsalan-ahmed-858965121
              </a>
            </strong>
          </p>
        </span>
        <span>
          <p>
            GitHub:{" "}
            <strong>
              <a rel="noreferrer" target="_blank"href="https://github.com/arskhatri2008">
                www.github.com/arskhatri2008
              </a>
            </strong>
          </p>
        </span>
      </div>
      <br></br>
      <div className="objectives">
        <h3>Objective</h3>
      </div>
      <div>
        <p>
          Energetic and adaptable web developer with a solid foundation in HTML,
          CSS, and JavaScript. Eager to launch my career in web development and
          contribute to dynamic projects that allow me to apply and expand my
          coding skills. Committed to continuous learning and staying current
          with industry trends and technologies. Excited to collaborate with
          experienced professionals to create engaging and user-friendly web
          experiences that make a positive impact. Seeking an 
          opportunity to grow and thrive in a fast-paced and innovative
          environment.
        </p>
      </div>
      <br></br>
      <div className="education">
        <h3>Educational Background</h3>
      </div>
      <div>
        <ul>
          <li>Master's (MA) International Relations - University of Karachi</li>
          <li>Bachelor's (B.Com) Commerce - University of Karachi</li>
          <li>Intermediate (HSC) Commerce - S.M Art's & Commerce College</li>
          <li>Matriculation (SSC) Bio-Science - H.M Public School</li>
        </ul>
      </div>
      <br></br>
      <div className="certificates">
        <h3>Diploma/Certificates</h3>
        <div>
          <ul>
            <li><strong>Web & Mobile Application Development</strong></li>
            <li><strong>Hardware & Networking</strong></li>
          </ul>
        </div>
      </div>
      <br></br>
      <div className="personal-info">
        <h3>Personal Information</h3>
        <div>
          <div>Father Name: <strong>Muhammad Saleem</strong></div>
          <div>CNIC: <strong>42301-8285831-1</strong></div>
          <div>Gender: <strong>Male</strong></div>
          <div>Marital Status: <strong>Married</strong></div>
          <div>DOB: <strong>01-December</strong></div>
          <div>Residence: <strong>Karachi, Pakistan</strong></div>
        </div>
      </div>
      <br></br>
      <div className="reference">
        <h3>Reference</h3>
        <div>
          <ul>
            <li>Available on request</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
