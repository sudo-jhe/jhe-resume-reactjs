import React from 'react';
import {cvData} from "./data";
import Header from './Header';
import Body from './Body';
import Footer from "./Footer";

class Resume extends React.Component {
    render() {
        return (
            <div className="App">
                <Header data={cvData.general}/>
                <Body data={cvData}/>
                <Footer data={cvData.general}/>
            </div>
        );
    }
}

export default Resume;