document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var isOpen = links.getAttribute("data-open") === "true";
    links.setAttribute("data-open", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  links.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      links.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
