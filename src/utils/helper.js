export const getFavourites = () => {
    const favoriteBeers = localStorage.getItem("favorites");
    if (!favoriteBeers) {
        localStorage.setItem("favorites", JSON.stringify([]));
        return [];
    } else {
        return JSON.parse(favoriteBeers)
    }
}


export const setFavourites = (favorites = []) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export const checkFavourites = (beers) => {
    const favoriteBears = getFavourites();
    if (favoriteBears.length) {
        return beers.map(element => {
            const isFav = favoriteBears.find(ele => ele.id === element.id);
            if (isFav) {
                element.favourite = true;
            } else {
                element.favourite = false;
            }
            return element
        });
    } else {
        return beers.map(ele => {
            ele.favourite = false;
            return ele;
        })
    }
}