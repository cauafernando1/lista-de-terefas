import styles from "../../Css/components/Inputs.module.css"

function Inputs ({type, comple, palce}) {
    return(
        <div className={styles.inpdiv}><input className={styles.input} type={type} autoComplete={comple} placeholder={palce}/></div>
    )
}
export default Inputs