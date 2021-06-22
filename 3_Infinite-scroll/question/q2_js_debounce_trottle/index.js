import './style.css';
import renderList from './listRenderer';
import { debounce } from './util';

const app = document.querySelector('#app');
const fetchMoreTrigger = document.querySelector('#fetchMore');
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add('loading');
  await renderList(page++);
  target.classList.remove('loading');
};

const onScroll = e => {
  console.dir(e.target.scrollingElement);
  const { scrollHeight, clientHeight, scrollTop } = e.target.scrollingElement;
  console.log(scrollHeight, clientHeight, scrollTop);
  if ((clientHeight + scrollTop) / scrollHeight > 0.95) fetchMore();
};

document.addEventListener('scroll', debounce(onScroll, 250));
fetchMore();
