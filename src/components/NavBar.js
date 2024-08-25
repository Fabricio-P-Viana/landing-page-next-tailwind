const NavBar = () => {
    return (
      <nav className="bg-cyan-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">Next | Tailwind</div>
          <div className="space-x-4">
            <a href="#home" className="text-gray-300 hover:text-white">Home</a>
            <a href="#sobre" className="text-gray-300 hover:text-white">Sobre</a>
            <a href="#comousar" className="text-gray-300 hover:text-white">Como Usar</a>
            <a href="#exemplos" className="text-gray-300 hover:text-white">Exemplos</a>
          </div> 
        </div>
      </nav>
    );
};

export default NavBar;