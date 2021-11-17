import React, { useState } from "react";
import { Card } from "react-bootstrap/";

export default function ArticleInfo({
  article,
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
    <div className={`col-lg-${width} col-xl-${width} col-12 col-sm-6 column`}>
      <Card className={`article-preview`} style={{ height: "100%" }}>
        <Card.Body>
          <img className="img-preview" src={imageUrl} alt="article-preview" />
          <div className="button-group">
            <button
              className="btn btn-secondary first"
              onClick={() => edit(url)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger second"
              onClick={() => remove(url)}
            >
              Delete
            </button>
          </div>
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
        </Card.Body>
      </Card>
    </div>
  );
}
