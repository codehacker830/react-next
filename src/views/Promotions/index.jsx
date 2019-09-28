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
                            <div className="contain_box">  
                                <div className="marquee-label"> Latest News: </div> 
                                <div className="marquee-wrapper"> 
                                    <ul className="marquee" ></ul> 
                                </div>
                            </div>
                        </section>
                        <section className="section contain_box"> 
                            <ul className="nav nav-tabs nav-justified category-section">  
                                <li className="active nav-item"> <Link href="/promotions"><a >All</a></Link> </li>  
                                <li className="nav-item"> <Link href="/promotions"><a >Live Casino</a></Link> </li>  
                                <li className="nav-item"> <Link href="/promotions"><a >Lottery</a></Link> </li>  
                                <li className="nav-item"> <Link href="/promotions"><a >Slots</a></Link> </li>  
                                <li className="nav-item"> <Link href="/promotions"><a >Special</a></Link> </li>  
                                <li className="nav-item"> <Link href="/promotions"><a >Sports</a></Link> </li>  
                            </ul> 
                            <ul data-js="promo-cards-container" class="cards row">

                            </ul>
                        </section>  
                    </div>
                </div>
                <Footer/>
            </div>
            <style jsx>{`
.warning {
    margin-right: auto;
    margin-left: auto;
}
.cards {
	position: relative;
	z-index: 1
}

.cards:before,
.cards:after {
	content: " ";
	display: table
}

.cards:after {
	clear: both
}

.cards .card {
	margin-bottom: 30px
}

.card {
	display: block;
	position: relative;
	background-color: #23324E;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 4px
}

.card,
.card h1,
.card h2,
.card h3,
.card h4,
.card h5,
.card h6 {
	color: #fff
}
.no-result {
	text-align: center;
	margin-bottom: 60px
}

.no-result,
.no-result h1,
.no-result h2,
.no-result h3,
.no-result h4,
.no-result h5,
.no-result h6 {
	color: #C1C3C6
}

.no-result .data-icon {
	color: #FFCB01
}

.no-result .icon-warning,
.no-result .icon-warning-o {
	color: #BA0000
}


h5{
font-size:14px;
}
* {
    font-family: "Microsoft YaHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.42857;
    color: #fff;
}
            
.promotions {
    background-color: #041A35;
    margin: 0;
    padding:1px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.contain_box {
	width: 1230px;
	max-width: none !important
}
.contain_box {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px
}

.contain_box:before,
.contain_box:after {
    content: " ";
    display: table
}

.contain_box:after {
    clear: both
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

.marquee-section>.contain_box {
    position: relative;
    margin:0px;
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

.nav-tabs {
	border-bottom: 1px solid rgba(128, 128, 128, 0.2)
}

.nav-tabs>li {
	float: left;
	margin-bottom: 0px
}

.nav-tabs>li>a {
	margin-right: 2px;
	line-height: 1.42857;
	border: 1px solid transparent;
	border-radius: 4px 4px 0 0
}

.nav-tabs>li>a:hover {
	border-color: #23324E #23324E rgba(128, 128, 128, 0.2)
}

.nav-tabs>li.active>a,
.nav-tabs>li.active>a:hover,
.nav-tabs>li.active>a:focus {
	color: #fff;
	background-color: #23B223;
	border: 1px solid #23B223;
	border-bottom-color: transparent;
	cursor: default
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