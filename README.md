# Geocoding API

API ini adalah hasil dari eksplorasi saya dalam mempelajari NestJS (typescript), dan ini adalah aplikasi sederhana yang menyediakan dua layanan: menghitung jarak antara dua alamat dan pencarian alamat. Mari kita mulai!

## Instalasi

### Langkah 1: Klon Repository

```bash
git clone https://github.com/sarrahman-me/geocoding-api.git
cd geocoding-api
```

### Langkah 2: Instal Dependencies

Anda dapat menggunakan npm untuk menginstal dependensi.

Menggunakan npm:

```bash
npm install
```

### Langkah 3: Konfigurasi Variabel Lingkungan

Salin berkas `.env.example` sebagai `.env` dan konfigurasi variabel lingkungan yang diperlukan. Pastikan Anda telah mendaftar di distancematrix.ai dan memperoleh akses token yang diperlukan.

```bash
cp .env.example .env

```

### Langkah 4: Menjalankan API

Anda dapat menjalankan API dengan perintah:

```bash
npm start
```

API Anda akan dijalankan di port 3000 secara default dan Anda dapat mengaksesnya melalui [http://localhost:3000](http://localhost:3000).

## Penggunaan

API ini menyediakan dua endpoint utama:

### 1. Menghitung Jarak Antara Dua Alamat

Anda dapat menggunakan endpoint ini untuk menghitung jarak antara dua alamat.

**URL**: `/maps/distance-matrix`

**Metode**: GET

**Parameter**: `origins` (Alamat Asal), `destinations` (Alamat Tujuan)

Contoh:

```http
GET /maps/distance-matrix?origins=Jakarta&destinations=Bali
```

### 2. Pencarian Alamat

Anda dapat menggunakan endpoint ini untuk mencari alamat berdasarkan parameter yang diberikan.

**URL**: `/maps/geocoding/search/:alamat`

**Metode**: GET

**Parameter**: `alamat` (Alamat yang Dicari)

Contoh:

```http
GET /maps/geocoding/search/Jakarta
```

Happy Coding !!
