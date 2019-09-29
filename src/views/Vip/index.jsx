import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Head from "next/head";
//import components
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';

class VipPage extends React.Component {
    render() {
        return (
            <>
            <div>
                <Head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                </Head>
                <Header/>
                <div className="cannas_container">
                    <div className="main-container">
                        <div className="container responsible-gambling-static static-content">
                            <h2 className="page-header">Responsible Gaming</h2>
                            <p>Gambling is a form of entertainment, and should never become a burden on your life either financially or emotionally. We want our players to have fun while playing at Gameplay Interactive, so we encourage responsible gaming. Borrowing money to play, spending above your budget or using money allocated for other purposes is not only unwise but may lead to serious problems for you and people around you.</p>
                            <p>We want you to enjoy playing on Gameplay Interactive, so bet responsibly and have fun!</p><p>All our Customer Service staff have attended and passed problem gambling training. If you want to talk about such issues, please feel free to contact us. We provide help in such regards:</p>
                            <ul>
                                <li>Self-Assessment</li>
                                <li>Managing Your Betting</li>
                                <li>Managing Your Deposit Limits</li>
                                <li>Parental Controls</li>
                                <li>Help and Suggestions</li>
                            </ul>
                            <br/>
                            <h4>Self-Assessment</h4>
                            <p>If you are concerned that gambling may have taken over your (or someone else’s) life, you may find following questions will be useful:</p>
                            <p>1. Do you gamble to escape from a boring or unhappy life?</p>
                            <p>2. When you lose all of your money, do you feel lost and in despair and need to gamble again as soon as possible?</p><p>3. Do you gamble until your last penny is gone, even the fare home or the cost of a cup of tea?</p>
                            <p>4. Have you ever lied to cover up the amount of money or time you have spent gambling?</p>
                            <p>5. Have you lost interest in your family, friends or hobbies because of your gambling?</p>
                            <p>6. After losing, do you feel you must try and win back your losses as soon as possible?</p>
                            <p>7. Do arguments, frustrations or disappointments make you want to gamble?</p>
                            <p>8. Do you feel depressed or even want to suicide because of your gambling?</p>
                            <p>The more you answer ‘yes’ to these questions, the more likely you are to have a serious gambling problem.</p>
                            <p>To speak to someone about this you can Contact Us or other organizations, like Gambling Therapy（https://www.gamblingtherapy.org/）, for free and independent advice.</p>
                            <br/>
                            <h4>Managing Your Betting</h4>
                            <p>Whilst the majority of people do gamble within their means, for some, gambling can become a problem.</p>
                            <p>It may help you to remember the following:</p>
                            <p>1. Gambling should be entertaining and not be seen as a way of making money.</p>
                            <p>2. Avoid chasing losses.</p>
                            <p>3. Only gamble what you can afford to lose.</p>
                            <p>4. Keep track of the time and amount you spend gambling.</p>
                            <p>5. You can monitor or restrict your access to gambling sites with software such as GamBlock, which is available for mobile and tablet at
                                <a href="http://www.gamblock.com/">www.gamblock.com</a>, or Betfilter at <a href="http://www.betfilter.com/">www.betfilter.com</a>.</p>
                            <p>6. If you need to talk to someone about gambling problem, please contact us or other gambling therapy consulting organizations mentioned above.</p>
                            <br/>
                            <h4>Managing Deposit Limits</h4>
                            <p>If you want to change or lower your deposits limits, please contact us by clicking the online chat icon on our site. Our customer service representative will be ready there to help you with limits adjustment.</p>
                            <br/>
                            <h4>Parental Controls</h4>
                            <p><strong>Under Age Gambling</strong> 
                            <br/>It is against the law for those under 18 to gamble and Gameplay Interactive takes its responsibilities in this regard very seriously. We carry out electronic age verification checks on customers and may also ask for backup documentation. Anyone under the age of 18 found to be using the site will have any winnings forfeited and may also be reported to the appropriate authorities.</p>
                            <p>There are a number of third party applications that parents or guardians can use to monitor or restrict the use of their computer's access to the Internet:</p><p>1. Net Nanny filtering software protects children from inappropriate web content:<a href="https://www.netnanny.com/">www.netnanny.com</a></p><p>2. CYBERsitter filtering software allowing parents to add their own sites to block:<a href="https://www.cybersitter.com/">www.cybersitter.com</a>.</p>
                            <p>3. GamBlock is a software which blocks access to gambling websites. A warning message will be displayed when a gambling site is detected and the browser will be shut down. This is also available for mobile and tablet:<a href="http://www.gamblock.com/">www.gamblock.com</a></p>
                            <p>4. Betfilter is an anti-gambling software which blocks access to gambling websites. When a gambling website is selected it does not allow the website to open and displays Page Not Found:<a href="http://www.betfilter.com/">www.betfilter.com</a></p>
                            <br/>
                            <h4>Help and Suggestions</h4>
                            <p>To ensure you have access to the support you need, please use the following directory of resources that are available to provide free and confidential advice about any concerns you may have.</p>
                            <p><strong>GamCare</strong> 
                            <br/> GamCare is a registered charity that provides confidential telephone support and counselling to anyone who is affected by problem gambling. GamCare can be contacted on 0808 8020 133 (freephone from UK) or by visiting their website: <a href="http://www.gamcare.org.uk/">www.gamcare.org.uk</a>.</p>
                            <p><strong>GambleAware</strong> 
                            <br/> GambleAware aims to promote responsibility in gambling and offers a program which seeks to minimize problem gambling and provides help and support for anyone affected. Further information can be found on here: <a href="http://www.gambleaware.org/">www.gambleaware.org</a>.</p>
                            <p><strong>Gambling Therapy</strong> 
                            <br/> Gambling Therapy is a non-profit organization which offers support to those addicted to gambling and those who show problematic gambling behavior. Further information can be found by on their website: <a href="http://www.gamblingtherapy.org/">www.gamblingtherapy.org</a>.</p>
                            <p><strong>Gamblers Anonymous</strong> 
                            <br/> Gamblers Anonymous provides confidential telephone support and counselling to anyone who is affected by problem gambling. Further information can be found by visiting their website: <a href="http://www.gamblersanonymous.org/">www.gamblersanonymous.org</a>.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            <style jsx>{`
                h1,h2,h3,h4,h5,h6 
                {
                font-weight:300;
                font-family: inherit;
                line-height: 1.1;
                color: #fff;
                }
                * {
                font-family: "Microsoft YaHei",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
                font-size: 14px;
                line-height: 1.42857;
                color: #fff;
                }
                a {
                -webkit-transition: color 0.3s;
                -o-transition: color 0.3s;
                transition: color 0.3s
                }

                a {
                    color: #FFCB01;
                }
                a:hover,
                a:focus {
                    color: rgba(255, 255, 255, 0.5);
                    text-decoration:none;
                }
                p {
                    margin: 0 0 10px;
                }
                .cannas_container {
                    margin: 0;
                    padding: 0;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    background-color: #041A35;
                    color:white;
                }

                .static-content {
                    padding-top: 30px;
                    padding-bottom: 30px
                }

                .static-content .page-header {
                    font-size: 36px;
                    padding-bottom: 0;
                    border-bottom: 0;
                    margin-top: 0
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

                @media (min-width: 768px) {
                    .container {
                        width: 750px
                    }
                }

                @media (min-width: 992px) {
                    .container {
                        width: 1230px
                    }
                }

                @media (min-width: 1200px) {
                    .container {
                        width: 1230px
                    }
                }
            `}</style>
            </>
        )
    }
}

export default VipPage;