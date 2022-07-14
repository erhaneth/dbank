import { Navbar, Transactions, Welcome, Loader, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Dbank</h1>
      <div>
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
      <Loader />
    </div>
  );
}

export default App;
