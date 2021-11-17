import React, { useState } from "react";
import { Card } from "react-bootstrap/";

export default function ArticleInfoCol2({
  url = "",
  title = "",
  imageUrl = "",
  width = "",
  editUrl = null,
  edit = () => {},
  remove = () => {},
  cancel = () => {},
  save = () => {},
}) {
  const [inputTitle, setInputTitle] = useState(title);

  const handleInputTitle = ({ target }) => {
    setInputTitle(target.value);
  };
  return (
    <div
      className={`col-lg-${width} col-xl-${width} mt-5 col-12 col-sm-6 column`}
    >
      <Card className={`article-preview`} style={{ background: "#f8a347" }}>
        <img className="img-preview" src={imageUrl} alt="article-preview" />
        <div className="button-group">
          <button className="btn btn-secondary first" onClick={() => edit(url)}>
            Edit
          </button>
          <button className="btn btn-danger second" onClick={() => remove(url)}>
            Delete
          </button>
        </div>
        <h1> {title} </h1>
        {editUrl === url ? (
          <div className="editModeWrapper">
            <input value={inputTitle} onChange={(e) => handleInputTitle(e)} />
            <div className="btn-icon-group">
              <button
                className="btn-icon btn-icon--first"
                onClick={() => save(url, inputTitle)}
              >
                <span role="img" aria-label="apply">
                  &#9989;
                </span>
              </button>
              <button className="btn-icon btn-icon--second">
                <span role="img" aria-label="cancel" onClick={() => cancel()}>
                  &#10062;
                </span>
              </button>
            </div>
          </div>
        ) : (
          <figcaption className="title-preview">{title}</figcaption>
        )}
      </Card>
    </div>
  );
}
