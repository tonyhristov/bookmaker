import React, { useEffect, useState } from 'react';
import getData from '../../utils/getData';

function Data() {
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
        <div style={{ background: 'red' }}>
            {matches.map((match) => (
                <div>
                    <p>{match[0].$.CategoryID}</p>
                </div>
            ))}
        </div>

        // <div>
        //     <p>maksakdjla</p>
        // </div>
    );
}

export default Data;
