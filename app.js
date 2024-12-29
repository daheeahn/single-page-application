const routes = {
  "/": "Welcome to the Home Page!",
  "/about": "This is the About Page.",
  "/contact": "Feel free to Contact us!",
};

function renderRoute(path) {
  const content = routes[path] || "404: Page Not Found";
  document.getElementById("app").innerHTML = content;
}

function onNavigate(event) {
  event.preventDefault();
  const path = event.target.getAttribute("href");
  history.pushState({}, "", path); // change url
  renderRoute(path);
}

function init() {
  renderRoute(window.location.pathname);

  document.querySelectorAll("[data-link]").forEach((link) => {
    link.addEventListener("click", onNavigate);
  });

  window.addEventListener("popstate", (data) => {
    console.log("popstate!", data.state);
    renderRoute(window.location.pathname);
  });
}

init();
