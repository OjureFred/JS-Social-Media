form = document.getElementById("form");
input = document.getElementById("input");
posts = document.getElementById("posts");
msg = document.getElementById("msg")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validateForm();

})

function validateForm() {
    if(input.value === "") {
        msg.innerHTML = "Please provide an input";
    } else {
        acceptData();
    }
}

let data = {}

function acceptData() {
    data["text"] = input.value;
    createPost();
}

function createPost() {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="updatePost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>`;
    input.value = "";
        
}

let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}

let updatePost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

