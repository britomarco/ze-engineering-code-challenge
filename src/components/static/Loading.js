import React from 'react';
import '../../styles/loading.css'
import logo from  '../../images/beer.gif'

export default () => (
    <div id="loading">
        <img src={logo} className="beer-loading" alt="loading"></img>
    </div>
);
