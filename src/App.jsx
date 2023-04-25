import { Cards } from './components/Cards/Cards'
import { useFilms } from './components/useFilms/useFilms'

const App = () => {
  const { filterFavouritesHandler } = useFilms()

  return (
    <div className="container p-5">
      <header className="mb-5 text-center">
        <button type="button" aria-label="#" onClick={filterFavouritesHandler}><i className="fa-solid fa-heart text-danger fs-1" /></button>
      </header>
      <Cards />
    </div>
  )
}

export default App
