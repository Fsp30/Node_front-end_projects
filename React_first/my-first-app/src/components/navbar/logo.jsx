import './logo.css'
import logo from '../../assets/react-2.svg'

function Logo(){
        return (
                <div className="logo">
                    <img src={logo} width="50" height="25" className="rotating"/>
                </div>
         )
}
export default Logo