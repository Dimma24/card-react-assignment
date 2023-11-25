interface CardProps {
   title: string;
   header: string;
   updated: string;
   created: string;
}

function Card({ header, title, updated, created }: CardProps) {
   return (
      <div className="card">
         <div className="card-headings">
            <h5>{header}</h5>
            <h1>{title}</h1>
         </div>
         <div className="card-info">
            <p>{updated}</p>
            <p>{created}</p>
         </div>
      </div>
   );
}

export default Card;
