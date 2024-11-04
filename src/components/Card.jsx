function Card(props) {
  return (
    <div className="card shadow-md border border-slate-200 p-2 size-32 flex justify-center items-center hover:shadow-lg hover:border-slate-300">
      <h2 className="card-title">{props.title}</h2>
    </div>
  );
}

export default Card;
