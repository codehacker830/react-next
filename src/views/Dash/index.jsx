import React from 'react';

//import components
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
//
import bg_img from '../../assets/images/bg_img.jpg';
import sportsbook from '../../assets/images/link_sportsbook.jpg';

class Dash extends React.Component {
    render() {
        return (
            <>
            <div>
                <Header/>
                    <div className="main-container">
                        <section className="section carousel">
                            <div className="container-fluid">
                                {/* <img src={bg_img} alt="Home" className="mx-auto d-block"/> */}
                            </div>
                        </section>
                        <section className="section featured-products">
                            <div className="container">
                                <ul  className="row cards">
                                    {/* <li className="col-md-3">
                                        <div className="card">
                                            <div className="card-img-wrapper">
                                                <img className="card-img-top" src={sportsbook} alt="" />
                                            </div>
                                            <div className="card-img-overlay">
                                                <p>Lorem ipsum dolor sit amet,<br/>tristique illum, quam sed viverra.</p>
                                                <a className="btn btn-bordered" data-hook="link" href="/slots/"> Learn More 
                                                    <span className="data-icon icon-angle-right"></span> 
                                                </a>
                                            </div>
                                            <div class="card-footer">
                                                <h3 class="card-title">SportsBook</h3>
                                                <div class="pull-right">
                                                    <span class="ratings"> 
                                                    <i class="data-icon icon-star"></i> 
                                                    <i class="data-icon icon-star"></i> 
                                                    <i class="data-icon icon-star"></i> 
                                                    <i class="data-icon icon-star"></i> 
                                                    <i class="data-icon icon-star text-muted"></i> 
                                                    </span> 
                                                    <span class="btn btn-link" data-hook="link" href="/slots"> 
                                                    <i class="data-icon icon-angle-right"></i> 
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </section>                        
                        <section className="section jackpot-section">

                        </section>
                        <section className="section marquee-section container">

                        </section>
                        <section className="section featured-games container">

                        </section>
                    </div>
                <Footer/>
            </div>
            <style jsx>{`
* {
    font-family: "Microsoft YaHei",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857;
}
* {
    box-sizing: border-box;
}
background-color: #012248;
.carousel {
    background-color: #012248;
    position: relative;
}
.section {
    display:block;
}
.featured-products {
    margin-top: -248px;
    background:transparent;
}
.featured-products ul{
    list-style:none;
    margin-bottom:0
    margin-right:-15px;
    margin-left:-15px;
}
.featured-products .card,
.featured-products .card-btn-group,
.featured-products .card-img-wrapper,
.featured-products .card-img-wrapper-top,
.featured-products .card-img-wrapper-bottom,
.featured-products .card-img,
.featured-products .card-img-top {
	border-radius: 0
}

            `}</style>
            </>
        )
    }
}

export default Dash;