import Style from "./Header.module.css"
export default function Header() {
    return (
        <>
        <header className={Style.headerFull}>
            <div className={Style.headerPageSect}>
                <img src="https://leahjkh.github.io/MikuApiGithub/images/TransP/tp3.webp" alt="" className={Style.headerImg}/>
                <h1 className={Style.headerTxt}>Miku</h1>
            </div>

            <div className={Style.headerBtnSect}>
                <button href="#" className={Style.headerBtn}>info</button>
                <button href="#" className={Style.headerBtn}>pictures</button>
                <button href="/timeline" className={Style.headerBtn}><a href="/timeline">timeline</a></button>
            </div>
        </header>
        </>
    )
}