import React from "react";

import styles from "./Register.module.css";

const Register = () => {
    return(
        <div className={styles.loginWrapper}>
        <div className={styles.rightBox}>
            <h1 className={styles.titleLogin}>Preencha o formulário</h1>
            <form className={styles.form}>
                <fieldset className={styles.field}>
                    <label className={styles.label} htmlFor="nome">Nome:</label>
                    <input className={styles.input} type="text" name="nome" id="nome" />
                </fieldset>
                <fieldset className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input className={styles.input} type="email" name="email" id="email"/>
                </fieldset>
                <fieldset className={styles.field}>
                    <label className={styles.label} htmlFor="password">Senha:</label>
                    <input className={styles.input} type="password" name="password" id="password" />
                </fieldset>
                <fieldset className={styles.field}>
                    <label className={styles.label} htmlFor="data_nascimento">Data de nascimento:</label>
                    <input className={styles.input} type="date" name="data_nascimento" id="data_nascimento" />
                </fieldset>
                <fieldset className={styles.field}>
                    <label className={styles.label} htmlFor="telefone">Telefone:</label>
                    <input className={styles.input} type="text" name="telefone" id="telefone" />
                </fieldset>
                <div>
                    <button className={styles.btn} type="submit">Enviar</button>
                </div>
            </form>

        </div>
    </div>
    );
}

export default Register;