import { Navbar, Transactions, Welcome, Loader, Footer } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      
      <div className="gradient-bg-welcome">
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
