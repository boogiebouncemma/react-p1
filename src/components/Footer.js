import twitterIcon from "../img/twitterIcon.png"
import facebookIcon from "../img/FacebookIcon.png"
import instagramIcon from "../img/InstagramIcon.png"
import gitHubIcon from "../img/GitHubIcon.png"


export default function Footer() {
    return (
        <div className="footer--container">
            <a href=""><img src={twitterIcon} /></a>
            <a href=""><img src={facebookIcon} /></a>
            <a href=""><img src={instagramIcon} /></a>
            <a href="https://github.com/boogiebouncemma" target="_blank"><img src={gitHubIcon} /></a>
        </div>
    )
}