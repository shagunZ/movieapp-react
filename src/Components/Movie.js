import React from 'react';
const IMG_API= "https://image.tmdb.org/t/p/w500"

const setVoteClass = (vote) =>{
   if(vote>=8) return "lightgreen";
   else if(vote>=6) return "orange";
   else return "brown"
}

const Movie= ({title, poster_path, overview, vote_average,release_date,popularity}) => (
    <div className='movie'>
      
     <img src={poster_path ? 
                        IMG_API +poster_path : 'https://images.unsplash.com/photo-1652077859695-de2851a95620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8JTNGfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' } alt={title} />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </div>

        <div className='movie-over'>
        <h2>Overview: </h2>
        <p>{overview}</p>
        <p style={{float:'right',fontWeight:'bold'}}>{release_date}</p>
        </div>
    </div>
);

export default Movie;