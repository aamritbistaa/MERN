//-------passing parameter on a function when clicked--------
<button onClick={() => handleOnClick("-")}>decrese</button>;

//-------USE Effect-------

useEffect(() => {
  // setMovieList("Nepal");
  storeList("Nepal");
  // console.log(searcht
}, []);
// triggered once or on start

//-------------Search data----------
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5a5f4301";

export const searchMovies = async (title) => {
  // console.log(`${API_URL}&s=${title}`);
  const response = await fetch(`${API_URL}&s=${title}`);
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  // console.log("value of ", data.Search);
  return data.Search;
};

// send data to component movie cardlist
{
  movielist && movielist.length > 0
    ? movielist.map((item) => (
        <MovieCardList
          Title={item.Title}
          Year={item.Year}
          imdbID={item.imbdID}
          Poster={item.Poster}
          Type={item.Type}
        />
      ))
    : "No Item found";
}

// recive data
const MovieCardList = ({ imdbID, Title, Poster, Type, Year }) => {
  return imdbID;
};
