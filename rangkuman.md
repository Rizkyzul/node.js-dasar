Rangkuman Dasar-Dasar Node.js untuk Back-End
Anda berada di akhir dari modul Dasar-Dasar Node.js untuk Back-End. Mari kita uraikan materi yang sudah Anda pelajari untuk mempertajam pemahaman.



Pengenalan Node.js
Dari dulu hingga kini, browser menjadi tempat satu-satunya yang dapat mengeksekusi kode JavaScript. Karenanya, Web Developer perlu mempelajari bahasa pemrograman yang berbeda untuk mengembangkan aplikasi Front-End dan Back-End. Meskipun secanggih dan sekuat apa pun JavaScript berkembang, ia hanya akan digunakan di sisi Front-End saja.
Sebenarnya banyak developer yang mencoba membuat teknologi agar JavaScript dapat dijalankan di luar browser. Namun, belum ada yang berhasil. Hingga pada tahun 2009, Ryan Dahl berhasil menciptakan Node.js, teknologi yang diharapkan oleh banyak web developer. Tak disangka, saat ini teknologi yang diciptakannya menuai popularitas tinggi. Node.js banyak digunakan oleh perusahaan besar sekelas Netflix, Uber, Paypal, dan eBay.
Node.js berhasil menjadi JavaScript Runtime yang dapat mengeksekusi kode JavaScript di luar browser.
Menjalankan JavaScript Menggunakan Node.js
Terdapat dua cara dalam menjalankan kode JavaScript menggunakan Node.js, yakni Node.js REPL dan berkas javascript.

Node.js REPL
Node.js memiliki fitur REPL atau Read-Eval-Print Loop. Sesuai namanya, fitur ini berfungsi untuk membaca kode JavaScript, mengevaluasi kode tersebut, kemudian mencetak hasil evaluasinya ke console. Nah, untuk loop, berarti proses tersebut selalu berulang.
Jika Anda mengeksekusi console.log(‘Hello NodeJS REPL’), selain pesan “Hello NodeJS REPL”, nilai undefined juga akan tercetak. Hal tersebut terjadi karena REPL selalu menampilkan nilai evaluasi pada console. Karena method console.log() tidak mengembalikan nilai, teks undefined-lah yang tercetak pada console.

Berkas JavaScript
Cara lain untuk mengeksekusi kode JavaScript menggunakan Node.js adalah melalui berkas berekstensi .js. Caranya mudah, tinggal buat berkas JavaScript pada proyek Node.js, tulis kode JavaScript di berkas tersebut, lalu eksekusi dengan perintah node namafile.js.


Node.js Global Object
Dilansir dari website Node.js, sebenarnya mereka hanya menambahkan beberapa objek saja. Objek tersebut dinamakan dengan ‘true globals’. Berikut adalah daftarnya:

global: Global namespace. Member apa pun yang ada di dalam object ini dapat diakses pada cakupan global.
process: menyediakan interaksi dengan proses Node.js yang berjalan.
console: menyediakan berbagai fungsionalitas STDIO.
setTimeout, clearTimeout, setInterval, clearInterval: berkaitan dengan waktu.

Ada juga objek yang merupakan ‘pseudo-globals’ atau objek global semu. Objek ini tidak terlihat bila dicetak menggunakan Object.getOwnPropertyName(global) sebab ia bukan member langsung dari objek global, melainkan diturunkan dari cakupan module. Karena pada Node.js semua berkas JavaScript adalah module [3], objek pseudo-globals dapat diakses layaknya global objek. Berikut adalah daftarnya:
module: digunakan untuk sistem modularisasi pada Node.js.
__filename: keyword untuk mendapatkan lokasi berkas JavaScript yang dieksekusi. Keyword ini tidak tersedia pada Node.js REPL.
__dirname: keyword untuk mendapatkan root directory dari berkas JavaScript yang dieksekusi.
require: digunakan untuk mengimpor module JavaScript.


