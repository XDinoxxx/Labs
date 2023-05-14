const btn = document.querySelector("button");
const root = document.querySelector(".root");
const input = document.querySelector("input");

const getPageInfo = async (url) => {
  try {
    const data = await fetch(url);

    const res = await data.text();

    return res;
  } catch (err) {
    return err.message;
  }
};

const handleClick = async () => {
  const data = input.value;
  console.log(data);
  root.innerHTML = await getPageInfo(data);
};

btn.addEventListener("click", handleClick);
