import "./style.css";

const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);

const scrollSpyObserver = new IntersectionObserver(
  (entries) => {
    const outItem = entries.find((item) => !item.isIntersecting)?.target;
    const inItem = entries.find((item) => item.isIntersecting)?.target;
    if (outItem) {
      const outIndex = contentItems.findIndex((item) => item === outItem);
      navItems[outIndex].classList.remove("on");
    }
    if (inItem) {
      const inIndex = contentItems.findIndex((item) => item === inItem);
      navItems[inIndex].classList.add("on");
    }
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  }
);
contentItems.forEach((item) => scrollSpyObserver.observe(item));

navElem.addEventListener("click", (e) => {
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
});
