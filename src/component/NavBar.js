export function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <img src="assets/img/doo.jpg" class="card-img-top" alt="..." height="50px" style={{ width: 50 }} />
          <a className="navbar-brand">Navbar</a>
         
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
            <form className="d-flex">
            <button type="button" class="btn btn-primary position-relative"style={{ width: 220 }}>
  <a href="chomu" class="button">Start</a>                                                        {/*gadbad*/}
            </button>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
