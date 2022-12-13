let addBtn = document.querySelector("#button-add");
let nameInput = document.querySelector("#name");
let descriptionInput = document.querySelector("#description");


const post = async () => {
    await axios.post('https://northwind.vercel.app/api/categories', {
            Name: nameInput.value,
            Description: descriptionInput.value
        })
        .then((response) => {
            alert("The new data has been added");
        }, (error) => {
            alert("Something went wrong! the data has not been added, please try again")
        });

};

addBtn.addEventListener("click", () => {
    if (nameInput.value !== "") {
        post();
        nameInput.value = String();
        descriptionInput.value = String();
    }
});
