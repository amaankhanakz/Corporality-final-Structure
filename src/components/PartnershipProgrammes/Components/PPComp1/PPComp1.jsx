import "../PPComp1/PPComp1.css"
import img1 from "../images/img1.png"
import wall from "../images/wall.png"
import rec6 from "../images/rec-6.png"
import rec8 from "../images/rec-8.png"
import rec9 from "../images/rec-9.png"


export default function PPComp1() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row d-flex flex-row ml-5 mr-5 ppc1RowContainer">
                    <div className="col d-flex flex-column justify-content-center ppc1ColWrapper">
                        <p className="ppcHeading">Partnership Programmes</p><br />
                        <p>Corporality Global holds extensive strategic strength partnership programmes that extend entrepreneurial reach beyond the ordinary</p><br />
                        <a className='ppc1Button' href="#">Read More</a>
                        <img className="ppc1Rec9" src={rec9} alt="" />
                    </div>
                    <div className="col d-flex flex-column mt-5 ml-5">
                        <div className="ppc1ImageWrapper">
                            <img className="ppc1Rec6" src={rec6} alt="" />
                            <img className="ppc1Img1" src={img1} alt="" />
                            <img className="ppc1Wall" src={wall} alt="" />
                            <img className="ppc1Rec8" src={rec8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
