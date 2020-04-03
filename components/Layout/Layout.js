import React, { Component } from 'react';
import ActiveLink from "./ActiveLink";
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
                    <ActiveLink href="/">
                        <li className={style.pageItem}>
                            <i className="fas fa-home" />
                            <span>Inicio</span>
                        </li>
                    </ActiveLink>
                    <ActiveLink href="/ranking">
                        <li className={style.pageItem}>
                            <i className="fas fa-star" />
                            <span>Ranking</span>
                        </li>
                    </ActiveLink>
                    <ActiveLink href="/problemas">
                        <li className={style.pageItem}>
                            <i className="fas fa-book" />
                            <span>Problemas</span>
                        </li>
                    </ActiveLink>
                    <ActiveLink href="/squads">
                        <li className={style.pageItem}>
                            <i className="fas fa-users" />
                            <span>Squads</span>
                        </li>
                    </ActiveLink>
                    <li className={style.pageItem}>
                        <i className="fas fa-search" />
                        <input placeholder="Procurar..."></input>
                    </li>
                </ul>
            </div>
        );
    };
};

export default Layout;
