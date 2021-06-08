// Import stylesheets
import "./style.css";

// Write Javascript code here!
const $container = document.querySelector(".wrapper");
const $details = document.querySelectorAll("details");
// $container.addEventListener("click", (e) => {
//   if (!e.target.matches("summary")) return;
//   e.stopPropagation();
//   if (e.target.parentNode.open)
//     e.target.parentNode.setAttribute("open", !e.target.getAttribute("open"));
//   else
//     $details.forEach((detail) => detail.open && detail.removeAttribute("open"));
// });

// document.body.addEventListener("click", (e) => {
//   if (e.target.matches("details p")) return;
//   $details.forEach((detail) => detail.open && detail.removeAttribute("open"));
// });
document.body.addEventListener("click", function (e) {
  if (!e.target.matches("summary") && !e.target.matches("details p")) {
    $details.forEach((detail) => detail.removeAttribute("open"));
    return;
  }
  $details.forEach(
    (detail) =>
      detail !== e.target.parentElement && detail.removeAttribute("open")
  );
});
