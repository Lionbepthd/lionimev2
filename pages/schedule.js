import { useState, useEffect } from 'react';

export default function SchedulePage() {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    fetch('/api/schedule')
      .then((res) => res.json())
      .then((data) => setSchedule(data.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Jadwal Rilis</h1>
      {Object.entries(schedule).map(([day, animeList]) => (
        <div key={day} className="mb-6">
          <h2 className="text-xl font-bold capitalize">{day}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
            {animeList.map((anime) => (
              <div key={anime.mal_id} className="border p-2 rounded">
                <p>{anime.title}</p>
                <p className="text-xs text-gray-500">{anime.airing_time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
