import React from "react";

function Card(props) {
  const { title, body, imgUrl } = props.item;
  const ITEM = props.item;

  const [like, setLike] = React.useState(
    Number(localStorage.getItem(props.id)) || 0
  );

  const clickHandler = event => {
  setLike(like + 1) ;
  };


  const clickHandler2 = event => {
  setLike(like - 1) ;
  };

  localStorage.setItem(props.id, like);
  

  return (
    <div className="card">
      {imgUrl ? <img src={imgUrl} className="card-img-top" alt="..." /> : null}
      <div className="card-body">
        {ITEM.title ? <h5 className="card-title">{ITEM.title}</h5> : null}
        <p className="card-text">{props.item.body}</p>
        <button 
                name="increase"
                onClick={clickHandler}
                type="button"
                className="btn btn-sm btn-outline-secondary">
                Like
                 </button>
                <button 
                name="diccrease"
                onClick={clickHandler2}
                type="button"
                className="btn btn-sm btn-outline-secondary">
                UnLike
                 </button>
                 <small className="text-muted m-5">{like} Like </small>
      </div>
    </div>
  );
}




export default Card;