import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const MenuBar = ({ loading }) => {
    return (
        <div className="menubar" id="menu-container">
            <ul id="menu-options">
                {/* Home link */}
                <li className="menu-option">
                    <Link to="/">Home</Link>
                </li>
                {/* Add Poll link */}
                <li className="menu-option">
                    <Link to="/add">Add Poll</Link>
                </li>
                {/* Leaderboard link */}
                <li className="menu-option">
                    <Link to="/leaderboard">Leaderboard</Link>
                </li>
                {/* Conditionally render Logout component if not loading */}
                {!loading ? <Logout /> : null}
            </ul>
        </div>
    )
}

const mapStateToProps = ({ authedUser }) => ({
    // Determine if the user is still loading (null means not logged in yet)
    loading: authedUser === null,
})

export default connect(mapStateToProps)(MenuBar);
