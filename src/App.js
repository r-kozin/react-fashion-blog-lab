import Header from './Header.js';
import Footer from './Footer.js';
import Article from './Article.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Article date="11/12/20" title="On the Street in Brooklyn" img="./blog-image-1.jpeg" />
      <Article date="11/11/20" title="Vintage in Vogue" img="./blog-image-2.jpeg" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
