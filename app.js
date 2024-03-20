// console.log("Let's get this party started!");
const searchContainer = document.querySelector('#search-container');
const gifContainer = document.querySelector('#gif-container');
const searchTextBar = document.querySelector('#search');
const submitButton = document.querySelector('#submit-button');
const removeButton = document.querySelector('#remove-button');


//function that gets current search bar term when clicked
const getSearchText = () => {
    return searchTextBar.value;
} 

//function that gets current search bar term when clicked
async function getGifFromApi(){
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: getSearchText(),
      api_key: "hfZXlutcwGvC3zYS2pDw8vGEoVT8pRu1"
    }})

    let newUrl = response.data.data[0].images.original.url;
    addGifToPage(newUrl);
}

// functiton that adds new gif to page
function addGifToPage(url){
    const newGif = document.createElement('img');
    newGif.src = `${url}`;
    gifContainer.append(newGif);
}


// handles click on submit button
submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    getGifFromApi();
    searchTextBar.value = '';
})

// removes all gifs when remove button is clicked
removeButton.addEventListener('click', (event) => {
    gifContainer.innerHTML = '';
})



