"use strict";

const chooseButton = document.querySelector(".btn--1");
const movieName = document.querySelector(".movie--name");
const imdb = document.querySelector(".movie--link");

const chooseFunc = async function () {
  const movieId = Math.trunc(Math.random() * 999999 + 1);
  let movieText;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=c733c91889e635bc56cd8f804e5afd37`
    );

    if (res.ok) {
      const data = await res.json();
      console.log(data);

      if (data.adult) return;

      movieText = `${data.title} (${data.release_date?.slice(0, 4)})
      `;

      const movieLink = data.imdb_id
        ? `https://www.imdb.com/title/${data.imdb_id}`
        : "https://www.imdb.com/";

      movieName.textContent = movieText;
      imdb.href = movieLink;
      imdb.classList.add("active");
    }

    if (!res.ok) {
      movieName.textContent = "Signal loss! Please try again!";
      imdb.classList.remove("active");
    }
  } catch (err) {
    console.error(err);
  }
};

chooseButton.addEventListener("click", chooseFunc);
