import React from 'react';
import styled from 'styled-components';
import Moment from 'moment';
import LockImage from '../../images/lock-icon-29056.png';

function Event(props) {
    const dateFormatter = (dateInput) => {
        const date = Moment(dateInput).format('DD-MM-YYYY');
        return date;
    };

    const oddSelectorOne = (bet) => {
        const oddsObj = {
            one: [],
        };

        bet.forEach(function (odds) {
            odds.Odd.forEach((odd) => {
                if (odd.$.Name == '1') {
                    oddsObj.one = odd;
                }
            });
        });

        if (oddsObj.one.$) {
            return <Odd>{oddsObj.one.$.Value}</Odd>;
        } else {
            return <Lock src={LockImage} alt='Suspended' />;
        }
    };

    const oddSelectorEqual = (bet) => {
        const oddsObj = {
            equal: [],
        };

        bet.forEach(function (odds) {
            odds.Odd.forEach((odd) => {
                if (odd.$.Name == 'X') {
                    oddsObj.equal = odd;
                }
            });
        });

        if (oddsObj.equal.$) {
            return <Odd>{oddsObj.equal.$.Value}</Odd>;
        } else {
            return <Lock src={LockImage} alt='Suspended' />;
        }
    };

    const oddSelectorTwo = (bet) => {
        const oddsObj = {
            two: [],
        };

        bet.forEach(function (odds) {
            odds.Odd.forEach((odd) => {
                if (odd.$.Name == '2') {
                    oddsObj.two = odd;
                }
            });
        });

        if (oddsObj.two.$) {
            return <Odd>{oddsObj.two.$.Value}</Odd>;
        } else {
            return <Lock src={LockImage} alt='Suspended' />;
        }
    };

    return (
        <div>
            {props.props.Match.map((match) => (
                <div key={match.$.ID}>
                    <EventContainer id='matches' matchType={match.$.MatchType}>
                        <MatchInfo id='match-info'>
                            <Date>{dateFormatter(match.$.StartDate)}</Date>

                            <Name>{match.$.Name}</Name>
                        </MatchInfo>
                        <ResultContainer>
                            {oddSelectorOne(match.Bet)}
                            {oddSelectorEqual(match.Bet)}
                            {oddSelectorTwo(match.Bet)}
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

const Lock = styled.img`
    width: 35px;
    height: 25px;

    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
`;
