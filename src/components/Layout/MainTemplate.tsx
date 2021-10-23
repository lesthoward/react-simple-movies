import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';

const MainTemplate = () => {
    return (
        <>
            <Header/>
            <main>
                <BrowserRouter>
                    <Route path="/" component={Homepage}/>
                </BrowserRouter>
            </main>
        </>
    );
};

export default MainTemplate;