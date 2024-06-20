import { Link } from 'react-router-dom';
// import { wine } from '../../assets';
import './Nav.css';

export const Nav = () => {

    return (
            <div className="nav">
                <div>
                    <Link className="active" to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
    )
}