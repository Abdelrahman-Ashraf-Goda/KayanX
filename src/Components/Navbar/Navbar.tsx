import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
    <div className="container">
      <a className="navbar-brand fs-2" href="" style={{fontFamily:'initial'}}>
        {/* <img src="/assets/images/logo.png" alt="logo image"/> */}
        KayanX
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="index.html">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#portfolio">portfolio</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">contact</a>
          </li>
        </ul>
        <button type="button" className="rounded-pill btn-rounded">
          +20 1026956499
          <span>
            <i className="bi bi-telephone-fill"></i>
          </span>
        </button>
      </div>
    </div>
  </nav>
    </>
  )
}
