export function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src="assets/img/doo.jpg" className="navbar-brand" alt="..." height="50px" style={{ width: 50 }} />
          {/* <a className="navbar-brand">Navbar</a> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Languages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item">English</a>
                  </li>
                  <li>
                    <a className="dropdown-item">हिन्दी</a>
                  </li>
                  <li>
                    <a className="dropdown-item">اردو</a>
                  </li>
                  <li>
                    <a className="dropdown-item">தமிழ்</a>
                  </li>
                  <li>
                    <a className="dropdown-item">русский</a>
                  </li>
                  <li>
                    <a className="dropdown-item">française</a>
                  </li>

                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <button type="button" class="btn btn-primary px-5">Start Check Up</button>
          </div>
        </div>
      </nav>
    </>
  );
}
