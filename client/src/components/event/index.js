import React, { useState, useContext } from 'react';
import styled from 'styled-components';

function Event(props) {
    console.log(props);

    return (
        <div>
            {props.props.map((match) => (
                <div id={match.$.ID}>
                    <EventContainer id='matches' matchType={match.$.MatchType}>
                        <MatchInfo id='match-info'>
                            <Date> {match.$.StartDate}</Date>
                            <Name>{match.$.Name}</Name>
                        </MatchInfo>
                        <ResultContainer>
                            <Odd>1</Odd>
                            <Odd>X</Odd>
                            <Odd>2</Odd>
                        </ResultContainer>
                    </EventContainer>
                </div>
            ))}
        </div>
    );
}

export default Event;

const EventContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 20px 20px;
    grid-gap: 5px;
`;
const MatchInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 5px 5px;
    grid-gap: 5px;
`;

const ResultContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 25px 25px;
    grid-gap: 5px;
`;

const Date = styled.p`
    text-align: center;
`;

const Name = styled.p`
    text-align: center;
    color: #05445e;
`;

const Odd = styled.h4`
    text-align: center;
    color: #1e8ad3;
`;

/*
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
 */
