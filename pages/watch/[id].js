import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function WatchPage() {
  const router = useRouter();
  const { id, ep } = router.query;
  const [stream, setStream] = useState(null);

  useEffect(() => {
    if (id && ep) {
      fetch(`/api/stream?id=${id}&ep=${ep}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.sources && data.sources.length > 0) {
            setStream(data.sources[0].url);
          }
        })
        .catch(err => console.error(err));
    }
  }, [id, ep]);

  if (!stream) return <p>Loading stream...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Episode {ep}</h1>
      <video controls width="100%">
        <source src={stream} type="application/x-mpegURL" />
        Browser kamu tidak mendukung video.
      </video>
    </div>
  );
}
