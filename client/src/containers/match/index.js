import React, { useState, useContext, useEffect } from 'react';

import League from '../../components/league';
import getData from '../../utils/getData';

function Match() {
    const [matches, setMatches] = useState([]);

    const getMatches = async () => {
        const matches = await getData();
        const matchesArr = [];

        matches.XmlSports.Sport[0].Event.forEach((element) => {
            matchesArr.push([element]);
        });

        setMatches(matchesArr);
    };

    useEffect(() => {
        getMatches();
    }, []);

    return (
        <div>
            <League props={matches} />
        </div>
    );
}

export default Match;
