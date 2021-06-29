import renderList from './listRenderer.js';
const $app = document.getElementById('app');
const $fetchMore = document.getElementById('fetchMore');

let page = 0;

const loadMore = async () => {
  const target = page ? $fetchMore : $app;
  target.classList.add('loading');
  await renderList(page++);
  target.classList.remove('loading');
};

const onScroll = e => {
  const { clientHeight, scrollTop, scrollHeight } = e.target;
  console.log((clientHeight + scrollTop) / scrollHeight);
  if ((clientHeight + scrollTop) / scrollHeight >= 0.95) loadMore();
};

$app.addEventListener('scroll', onScroll);
loadMore();
