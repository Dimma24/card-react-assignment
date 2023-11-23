interface CardProps {
   title: string;
   head: string;
   updated: string;
   created: string;
}

function Card({ head, title, updated, created }: CardProps) {
   return (
      <div className="card">
         <h5>{head}</h5>
         <h1>{title}</h1>
         <p>{updated}</p>
         <p>{created}</p>
      </div>
   );
}

export default Card;
