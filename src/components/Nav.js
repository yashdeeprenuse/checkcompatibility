import React from 'react'

const Nav = () => {
  
  return (
    <>
 <nav className="navbar navbar-expand-lg " style={{backgroundColor:"mediumseagreen"}}>
  <div className="container-fluid">
  <a class="navbar-brand" href="/">CheckCompatibility</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="navbar-brand ml-30" href="#" style={{fontSize:"15px"}}>About</a>
        </li></ul>
      <form className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a class="navbar-brand" href="#">Check Manually</a>
        </li></ul>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav
