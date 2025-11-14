import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil detail anime' });
  }
}
