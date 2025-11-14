import { useState, useEffect } from 'react';
import AnimeCard from '../components/AnimeCard';

export default function MoviePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/anime?type=movie')
      .then((res) => res.json())
      .then((data) => setMovies(data.data.filter(a => a.type === 'Movie')));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Anime Movie</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
