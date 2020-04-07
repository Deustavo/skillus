import React, { Component } from 'react';
import ActiveLink from './ActiveLink';
import style from './Topbar.module.scss';

class Topbar extends Component {
    constructor() {
        super();
        this.state = {
            logged: false
        }
    }
    render() {
        return(
            <div className={style.header}>
                <nav className={style.links}>
                    <div className={style.logo}>
                        <p>Skill.us</p>
                    </div>
                    <ActiveLink href="/login">
                        <a className={style.navItem}>Home</a>
                    </ActiveLink>
                    <ActiveLink href="/ranking">
                        <a className={style.navItem}>Ranking</a>
                    </ActiveLink>
                    <ActiveLink href="/problems">
                        <a className={style.navItem}>Problemas</a>
                    </ActiveLink>
                    <ActiveLink href="/squad">
                        <a className={style.navItem}>Squad</a>
                    </ActiveLink>
                </nav>
                <div className={style.user}>
                    {this.state.logged ?
                        <i className="fas fa-user" />
                        :
                        <div className={style.loginOptions}>
                            <p>Login</p>
                            <p>Sign in</p>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Topbar;
