"use strict";

// Elements
const chooseButton = document.querySelector(".btn--1");
const movieName = document.querySelector(".movie--name");
const imdb = document.querySelector(".movie--link");

const renderMovie = (data) => {
  movieName.textContent = `${data.title} (${data.release_date?.slice(0, 4)})
  `;
  imdb.href = data.imdb_id
    ? `https://www.imdb.com/title/${data.imdb_id}`
    : "https://www.imdb.com/";

  imdb.classList.add("active");
};

const chooseMov = async function () {
  // Randomness of ID
  const movieId = Math.trunc(Math.random() * 999999 + 1);

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=c733c91889e635bc56cd8f804e5afd37`
    );

    if (res.ok) {
      const data = await res.json();

      // Elimination of adult content

      if (data.adult) return;

      // Rendering
      renderMovie(data);
    }

    if (!res.ok) {
      movieName.textContent = "Signal loss!";
      imdb.classList.remove("active");
    }
  } catch (err) {
    console.error(err);
  }
};

chooseButton.addEventListener("click", chooseMov);
