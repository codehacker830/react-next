
//import css
import './style.css';

const Card = props => (
    <>
        <div className="card">
            <div className="card-img-wrapper">
                <img className="card-img-top" src={props.source} alt="" />
                <div className="card-img-overlay">
                    <p>Lorem ipsum dolor sit amet,<br/>tristique illum, quam sed viverra.</p>
                    <a className="btn btn-bordered" data-hook="link" href="/slots/"> Learn More 
                        <span className="data-icon icon-angle-right"></span> 
                    </a>
                </div>
            </div>

            <div className="card-footer">
                <h3 className="card-title ">{props.children}</h3>
                <div className="pull-right">
                    <span className="ratings"> 
                    <i className="data-icon icon-star"></i> 
                    <i className="data-icon icon-star"></i> 
                    <i className="data-icon icon-star"></i> 
                    <i className="data-icon icon-star"></i> 
                    <i className="data-icon icon-star text-muted"></i> 
                    </span> 
                    <span className="btn btn-link" data-hook="link" href="/slots"> 
                    <i className="data-icon icon-angle-right"></i> 
                    </span>
                </div>
            </div>
        </div>
    </>
);

export default Card;