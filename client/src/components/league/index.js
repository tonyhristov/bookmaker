import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Event from '../../components/event';
import SortContext from '../../context';
import { filterMatchesByDate, filterMatchesByEvent } from '../../utils/filterEvents';
import { splitName } from '../../utils/helpers';

function League(props) {
    // const [showLeague, setShowLeague] = useState(false);
    const context = useContext(SortContext);

    const checkSort = () => {
        if (context.sort === 'T') {
            return false;
        } else {
            return true;
        }
    };

    const renderLeague = (match) => {
        const template = () => {
            return (
                <div>
                    <LeagueContainer categoryId={match[0].$.CategoryID} key={match[0].$.ID} isLive={match[0].$.IsLive}>
                        <Text>{splitName(match[0].$.Name, 2)}</Text>
                        <ResultContainer>
                            <Bet>1</Bet>
                            <Bet>X</Bet>
                            <Bet>2</Bet>
                        </ResultContainer>
                    </LeagueContainer>

                    <Event props={match[0]} />
                    {/* <Event props={match[0].Match} /> */}
                </div>
            );
        };

        const showLeague = checkSort();

        if (showLeague) {
            return (
                <div>
                    <GameContainer>
                        <GameText>{splitName(match[0].$.Name, 1)}</GameText>
                    </GameContainer>
                    <div>{template()}</div>
                </div>
            );
        } else {
            return <div>{template()}</div>;
        }
    };

    /*
    
    if (wayToSort === 'League') {
            console.log('here');
            const res = filterMatchesByEvent(context.events);
            arr.push(res.events);
            context.sortEvents(arr[0]);
        } else {
            console.log('not here');
            const res = filterMatchesByDate(context.events);
            console.log(res);
            arr.push(res.events);
            context.sortEvents(arr[0]);
        }

        context.sorting(wayToSort);
    */

    return (
        <div>
            {props.props.map((match) => (
                <div>{renderLeague(match)}</div>
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

const GameContainer = styled.div`
    background-color: #145da0;
    padding: 1px;
`;

const GameText = styled.h2`
    color: white;
    padding-left: 35px;
`;

const Text = styled.p`
    padding-left: 35px;
`;

const Bet = styled.h3`
    text-align: center;
`;

export default League;
