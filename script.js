var items = [
    {
      place: "Taj Mahal",
      location: "Agra, India",
      plan: "I'm looking forward to leisurely walking through the lush gardens surrounding the Taj. I'll keep my camera ready for every picturesque corner.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg",
      date: "26 May 2024",
      link: "https://www.indiatajmahaltour.com/holiday-packages/taj-mahal-tours-from-bangalore.htm",
    },
    {
      place: "Eiffel Tower",
      location: "Paris, France",
      plan: "Climbing up the Eiffel Tower is a must-do for me. Whether by elevator or stairs, reaching the top for panoramic views of Paris is going to be unforgettable.",
      image:
        "https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/16:9/w_1920,c_limit/GettyImages-468366251.jpg",
      date: "09 September 2028",
      link: "https://traveltriangle.com/tour-packages/eiffel-tower",
    },
    {
      place: "Great Wall Of China",
      location: "Huairou District, China",
      plan: "I'm beyond excited to finally see the Great Wall of China in person! I'll make sure to take it all in, marveling at its sheer size and historical significance.",
      image:
        "https://th-thumbnailer.cdn-si-edu.com/tTWLQXzOH6vwsp7kSFf6Td7ZpZc=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/80/fa/80facab4-fe0e-4a56-bd99-a71eb1845fa0/01_14_2014_great_wall.jpg",
      date: "14 January 2032",
      link: "https://www.sotc.in/tourism/china-tourism/things-to-do-in-china/great-wall-of-china/2239",
    },
  ];


const formEle = document.getElementById("item-form");
const listEle = document.getElementById("list-container");
const placeInput = document.getElementById("place");
const imageInput = document.getElementById("image");
const locationInput = document.getElementById("location");
const linkInput = document.getElementById("link");
const dateInput = document.getElementById("date");

function addItem(e) {
    e.preventDefault();
    

    const place = placeInput.value;
    const location = locationInput.value;
    const image = imageInput.value;
    const link = linkInput.value;
    const date = dateInput.value;
    const plan = planInput.value;

    items.push({
        place:place,
        location:location,
        image:image,
        link:link,
        date:date,
        plan:plan,
    })
    renderList();
    formEle.reset();


}

function deleteItem(index) {
    items.splice(index, 1);
    renderList();
}

function editItem(index) {
const item = items[index];

}

function renderList() {
    listEle.innerHTML = items.map(
        (items) => `
        <div class="card">
        <img src=${item.image}
        alt= ${item.place}>
        <div class="card-content">
          <div class="card-content">
            <div class="card-header">
              <div class="card-headertext">
                <a target="_blank"
                href="https://www.indiatajmahaltour.com/holiday-packages/taj-mahal-tours-from-bangalore.htm"> Taj Mahal</a>
                <p>Agra, India</p>
              </div>
              <div class="card-header-actions">
                <button><img src="./assests/edit-icon.svg" alt="Edit-icon"></button>
                <button><img src="./assests/trash-icon.svg" alt="Delete-icon"></button>
              </div>
              <p>
              $items.plan</p>
              <p class="card-footer">26 May 2024</p>
            </div>
          </div>
        </div>
      </div>
`
      );
      const deleButtons = document.querySelectorAll(".delete-button")
      delete-button")
}


renderList();
frameEle.addEventListener("submit", console.log("submit"));