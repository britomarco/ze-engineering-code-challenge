import React from 'react';
import SearchBox from '../static/SearchBox'

export default (props) => {
    return (
        <SearchBox onKeyDown={e => {
            if (e.key === "Enter")
                props.onKeyDown(e.target.value)
        }
        } />
    );
}
