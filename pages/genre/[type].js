import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import AnimeCard from '../../components/AnimeCard';

export default function GenrePage() {
  const router = useRouter();
  const { type } = router.query;
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    if (type) {
      fetch(`/api/anime/genre/${type}`)
        .then((res) => res.json())
        .then((data) => setAnimeList(data.data));
    }
  }, [type]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Genre: {type}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
