// task1========================================================

validateAZ.addEventListener("input", function (e) {
  let regex = /[A-Za-zА-Яа-яЁё -]/;
  let chars = e.target.value.split("");
  let char = chars.pop();
  if (!regex.test(char)) {
    e.target.value = chars.join("");
  }
});

// task2========================================================

openModal.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// task3========================================================
field.addEventListener("click", function (e) {
  let fieldCoords = field.getBoundingClientRect();

  let ballCoords = {
    top: e.clientY - fieldCoords.top - ball.clientHeight / 2,
    left: e.clientX - fieldCoords.left - ball.clientWidth / 2,
  };

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
});

// task4========================================================
let i = -1;

btn.addEventListener("click", function () {
  i++;
  let lights = ["red", "#f9aa33", "green"];
  let light = document.querySelectorAll(".light");
  if (light[i - 1]) light[i - 1].style.backgroundColor = "";
  if (i == lights.length) i = 0;
  light[i].style.backgroundColor = lights[i];
});

// task5========================================================

list.addEventListener("click", function (e) {
  let target = e.target;
  higlight(target);
});

let selectLi;

function higlight(li) {
  if (selectLi) {
    selectLi.classList.remove("active");
  }
  selectLi = li;
  selectLi.classList.add("active");
}

// task6========================================================

let tooltipElem;

document.onmouseover = function (e) {
  let target = e.target;

  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = document.createElement("div");
  tooltipElem.className = "tooltip";
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + "px";
  tooltipElem.style.top = top + "px";
};

document.onmouseout = function (e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};

// task7========================================================

for (let li of tree.querySelectorAll("li")) {
  let span = document.createElement("span");

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function (e) {
  if (e.target.tagName != "SPAN") return;

  let childContainer = e.target.parentNode.querySelector("ul");

  if (!childContainer) return;

  childContainer.hidden = !childContainer.hidden;
};

// task8========================================================

let textarea = document.getElementById("textarea");
let resize = document.querySelector("div.resize");

function Resize(e) {
  e.preventDefault;
  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", stop);
}

function move(e) {
  textarea.style.width = e.pageX - textarea.offsetLeft + "px";
  textarea.style.height = e.pageY - textarea.offsetTop + "px";
}
function stop() {
  window.removeEventListener("mousemove", move);
  window.removeEventListener("mouseup", stop);
}

resize.addEventListener("mousedown", Resize);
