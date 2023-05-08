import Header from "./components/Header";

function App() {
  return (
    <main className='p-4 flex flex-col items-center bg-orange-200 h-screen'>
      <Header />
      <h2 className='text-3xl p-3  font-medium underline'>
        Chess - A battle of Wits
      </h2>
      <img
        src='./public/chess-base.jpeg'
        alt='Girl playing chess'
        width='400'
        height='400'
        className='p-4'
      />
    </main>
  );
}

export default App;
