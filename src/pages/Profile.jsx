import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import styles from "./Profile.module.css"
const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className={styles.Container}>
        <h3>Profile: </h3>
        <p><b>Name:</b> {user.firstName} {user.lastName}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Username:</b> {user.username}</p>
      </div>
      
    </>
  );
};

export default Profile;