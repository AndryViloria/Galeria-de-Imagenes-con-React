const Card = ({ contenido }) => {
    return (
        <div className="card">
            <img src={contenido.img} className="card-img-top" alt={contenido.titulo} />
            <div className="card-body">
                    <h5 className="card-title">{contenido.titulo}</h5>
                    <p className="card-text">{contenido.descripcion}</p>
            </div>
        </div>
    )
}

export default Card