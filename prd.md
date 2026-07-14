**MASTERY BASED GRADING**

```
1. Penguasaan Array Function

    Rejected: Komponen App tidak menggunakan Array.prototype.map maupun Array.prototype.filter (UI rusak atau daftar tidak berubah).
    Basic: NotesList merender setiap NoteItem menggunakan map, dan onDelete menghapus catatan dengan filter.
    Skilled: App menerapkan filter berdasarkan searchKeyword untuk menampilkan daftar hasil pencarian ( case-insensitive).
    Advanced: Catatan dikelompokkan per kombinasi bulan–tahun (boleh bahasa inggris atau indonesia) sebelum di-render; NotesList menampilkan struktur <section class="notes-group"> dengan header dan jumlah item untuk tiap grup.

2. Reusable Component

    Rejected: UI utama ditulis dalam satu komponen sehingga NotesList atau NoteItem tidak digunakan.
    Basic: Komponen starter (App, NoteInput, NotesList, NoteItem) tetap terpisah dan data dikirim melalui props.
    Skilled: Tersedia src/components/NoteActionButton.jsx dengan props variant dan onClick yang dipakai NoteItem untuk tombol hapus serta arsip.
    Advanced: File src/components/NoteItem.jsx mendefinisikan fungsi highlightText yang mengembalikan elemen <mark> dan digunakan ulang untuk menyorot note.title serta note.body.

3. State & Event Management

    Rejected: Tambah atau hapus catatan tidak mengubah state notes.
    Basic: onAdd menambahkan catatan baru, onDelete menghapus catatan dari state, dan pesan kosong muncul saat array catatan kosong.
    Skilled: NoteSearch menyimpan searchKeyword di state dan App merender daftar yang sudah difilter sesuai kata kunci.
    Advanced: onArchive men-toggle field archived, dan UI menampilkan dua section terpisah untuk catatan aktif dan arsip lengkap dengan judul Catatan Aktif dan Arsip beserta jumlah item.

4. Controlled Form

    Rejected: Nilai input tidak sinkron dengan state atau submit form gagal menambahkan catatan.
    Basic: Input judul dan isi merupakan controlled component dan form di-reset setelah submit berhasil.
    Skilled: Judul dibatasi maksimal 50 karakter menggunakan state (jika menggunakan atribut maxLength, tidak terhitung valid), serta menampilkan counter. note-input__title__char-limit yang berubah dinamis.
    Advanced: Submit ditolak apabila isi catatan < 10 karakter; pesan error ditampilkan menggunakan elemen dengan class note-input__feedback--error.
```

**DATA TESTID REQUIREMENT**

```
Atribut data-testid sangat penting untuk pengujian. Berikut adalah daftar lengkap data-testid yang wajib ada dan opsional untuk mendukung kriteria skilled dan advanced:
Data-testid Wajib (Basic Functionality)

Struktur Aplikasi:

    note-app - Container seluruh aplikasi catatan
    note-app-header - Container bagian header aplikasi
    note-app-body - Container bagian konten aplikasi (form & daftar catatan)

Form Input Catatan:

    note-input - Container bagian input catatan
    note-input-form - Container bagian form input
    note-input-title-field - Text input untuk judul catatan
    note-input-body-field - Text input untuk isi catatan
    note-input-submit-button - Button untuk menambahkan catatan

Daftar Catatan Aktif:

    active-notes-list - Container daftar catatan aktif
    note-item - Container untuk menampilkan item catatan
    note-item-content - Container bagian judul, tanggal, dan isi catatan
    note-item-title - Heading untuk menampilkan judul catatan
    note-item-date - Paragraph untuk menampilkan tanggal catatan
    note-item-body - Paragraph untuk menampilkan isi catatan
    note-item-action - Container bagian tombol aksi (hapus dan arsip)
    note-item-delete-button - Button untuk menghapus catatan

Empty State:

    Gunakan pattern: data-testid={parentTestId}-empty untuk pesan kosong
    Contoh: data-testid="active-notes-list-empty"
    Tambahkan juga className="notes-list__empty-message" pada elemen pesan

Data-testid Opsional (Skilled & Advanced Criteria)

Pencarian Catatan (Criterion 1 & 3 - Skilled):

    note-search - Container untuk komponen pencarian
    note-search-input - Input field untuk kata kunci pencarian

Fitur Arsip (Criterion 3 - Advanced):

    archived-notes-section - Section header untuk catatan arsip
    archived-notes-list - Container daftar catatan arsip
    note-item-archive-button - Button untuk arsip/unarchive catatan

Character Counter (Criterion 4 - Skilled):

    note-input-title-remaining - Counter sisa karakter judul
    Tambahkan className="note-input__title__char-limit" pada elemen counter

Form Validation (Criterion 4 - Advanced):

    Gunakan className="note-input__feedback--error" untuk pesan error validasi
    Tidak memerlukan data-testid khusus, cukup class name saja

Highlighting (Criterion 2 - Advanced):

    Tidak perlu data-testid khusus
    Gunakan elemen <mark> untuk menyorot hasil pencarian

Grouping (Criterion 1 - Advanced):

    Gunakan <section class="notes-group"> untuk grup catatan per bulan-tahun
    Tambahkan data-testid="{groupKey}-group" untuk setiap grup
    Tambahkan data-testid="{groupKey}-group-count" untuk jumlah item per grup

```
**REFRENSI**

