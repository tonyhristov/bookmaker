import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SortContext from '../../context';
import ControllerImg from '../../images/controller.png';

function Navbar() {
    const [wayToSort, setWayToSort] = useState('League');
    const context = useContext(SortContext);

    const handleClick = (event) => {
        event.preventDefault();
        if (wayToSort === 'Time') {
            setWayToSort('League');
        } else {
            setWayToSort('Time');
        }

        context.sorting(wayToSort);
    };

    return (
        <Container>
            <Logo src={ControllerImg} alt='controller' />
            <EsportText>Esport</EsportText>
            <SortBtn onClick={(e) => handleClick(e)} value={{ wayToSort }}>
                Sort By {wayToSort}
            </SortBtn>
        </Container>
    );
}

const Container = styled.div`
    text-align: left;
    background-color: #145da0;
    margin-top: -21px;
    height: 80px;
    display: flex;
    border-bottom: 3px white solid;
`;

const EsportText = styled.h2`
    color: white;
    padding-top: 15px;
    padding-left: 25px;
`;

const Logo = styled.img`
    width: 35px;
    height: 25px;
    padding-top: 35px;
    padding-left: 25px;
`;

const SortBtn = styled.button`
    background-color: #10bc10;
    width: 145px;
    height: 45px;
    border-radius: 10px;
    border: 2px solid #10bc10;
    margin-top: 27px;
    margin-left: 30px;

    padding: 10px;

    :hover {
        background-color: white;
        border: white;
        padding: 10px;
    }
`;

export default Navbar;
