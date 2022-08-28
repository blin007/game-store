//since the rawg api does not include game prices this util function will return a price based on the game's release date
// BEFORE 2011: $ 5.99
// BEFORE 2013: $ 9.99
// BEFORE 2015: $ 19.99
// BEFORE 2017: $ 29.99
// BEFORE 2019: $ 39.99
// BETWEEN 2019 - 2020: $49.99
// AFTER 2020: $ 59.99
const price = (game) => {
    const releaseDate = game?.released;
    const year = Number(releaseDate.split("-")[0]);

    let price = 0;

    if (year <= 2011){
        price = 5.99;
    }
    else if (year <= 2013){
        price = 9.99;
    }
    else if (year <= 2015){
        price = 19.99;
    }
    else if (year <= 2017){
        price = 29.99;
    }
    else if (year <= 2019){
        price = 39.99;
    }
    else if (2019 < year && year <= 2020){
        price = 49.99;
    }
    else if (year > 2020){
        price = 59.99;
    }
    else {
        return 0;
    }

    console.log("price: ", price);
    return price;
}

export default price;