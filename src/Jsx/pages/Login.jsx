import Inputs from "../components/Inputs";
import styles from "../../Css/pages/LC.module.css";
import Submitbtn from "../components/Submitbtn";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    function hanonchange (e) {
        setEmail(e.targeth.value), setError("")
        setSenha(e.targeth.value), setError("")
    }

    return(
        <div className={styles.container}>
            <form className={styles.dados}>
                <h1>Login</h1>
                <Inputs type="email" comple="current-email" palce="Digite seu email" value={email} onChange />
                <Inputs type="password" comple="current-password" palce="Digite sua senha" onChange={hanonchange}/>

                <Submitbtn btntext="Entrar"/>

                <Link to="/cadastro">Crie uma conta</Link>
            </form>
        </div>
    )
}
export default Login