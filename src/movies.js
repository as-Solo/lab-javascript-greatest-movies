// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// {
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Frank Darabont",
//     "duration": "2h 22min",
//     "genre": ["Crime","Drama"],
//     "score": 9.3
// }

function getAllDirectors(moviesArray) {
    return (moviesArray.map((movie)=>movie["director"]))
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return (moviesArray.filter((movie)=> (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))).length);
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    scoredMovies = moviesArray.filter((movie)=>movie.score);
    totalScore = scoredMovies.reduce((sum, movie)=> sum + movie.score, 0);
    // console.log(totalScore)
    meanScore = totalScore / moviesArray.length;
    return (Math.round(meanScore * 100)/100)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    scoredMovies = moviesArray.filter((movie)=>(movie.score && movie.genre.includes("Drama")));
    if (scoredMovies.length === 0){
        return 0
    }
    totalScore = scoredMovies.reduce((sum, movie)=> sum + movie.score, 0);
    // console.log(totalScore)
    meanScore = totalScore / scoredMovies.length;
    return (Math.round(meanScore * 100)/100)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newList = moviesArray.slice(0);
    newList.sort((movie1, movie2)=>{
        if (parseInt(movie1.year) - parseInt(movie2.year) !== 0){
            return (parseInt(movie1.year) - parseInt(movie2.year))
        }
        else{
            return (movie1.title.localeCompare(movie2.title))
        }
    
    });
    // console.log(newList)
    return (newList)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesOrdered = moviesArray.slice(0);
    moviesOrdered.sort((a, b)=>(a.title).localeCompare(b.title));
    titlesArray = (moviesOrdered.map((movie)=>movie.title)).slice(0, 20);
    // console.log(titlesArray)
    return(titlesArray)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
   const auxArray = moviesArray.map((movie)=>({...movie}));
   auxArray.map((movie)=>{
        let tiempo = movie.duration.split(' ')
        // const newMovie = { ...movie };  consejo de chatGPT para trabajar sin modificar original
        // if (newMovie.duration)
        if (tiempo.length === 1){
            if (tiempo[0].includes('h')){
                tiempo = parseInt(tiempo[0]) * 60
            }
            else{
                tiempo = parseInt(tiempo[0]);
            }
        }
        else if (tiempo.length === 2)
        {
            tiempo = (parseInt(tiempo[0]) * 60 + parseInt(tiempo[1]))
        }
        movie.duration = tiempo;
        return (movie);
   })
//    console.log(auxArray)
   return (auxArray)
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray){
    if (moviesArray.length === 0){
        return null
    }
    const listaPorYears = moviesArray.reduce((lista, movie)=>{
        const y_key = movie.year;
        if (!lista[y_key]){
            lista[y_key] = [];
        }
        lista[y_key].push(movie.score)
        return lista
    }, {});
    // console.log(listaPorYears)
    let ganador = '';
    let sum = 0;
    for (let elem in listaPorYears){
        const aux = listaPorYears[elem].reduce((accumulator, puntos)=> accumulator + puntos, 0) / listaPorYears[elem].length
        if (aux >+ sum){
            ganador = elem;
            sum = aux;
        }
    }
    // console.log(ganador)
    return (`The best year was ${ganador} with an average score of ${sum}`)
}
