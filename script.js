"use strict";

const chooseButton = document.querySelector(".btn--1");
const watchButton = document.querySelector(".btn--2");
const movieName = document.querySelector(".movie--name");

const movies = [
  "Benim Güneşli Maad'ım",
  "The Giver",
  "Legion",
  "Inland Empire",
  "Frank",
  "The Color of Pomegranates",
  "Paprika",
  "Kika",
  "Marnie Oradayken",
  "The Fifth Element",
  "Beden ve Ruh",
  "The Girl With All The Gifts",
  "The Man Who Fell Earth",
];

const chooser = function () {
  const movieNum = Math.trunc(Math.random() * movies.length);

  movieName.textContent = movies[movieNum];
};

chooseButton.addEventListener("click", chooser);
