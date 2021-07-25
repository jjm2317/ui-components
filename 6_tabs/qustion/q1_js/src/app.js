// fetch fake data
const fetchTabsData = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            title: "HTML",
            content: `HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation(CSS) or functionality/ behavior(JavaScript).`,
          },
          {
            title: "CSS",
            content: `Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`,
          },
          {
            title: "JavaScript",
            content: `JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`,
          },
        ]),
      1000
    );
  });
};

// Do something!
const $tabs = document.querySelector(".tabs");

const tabsBuilder = (data) => {
  const frag = document.createDocumentFragment();
  const nav = document.createElement("nav");
  const tabs = data
    .map(({ title }, i) => `<div class="tab" data-index=${i}>${title}</div>`)
    .join("");
  nav.insertAdjacentHTML("beforeend", tabs);
  nav.insertAdjacentHTML("beforeend", '<span class="glider"></span>');
  frag.appendChild(nav);
  data.forEach(({ content }) => {
    nav.insertAdjacentHTML(
      "afterend",
      `<div class="tab-content">${content}</div>`
    );
  });
  return frag;
};

const renderTabs = async () => {
  const data = await fetchTabsData();
  $tabs.appendChild(tabsBuilder(data));
  $tabs.style.setProperty("--tabs-length", data.length);
  const hideSpinner = () => {
    const $spinner = document.querySelector(".spinner");
    $spinner.style.display = "none";
  };
  const $glider = document.querySelector(".glider");
  const $contents = document.querySelectorAll(".tab-content");
  $glider.style.setProperty("left", 0);
  $contents[0].classList.add("active");

  hideSpinner();
  $tabs.onclick = (() => {
    const $glider = document.querySelector(".glider");
    const $contents = document.querySelectorAll(".tab-content");

    return (e) => {
      if (!e.target.matches(".tab")) return;
      const tabWidth = getComputedStyle($tabs).getPropertyValue("--tab-width");
      const { index } = e.target.dataset;
      $glider.style.setProperty("left", tabWidth * index + "px");
      $contents.forEach((content, i) =>
        content.classList.toggle("active", i === +index)
      );
    };
  })();
};
window.onload = () => {
  renderTabs();
};
const $tabContent = document.querySelector(".tab-content");