Process Object
Pada Node.js, global objek process memiliki fungsi dan properti yang dapat memberikan informasi mengenai proses yang sedang berjalan.
Salah satu yang sering digunakan adalah properti process.env. Melalui properti ini, kita dapat menyimpan nilai atau mendapatkan informasi mengenai environment yang digunakan selama proses sedang berlangsung. Contoh, process.env memiliki properti process.env.PWD yang menyediakan informasi mengenai lokasi di mana proses dijalankan; properti process.env.USER menyimpan informasi nama user pada komputer Anda; dan masih banyak properti lainnya. Anda bisa lihat daftar lengkap properti yang ada pada halaman dokumentasi Node.js mengenai process.env.
Anda juga bisa secara manual menyimpan nilai di dalam process.env. Hal ini berguna untuk menentukan alur code seperti if-else dalam program berdasarkan environment yang Anda berikan. Contohnya, ketika Anda ingin nilai variabel host berbeda di kala pengembangan (development) dan produksi (production), Anda bisa membuat properti NODE_ENV pada process.env. Jadi, Anda bisa menentukan nilai host berdasarkan kondisi NODE_ENV.



Modularization
Makin kompleks program yang dikembangkan, Makin kompleks pula kode yang dituliskan. Jika kode aplikasi hanya ditulis dalam satu berkas saja, tentu itu akan menyulitkan kita atau developer lain untuk membaca dan memelihara aplikasi. Idealnya, satu berkas JavaScript hanya memiliki satu tanggung jawab saja. Bila lebih dari satu, itu berarti Anda perlu berkenalan dengan modularization atau modularisasi.
Modularisasi dalam pemrograman merupakan teknik pemisahan kode menjadi modul-modul yang bersifat independen, tetapi bisa saling digunakan untuk membentuk suatu program yang kompleks. Pemisahan kode menjadi modul-modul terpisah inilah yang dapat membuat kode JavaScript lebih mudah dikelola.
Pada Node.js, setiap berkas JavaScript adalah module. Anda bisa membagikan nilai variabel, objek, class, atau apa pun antar module. Untuk melakukannya, Anda perlu mengekspor nilai pada module tersebut.
Untuk mengekspornya, simpanlah nilai tersebut pada properti module.exports.



Node Package Manager
Dalam pengembangan aplikasi saat ini, industri gencar memanfaatkan module atau package luar agar proses pengembangan dapat lebih cepat. Semakin kompleks aplikasi tersebut, semakin banyak pula module/package yang digunakan. Di sinilah kita memerlukan sebuah package Manager.
Node Package Manager (NPM) merupakan pengelola package untuk JavaScript yang dapat memudahkan kita dalam mengelola package yang tersedia pada https://www.npmjs.com/. NPM merupakan standard package manager yang disediakan oleh Node.js dan sudah otomatis terpasang ketika memasang Node.js pada komputer kita. NPM dapat dioperasikan melalui CMD atau Terminal, Anda pun sudah mencobanya ketika membuat proyek JavaScript.
Selain untuk membuat proyek JavaScript, NPM dapat digunakan untuk memasang atau menghapus third party module (modul pihak ketiga). Modul yang dipasang melalui NPM akan disimpan pada folder node_modules.
Terdapat dua tipe pemasangan module melalui NPM: global dan lokal. 
Bila dipasang secara global, module akan bersifat layaknya core module dan dapat digunakan di mana pun. 
Bila dipasang secara lokal, module hanya dapat digunakan pada cakupan proyek Node.js saja.
Namun, saat ini kami sangat menyarankan Anda untuk memasang modul pihak ketiga secara lokal saja. Hindari pemasangan modul secara global karena akan menyebabkan banyak masalah. Sebaiknya gunakan npx bila Anda ingin menjalankan Node.js package di mana pun yang Anda inginkan. 



