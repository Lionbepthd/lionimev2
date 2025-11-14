import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/schedules');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil jadwal' });
  }
}
