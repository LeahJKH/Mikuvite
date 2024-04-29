import Styles from "./Footer.module.css"

export default function Footer() {
    return (
        <>
        <footer className={Styles.FooterStyles}>
            <div className={Styles.emailBar}>
                <input type="text" name="email-field" id="emailField" placeholder="Enter Email" className={Styles.emailFieldStyling}/>
                <p className={Styles.notSoTrueInfo}>the rights too this website is owned by me and miku as we are married</p>
                <img src="https://leahjkh.github.io/mikuviteInfo/images/TransP/tp2.webp" alt="" className={Styles.logoImg}/>
            </div>

            <div className={Styles.linkBar}>
                <a href="#" className={Styles.barLinks}>privacy policy</a>
                <a href="#" className={Styles.barLinks}>Terms and conditions</a>
                <a href="#" className={Styles.barLinks}>Hunger tax</a>
            </div>

            <div className={Styles.infoBar}>
                <p className={Styles.infoText}>copyright 2026</p>
                <p className={Styles.infoText}>this site is satirical</p>
            </div>
        </footer>
        </>
    )
}