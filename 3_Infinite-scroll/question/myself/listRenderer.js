import getList from './listBuilder.js';
import { dummyFetcher } from './util.js';
const listElem = document.getElementById('list');

const renderItem = ({ id, no, text }) => {
  const li = document.createElement('li');

  li.insertAdjacentHTML(
    'beforeend',
    `
        <>${no}</>
        <div>
            <div>${id}</div>
            <div>${text}</div>
        </div>
    
    `
  );
  return li;
};

const renderList = async page => {
  const list = await dummyFetcher(getList, page);

  const frag = document.createDocumentFragment();
  list.forEach(item => frag.appendChild(renderItem(item)));
  listElem.appendChild(frag);
};

export default renderList;
