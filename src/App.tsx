import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import MainTemplate from './components/Layout/MainTemplate';
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route path="/" component={MainTemplate}/>
            </BrowserRouter>
        </>
    );
};

export default App;