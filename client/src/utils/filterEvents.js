export const filterMatchesByEvent = (events) => {
    let arr = [];
    arr.push(events);
    arr[0].sort((a, b) => {
        return a[0].$.CategoryID - b[0].$.CategoryID;
    });

    return { events: arr[0] };
};

export const filterMatchesByDate = (events) => {
    let arr = [];
    arr.push(events);
    arr[0].sort((a, b) => {
        const matchesA = a[0].Match;
        const matchesB = b[0].Match;
        const dateA = matchesA.forEach((match) => {
            return match.$.StartDate;
        });
        const dateB = matchesB.forEach((match) => {
            return match.$.StartDate;
        });

        return dateA - dateB;
    });

    return { events: arr[0] };
};
