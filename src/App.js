import logo from "./logo.svg";
import "./App.css";
import { NavBar, Title, TilesContainer, SubscriptionForm } from "./components";
import HeroImage from "./components/HeroImage";
import mooksArticles from "./assets/mooks/articles";
function App() {
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
                    route: "/todos",
                  },
                  {
                    name: "PRODUCTOS",
                    route: "/productos",
                  },
                  {
                    name: "RECETAS",
                    route: "/recetas",
                  },
                  {
                    name: "CONSEJOS",
                    route: "/consejos",
                  },
                ]}
              />
            </div>
            <div className="tiles-searcher__right"></div>
            <TilesContainer tiles={mooksArticles} />
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
