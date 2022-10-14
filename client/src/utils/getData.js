const getData = async () => {
    const promise = await fetch(`http://localhost:8081/matches`);

    const data = await promise.json();

    return data;
};

export default getData;
