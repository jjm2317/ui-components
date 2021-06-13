import "./style.css";

const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);
const getOffsetTops = (() => {
  let innerHeight = 0;
  let result = [];
  return () => {
    if (innerHeight === window.innerHeight) {
      return result;
    }
    innerHeight = window.innerHeight;
    result = contentItems.map(({ offsetTop, clientHeight }) => [
      offsetTop - clientHeight / 2,
      offsetTop + clientHeight / 2,
    ]);
    return result;
  };
})();

window.addEventListener("scroll", (e) => {
  const { scrollTop } = e.target.scrollingElement;
  const navIndex = getOffsetTops().findIndex(
    ([from, to]) => scrollTop >= from && scrollTop < to
  );
  if (!navItems[navIndex].classList.contains("on")) {
    navItems.forEach(
      (item, i) => i !== navIndex && item.classList.remove("on")
    );
    navItems[navIndex].classList.add("on");
  }
});

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
