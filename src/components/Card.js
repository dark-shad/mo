import React from 'react';
import './style/card.css';
import data from './data/cardData.json';
console.log(data);
function RenderPost(post) {
  console.log(post);
  return (
    <div className="cardDiv" key={post.post.id} style={{ width: '100%' }}>
      <div className="cardHeading">{post.post.name}</div>
      <div className="cardImg">
        <image
          src={
            'https://github.com/karishmarajput/gameo/blob/master/asserts/oddEven.png?raw=true'
          }
        />
      </div>
      <div className="cardDetails">
        <div className="cardLike"></div>
        <div className="cardShare">
          <i class="fa-solid fa-share"></i>
        </div>
        <div className="cardDonate"></div>
      </div>
    </div>
  );
}

export default function Card() {
  const post = data.post.map((post) => {
    return (
      <div key={post.id} className="cards">
        <RenderPost post={post} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{post}</div>
    </div>
  );
}
