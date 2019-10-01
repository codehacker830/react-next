
import './style.css'

const BtnBordered = props => (
    <>
        <a className="btn btn-bordered" data-hook="link" href="/slots"> {props.children} 
            <span className="data-icon icon-angle-right"></span> 
        </a>
    </>
)

export default BtnBordered;