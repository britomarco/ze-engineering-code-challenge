import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/header.css'
import zeLogo from '../../images/ze-delivery-logo.png'

export default () => (
    <header className="header">
        <div className="container">
            <div className="box-header">
                <div className="box-header-logo">
                    <Link to="/">
                        <img className="img-logo" src={zeLogo} alt={`Zé Delivery`} />
                    </Link>
                </div>
                <div className="box-basket">
                    <Link to="#">
                        <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-cart" viewBox="0 0 20 20">
                            <path fill="#444" d="M18.936 5.564c-.144-.175-.35-.207-.55-.207h-.003L6.774 4.286c-.272 0-.417.089-.491.18-.079.096-.16.263-.094.585l2.016 5.705c.163.407.642.673 1.068.673h8.401c.433 0 .854-.285.941-.725l.484-4.571c.045-.221-.015-.388-.163-.567z"></path><path fill="#444" d="M17.107 12.5H7.659L4.98 4.117l-.362-1.059c-.138-.401-.292-.559-.695-.559H.924c-.411 0-.748.303-.748.714s.337.714.748.714h2.413l3.002 9.48c.126.38.295.52.942.52h9.825c.411 0 .748-.303.748-.714s-.336-.714-.748-.714zM10.424 16.23a1.498 1.498 0 1 1-2.997 0 1.498 1.498 0 0 1 2.997 0zM16.853 16.23a1.498 1.498 0 1 1-2.997 0 1.498 1.498 0 0 1 2.997 0z"></path>
                        </svg>
                        Carrinho
                    </Link>
                </div>
            </div>
        </div>
    </header>
);
