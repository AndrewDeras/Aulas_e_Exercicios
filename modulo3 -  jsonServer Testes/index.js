const getUrl = key => `https://resiliamodulo3.onrender.com/${key}`

const fetchPub = async key => {
    try {
        const data = await fetch(getUrl(key));
        return console.log(await data.json());
    } catch (error) {
        console.log(error);
    }
}

fetchPub('bebidas')
fetchPub('petiscos')
fetchPub('Lanches')