import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./Footer";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { pokemons = [], isLoading, page } = useSelector((state) => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons());
  }, [])

  return (
    <>
      <div className="container text-center">
        <h1 className="text-primary">PokemonApp</h1>
        <hr />

        <ul className="list-group list-group-numbered">
          {pokemons.map(({ name }) => (
            <li className="list-group-item" key={name}>{name}</li>
          ))}
        </ul>

        <p className="fw-bold my-2">Loading: <span className={isLoading ? 'text-success fw-normal' : 'text-danger fw-normal'}>{isLoading ? 'True' : 'False'}</span></p>
        <hr />

        <button className="btn btn-primary" disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>Next</button>
      </div>

      <Footer />
    </>
  )
}
