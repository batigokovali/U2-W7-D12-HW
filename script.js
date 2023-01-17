const getImages = (query) => {
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {method: "GET",
                headers: {Authorization:"563492ad6f91700001000001b07d2d6695bb4807990af72dd4caaa46"}})
.then((rawImages)=> {
    return rawImages.json()
}).then((jsonImages)=> {
    renderImages(jsonImages.photos)
    replace9mins(jsonImages.photos)
}).catch(err => console.log(err))
}

const getForest = () => {
    fetch(`https://api.pexels.com/v1/search?query=forest`, {method: "GET",
                headers: {Authorization:"563492ad6f91700001000001b07d2d6695bb4807990af72dd4caaa46"}})
.then((rawImages)=> {
    return rawImages.json()
}).then((jsonImages)=> {
    renderCarousel(jsonImages.photos)
}).catch(err => console.log(err))
}

const renderImages = (fetchedImages) => {
    let parent = document.querySelectorAll(".card-img-top")
    for (let i = 0; i< parent.length;i++)
    {
        parent[i].setAttribute("src", `${fetchedImages[i].src.original}`)        
    }
}

function hideCards() {
    let buttons = document.querySelectorAll(".card-body button:nth-of-type(2)")
    let card = document.querySelectorAll(".card-body")
    for (let i=0; i<buttons.length; i++)
    {
        buttons[i].addEventListener("click", function()
        {
            card[i].classList.toggle("disappear")
        })
    }
}
hideCards()

const replace9mins = (photoIDs) => {
    let containers = document.querySelectorAll("small")
    
    for (i = 0; i<containers.length;i++)
    {
        containers[i].innerText = photoIDs[i].id;
    }
}

replace9mins()

function searchImages () {
    let userSearch = document.getElementById("search-field").value
    getImages(userSearch)
}

const renderCarousel = (forestImages) => {
    let parent = document.querySelectorAll(".d-block.w-100")
    for (let i = 0; i< parent.length;i++)
    {
        parent[i].setAttribute("src", `${forestImages[i].src.original}`)        
    }
}
