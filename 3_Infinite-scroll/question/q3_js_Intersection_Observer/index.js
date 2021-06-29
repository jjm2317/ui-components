// Import stylesheets
import './style.css';
import renderList from './listRenderer';

// Write Javascript code!
const app = document.querySelector('#app');
const fetchMoreTrigger = document.querySelector('#fetchMore');
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add('loading');
  await renderList(page++);
  target.classList.remove('loading');
};

const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting, time }]) => {
  console.log(isIntersecting, time);
  if (isIntersecting && time > 1000) fetchMore();
});

console.log(fetchMoreObserver);
fetchMoreObserver.observe(fetchMoreTrigger);

fetchMore();

// let isScroll = false;
// let scrollTimerId = null;
// document.onscroll = () => {
//   if (!isScroll) isScroll = true;
//   console.log(isScroll);
//   if (scrollTimerId) clearTimeout(scrollTimerId);
//   scrollTimerId = setTimeout(() => {
//     isScroll = false;
//     console.log(isScroll);
//   }, 300);
// };

// const timerId = console.log(1);