Events
Aplikasi Node.js biasanya dikenal memiliki pola event-driven atau memiliki alur berdasarkan suatu kejadian. Apa maksudnya itu? Mari kita jelajahi lebih dalam lagi.
Dunia nyata penuh dengan kejadian. Alarm berbunyi, ponsel berdering, turun hujan, ataupun kejadian lainnya. Sebagai manusia, kita membuat keputusan, lantas bertindak berdasarkan kejadian yang ada. Contohnya:
Ketika berjalan dan tetiba turun hujan, kita bergegas menggunakan payung.
Ketika ponsel berdering, kita bereaksi dengan mengangkat panggilan.
Ketika merasa lapar, kita makan. 
Seperti inilah pola yang terjadi di kehidupan nyata, sudah sejak lama kita bertahan hidup dengan pola seperti ini. Inilah yang dimaksud dengan pola event-driven.
Kita kembali ke dunia komputer. Tradisionalnya, programming dilakukan dengan cara yang imperatif. Agar komputer dapat melakukan sesuatu hal, kita perlu banyak menuliskan instruksi secara runtut beserta langkah-langkahnya. Komputer akan membaca kode dari atas ke bawah sesuai dengan urutan yang kita definisikan.
Dengan pola yang kaku seperti itu, kita akan sulit membangun program yang dapat menangani suatu kejadian. Karena kita saja tidak tahu kapan suatu kejadian akan terjadi, lantas bagaimana cara memberikan instruksi pada komputer? Lalu, bagaimana solusinya? Berkaca dari dunia nyata, program komputer juga harus bekerja dengan pola event-driven. Syukurlah dengan Node.js kita dapat menerapkan pola tersebut dengan mudah.
Node.js menyediakan EventEmitter class yang merupakan member dari events core module.



Filesystem
Ketahuilah bahwa seluruh data di komputer dikelola dan diakses melalui filesystem. Ketika kita menjalankan kode JavaScript pada browser, sangat penting untuk melimitasi JavaScript dalam mengakses filesystem. Teknik ini dinamakan dengan sandboxing. Sandboxing melindungi kita dari program jahat serta tindakan pencurian yang dapat merampas privasi penggunanya.
Bagaimana dengan JavaScript yang dijalankan di back-end? Limitasi tentu tetap ada, tetapi tidak seketat ketika JavaScript dieksekusi pada browser. Di back-end, justru filesystem menjadi fitur esensial karena dalam pengembangan back-end akan sering sekali mengakses atau menulis sebuah berkas di dalam komputer. 
Node.js menyediakan core modules fs yang dapat mempermudah kita dalam mengakses filesystem. Setiap method yang ada di module fs tersedia dalam dua versi, yakni versi asynchronous (default) dan versi synchronous. 
Tentu Anda sudah tahu apa itu asynchronous dan synchronous 'kan? Jika belum, pelajari kedua hal tersebut pada kelas Belajar Dasar Pemrograman JavaScript.
Untuk mengakses berkas pada komputer, kita dapat menggunakan method fs.readFile(). Method ini menerima tiga argumen: lokasi berkas, encoding, dan callback function yang akan terpanggil bila berkas berhasil/gagal diakses.



Readable Stream
Fungsi readFile, baik versi asynchronous maupun synchronous, bekerja dengan membaca berkas hingga selesai sebelum mengembalikan data. Itu berarti, bila Anda menggunakannya untuk mengakses berkas yang besar, proses tersebut akan membutuhkan waktu lama dan memori yang besar untuk mendapatkan hasilnya. Hal ini sungguh tidak efektif!

Lantas, bagaimana? Solusinya adalah dengan menggunakan teknik stream. Teknik ini tidak membaca berkas secara sekaligus, melainkan dengan mengirim bagian demi bagian. Cara inilah yang digunakan oleh YouTube agar video dapat ditampilkan seketika kepada pengguna.
Teknik stream merupakan salah satu konsep fundamental yang mendukung aplikasi Node.js bekerja. Teknik ini dapat menangani kasus baca tulis berkas, komunikasi jaringan, atau beban kerja apa pun agar dapat berjalan dengan lebih efisien. Sabar dulu ya, kasus yang disebutkan tadi terlalu kompleks untuk kita pelajari sekarang. Untuk memahami bagaimana stream bekerja, kita akan gunakan kasus paling sederhana, yakni membaca teks pada berkas secara bagian-per-bagian.
Kita dapat membuat readable stream dengan menggunakan method createReadStream() dari core module fs.



Writable Stream
Apakah Anda tahu bahwa teknik stream juga dapat digunakan untuk menulis berkas? Teknik ini disebut writable stream. Untuk membuat writable stream dalam menulis berkas, gunakanlah method createWriteStream() dari core module fs.
Fungsi ini menerima satu argumen yakni alamat berkas untuk menyimpan hasil data yang dituliskan. Berkas output akan dibuat secara otomatis jika tidak ada. Namun, bila berkas tersebut sudah ada, data sebelumnya akan tertimpa!