import React, { Component } from 'react';
import Topbar from '../components/Layout/Topbar';

const Layout = Page => {
    return class extends Component {
        render() {
            return(
                <div>
                    <Topbar />
                    <Page />
                </div>
            );
        }
    }
}

export default Layout;
