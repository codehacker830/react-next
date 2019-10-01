
//import css
import './style.css';

const LatestNews = () => (
    <>
        <section className="section marquee-section"> 
            <a href="http://hackbet.com/home"  target="_blank">
                <div className="container-fluid">  
                    <div className="marquee-label"> Latest News: </div> 
                        <div className="marquee-wrapper"> 
                            <ul className="marquee">  
                            </ul> 
                    </div>      
                </div>
            </a>
        </section>
    </>
);

export default LatestNews;