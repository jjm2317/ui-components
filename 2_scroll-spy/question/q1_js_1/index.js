// import "./style.css";

const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);
const offsetTops = contentItems.map((elem) => {
  const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
  console.log(ofs, clh);
  return [ofs - clh / 2, ofs + clh / 2];
});
console.log(navElem, navItems, contentsElem, contentItems);
window.addEventListener("scroll", (e) => {
  const { scrollTop } = e.target.scrollingElement;
  const navIndex = offsetTops.findIndex(
    ([start, end]) => scrollTop > start && scrollTop <= end
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
