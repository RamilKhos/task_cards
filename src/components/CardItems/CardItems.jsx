export const CardItems = ({
  poster, name, premiere, isFavourite, id, favouriteHandler, deleteHandler,
}) => (
  <div className="card p-2 text-center">
    <img src={poster} className="images mx-auto" alt="images" />
    <div className="card-body">
      <h3 className="card-title fs-6">{name}</h3>
      <p className="card-text">{premiere}</p>

      <div className="d-flex justify-content-center align-items-center gap-2">
        <button type="button" onClick={() => deleteHandler(id)}>
          <i className="fa-solid fa-trash-can" />
        </button>
        <button type="button" onClick={() => favouriteHandler(id)}>
          {isFavourite ? <i className="fa-solid fa-heart text-danger" /> : <i className="fa-regular fa-heart" />}
        </button>
      </div>

    </div>
  </div>
)
