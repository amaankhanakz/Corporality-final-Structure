import "./SACComp3.css"
import wall from "./images/wall.png"

export default function SACComp3() {
    return (
        <div>
            <div className="sacc3Container">
                <div className="sacc3TextContainer">
                    <div className="sacc3TextWrapper d-flex flex-row">
                        <div className="sacc3Left">
                            <img src={wall} alt="" />
                        </div>
                        <div className="sacc3Right">
                            <p className="sacc3Heading1">STRATEGY & CONSULTING</p>
                            <p className="sacc3Heading2">Effective Marketing Strategy 2022: Driving towards a better tomorrow</p>
                            <p className="sacc3Para">The new normal has opened up a world of opportunities for businesses. With renewed importance of the digital and online presence, Corporality aims to help leaders chart their courses towards a better and more profitable growth.</p>
                            <a className="sacc3Button" href="/#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}