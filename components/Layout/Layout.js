import React, { Component } from 'react';
import style from './Layout.module.css';

class Layout extends Component {
    render() {
        return(
            <div className={style.header}>
                <div className={style.topHeader}>
                    <div className={style.logo}>SKILL.US</div>
                    <i className="fas fa-user" />
                </div>
                <ul className={style.pages}>
                    <li className={style.pageItem}>
                        <i className="fas fa-home" />
                        <span>Inicio</span>
                    </li>
                    <li className={style.pageItem}>
                        <i className="fas fa-star" />
                        <span>Pool de talentos</span>
                    </li>
                    <li className={style.pageItem}>
                        <i className="fas fa-book" />
                        <span>Wiki</span>
                    </li>
                    <li className={style.pageItem}>
                        <i className="fas fa-search" />
                        <span>Procurar</span>
                    </li>
                </ul>
            </div>
        );
    };
};

export default Layout;
