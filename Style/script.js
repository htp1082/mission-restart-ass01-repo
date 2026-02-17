const links = document.querySelectorAll(".nav-links");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    links.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");
  });
});

const threeItems = () => {
  const itemUrl = "https://fakestoreapi.com/products";
  fetch(itemUrl)
    .then((res) => res.json())
    .then((data) => itemDisplay(data));
};

const itemDisplay = (id) => {
  const threeItemContainer = document.getElementById("card-container");
//   threeItemContainer.innerHTML ="";

  id.slice(0, 3).forEach((item) => {
    const threeDiv = document.createElement("div");
    threeDiv.innerHTML = `<div class="card bg-base-100 w-96  shadow-sm">
  <figure class="bg-gray-400">
    <img class=" h-70 object-fill"
      src="${item.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <div class="flex justify-between">

      <span class="p-1 rounded-md bg-blue-300">${item.category}</span>
      <div class="flex items-center">
   <i class="fa-solid fa-star mr-1" style="color: rgba(255, 212, 59, 1);"></i>
   <span>${item.rating.rate}</span>
   <p>(${item.rating.count})</p>
      </div>
         
    </div>
    <h2 class="card-title py-2 text-2xl">${item.title}</h2>
    <div class="card-actions justify-between flex gap-3">
      <button class="btn w-5/12"><i class="fa-solid fa-eye";"></i>Details</button>
      <button class="btn w-5/12 btn-primary"><i class="fa-solid fa-cart-shopping" style="color: white"></i>Add</button>
    </div>
  </div>
</div>`;
 threeItemContainer.appendChild(threeDiv)
  });

 
};

threeItems();
