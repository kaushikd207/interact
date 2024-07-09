import { useState } from "react";
import "./Creator.css";

const data = [
  {
    igmSrc:
      "https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png",
    vdoSrc:
      "https://www.youtube.com/embed/NkDtaXvzt-I?si=JbuZ0sQwQlStR8do?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1",
    title: "How to plan your retirement with crypto?",
  },
  {
    igmSrc:
      "https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png",
    vdoSrc:
      "https://www.youtube.com/embed/NkDtaXvzt-I?si=JbuZ0sQwQlStR8do?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1",
    title: "  Why are there limited Bitcoin?",
  },
  {
    igmSrc:
      "https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png",
    vdoSrc:
      "https://www.youtube.com/embed/NkDtaXvzt-I?si=JbuZ0sQwQlStR8do?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1",
    title: " How does Uniswap actually work?",
  },
  {
    igmSrc:
      "https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png",
    vdoSrc:
      "https://www.youtube.com/embed/NkDtaXvzt-I?si=JbuZ0sQwQlStR8do?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1",
    title: " How to spot crypto projects to invest in?",
  },
];
const Card = ({ data }) => {
  const { igmSrc, vdoSrc, title } = data;
  const [hide, setHide] = useState(false);
  return (
    <div
      className="card"
      onClick={() => setHide(!hide)}
      onMouseLeave={() => setHide(false)}
    >
      <img
        className={hide ? "hide" : "cardImg"}
        onClick={() => setHide(!hide)}
        src={igmSrc}
        alt=""
      />
      <div class="_video_card_title_1w3qv_37">{title}</div>
      <iframe
        width="100%"
        height="100%"
        src={vdoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
const Creator = () => {
  return (
    <>
      <div className="creatorContainer">
        <div className="cardContainer">
          <div className="creatorText">
            Top Crypto Creators and Projects to Follow
            <p>Answers to your crypto doubts, straight from the experts</p>
          </div>
          <div className="cards">
            {data.map((d) => {
              return <Card data={d} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Creator;
