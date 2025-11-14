import axios from 'axios';

export default async function handler(req, res) {
  const { type } = req.query;
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?genres=${type}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data genre' });
  }
}
