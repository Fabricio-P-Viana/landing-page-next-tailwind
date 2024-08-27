
function Cards({ amount = 3 }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
            {Array.from({ length: amount }).map((_, index) => (
                <div key={index} className='border border-gray-700 shadow-lg rounded-lg overflow-hidden bg-gray-800 bg-opacity-75'>
                    <img src='https://via.placeholder.com/400' alt='Card Imagem' className='w-full h-48 object-cover'/>
                    <div className='p-4'>
                        <h2 className='text-xl font-bold mb-2 text-white'>Título Card</h2>
                        <p className='text-gray-300 mb-4'>Descrição do card.</p>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>Botão</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;