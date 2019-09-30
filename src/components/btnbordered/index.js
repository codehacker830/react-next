
import './style.css'

const BtnBordered = props => (
    <>
        <a class="btn btn-bordered" data-hook="link" href="/slots"> {props.children} 
            <span class="data-icon icon-angle-right"></span> 
        </a>
    </>
)

export default BtnBordered;