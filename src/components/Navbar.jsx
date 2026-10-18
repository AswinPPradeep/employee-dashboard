import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/">
        Employee Dashboard
      </Link>

      <div className="ms-auto">
        <Link className="btn btn-outline-light me-2" to="/">
          Home
        </Link>

        <Link className="btn btn-light" to="/employee-form">
          Employee Form
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;