Status: Bagian referensi masih dalam proses kurasi dan dapat berubah. Gunakan tautan yang tersedia sebagai acuan sementara.

Silakan akses contoh aplikasi berikut agar Anda memiliki bayangan seperti apa harus membuat proyek submissionnya.

Contoh Aplikasi:

    Aplikasi Catatan Pribadi - Basic "https://react-note-app-basic-dicoding.netlify.app/"
    Aplikasi Catatan Pribadi - Skilled "https://react-note-app-skilled-dicoding.netlify.app/"
    Aplikasi Catatan Pribadi - Advanced "https://react-note-app-advanced-dicoding.netlify.app/"
    Gunakan aplikasi demo ini sebagai referensi untuk fungsi dan interaksi yang diharapkan





**Pattern Implementasi**
```
=========================================================================================
Empty State Pattern:

<div data-testid="active-notes-list-empty" className="notes-list__empty-message">
  Tidak ada catatan
</div>

=========================================================================================
Dynamic Data-testid Pattern:

{Object.entries(groupedNotes).map(([groupKey, notes]) => (
  <section key={groupKey} data-testid={`${groupKey}-group`} className="notes-group">
    <h3>{formatGroupHeader(groupKey)}</h3>
    <span data-testid={`${groupKey}-group-count`}>{notes.length} catatan</span>
    {/* Render notes */}
  </section>
))}

=========================================================================================
Character Counter Pattern:

<span
  data-testid="note-input-title-remaining"
  className="note-input__title__char-limit"
>
  {50 - title.length} karakter tersisa
</span>

=========================================================================================
Error Message Pattern:

{body.length < 10 && body.length > 0 && (
  <p className="note-input__feedback--error">
    Isi catatan minimal harus 10 karakter
  </p>
)}
```
**KRITERIA PENILAIAN**

| Komponen / Tingkat | Detail Kriteria |
|:-------------------|:----------------|
| **Rubrik** | **Penguasaan Array Function** |
| *Rejected* | Tidak ada penggunaan map/filter yang berfungsi |
| *Basic (+2 pts)* | map merender daftar dan filter menghapus catatan |
| *Skilled (+3 pts)* | filter menerapkan pencarian berdasarkan searchKeyword |
| *Advanced (+4 pts)* | Daftar dikelompokkan per bulan–tahun dan dirender sebagai section.notes-group lengkap dengan header serta jumlah |
| | |
| **Rubrik** | **Reusable Component** |
| *Rejected* | UI tidak memanfaatkan komponen modular |
| *Basic (+2 pts)* | Komponen starter dipakai sesuai tanggung jawab dan menerima props |
| *Skilled (+3 pts)* | Ada src/components/NoteActionButton.jsx yang digunakan pada kedua tombol tindakan |
| *Advanced (+4 pts)* | NoteItem memakai fungsi highlightText untuk menghasilkan elemen <mark> pada judul dan isi |
| | |
| **Rubrik** | **State & Event Management** |
| *Rejected* | Operasi CRUD tidak mengubah state |
| *Basic (+2 pts)* | Handler tambah/hapus bekerja dan pesan kosong tampil saat daftar kosong |
| *Skilled (+3 pts)* | Pencarian mengubah state searchKeyword dan daftar yang dirender sudah difilter |
| *Advanced (+4 pts)* | Toggle arsip memindahkan catatan antara section aktif dan arsip, masing-masing dengan judul berisi jumlah |
| | |
| **Rubrik** | **Controlled Form** |
| *Rejected* | Form tidak terkontrol atau submit gagal |
| *Basic (+2 pts)* | Input judul dan isi controlled, form reset saat submit |
| *Skilled (+3 pts)* | Judul dibatasi 50 karakter dan counter note-input__title__char-limit tersinkron |
| *Advanced (+4 pts)* | Submit ditolak jika isi < 10 karakter dengan pesan note-input__feedback--error |



**Perhitungan Nilai Akhir**

Nilai akhir akan dihitung dengan rumus: Nilai Akhir = Total Points / Jumlah Kriteria

Sebagai contoh, jika pada 4 kriteria di atas Anda mendapatkan nilai berikut:

    Penguasaan Array Function: +3
    Reusable Component: +4
    State & Event Management: +2
    Controlled Form: +3

Maka nilai akhir akan ditentukan dengan: (3 + 4 + 2 + 3) / 4 = 3

Anda akan mendapatkan nilai akhir 3.


**Tabel Penilaian**

< 1	Ditolak	E	-	Tidak Lulus	Anda sudah mencoba tetapi belum memenuhi kompetensi minimal
1 - < 2	Bintang 2	D	Below Basic	Kurang	Anda sudah memenuhi semua kompetensi minimal tetapi terdapat area yang masih bisa ditingkatkan
2 - < 3	Bintang 3	C	Basic	Cukup	Anda sudah memenuhi semua kompetensi minimal dari learning objective
3 - < 4	Bintang 4	B	Skilled	Mahir	Anda sudah memenuhi semua kompetensi dengan baik atau mahir
4	Bintang 5	A	Advanced	Tingkat Lanjut	Anda sudah memenuhi semua kompetensi dengan sangat baik atau tingkat lanjut



**Submission Anda akan Ditolak Bila**

    Kriteria utama tidak terpenuhi.
    Ketentuan berkas submission tidak terpenuhi.
    Menggunakan framework atau UI library selain React.
    Mengirimkan kode JavaScript yang telah di-minify.
    Melakukan kecurangan seperti tindakan plagiasi.