import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import MainTemplate from './components/Layout/MainTemplate';
import { AuthProvider } from './context/AuthContext';
const App = () => {

    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Route path="/" component={MainTemplate}/>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
};

export default App;