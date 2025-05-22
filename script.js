// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let valid = true;

  // Reset styles
  [name, email, message].forEach(input => input.classList.remove("error"));

  if (name.value.trim() === "") {
    name.classList.add("error");
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    email.classList.add("error");
    valid = false;
  }

  if (message.value.trim() === "") {
    message.classList.add("error");
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    name.value = "";
    email.value = "";
    message.value = "";
  }
});

// TO-DO LIST
function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const task = todoInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  document.getElementById("todoList").appendChild(li);
  todoInput.value = "";
}
