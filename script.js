const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};

get.addEventListener('click', async (_event) => {
  selectElement = document.querySelector('#Movies');
  id = selectElement.options[selectElement.selectedIndex].value;

  const movieData = await getMovie(id);
  callMovie(movieData)
});

const getMovie = async (id) => {
  const movieData = await getData(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
    }

  });
  return movieData.data;
}

function callMovie(movieData) {
  document.getElementById('div').innerHTML = "";

  const title = document.createElement("h1");
  title.innerHTML = movieData['title'];
  title.setAttribute('id', 'title');
  document.getElementById('div').appendChild(title);

  const release_date = document.createElement("p");
  release_date.innerHTML = 'Release Date: ' + movieData['release_date'];
  release_date.setAttribute('id', 'release_date');
  document.getElementById('div').appendChild(release_date);

  const overview = document.createElement("p");
  overview.innerHTML = 'Overview: ' + movieData['overview'];
  overview.setAttribute('id', 'overview');
  document.getElementById('div').appendChild(overview);

  const original_language = document.createElement("p");
  original_language.innerHTML = 'Original Language: ' + movieData['original_language'];
  original_language.setAttribute('id', 'original_language');
  document.getElementById('div').appendChild(original_language);

  const popularity = document.createElement("p");
  popularity.innerHTML = 'Popularity; ' + movieData['popularity'];
  popularity.setAttribute('id', 'popularity');
  document.getElementById('div').appendChild(popularity);

  const vote_average = document.createElement("p");
  vote_average.innerHTML = 'Vote Average: ' + movieData['vote_average'];
  vote_average.setAttribute('id', 'vote_average');
  document.getElementById('div').appendChild(vote_average);

  const vote_count = document.createElement("p");
  vote_count.innerHTML = 'Vote Count: ' + movieData['vote_count'];
  vote_count.setAttribute('id', 'vote_count');
  document.getElementById('div').appendChild(vote_count);

  const revenue = document.createElement('p');
  revenue.innerHTML = 'Revenue: $' + movieData['revenue'];
  revenue.setAttribute('id', 'revenue');
  document.getElementById('div').appendChild(revenue);

  const img1 = document.createElement('img');
  img1.src = 'https://image.tmdb.org/t/p/w500' + movieData['poster_path'];
  img1.setAttribute('id', 'img1');
  document.getElementById('div').appendChild(img1);

  const img2 = document.createElement('img');
  img2.src = 'http://image.tmdb.org/t/p/w500' + movieData['backdrop_path'];
  img2.setAttribute('id', 'img');
  document.getElementById('div').appendChild(img2);
}