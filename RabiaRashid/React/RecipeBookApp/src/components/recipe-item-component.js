import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return(
        <Link className="list-group-item clearfix" to={`/recipes/${props.index}`}>
            <div className="float-left">
                <h4 className="list-group-heading">{props.recipe.name}</h4>
                <p className="list-group-text">{props.recipe.desc}</p>
            </div>
            <span className="float-right">
                <img className="img-fluid" style={{maxHeight: '50px'}} src={props.recipe.imgPath}/>
            </span>
        </Link>
    );
}
