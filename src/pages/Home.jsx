import react from 'react'




function Home() {
    async function fetchBooks() {
        const url = 'https://amazon-books-data-api1.p.rapidapi.com/api/books?limit=150';
        const options = {
	        method: 'GET',
	        headers: {
		        'x-rapidapi-key': 'de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb',
		        'x-rapidapi-host': 'amazon-books-data-api1.p.rapidapi.com'
	            }
            };
            const bookData = await fetch(url, options)
            const data = await bookData.json()
    }    
    fetchBooks()

    return (
        <>
            <h3>Home Page</h3>
        </>
    )
}

export default Home; 