import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className='p-4 flex flex-col items-center  min-h-screen  bg-orange-100'>
      <Header />
      <h2 className='text-3xl p-6  font-black underline'>
        Chess - A battle of Wits
      </h2>
      <div className='p-4 flex flex-row'>
        <img
          src='/chess-base.jpeg'
          alt='Girl playing chess'
          width='400'
          height='400'
          className='relative mx-auto rounded-lg overflow-hidden border-gray-900 border-2'
        />
      </div>
      <Footer />
    </main>
  );
}

export default App;
