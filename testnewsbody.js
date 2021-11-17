
  return (
    <div className={`col-lg-${width} col-xl-${width} col-12 col-sm-6 column`}>
      <figure className={`article-preview`}>
        <img className="img-preview" src={imageUrl} alt="article-preview" />
        <div className="button-group">
          <button className="btn btn-secondary first" onClick={() => edit(url)}>
            Edit
          </button>
          <button className="btn btn-danger second" onClick={() => remove(url)}>
            Delete
          </button>
        </div>

        {editId === url ? (
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
      </figure>
    </div>
  );











import React, { useEffect, useState } from "react";
import { Container, Image, Card } from "react-bootstrap/";

export default function NewsBody() {
  const [col1, setData] = useState([]);
  const [col2, setData2] = useState([]);
  const [title, setTitle] = useState(
    window.localStorage.getItem(`{item.title}`) || ""
  );

  const handleChange = (event) => setTitle(event.target.value);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://storage.googleapis.com/aller-structure-task/test_data.json"
      );
      const data = await res.json();
      const col1 = data[0][0].columns;
      const col2 = data[0][1].columns;
      console.log("col2", col2);
      setData(col1);
      setData2(col2);
    };
    fetchData();
  }, [setData, setData2]);

  useEffect(() => {
    window.localStorage.setItem(`{item.title}`, title);
  });

  const remove = () => {
    localStorage.removeItem("{item.title}");
  };
  return (
    <Container className="NewsHolder">
      <div className="row row-col2">
        {col2.map((item) => (
          <div style={{ height: "100%" }} className="col-md-6  ">
            <Card>
              <Image style={{ height: "16rem" }} src={item.imageUrl} />
              <Card.Body>
                <form>
                  <label htmlFor="{item.title}">Title:{item.title} </label>
                  <input
                    value={item.title}
                    onChange={handleChange}
                    id="{item.title}"
                  />
                  <br></br>
                  <a href="/">{item.url}</a>
                </form>
                {item.title ? (
                  <strong>{item.title} </strong>
                ) : (
                  "Please type new title"
                )}
              </Card.Body>
              <button onClick={remove}>Remove</button>
            </Card>
            <p></p>
          </div>
        ))}
      </div>
    </Container>
  );
}
