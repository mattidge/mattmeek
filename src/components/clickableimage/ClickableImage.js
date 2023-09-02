import "./ClickableImage.css";

function ClickableImage(props) {
  return (
    <a href={props.url} target="_blank">
        <img src={props.image} className="image"/>
    </a>
  );
}

export default ClickableImage;
