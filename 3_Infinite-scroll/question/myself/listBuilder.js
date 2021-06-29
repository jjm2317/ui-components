const ITEMS_PER_PAGE = 20;
const list = [];

const itemBuilder = no => ({
  id: uuid.v4(),
  no,
  text: `random number ${Math.random() * 10}`
});

const listBuilder = page =>
  Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => itemBuilder(page * ITEMS_PER_PAGE + i + 1));

const getList = (page = 0) => {
  if (!list[page]) list[page] = listBuilder(page);
  return list[page];
};

export default getList;
