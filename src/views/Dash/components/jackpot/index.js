import './style.css';

const JackPot = () => (
    <section data-widget="jackpot_main" className="section jackpot-section">
        <div className="container">
            <i className="fa fa-diamond" style={{color:"#39f", fontSize:"25px", marginBottom:"5px"}}></i>
            <div className="jackpot-label">Jackpot</div>

            <h1 className="jackpot-value">
                <span className="currency">$</span> 
                <span data-js="jackpot-value-main" className="odometer odometer-theme-default    odometer-animating-up odometer-animating">
                    <div className="odometer-inside">
                        <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                                <span className="odometer-ribbon">
                                    <span className="odometer-ribbon-inner">
                                        <div className="odometer-value odometer-last-value odometer-first-value"></div>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                </span>
            </h1>
        </div>
    </section>
)

export default JackPot;