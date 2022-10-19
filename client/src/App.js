import React, { useState, useEffect } from 'react';
import './App.css';
import SortContext from './context';
import getData from './utils/getData';
import { filterMatchesByDate, filterMatchesByEvent } from './utils/filterEvents';

function App(props) {
    const [sort, setSort] = useState('T');
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const events = await getData();
        const EventsArr = [];

        events.XmlSports.Sport[0].Event.forEach((element) => {
            EventsArr.push([element]);
        });
        setEvents(EventsArr);
    };

    if (sort === 'L') {
        filterMatchesByEvent(events);
    } else if (sort === 'T') {
        filterMatchesByDate(events);
    }

    useEffect(() => {
        getEvents();
    }, []);

    const sorting = (sort) => {
        setSort(...sort);
    };

    const importEvents = (events) => {
        setEvents(events);
    };

    return <SortContext.Provider value={{ sort, sorting, events, importEvents }}>{props.children}</SortContext.Provider>;
}

export default App;
