                // {Books.slice(0, 3).map((book) => {
                //     return (
                //         <div key={book.id} className='book-card'>
                //             <Link 
                //             >
                //             <img className='book-image' src={book.image_url} />
                //             <p className='book-author'>Author: {book.author}</p>
                //             <p className='book-title'>Title: {book.title}</p>
                //             <p className='book-genre'>Genre: {book.genre}</p>
                //             <p className='book-description'>Description: {book.description}</p>
                //             <p className='book-pages'> Pages: {book.total_pages}</p>
                //             <div className='book-bttns-container'>
                //                 <button className='read-book-bttn'>Reading +</button>
                //             </div>
                //         </Link>
                //         </div>
                //     )
                // })}




const songs = [
  { title: "Nights", artist: "Frank Ocean", duration: 307 },
  { title: "Redbone", artist: "Childish Gambino", duration: 326 },
  { title: "Location", artist: "Playboi Carti", duration: 169 }
];

const songDuration = songs.map(({title, artist, duration}) => {

    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60


    return {
        title, 
        artist, 
        length: `${minutes}:${seconds.toString().padStart(2, "0")}`, 
        isLongSong: duration >= 300
    }
})

const minutes = Math.floor(totalSeconds / 60)

