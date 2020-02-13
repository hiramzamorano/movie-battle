const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'd0812526',
            s: searchTerm
        }
    });
    console.log(response.data);
};

const input = document.querySelector('input');

let timeoutID;
const onInput = event => {
    if(timeoutID) {
        clearTimeout(timeoutID);
    }
   timeoutID = setTimeout(() => {
        fetchData( event.target.value);
    }, 1000);  
};

input.addEventListener('input', onInput);

