
import './App.css';
import{
  Header,
  Navbar,
  Upload,
  Work,
  Footer,
} from "./components";


function App() {
  return (
    <main>
      <header className="header-bg">
      <Navbar/>
      <Header/>

      </header>
      <Upload/>
      <Work/>
      <Footer/>
      
    </main>
  );
}
export default App;
