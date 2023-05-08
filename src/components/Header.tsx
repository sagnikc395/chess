import { Link, Route } from "wouter";

function Header() {
  return (
    <>
      <header className=''>
        <ul className='flex flex-row gap-x-4 items-end'>
          <li className='border-2 rounded-lg p-2 hover:bg-orange-500 border-gray-900'>
            <div className='text-xl'>SignUp</div>
          </li>
          <li className='border-2 rounded-lg p-2 hover:bg-orange-500 border-gray-900'>
            <div className='text-xl'>
              <Route path='/signin'>SignIn</Route>
            </div>
          </li>
          <li className='border-2 rounded-lg p-2 hover:bg-orange-500 border-gray-900'>
            <a className='text-xl' href='/room'>
              <div className='text-xl'>Anon Game</div>
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
