import { Link } from "react-router-dom"
import styles from "../../Css/pages/LC.module.css"
import Inputs from "../components/Inputs"
import Submitbtn from "../components/Submitbtn"

function Cadastro(){
    return (
        <div className={styles.container}>
            <form className={styles.dados}>
                <h1>Cadastro</h1>
                <Inputs type="name" palce="Digite o seu nome"/>
                <Inputs type="email" comple="new-email" palce="Digite seu email"/>
                <Inputs type="password" comple="new-password" palce="Digite sua senha"/>
                <Submitbtn btntext="Cadastrar"/>
                <Link to="/">Já tenho um conta</Link>
            </form>
                
        </div>
    )
}
export default Cadastro