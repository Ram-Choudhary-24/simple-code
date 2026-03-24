function startWorkout() {
  alert("Redirecting to workouts page!");
  window.location.href = "workouts.html";
}

function showWorkout(name) {
  const detail = document.getElementById("workoutDetail");
  detail.innerHTML = "You selected: " + name;
}

function saveProgress() {
  let steps = document.getElementById("steps").value;
  if(steps === "") {
    alert("Enter steps!");
    return;
  }
  localStorage.setItem("steps", steps);
  document.getElementById("result").innerText = "Saved: " + steps + " steps";
}

window.onload = function() {
  if(document.getElementById("result")) {
    let saved = localStorage.getItem("steps");
    if(saved) {
      document.getElementById("result").innerText = "Last saved: " + saved + " steps";
    }
  }
}
