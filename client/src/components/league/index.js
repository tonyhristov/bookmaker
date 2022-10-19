import React, { useContext } from 'react';
import styled from 'styled-components';
import Event from '../../components/event';
import SortContext from '../../context';
import { splitName } from '../../utils/helpers';

function League(props) {
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
                    <LeagueContainer categoryId={match[0].$.CategoryID} isLive={match[0].$.IsLive}>
                        <Text>{splitName(match[0].$.Name, 2)}</Text>
                        <ResultContainer>
                            <Bet>1</Bet>
                            <Bet>X</Bet>
                            <Bet>2</Bet>
                        </ResultContainer>
                    </LeagueContainer>

                    <Event props={match[0]} />
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

    const sortLeagues = (props) => {
        if (checkSort()) {
            const arr = [];

            for (let i = 0; i < props.length; i++) {
                arr.push(props[i]);
            }

            const arrayHashmap = arr.reduce((obj, item) => {
                if (obj[item[0].$.CategoryID]) {
                    item[0].Match.forEach((element) => {
                        obj[item[0].$.CategoryID][0].Match.push(element);
                    });
                } else {
                    obj[item[0].$.CategoryID] = { ...item };
                }

                return obj;
            }, {});
            const objArray = Object.values(arrayHashmap);

            const mergedArray = [];
            objArray.map((x) => {
                mergedArray.push([x[0]]);
                return true;
            });

            return mergedArray;
        } else {
            return props;
        }
    };

    return (
        <div>
            {sortLeagues(props.props).map((match) => {
                return <div>{renderLeague(match)}</div>;
            })}
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
