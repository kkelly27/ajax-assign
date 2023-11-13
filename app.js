console.log("Let's get this party started!");


const $giffArea = $("#gif-area");
const $searchInput = $("#search");

/*  adds a gif */

function addGiff(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-3 col-10 mb-4" });
    let $newGiff = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGiff);
    $giffArea.append($newCol);
  }
}



$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGiff(response.data);
});

/* remove giff*/

$("#remove").on("click", function() {
  $giffArea.empty();
});