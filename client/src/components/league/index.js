import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Event from '../../components/event';

function League(props) {
    return (
        <div>
            {props.props.map((match) => (
                <div>
                    <LeagueContainer categoryId={match[0].$.CategoryID} id={match[0].$.ID} isLive={match[0].$.IsLive}>
                        <Text>{match[0].$.Name}</Text>
                        <ResultContainer>
                            <Bet>1</Bet>
                            <Bet>X</Bet>
                            <Bet>2</Bet>
                        </ResultContainer>
                    </LeagueContainer>

                    <Event props={match[0].Match} />
                </div>
            ))}
        </div>
    );
}

const LeagueContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 25px 25px;
    grid-gap: 5px;
    background-color: grey;
`;

const ResultContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 25px 25px;
    grid-gap: 5px;
`;

const Text = styled.p`
    padding-left: 20px;
`;

const Bet = styled.h3`
    text-align: center;
`;

export default League;
