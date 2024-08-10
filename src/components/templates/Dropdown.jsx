import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";
import { deleteCookie } from "utils/cookies";
import React from "react";
const Dropdown = () => {

    const deleteCookies = () => {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        window.location.reload();
    }
  return (
        <ul className={styles.dropdown}>
            <li>
                <img src="profile.svg" alt="logo" className={styles.logo} />
                <Link to="/dashboard">کاربر دیوار</Link>
            </li>
            <hr />
            <li>
                <img src="service.svg" alt="logo" className={styles.logo} />
                <Link to="/auth">تایید هویت</Link>
            </li>
            <hr />
            <li>
                <img src="digital.svg" alt="logo" className={styles.logo} />
                <button onClick={deleteCookies}> خروج </button>
            </li>
        </ul>
  )
}

export default Dropdown