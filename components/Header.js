import Link from "next/link"

const Header = () => {
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
        <Link href={'/'}>
        <img className="w-64 mb-8 md:mb-0" src="logo.svg"/>
        </Link>
        <div>
          <Link href={'/login'}
                className="bg-red-500 px-3 py-2 rounded-lg text-white font-bold uppercase hover:text-lg">
                  Iniciar Sesión
          </Link>
          <Link href={'/newuser'}
                className="bg-black ml-3 px-4 py-2 rounded-lg text-white font-bold uppercase hover:text-lg">
                  Registrarse
          </Link>
        </div>
    </header>
  )
}

export default Header