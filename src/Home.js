import React from 'react'

function Home(props) { 
  return (
    <>
    <div className="content">
      <div className="text">
        <b id="hii">Hi! I'M </b><br />
        <b id="name">Vishal Sharma</b><br />
         <pre id="paragraph">
          {`  I am an ambitious 18-year-old second-year student 
  pursuing a Bachelor of Computer Applications (BCA)
  with a passion for cutting-edge technologies and
  a solid foundation in key areas of computer science.
  
  Languages: Java, Javascript, Python.
  Skills: Data Structures, Algorithms
  Web Development: MERN Stack (MongoDB, Express.js, React.js, Node.js)`}
        </pre>
        <div className="handle">
          <a href="https://www.facebook.com/pandit.vishalguru?sfnsn=wiwspwa&mibextid=RUbZ1f" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="https://www.instagram.com/pandatvishal315/" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-linkedin"></a>
          <button className="dwn-btn" onClick={props.click}>
            <span>Download CV</span>
            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
              <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home