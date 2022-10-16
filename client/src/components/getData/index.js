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

    console.log(matches);

    return (
        <div>
            {matches.map((match) => (
                <div style={{ 'border-style': 'solid' }} id='League'>
                    <h3>League</h3>
                    <p>CategoryID: {match[0].$.CategoryID}</p>
                    <p>id: {match[0].$.ID}</p>
                    <p>isLive: {match[0].$.IsLive}</p>
                    <p>Name: {match[0].$.Name}</p>

                    <div id='matches'>
                        <div id='match'>
                            <h3>Match</h3>
                            <p>Id: {match[0].Match[0].$.ID}</p>
                            <p>MatchType: {match[0].Match[0].$.MatchType}</p>
                            <p>Name: {match[0].Match[0].$.Name}</p>
                            <p>StartDate: {match[0].Match[0].$.StartDate}</p>
                        </div>
                        <div id='bet' style={{ background: 'blue' }}>
                            <h3>bets</h3>
                            <div style={{ border: 'dashed blue' }}>
                                {match[0].Match[0].Bet.map((bet) => (
                                    <div id='bet'>
                                        <div id='bet-info'>
                                            <h3>Bet Info</h3>
                                            <p>ID: {bet.$.ID}</p>
                                            <p>IsLive: {bet.$.IsLive}</p>
                                            <p>Name: {bet.$.Name}</p>
                                        </div>
                                        <div>
                                            <h3>Odds</h3>
                                            {bet.Odd.map((odd) => (
                                                <div style={{ border: 'dashed red', background: 'green' }}>
                                                    <p>
                                                        ID: {odd.$.ID} Name: {odd.$.Name} Value: {odd.$.Value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        // <div>
        //     <p>maksakdjla</p>
        // </div>
    );
}

export default Data;
