// const app = document.getElementById("app");
// console.dir(app);

// console.log(app.style);

//cho 1 thẻ div chứa nội dung bên trong
//Thay đổi màu và in đạm nội dung của nó = js

// app.style.color = "aqua"
// app.style.fontWeight = "bold"
// app.style.fontSize = "50px"


//children, parent
// const ul = document.getElementById("ul");
// console.log(ul.children[2].parentElement);

//method add, remove, class, id

// console.log(ul.id);
// console.log(ul.classList);
// ul.classList.remove("list");
// ul.classList.add("list3");
// console.log(ul);
// console.log(ul.children[0].remove());
// console.log(document.createElement("li"));
// const li = document.createElement("li");
// li.innerHTML = "Tôi là ai ?"
// console.log(ul.appendChild(li));
// console.log(ul);

//Cho 1 danh sách việc làm. Thêm nội dung việc mới, thay đổi màu, bc, fontSize của nội dung bằng js
// const work = document.getElementById('work');
// console.log(document.createElement("li"));
// const li = document.createElement("li");
// li.innerHTML = "sport";
// console.log(work.appendChild(li));
// console.log(work);
// work.style.color = "aqua";
// work.style.fontSize = "50px";

//event, click

const btn = document.getElementById("btn");
btn.onclick = () =>{
    // const li = document.createElement("li");
    // li.innerHTML = "Tôi là ai ?"
    // console.log(ul.appendChild(li));

    const input = prompt("hãy nhập cái gì đó đi bạn");
    const li = document.createElement("li");
    li.innerHTML = input;
    console.log(ul.appendChild(li));

}
// Click btn add => Cho người dùng nhập vào title
//Nhập xong thì add vào list danh sách
const btnDelete = document.getElementById("btnDelete");
btnDelete.onclick = () =>{
    for (let i = 0; i < (ul.children).length; i--) {
    console.log(ul.children[i].remove(i));
        
        
    }
}
// function deletePerson() {
//     // console.log(ul.children);
//     for (let i = 0; i < (ul.children).length; i--) {
//         console.log(ul.children[i].remove());
        
//     }
// }