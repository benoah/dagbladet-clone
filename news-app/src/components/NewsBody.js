import React, { useEffect, useState } from "react";
import { Container, Image, Card, Button } from "react-bootstrap/";

export default function NewsBody() {
  const [col1, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://storage.googleapis.com/aller-structure-task/test_data.json"
      );
      const data = await res.json();
      const col1 = data[0][0].columns;
      setData(col1);
    };
    fetchData();
  }, [setData]);

  return (
    <Container className="NewsHolder">
      <div className="row">
        {col1.map((item) => (
          <div style={{ height: "100%" }} className="col-md-4 ">
            <Card>
              <Image style={{ height: "10rem" }} src={item.imageUrl} />
              <Card.Body>
                <input value={item.title} />
              </Card.Body>
            </Card>
            <p></p>
          </div>
        ))}
      </div>
    </Container>
  );
}
