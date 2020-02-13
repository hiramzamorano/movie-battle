const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'd0812526',
            s: 'avengers'
        }
    });
    console.log(response.data);
};

fetchData();

