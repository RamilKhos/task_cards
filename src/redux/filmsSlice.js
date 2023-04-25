import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const URL_KINOPOISK_API = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=MAY'
const API_KEY = 'dd663cb5-307c-413c-98fb-481319dfdb2f'

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const response = await axios(URL_KINOPOISK_API, { headers: { 'X-API-KEY': API_KEY } })
    const dataFromAPI = await response.data
    return dataFromAPI
  },
)

const initialState = {
  films: [],
  showIsFavourites: false,
}

export const filmsSlice = createSlice({
  name: 'content',
  initialState,

  reducers: {
    changeStatusFavourite: (state, action) => {
      state.films = state.films.map((film) => {
        if (film.kinopoiskId === action.payload) {
          return { ...film, isFavourite: !film.isFavourite }
        }
        return film
      })
    },
    deleteFilm: (state, action) => {
      state.films = state.films.filter((film) => film.kinopoiskId !== action.payload)
    },
    toggleIsFavourites: (state) => { state.showIsFavourites = !state.showIsFavourites },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.films = [...action.payload.items.map((film) => ({
        ...film,
        isFavourite: false,
      }))]
    })
  },
})

export const {
  changeStatusFavourite, deleteFilm, filterFavouritesFilms, toggleIsFavourites,
} = filmsSlice.actions
export const filmsReducer = filmsSlice.reducer
