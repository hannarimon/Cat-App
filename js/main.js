let inputField = document.querySelector("#inputField");
let inputFieldBtn = document.querySelector("#inputFieldBtn");
let container = document.querySelector("#container");
let listContainer = document.querySelector("#listContainer");
let catSelect = document.querySelector("#catSelect");
let catRaceBtn = document.querySelector("#catRaceBtn");

fetch("https://api.thecatapi.com/v1/breeds")
    .then((response => response.json()))
    .then((data => {
        // console.log(data);
        let catData = data;
        for (let catRace of catData) {
            catSelect.innerHTML += `<option value="${catRace.id}">${catRace.name}</option>`;
        }

        catRaceBtn.addEventListener("click", function () {
            // console.log(catSelect.value);
            fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catSelect.value}`)
                .then((response => response.json()))
                .then((data => {
                    let image = document.createElement("img");
                    let container = document.createElement("div");
                    container.style.height = "450px";
                    container.style.width = "450px";
                    container.style.display = "inline-block";
                    container.innerHTML += `
                    
                    <p>${data[0].breeds[0].description}</p>
                `;
                    image.style.height = "450px";
                    image.style.width = "450px";
                    image.src = data[0].url;
                    listContainer.append(container);
                    container.append(image);



                }))

        });


    }));

inputFieldBtn.addEventListener("click", function () {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response => response.json()))
        .then((data => {
            // console.log(data);
            let catData = data[0];
            console.log(catData);
            // listContainer.innerHTML += `
            //     <h1>is cat</h1>
            // `;
            let image = document.createElement("img");
            let container = document.createElement("div");
            container.style.height = "450px";
            container.style.width = "450px";
            container.style.display = "inline-block";
            // image.innerText = "Hello";
            image.style.height = "450px";
            image.style.width = "450px";
            image.src = catData.url;
            listContainer.append(container);
            container.append(image);

        }));



});