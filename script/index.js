const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then((json) => displayCatagory(json.categories));

};

const loadAllCards = () => {
     manageSpinner(true)
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then((cards) => displayAllCards(cards.plants))
}

const loadCardDetails = async (id) => {
    my_modal_5.showModal()
    const url = `https://openapi.programming-hero.com/api/plant/${id}`

    const res = await fetch(url);
    const details = await res.json();
    displayCardDetails(details.plants);

}


const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById('spinner').classList.remove("hidden");
        document.getElementById('cards-container').classList.add("hidden");
    }
    else {
        document.getElementById('cards-container').classList.remove("hidden");
        document.getElementById('spinner').classList.add("hidden");
    }
}

const displayCardDetails = (card) => {
    //console.log(card);
    
    const detailsBox = document.getElementById('details-container');
    detailsBox.innerHTML = `
    <h2 class ="text-xl font-semibold mb-3">${card.name}</h2>
    <img class = "rounded-xl h-[250px] object-cover " src="${card.image}" alt="">
    <h2 class ="mt-3"><span class ="font-semibold">Category:</span> ${card.category}</h2>
    <h2 class =" mt-3"><span class ="font-semibold">Price: </span>৳${card.price}</h2>
    <p class =" mt-3"><span class ="font-semibold">Description:</span> ${card.description}</p>
    

    `
    document.getElementById('my_modal_5').showModal();

}

const removeActive = () => {
    const buttons = document.querySelectorAll(".all-btn-category")
    buttons.forEach(btn => btn.classList.remove("active"));
    // console.log(buttons);


}

function addToCart(id) {
    console.log('add to cart button click', id);

}

// function removeActiveCls() {
//     const buttons = document.querySelectorAll('all-btn-category');
//     buttons.forEach(btn => btn.classList.remove('active'));

// }

// load cards funtion body
const loadCards = (id) => {
    manageSpinner(true)
    const url = `https://openapi.programming-hero.com/api/category/${id}`

    fetch(url)
        .then(res => res.json())
        .then((cards) => {

            removeActive();

            const clickedbtn = document.getElementById(`category-btn-${id}`);
            clickedbtn.classList.add('active')
            // console.log(clickedbtn);


            displayCards(cards.plants)
        })
        manageSpinner(false)

}

const displayAllCards = (cards) => {
    manageSpinner(true)
    const cardsContainer = document.getElementById('cards-container')

    cards.forEach(card => {
        const cardDiv = document.createElement("div")
        const imgUrl = `${card.image}`;

        cardDiv.innerHTML = `
        <div onclick="loadCardDetails(${card.id})" class="p-5 bg-white rounded-xl mb-5 w-full ">
              <div class="rounded-xl h-[225px] "><img class="w-full h-full rounded-xl object-cover " src="${imgUrl}" alt="" />
              </div>
              <div class="pt-3">
                <h2 class="font-bold text-xl">${card.name}</h2>
                <p class="text-gray-600 mt-2">${card.description}
                </p>
              </div>
              <div class="flex justify-between mt-3">
                <div class="bg-green-100 px-2  rounded-xl border-1 border-green-200 ">
                  <h3 class=" text-green-600">${card.category}</h3>
                </div>
                <h3 class=" font-semibold">৳${card.price}</h3>
              </div>
              <div id="add-to-cart-${card.id}" onclick = "addToCart(${card.id})" class="bg-green-700 rounded-full py-3 mt-5">
                <h3 class="text-white font-semibold text-center">Add to Cart</h3>
              </div>
            </div>
            
        `

        cardsContainer.append(cardDiv)


    })
    manageSpinner(false)
}


const displayCards = (cards) => {
    manageSpinner(true)
    const cardsContainer = document.getElementById('cards-container')
    cardsContainer.innerHTML = "";

    cards.forEach(card => {
        //console.log(card);

        const cardDiv = document.createElement("div")

        /*
        {
"id": 1,
"image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
"name": "Mango Tree",
"description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
"category": "Fruit Tree",
"price": 500
}
        */
        const imgUrl = `${card.image}`;
        // console.log(imgUrl);

        cardDiv.innerHTML = `
        <div onclick="loadCardDetails(${card.id})" class="p-5 bg-white rounded-xl mb-5 w-full ">
              <div class="rounded-xl h-[225px] "><img class="w-full h-full rounded-xl object-cover " src="${imgUrl}" alt="" />
              </div>
              <div class="pt-3">
                <h2 class="font-bold text-xl">${card.name}</h2>
                <p class="text-gray-600 mt-2">${card.description}
                </p>
              </div>
              <div class="flex justify-between mt-3">
                <div class="bg-green-100 px-2  rounded-xl border-1 border-green-200 ">
                  <h3 class=" text-green-600">${card.category}</h3>
                </div>
                <h3 class=" font-semibold">৳${card.price}</h3>
              </div>
              <div class="bg-green-700 rounded-full py-3 mt-5">
                <h3 class="text-white font-semibold text-center">Add to Cart</h3>
              </div>
            </div>
            
        `

        cardsContainer.append(cardDiv)
    })
    manageSpinner(false)
}

// Display Categorys Function 
const displayCatagory = (categorys) => {
    // console.log(categorys);
    const levelContainer = document.getElementById('categori-container')

    for (let categori of categorys) {

        const creatDiv = document.createElement("div");
        creatDiv.innerHTML = `<div id = "category-btn-${categori.id}" class ="all-btn-category" onclick = "loadCards(${categori.id})">
        <h2 class="py-1 px-2 rounded-md hover:bg-green-100">${categori.category_name}</h2>
        </div>
        `

        levelContainer.appendChild(creatDiv)
    }
}

loadCategories()
loadAllCards()

