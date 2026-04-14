import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from './Navbar.module.css'

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // ✅ no localStorage
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className={styles.htxt} to="/dashboard">Potenz</Link>

      <div>
        <Link className="btn btn-light me-2 pbutton" to="/profile">Profile</Link>
        <Link className="btn btn-light me-2" to="/products">Products</Link>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;