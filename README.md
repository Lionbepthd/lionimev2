# Lionime

**Lionime** adalah website sederhana untuk mencari dan melihat informasi tentang anime. Website ini dibangun menggunakan HTML, CSS, dan JavaScript, serta menggunakan API publik [Jikan](https://jikan.moe/) untuk mendapatkan data anime.

> **Catatan Penting:** Lionime saat ini hanya menampilkan **informasi** tentang anime (judul, genre, skor, sinopsis, dll.) dan **tidak menyediakan fitur untuk menonton**. Fitur menonton bisa ditambahkan dengan menautkan ke platform streaming legal.

## Fitur

*   **Beranda:** Menampilkan daftar anime terbaru dan populer.
*   **Navigasi:** Mudah berpindah antar halaman utama (List, Genre, Movie, Jadwal).
*   **Pencarian:** Mencari anime berdasarkan judul.
*   **Daftar Berdasarkan Kategori:**
    *   **List:** Menampilkan anime terbaru dan populer.
    *   **Genre:** Menampilkan anime berdasarkan genre (Action, Comedy, dll.).
    *   **Movie:** Menampilkan daftar film anime.
    *   **Jadwal:** Menampilkan jadwal rilis anime mingguan (misalnya hari Senin).
*   **Detail Anime:** Menampilkan informasi lengkap tentang anime saat kartu anime diklik, termasuk sinopsis.

## Teknologi yang Digunakan

*   **HTML5:** Struktur halaman web.
*   **CSS3:** Desain dan tampilan.
*   **JavaScript (Vanilla):** Fungsi interaktif dan permintaan API.
*   **[Jikan API v4](https://docs.api.jikan.moe/):** Sumber data anime.

## Cara Menjalankan

Website ini **tidak dapat dijalankan secara langsung** dari file `index.html` di browser karena pembatasan keamanan browser untuk permintaan API (`fetch`) dari file lokal (`file://`).

Kamu perlu menjalankannya melalui **server web lokal**.

### 1. Menggunakan Python

1.  Pastikan kamu memiliki [Python](https://www.python.org/downloads/) terinstal di komputer kamu.
2.  Buka terminal atau command prompt.
3.  Navigasi ke folder tempat file `index.html` berada (misalnya `cd /path/to/lionime`).
4.  Jalankan perintah berikut:
    *   Jika kamu menggunakan Python 3:
        ```bash
        python -m http.server 8000
        ```
    *   Jika kamu menggunakan Python 2 (jarang digunakan sekarang):
        ```bash
        python -m SimpleHTTPServer 8000
        ```
5.  Buka browser dan kunjungi `http://localhost:8000`.

### 2. Menggunakan VS Code Live Server

1.  Instal [Visual Studio Code](https://code.visualstudio.com/).
2.  Instal ekstensi [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
3.  Buka folder proyek Lionime di VS Code.
4.  Klik kanan pada file `index.html`.
5.  Pilih "Open with Live Server".

### 3. Menggunakan XAMPP (Opsional)

1.  Instal [XAMPP](https://www.apachefriends.org/download.html).
2.  Letakkan semua file proyek ke dalam folder `htdocs` (misalnya `C:\xampp\htdocs\lionime\`).
3.  Jalankan XAMPP Control Panel dan start Apache.
4.  Buka browser dan kunjungi `http://localhost/lionime/`.

## Struktur File
