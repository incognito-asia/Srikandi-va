# Srikandi VA - Website Layanan Asisten Virtual

Selamat datang di repositori untuk website Srikandi VA. Proyek ini adalah platform penyewaan jasa *virtual assistant* dengan alur kerja pengiriman form yang cepat dan non-blocking.

## 🚀 Gambaran Umum

Website ini terdiri dari dua halaman utama:
1.  **Landing Page**: Halaman perkenalan yang berisi berbagai seksi seperti Hero, Tentang Kami, Program, dan Cara Kerja.
2.  **Halaman Form Permintaan**: Halaman di mana calon klien dapat mengirimkan detail kebutuhan mereka.

Fitur utamanya adalah proses *submit form* yang sangat responsif, di mana data disimpan ke database dan notifikasi dikirim ke WhatsApp secara paralel menggunakan Supabase Edge Function.

## 💻 Tumpukan Teknologi (Tech Stack)

* **Framework**: Next.js 14+ (App Router)
* **Styling**: Tailwind CSS
* **Komponen UI**: shadcn/ui
* **Manajemen Form**: React Hook Form
* **Validasi Skema**: Zod
* **Backend & Database**: Supabase (PostgreSQL, Edge Functions)
* **Integrasi Notifikasi**: Meta (WhatsApp) Business API

## ⚙️ Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini di komputer Anda, ikuti langkah-langkah berikut:

### 1. Prasyarat

* Node.js (versi 18 ke atas)
* npm atau yarn
* Supabase CLI
* Deno (untuk *linting* Edge Function di VS Code)

### 2. Instalasi

Salin repositori ini dan install semua *dependency*:
```bash
git clone [URL_REPOSITORI_ANDA]
cd srikandi-va-web
npm install
```

### 3. Konfigurasi Environment Variables

Salin file `.env.example` menjadi `.env.local` dan isi nilainya sesuai dengan kunci dari proyek Supabase Anda.
```bash
cp .env.example .env.local
```
**Variabel yang dibutuhkan:**
* `NEXT_PUBLIC_SUPABASE_URL`
* `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Konfigurasi Supabase Secrets

Untuk menjalankan Edge Function, Anda perlu menambahkan *secret* untuk WhatsApp API di dashboard Supabase.

* Pergi ke **Dashboard → Edge Functions → Secrets**.
* Tambahkan *secret* berikut:
    * `META_WA_TOKEN`
    * `WA_PHONE_NUMBER_ID`

### 5. Menjalankan Server Development

```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:3000`.

## 🎨 Struktur Folder

* `/src/app`: Berisi semua rute halaman (App Router).
* `/src/components`: Berisi semua komponen React yang dapat digunakan kembali.
* `/src/lib`: Berisi *utility functions*, seperti `supabaseClient.ts`.
* `/public`: Berisi semua aset statis seperti gambar dan font.
* `/supabase/functions`: Berisi kode untuk Supabase Edge Functions.

---