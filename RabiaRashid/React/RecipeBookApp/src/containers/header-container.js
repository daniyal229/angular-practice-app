import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut, saveRecipesToServer, fetchRecipesFromServer } from '../actions/index';
import Dropdown from '../components/dropdown';

class Header extends Component {

    componentDidMount() {
        this.dropdown = new Dropdown();
    }

    renderAuthTabs() {
        if(this.props.auth.loggedIn) {
            return(
                <React.Fragment>
                    {/* Dropdown  */}
                    <li className="nav-item dropdown" style={{cursor:'pointer'}}>
                        <a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" onClick={(event) => this.dropdown.toggleDropdown(event.target)}>
                        Manage
                        </a>
                        <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={ this.onSaveRecipesToServer.bind(this) }>Save data</a>
                        <a className="dropdown-item" onClick={ ()=>{this.props.fetchRecipesFromServer(this.props.auth.token)} }>Fetch data</a>
                        </div>
                    </li>
                    <li className="nav-item" style={{cursor:'pointer'}}>
                        <a className="nav-link" onClick={ this.props.logOut }>Log Out</a>
                    </li>
                </React.Fragment>
                );
        }
            
        else {
            return(
                <React.Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signin">Log In</Link>
                    </li>
                </React.Fragment>
                );
        }
    }

    onSaveRecipesToServer() {
        const { auth: { token }, recipes} = this.props;
        this.props.saveRecipesToServer(recipes, token);
    }

    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                {/* Brand  */}
                <a className="navbar-brand">Recipe Book</a>
            
                {/* Links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/recipes">Recipes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shopping">Shopping List</Link>
                    </li>   
                    {this.renderAuthTabs()}
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth, recipes }) => {
    return { auth, recipes };
}

export default connect(mapStateToProps, { logOut, saveRecipesToServer, fetchRecipesFromServer })(Header)

