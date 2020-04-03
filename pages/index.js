import React, { Component } from "react";
import Layout from "../components/Layout/Layout";

const Index = (Page) => {
    return class extends Component {
        render() {
            return(
                <div>
                    <Layout />
                    <Page />
                </div>
            );
        }
    };
};

export default Index;
