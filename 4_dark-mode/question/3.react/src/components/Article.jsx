import React from "react";
import styled from "styled-components";

const ArticleStyle = styled.article`
  width: 960px;
  margin: 50px auto 0;
  font-size: 1.5em;
`;

const Article = () => {
  return (
    <ArticleStyle>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum optio ab
      porro magni in sunt ipsam, doloremque minima, itaque sapiente consequatur,
      repellat velit voluptatum accusantium aperiam. Nostrum sunt reprehenderit
      nemo!
    </ArticleStyle>
  );
};

export default Article;
