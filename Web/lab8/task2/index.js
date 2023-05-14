const links = document.querySelectorAll("a");
const allImages = document.querySelectorAll("img");
const catImages = document.querySelectorAll('img[data-type="cat"]');
const dogImages = document.querySelectorAll('img[data-type="dog"]');

const stateObj = { filter: "all" };
history.pushState(stateObj, "", window.location.href);

function updateContent(filter) {
  stateObj.filter = filter;
  history.pushState(stateObj, "", "?filter=" + filter);
  console.log(filter);
  if (filter === "dogs") {
    allImages.forEach((el) => {
      el.style.display = "initial";
    });
    catImages.forEach((el) => {
      el.style.display = "none";
    });
  }
  if (filter === "cats") {
    allImages.forEach((el) => {
      el.style.display = "initial";
    });
    dogImages.forEach((el) => {
      el.style.display = "none";
    });
  }
  if (filter === "all") {
    allImages.forEach((el) => {
      el.style.display = "initial";
    });
  }
}

links.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    updateContent(el.id);
  });
});
