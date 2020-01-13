import React from 'react';

export default (props) => {
    return (
        <input id="search-product" type="search" onKeyDown={props.onKeyDown} placeholder="Buscar" />
    );
}
