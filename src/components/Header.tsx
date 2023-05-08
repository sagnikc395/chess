function Header() {
  return (
    <>
      <header className=''>
        <ul className='flex flex-row gap-x-4 items-end'>
          <li className='border-2 rounded-lg p-2 border-gray-900'>
            <a className='text-xl' href='/signup'>
              SignUp
            </a>
          </li>
          <li className='border-2 rounded-lg p-2 border-gray-900'>
            <a className='text-xl' href='/signin'>
              SignIn
            </a>
          </li>
          <li className='border-2 rounded-lg p-2 border-gray-900'>
            <a className='text-xl' href='/room'>
              Anon Game
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
