
//import components
import BtnBordered from '../../../../components/btnbordered'

//impot images
import badge1 from '../../../../assets/images/badge_1.jpeg';
import badge2 from '../../../../assets/images/badge_2.jpg';
import badge3 from '../../../../assets/images/badge_3.jpeg';
import badge4 from '../../../../assets/images/badge_4.jpg';
import badge5 from '../../../../assets/images/badge_5.jpg';
import badge6 from '../../../../assets/images/badge_6.jpg';
//import css
import './style.css';

const Card = props => (
    <li className="col-2">
        <div className="card">
            <div className="card-header">
                <span className="card-title">{props.children}</span>
            <div className="badge-items">
                <span className="data-icon icon-star"></span> 
                <span className="data-icon icon-heart-o"></span>
            </div>
                <img className="card-img-bg" src={props.source}/>
            </div>
            <div className="card-img-wrapper">
                <img className="card-img" src={props.source} alt="Jungle Jim"/>
            </div>
            <div className="card-footer">
                <a href="/" data-hook="launch-if-auth" onClick="return false;" target="_blank" data-game-id="JungleJim_ElDorado" className="btn btn-primary cash-games"> Play Now </a> 
                <a href="/" onClick="window.open('/launcher/mgs/JungleJim_ElDorado/fun', 'slotGamesLauncher','width=1050, height=785'); return false;" target="_blank" className="btn btn-bordered" style={{}}>Try Now</a>
            </div>
        </div>
    </li>
)
const FeatureGames = () => (
    <>
    <section className="section featured-games container">
        <div className="row">
            <div className="col-2">
                <h5 className="heading">Feature Games</h5>
                <h6 className="ratings">
                    <i className="data-icon icon-star"></i> 
                    <i className="data-icon icon-star"></i> 
                    <i className="data-icon icon-star"></i> 
                    <i className="v"></i> 
                    <i className="data-icon icon-star"></i>
                </h6>
                <p>Start your search with a look at the best games on our site.</p>
                <BtnBordered>See More</BtnBordered>
            </div>
            <div className="col-10">
                <ul className="row cards game-cards" style={{listStyle:"none"}}>
                    <Card source={badge1}>Jungle Jim</Card>
                    <Card source={badge2}>Immortal Roma...</Card>
                    <Card source={badge3}>High Society</Card>
                    <Card source={badge4}>Jewel of the Ori...</Card>
                    <Card source={badge5}>Oriental Fortune</Card>
                    <Card source={badge6}>Fat Lady Sings</Card>
                </ul>
            </div>
        </div>
    </section>
    </>
);

export default FeatureGames;