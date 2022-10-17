import React, { useState } from 'react';
import './App.css';
import SortContext from './context';

function App(props) {
    const [sort, setSort] = useState('T');

    const sorting = (sort) => {
        setSort(...sort);
    };

    return <SortContext.Provider value={{ sort, sorting }}>{props.children}</SortContext.Provider>;
}

export default App;
