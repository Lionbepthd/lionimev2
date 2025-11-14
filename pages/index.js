import { useState, useEffect } from 'react';
import Link from 'next/link';
import AnimeCard from '../components/AnimeCard';

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch('/api/anime')
      .then((res) => res.json())
      .then((data) => setTrending(data.data.slice(0, 12))); // Ambil 12 pertama
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Anime Terpopuler</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {trending.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Lainnya</h2>
        <div className="flex space-x-4">
          <Link href="/genre/action">
            <span className="bg-gray-200 p-2 rounded cursor-pointer hover:bg-gray-300">Action</span>
          </Link>
          <Link href="/movie">
            <span className="bg-gray-200 p-2 rounded cursor-pointer hover:bg-gray-300">Movie</span>
          </Link>
          <Link href="/schedule">
            <span className="bg-gray-200 p-2 rounded cursor-pointer hover:bg-gray-300">Jadwal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
