interface BodyProps {
  title: string;
  text: string;
  url: string;
}

const Body: React.FC<BodyProps> = ({title, text, url}) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={url} className="btn">Go somewhere</a>
    </div>
  )
}

export default Body;