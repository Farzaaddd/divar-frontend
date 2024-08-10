import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import Dropdown from "../components/templates/Dropdown";
import "./Header.css"
const Header = () => {
    const [active, setActive] = useState("")

    const dropdownHandler = (event) => {
        const target = event.target
        if(!target.tagName == "SPAN") return
        event.target.classList.toggle("active");

        setActive(event.target.className == "active" ? "active" : "")
    }

  return (
    <>
    <header className={styles.header}>
        <div>
            <Link to="/"> 
                <img src="divar.svg" alt="logo" className={styles.logo} />
             </Link>

             <span>
                <img src="location.svg" alt="icon" />
                <p>تهران</p>
             </span>
        </div>

        <div>
            <span onClick={dropdownHandler}>
                <img src="profile.svg" alt="icon" />
                <p>
                    دیوار من
                </p>
            </span>

            <Link to="/dashboard" className={styles.button}> ثبت آگهی </Link>
        </div>
    </header>
    { active === "active" ? <Dropdown/> : null}
    </>
  )
}

export default Header