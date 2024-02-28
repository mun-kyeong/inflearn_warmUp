const loadMenu = (category) => {
  const menuContent = document.querySelector(".content");
  const menuList = foodMenu[category];
  const menuDiv = document.createElement("div");
  menuDiv.className = "foodCardList";

  menuList.map((food) => {
    const foodDiv = document.createElement("div");
    foodDiv.className = "foodCard";
    foodDiv.innerHTML = `
        <img src=${food.image} alt="food img" />
        <div>
          <div class="foodCard-title">
            <div>${food.name}</div>
            <div>${food.price}</div>
          </div>
          <div class="foodCard-description">${food.description}</div>
        </div>
        `;
    menuDiv.appendChild(foodDiv);
  });
  menuContent.innerHTML = "";
  menuContent.appendChild(menuDiv);
};

loadMenu("All");
