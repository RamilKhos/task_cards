import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  changeStatusFavourite, deleteFilm, fetchContent, toggleIsFavourites,
} from '../../redux/filmsSlice'

export const useFilms = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const films = useSelector((state) => {
    if (state.content.showIsFavourites) {
      return state.content.films.filter((film) => film.isFavourite)
    }
    return state.content.films
  })

  const favouriteHandler = (id) => {
    dispatch(changeStatusFavourite(id))
  }
  const deleteHandler = (id) => {
    dispatch(deleteFilm(id))
  }

  const filterFavouritesHandler = () => {
    dispatch(toggleIsFavourites())
  }

  return {
    films,
    filterFavouritesHandler,
    favouriteHandler,
    deleteHandler,
  }
}
