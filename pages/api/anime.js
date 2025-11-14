import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/anime?order_by=members&sort=desc');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data dari Jikan' });
  }
}
