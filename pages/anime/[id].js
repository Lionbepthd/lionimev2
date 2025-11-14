import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AnimeDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [detail, setDetail] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`/api/anime/${id}`)
        .then((res) => res.json())
        .then((data) => setDetail(data.data));
    }
  }, [id]);

  // Fetch episodes (simulasi, karena Jikan v4 tidak punya episode untuk semua anime)
  useEffect(() => {
    if (detail) {
      // Contoh: buat array 10 episode untuk simulasi
      setEpisodes(Array.from({ length: detail.episodes || 10 }, (_, i) => i + 1));
    }
  }, [detail]);

  if (!detail) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={detail.images.jpg.image_url}
          alt={detail.title}
          className="w-full md:w-1/3 rounded"
        />
        <div className="md:ml-4 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">{detail.title}</h1>
          <p className="my-2">{detail.synopsis}</p>
          <p><span className="font-bold">Studio:</span> {detail.studios?.[0]?.name || 'Tidak diketahui'}</p>
          <p><span className="font-bold">Genre:</span> {detail.genres?.map(g => g.name).join(', ')}</p>
          <p><span className="font-bold">Status:</span> {detail.status}</p>
          <p><span className="font-bold">Episode:</span> {detail.episodes}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold">Daftar Episode</h2>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mt-2">
          {episodes.map((ep) => (
            <Link key={ep} href={`/watch/${id}?ep=${ep}`}>
              <span className="bg-blue-500 text-white p-2 rounded text-center cursor-pointer hover:bg-blue-600">
                {ep}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
    }
