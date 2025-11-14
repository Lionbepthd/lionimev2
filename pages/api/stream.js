import axios from 'axios';

export default async function handler(req, res) {
  const { id, ep } = req.query;

  // Contoh untuk Zoro.to (ganti jika ingin gogoanime)
  // Perlu diganti dengan ID Zoro, bukan MAL ID. Ini hanya simulasi.
  // Kamu mungkin perlu search dulu MAL ID -> Zoro ID di API Consumet.
  // Misal: https://api.consumet.org/anime/zoro/servers/{zoroId}?episode={ep}
  try {
    // Ini hanya contoh, kamu harus sesuaikan dengan ID yang benar dari Zoro.
    // Ganti "ZORO_ID" dengan ID nyata dari Zoro.to
    const response = await axios.get(`https://api.consumet.org/anime/zoro/watch?episodeId=${id}-${ep}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil stream' });
  }
}
