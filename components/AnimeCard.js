import Link from 'next/link';

export default function AnimeCard({ anime }) {
  return (
    <Link href={`/anime/${anime.mal_id}`}>
      <div className="border rounded p-2 hover:shadow-lg cursor-pointer">
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          className="w-full aspect-[2/3] object-cover rounded"
        />
        <h3 className="font-bold truncate text-sm mt-1">{anime.title}</h3>
        <p className="text-xs text-gray-500 truncate">{anime.genres?.slice(0, 2).map(g => g.name).join(', ')}</p>
      </div>
    </Link>
  );
}
