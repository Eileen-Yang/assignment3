const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};

get.addEventListener('click', async (_event) => {
  selectElement = document.querySelector('#Movies');
  output = selectElement.options[selectElement.selectedIndex].value;

  if (output == 'Minions: The Rise of Gru') {
    const movieData = await getMovie1();
    console.log(movieData)
    callMovie(movieData)
  }
  if (output == 'DC League of Super-Pets') {
    const movieData = await getMovie2();
    console.log(movieData)
    callMovie(movieData)
  }
  if (output == 'The Emoji Movie') {
    const movieData = await getMovie3();
    console.log(movieData)
    callMovie(movieData)
  }
  if (output == 'Spider-Man: No Way Home') {
    const movieData = await getMovie4();
    console.log(movieData)
    callMovie(movieData)
  }
  if (output == 'Avengers: Infinity War') {
    const movieData = await getMovie5();
    console.log(movieData)
    callMovie(movieData)
  }
  if (output == 'Demon Slayer: Kimetsu no Yaiba – The Movie: Mugen Train') {
    const movieData = await getMovie6();
    console.log(movieData)
    callMovie(movieData)
  }
  if (output == 'Spirited Away') {
    const movieData = await getMovie7();
    console.log(movieData)
    callMovie(movieData)
  }
  if (output == 'My Neighbor Totoro') {
    const movieData = await getMovie8();
    console.log(movieData)
    callMovie(movieData)
  }
  if (output == 'Fairy Tail the Movie: Phoenix Priestess') {
    const movieData = await getMovie9();
    console.log(movieData)
    callMovie(movieData)
  }
  if (output == 'Your Name.') {
    const movieData = await getMovie10();
    console.log(movieData)
    callMovie(movieData)
  }
})

const getMovie1 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/438148", {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
      query: "Minions: The Rise of Gru",
    }

  });
  return movieData.data;
}

const getMovie2 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/539681", {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
      query: "DC League of Super-Pets",
    }
  });
  return movieData.data;
}
const getMovie3 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/378236", {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
      query: "The Emoji Movie",
    }
  });
  return movieData.data;
}
const getMovie4 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/634649", {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
      query: "Spider-Man: No Way Home",
    }
  });
  return movieData.data;
}
const getMovie5 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/299536", {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
      query: "Avengers: Infinity War",
    }
  });
  return movieData.data;
}
const getMovie6 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/635302", {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
      query: "Demon Slayer: Kimetsu no Yaiba – The Movie: Mugen Train",
    }
  });
  return movieData.data;
}
const getMovie7 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/129", {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
      query: "Spirited Away",
    }
  });
  return movieData.data;
}
const getMovie8 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/8392", {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
      query: "My Neighbor Totoro",
    }
  });
  return movieData.data;
}
const getMovie9 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/135531", {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
      query: "Fairy Tail the Movie: Phoenix Priestess",
    }
  });
  return movieData.data;
}
const getMovie10 = async () => {
  const movieData = await getData("https://api.themoviedb.org/3/movie/372058", {
    params: {
      api_key: "289d7511f89338dfaa9d5bc06621094c",
      query: "Your Name.",
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