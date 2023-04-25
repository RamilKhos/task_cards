import { CardItems } from '../CardItems/CardItems'
import { useFilms } from '../useFilms/useFilms'

export const Cards = () => {
  const { films, favouriteHandler, deleteHandler } = useFilms()

  return (
    <div className="row">
      {films.length > 0
        ? films.map((film) => (
          <div className="col mb-4" key={film.kinopoiskId}>
            <CardItems
              poster={film.posterUrlPreview}
              name={film.nameRu}
              premiere={film.premiereRu}
              isFavourite={film.isFavourite}
              id={film.kinopoiskId}
              favouriteHandler={favouriteHandler}
              deleteHandler={deleteHandler}
            />
          </div>
        ))
        : <div className="text-light fs-1">No films...</div>}
    </div>
  )
}
