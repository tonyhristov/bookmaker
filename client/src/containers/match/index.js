import React, { useContext } from 'react';
import SortContext from '../../context';

import League from '../../components/league';

function Match() {
    const context = useContext(SortContext);

    return (
        <div>
            <League props={context.events} />
        </div>
    );
}

export default Match;
