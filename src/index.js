import "./style.css";
import addFavicon from "./addFavicon/addFavicon.js";

const img = document.querySelector("img");
const button = document.querySelector(`button`);

button.addEventListener(`click`, doASearch);

// function doASearch() {
//   let search = document.querySelector(`input`).value;

//   const gifURL = `https://api.giphy.com/v1/gifs/translate?api_key=ndYQkQhMG2RhcTXetLSKGLHcB46H0O0I&s=${search}`;

//   const getCats = () => fetch(gifURL, { mode: "cors" });

//   getCats()
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then((response) => {
//       if (
//         !response.data ||
//         !response.data.images ||
//         !response.data.images.original
//       ) {
//         const err = document.createElement(`p`);
//         err.textContent = "Error";
//         img.appendChild(err);
//         throw new Error("No GIF found for the search query.");
//       }

//       return (img.src = response.data.images.original.url);
//     })
//     .catch((error) => {
//       const err = document.createElement(`p`);
//       err.textContent = "Error";
//       img.appendChild(err);
//       console.log("this is error in catch " + error);
//     });
// }

async function doASearch() {
  let search = document.querySelector(`input`).value;
  const gifURL = `https://api.giphy.com/v1/gifs/translate?api_key=ndYQkQhMG2RhcTXetLSKGLHcB46H0O0I&s=${search}`;
  try {
    const response = await fetch(gifURL, { mode: "cors" });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(response.status);
    }
    if (!data.data || !data.data.images || !data.data.images.original) {
      throw new Error("No GIF found for the search query.");
    }

    img.src = data.data.images.original.url;
  } catch (error) {
    console.log(error);
  }
}
