interface CardType {
  children: React.ReactNode;
}

const Card: React.FC<CardType> = ({children}) => {
  return (
    <div className="card">
      {children}
    </div> 
  )
}

export default Card;