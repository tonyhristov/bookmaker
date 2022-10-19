export const splitName = (leagueName, part) => {
    const splittedName = leagueName.split(',');

    return splittedName[part - 1];
};
