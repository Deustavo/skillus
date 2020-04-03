import React, { Component } from 'react';
import Ranking from "../components/Ranking/Ranking";
import Index from "./index";

class RankingPage extends Component {
    render() {
        return <Ranking />;
    };
};

export default Index(RankingPage);
