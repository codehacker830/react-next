import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
//import components
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';
//import css
// import css from "../../../../static/extras.css"

class PromotionPage extends React.Component {
    render() {
        return (
            <>
            <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            </Head>
            <div>
                <Header/>
                <div className="promotions">
                    <div className="main-container">
                        <section className="section marquee-section"> 
                            <div className="container">  
                                <div className="marquee-label"> Latest News: </div> 
                                <div className="marquee-wrapper"> 
                                    <ul className="marquee" ></ul> 
                                </div>
                            </div>
                        </section>
                        <section className="section container"> 
                            <ul className="nav nav-tabs nav-justified category-section">  
                                <li className="nav-item"> <Link href="/promotions"><a >All</a></Link> </li>  
                                <li className="nav-item"> <Link href="/promotions"><a >Live Casino</a></Link> </li>  
                                <li className="nav-item"> <Link href="/promotions"><a >Lottery</a></Link> </li>  
                                <li className="nav-item"> <Link href="/promotions"><a >Slots</a></Link> </li>  
                                <li className="nav-item"> <Link href="/promotions"><a >Special</a></Link> </li>  
                                <li className="nav-item"> <Link href="/promotions"><a >Sports</a></Link> </li>  
                            </ul> 
                            <h2 className="category-header sr-only">slot</h2> 
                            <ul className="cards row">  
                                <li className="no-result text-center"> 
                                    <h1 className="display-1 data-icon icon-warning-o"></h1> 
                                    <h5>No Promos found for this category</h5> 
                                </li>   
                            </ul>  
                        </section>  
                    </div>
                </div>
                <Footer/>
            </div>
            <style jsx>{`
                h5{
                font-size:14px;
                }
                * {
                    font-family: "Microsoft YaHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    font-size: 14px;
                font-weight: 300;
                    
                    line-height: 1.42857;
                    color: #fff;
                    background-color: #041A35;
                }
                            
                .promotions {
                    background-color: #041A35;
                    margin: 0;
                    padding:1px 0;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box
                }

                .container {
                    margin-right: auto;
                    margin-left: auto;
                    padding-left: 15px;
                    padding-right: 15px
                }

                .container:before,
                .container:after {
                    content: " ";
                    display: table
                }

                .container:after {
                    clear: both
                }
                @media (min-width: 320px) {
                    .container {
                        width: 300px
                    }
                }
                @media (min-width: 520px) {
                    .container {
                        width: 480px
                    }
                }
                @media (min-width: 768px) {
                    .container {
                        width: 750px
                    }
                }

                @media (min-width: 992px) {
                    .container {
                        width: 980px
                    }
                }

                @media (min-width: 1200px) {
                    .container {
                        width: 1180px
                    }
                }

                .main-container .marquee-section {
                    margin: 10px auto
                }


                .marquee-section {
                    overflow: hidden;
                    color: #fff;
                    padding: 0 !important;
                    height: 40px;
                    border: 1px solid #094484;
                    background-color: #062448;
                    border-radius: 4px;
                    margin: 10px auto;
                    margin-right: auto;
                    margin-left: auto;
                    padding-left: 15px;
                    padding-right: 15px
                }

                .marquee-section:before,
                .marquee-section:after {
                    content: " ";
                    display: table
                }

                .marquee-section:after {
                    clear: both
                }

                @media (min-width: 768px) {
                    .marquee-section {
                        width: 750px
                    }
                }

                @media (min-width: 992px) {
                    .marquee-section {
                        width: 1230px
                    }
                }

                @media (min-width: 1200px) {
                    .marquee-section {
                        width: 1230px
                    }
                }

                .marquee-section .marquee-label,
                .marquee-section .marquee-wrapper {
                    position: relative;
                    vertical-align: top;
                    height: 40px;
                    line-height: 40px
                }

                .marquee-section>.container {
                    position: relative
                }

                .marquee-section .marquee-label {
                    float: left;
                    margin-right: 10px;
                    width: 110px;
                    color: #FFCB01;
                    text-transform: uppercase;
                    font-size: 14px
                }

                .marquee-section .marquee-wrapper {
                    float: left;
                    cursor: pointer;
                    width: calc(100% - 120px)
                }

                .marquee-section .marquee-wrapper>.marquee {
                    margin: 0;
                    padding: 0
                }

                .marquee-section .marquee-wrapper>.marquee li {
                    margin-right: 30px
                }

                .marquee-section .marquee {
                    padding-left: 0;
                    list-style: none;
                    margin-left: -5px
                }

                .marquee-section .marquee>li {
                    display: inline-block;
                    padding-left: 5px;
                    padding-right: 5px;
                    line-height: 40px;
                    -webkit-transition: color 0.3s;
                    -o-transition: color 0.3s;
                    transition: color 0.3s
                }

                .marquee-section .marquee:hover * {
                    color: #fff
                }

                .promotions .category-section {
                    margin: 30px auto
                }

                .promotions .card-title {
                    color: #FFCB01
                }

                .promotions .card-img-wrapper::before,
                .promotions .card-img-wrapper-top::before,
                .promotions .card-img-wrapper-bottom::before {
                    content: '';
                    text-align: center;
                    pointer-events: none;
                    position: absolute;
                    z-index: 2;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0);
                    border-radius: 4px;
                    -webkit-transition: 0.3s;
                    -o-transition: 0.3s;
                    transition: 0.3s
                }

                .promotions .card-img-wrapper,
                .promotions .card-img-wrapper-top,
                .promotions .card-img-wrapper-bottom,
                .promotions .card-img-wrapper:before,
                .promotions .card-img-wrapper-top:before,
                .promotions .card-img-wrapper-bottom:before {
                    border-radius: 4px 4px 0 0
                }

                .promotions .card-img-wrapper:after,
                .promotions .card-img-wrapper-top:after,
                .promotions .card-img-wrapper-bottom:after {
                    content: "\e976";
                    font: 64px 'icon-base' !important;
                    color: #FFCB01;
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    pointer-events: none;
                    z-index: 2;
                    -webkit-transform: translateY(-50%);
                    -moz-transform: translateY(-50%);
                    transform: translateY(-50%);
                    -webkit-transition: 0.3s;
                    -o-transition: 0.3s;
                    transition: 0.3s;
                    opacity: 0;
                    filter: alpha(opacity=0)
                }

                .promotions .card-img-top {
                    width: 100%;
                    height: auto;
                    -webkit-transition: 0.4s;
                    -o-transition: 0.4s;
                    transition: 0.4s;
                    -webkit-backface-visibility: hidden
                }

                .promotions .card-footer {
                    border-top: 0;
                    padding-top: 0;
                    text-align: center;
                    background-color: transparent
                }

                .promotions .card-footer .btn {
                    display: inline-block;
                    width: calc(50% - 6px);
                    border-radius: 4px !important;
                    padding: 10px 12px
                }

                .promotions .card-footer .btn+.btn {
                    margin-left: 12px
                }

                .promotions .card-footer .btn-secondary {
                    color: #fff;
                    background-color: transparent;
                    border-color: #fff
                }

                .promotions .card:hover,
                .promotions .card:focus {
                    -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3)
                }

                .promotions .card:hover .card-img-top,
                .promotions .card:focus .card-img-top {
                    -webkit-filter: blur(3px);
                    -moz-filter: blur(3px);
                    filter: blur(3px)
                }

                .promotions .card:hover .card-img-wrapper,
                .promotions .card:hover .card-img-wrapper-top,
                .promotions .card:hover .card-img-wrapper-bottom,
                .promotions .card:focus .card-img-wrapper,
                .promotions .card:focus .card-img-wrapper-top,
                .promotions .card:focus .card-img-wrapper-bottom {
                    -webkit-box-shadow: 0 2px 0 #FFCB01;
                    box-shadow: 0 2px 0 #FFCB01
                }

                .promotions .card:hover .card-img-wrapper:before,
                .promotions .card:hover .card-img-wrapper-top:before,
                .promotions .card:hover .card-img-wrapper-bottom:before,
                .promotions .card:focus .card-img-wrapper:before,
                .promotions .card:focus .card-img-wrapper-top:before,
                .promotions .card:focus .card-img-wrapper-bottom:before {
                    background-color: rgba(0, 0, 0, 0.5)
                }

                .promotions .card:hover .card-img-wrapper:after,
                .promotions .card:hover .card-img-wrapper-top:after,
                .promotions .card:hover .card-img-wrapper-bottom:after,
                .promotions .card:focus .card-img-wrapper:after,
                .promotions .card:focus .card-img-wrapper-top:after,
                .promotions .card:focus .card-img-wrapper-bottom:after {
                    opacity: 1;
                    filter: alpha(opacity=100);
                    z-index: 3
                }

                .nav>li>a {
                    -webkit-transition: 0.3s;
                    -o-transition: 0.3s;
                    transition: 0.3s
                }

                .nav .open>a,
                .nav .open>a:hover,
                .nav .open>a:focus {
                    border-color: #23324E
                }

                .nav-tabs>li>a {
                    margin-right: 1px;
                    color: #fff;
                    background-color: rgba(35, 50, 78, 0.5);
                    border-radius: 4px 4px 0 0
                }

                .nav-tabs>.disabled>a,
                .nav-tabs>.disabled>a:hover,
                .nav-tabs>.disabled>a:focus {
                    border-color: rgba(0, 0, 0, 0);
                    background-color: rgba(0, 0, 0, 0)
                }

                .nav-tabs-justified>li>a,
                .nav-tabs.nav-justified>li>a {
                    border-radius: 4px
                }

                @media (min-width: 768px) {
                    .nav-tabs-justified>li>a,
                    .nav-tabs.nav-justified>li>a {
                        border-radius: 4px 4px 0 0
                    }
                }

                .nav-tabs.nav-justified {
                    border: 0;
                    border-radius: 4px;
                    background-color: #23324E;
                    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3)
                }

                .nav-tabs.nav-justified li {
                    width: 1%;
                    display: table-cell;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    -webkit-transition: 0.3s;
                    -o-transition: 0.3s;
                    transition: 0.3s
                }

                .nav-tabs.nav-justified li:first-child,
                .nav-tabs.nav-justified li:first-child a {
                    border-radius: 4px 0 0 4px
                }

                .nav-tabs.nav-justified li:last-child,
                .nav-tabs.nav-justified li:last-child a {
                    border-radius: 0 4px 4px 0
                }

                .nav-tabs.nav-justified li>a {
                    display: block;
                    border-radius: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #fff
                }

                .nav-tabs.nav-justified li:not(.disabled):hover,
                .nav-tabs.nav-justified li:not(.disabled):focus {
                    color: #fff;
                    background-color: #1b871b;
                    border-color: #1b871b
                }

                .nav-tabs.nav-justified li:not(.disabled):hover,
                .nav-tabs.nav-justified li:not(.disabled):hover a,
                .nav-tabs.nav-justified li:not(.disabled):focus,
                .nav-tabs.nav-justified li:not(.disabled):focus a {
                    color: #fff
                }

                .nav-tabs.nav-justified li:not(.disabled).active {
                    background-color: #23B223;
                    border-color: #23B223
                }

                .nav-tabs.nav-justified li:not(.disabled).active,
                .nav-tabs.nav-justified li:not(.disabled).active a {
                    color: #fff
                }

                .nav-tabs.nav-justified li>a,
                .nav-tabs.nav-justified li>a:hover,
                .nav-tabs.nav-justified li>a:focus,
                .nav-tabs.nav-justified li.active>a,
                .nav-tabs.nav-justified li.active>a:hover,
                .nav-tabs.nav-justified li.active>a:focus,
                .nav-tabs.nav-justified li.disabled>a,
                .nav-tabs.nav-justified li.disabled>a:hover,
                .nav-tabs.nav-justified li.disabled>a:focus {
                    border-color: transparent;
                    background-color: transparent
                }
            `}</style>
            </>
        )
    }
}

export default PromotionPage;