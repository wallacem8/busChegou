import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Login.module.css"
import onibus from "../../assets/BUS.png";



const Login = () => {
    return(
        <div className={styles.loginWrapper}>
            <div className={styles.leftBox}>
                <img className={styles.imageBus} src={onibus} alt="" />
            </div>

            <div className={styles.rightBox}>
                <h1 className={styles.titleLogin}>Login</h1>
                <form className={styles.form}>
                    <fieldset className={styles.field}>
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <input className={styles.input} type="email" name="email" id="email"/>
                    </fieldset>
                    <fieldset className={styles.field}>
                        <label className={styles.label} htmlFor="password">Senha:</label>
                        <input className={styles.input} type="password" name="password" id="password" />
                    </fieldset>
                    <div>
                        <button className={styles.btn} type="submit">Entrar</button>
                    </div>

                    <div>
                        <p className={styles.register}>Não possui uma conta? <NavLink className={styles.navLink} to="/register">Registre-se</NavLink></p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;