import linkedInIcon from "../img/linkedin.png";
import emailIcon from "../img/Icon.png"

export default function Main() {
    return (
        <main className="main--container">

            <div className="main--buttons">
                <button type="button" id="button--email">
                    <img src={emailIcon} />
                    Email
                </button>
                <button type="button" id="button--linkedin">
                    <img src={linkedInIcon} />
                    LinkedIn
                </button>
            </div>
            <div className="main--text">
                <h2>About</h2>
                I am a self-taught programmist, always curious to try out new things. I try to learn daily and enlarge my knowledge base. Excited to see where it takes me!
                <h2>Interest</h2>
                Reading. Adventure. Snowboarding. Solving riddles. 
            </div>
        </main>
    )
}