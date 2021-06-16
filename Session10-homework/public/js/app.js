const btn = document.getElementById("btn");

const form = document.getElementById("form-control");

const ul = document.getElementById("ul");

form.onsubmit = (event) => {
    event.preventDefault();

    const title = form.formControlInput.value;
    console.log(title);

    
    const newLi = document.createElement("li");
    newLi.innerHTML = title;
    ul.appendChild(newLi);
    const newIcon = document.createElement("i");
    newIcon.className += "fas fa-check";
    newLi.appendChild(newIcon);
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "x";
    newLi.appendChild(buttonDelete);
    buttonDelete.classList.add("buttonDelete");

    // form.formControlInput.value = "";

    // console.log(form.formControlInput.value);
    // const buttonDelete = document.createElement("button");

    buttonDelete.onclick = () => {
        console.log(newLi.remove());
    }
    ul.onclick = (event) => { 
        event.target.classList.toggle("click");
    }
    
}

