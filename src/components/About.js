function About() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
            <div className="bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold" id="sobre">Sobre</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
            </div>
            <div className="bg-gray-800 text-white p-4">
                <img src="https://via.placeholder.com/400" alt="Imagem Sobre" className="w-full h-48 object-cover"/>
            </div>
            <div className="bg-gray-800 text-white p-4 border-2">
                <img src="https://via.placeholder.com/400" alt="Imagem Sobre" className="w-full h-48 object-cover"/>
            </div>
            <div className="bg-gray-800 text-white p-4" id="comousar">
                <h2 className="text-2xl font-bold">Como Usar?</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
            </div>
        </div>
    );
}

export default About;