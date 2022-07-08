import logo from "./logo.svg";
import "./App.css";
import { NavBar, Title, TilesContainer, SubscriptionForm } from "./components";
import HeroImage from "./components/HeroImage";

import useArticles from "./hooks/useArticles";
import { Route } from "wouter";
function App() {
  const { articles, setFilter, filter } = useArticles();
  return (
    <div className="App">
      <HeroImage text="El secreto de tu cocina" />
      <header></header>
      <main>
        <section className="section-container">
          <header>
            <Title title="Nuestros Artículos" />
          </header>
          <div className="tiles-searcher">
            <div className="tiles-searcher__left">
              <NavBar
                routes={[
                  {
                    name: "TODOS",
                    filter: "Todos",
                  },
                  {
                    name: "PRODUCTOS",
                    filter: "Productos",
                  },
                  {
                    name: "RECETAS",
                    filter: "Recetas",
                  },
                  {
                    name: "CONSEJOS",
                    filter: "Consejos",
                  },
                ]}
                filter={filter}
                setFilter={setFilter}
              />
            </div>
            <div className="tiles-searcher__right">
              <TilesContainer tiles={articles} />
            </div>
          </div>
        </section>
        <section className="section-container">
          <header>
            <Title title="Contáctanos" />
          </header>
          <div className="form-container">
            <SubscriptionForm />
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
