// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});

// To-Do list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    this.remove();
  };

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
