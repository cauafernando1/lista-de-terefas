import styles from "../../Css/components/Submitbtn.module.css"

function Submitbtn ({onclik, btntext}) {
    return(
        <div className={styles.divbtn}>
             <button className={styles.btn}onClik={onclik}> {btntext}</button>
        </div>
    )
}
export default Submitbtn