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

    useEffect(() => {
        getEvents();
    }, []);

    const sorting = (sort) => {
        setSort(...sort);
    };

    // if (sort === 'L') {
    //     arr.push(filterMatchesByEvent(events));
    //     // setSortedMatches(filterMatchesByEvent(events));
    // } else if (sort === 'T') {
    //     arr.push(events);
    //     // setSortedMatches(events);
    // }

    const importEvents = (events) => {
        setEvents(events);
    };

    const sortEvents = (events) => {
        setEvents(events);
    };

    return <SortContext.Provider value={{ sort, sorting, events, importEvents, sortEvents }}>{props.children}</SortContext.Provider>;
}

export default App;
