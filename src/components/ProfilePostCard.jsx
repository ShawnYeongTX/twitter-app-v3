import { Button, Col, Image, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function ProfilePostCard({ content, postId }) {
  const [likes, setLike] = useState(0);
  const pic =
    "https://pbs.twimg.com/profile_images/1587405892437221376/h167Jlb2_400x400.jpg";

  useEffect(() => {
    fetch(
      `https://2cc04c91-5b9f-47b7-980e-567ea1ea5be2-00-13vstn8gi2g1i.sisko.replit.dev/likes/post/${postId}`
    )
      .then((response) => response.json())
      .then((data) => setLikes(data.length))
      .catch((error) => console.log({ error }));
  }, [postId]);

  return (
    <Row
      className="p-3"
      style={{
        borderTop: "1px solid D3D3D3",
        borderBottom: "1px solid D3D3D3",
      }}
    >
      <Col sm={1}>
        <Image src={pic} fluid roundedCircle></Image>
      </Col>
      <Col>
        <strong>Shawn</strong>
        <span>@Shawn - March 21</span>
        <p>{content}</p>
        <div className="d-flex justify-content-between">
          <Button variant="light" className="rounded-pill">
            <i className="bi bi-chat"></i>
          </Button>

          <Button variant="light" className="rounded-pill">
            <i className="bi bi-repeat"></i>
          </Button>

          <Button variant="light" className="rounded-pill">
            <i className="bi bi-heart">{likes}</i>
          </Button>

          <Button variant="light" className="rounded-pill">
            <i className="bi bi-heart"></i>
          </Button>

          <Button variant="light" className="rounded-pill">
            <i className="bi bi-graph-up"></i>
          </Button>

          <Button variant="light" className="rounded-pill">
            <i className="bi bi-uplaod"></i>
          </Button>
        </div>
      </Col>
    </Row>
  );
}
