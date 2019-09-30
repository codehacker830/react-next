
//import css
import './style.css';

const LatestNews = () => (
    <>
        <section className="section marquee-section"> 
            <div className="container-fluid">  
                <div className="marquee-label"> Latest News: </div> 
                    <div className="marquee-wrapper"> 
                        <ul className="marquee">  
                        </ul> 
                </div>      
            </div>
        </section>
    </>
);

export default LatestNews;