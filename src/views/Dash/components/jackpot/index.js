import './style.css';

const JackPot = () => (
    <section data-widget="jackpot_main" class="section jackpot-section">
        <div class="container">
            <i class="fa fa-diamond" style={{color:"#39f", fontSize:"25px", marginBottom:"5px"}}></i>
            <div class="jackpot-label">Jackpot</div>

            <h1 class="jackpot-value">
                <span class="currency">$</span> 
                <span data-js="jackpot-value-main" class="odometer odometer-theme-default    odometer-animating-up odometer-animating">
                    <div class="odometer-inside">
                        <span class="odometer-digit">
                            <span class="odometer-digit-spacer">8</span>
                            <span class="odometer-digit-inner">
                                <span class="odometer-ribbon">
                                    <span class="odometer-ribbon-inner">
                                        <div class="odometer-value odometer-last-value odometer-first-value"></div>
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