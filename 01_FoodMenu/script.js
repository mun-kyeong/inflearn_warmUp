const getFood = () => {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("contentDiv");
  contentDiv.innerHTML = "hi there!";
  console.log(contentDiv);
  document.getElementById("menucontent").appendChild(contentDiv);
};

getFood();
