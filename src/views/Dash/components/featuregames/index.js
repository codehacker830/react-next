
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
    <li class="col-md-2">
        <div class="card">
            <div class="card-header">
                <span class="card-title">{props.children}</span>
            <div class="badge-items">
                <span class="data-icon icon-star"></span> 
                <span class="data-icon icon-heart-o"></span>
            </div>
                <img class="card-img-bg" src={props.source}/>
            </div>
            <div class="card-img-wrapper">
                <img class="card-img" src={props.source} alt="Jungle Jim"/>
            </div>
            <div class="card-footer">
                <a href="/launcher/mgs/JungleJim_ElDorado/real" data-hook="launch-if-auth" onclick="return false;" target="_blank" data-game-id="JungleJim_ElDorado" class="btn btn-primary cash-games"> Play Now </a> 
                <a href="#" onclick="window.open('/launcher/mgs/JungleJim_ElDorado/fun', 'slotGamesLauncher','width=1050, height=785'); return false;" target="_blank" class="btn btn-bordered">Try Now </a>
            </div>
        </div>
    </li>
)
const FeatureGames = () => (
    <>
    <section class="section featured-games container">
        <div class="row">
            <div class="col-md-2">
                <h5 class="heading">Feature Games</h5>
                <h6 class="ratings">
                    <i class="data-icon icon-star"></i> 
                    <i class="data-icon icon-star"></i> 
                    <i class="data-icon icon-star"></i> 
                    <i class="v"></i> 
                    <i class="data-icon icon-star"></i>
                </h6>
                <p>Start your search with a look at the best games on our site.</p>
                <BtnBordered>See More</BtnBordered>
            </div>
            <div class="col-md-10">
                <ul class="row cards game-cards" style={{listStyle:"none"}}>
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