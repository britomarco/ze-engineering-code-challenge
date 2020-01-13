import React from 'react';
import '../../styles/button.css';
import cerveja from '../../images/cerveja.png'
import destilados from '../../images/destilados.png'
import outros from '../../images/outros.png';
import pesticos from '../../images/pesticos.png';
import alcool from '../../images/sem-alcool.png';
import vinho from '../../images/vinho.png';


export default (props) => {

    const categories = props.categories || [];

    const icon = {
        "94": cerveja,
        "95": destilados,
        "92": vinho,
        "96": alcool,
        "97": pesticos,
        "98": outros
    }

    return (

        <div className="category-container">
            {
            categories.map(category => {

                return <button
                    className="btn-category"
                    key={category.id}
                    value={category.id}
                    onClick={props.onClick}><img src={icon[category.id]}/>{category.title}</button>
            })
            }
        </div>

    );
}
