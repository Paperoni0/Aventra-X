"use client";
import { useState, useEffect } from "react";
import { useDisableRightClick } from "../hooks/useDisableRightClick";

const poems = [
  {
    title: "Lara Temaram",
    author: "Regina Laoshi",
    image: "/assets/Laoshi.webp",
    source: "Regina Laoshi",
    lyrics: `Langit sore tersenyum merekah padaku
Bibir senja memerah melihatku menahan rindu
Tentang hadirmu yang selalu semu
Kupeluk bayangmu dalam malam yang bisu

Pada debur ombak pantai yang menenangkan
Kugantungkan hatiku pada paku kenangan
Tentang buku bahasa kalbu menyimpan sejuta kerinduan
Dan aku mengeja namamu dalam bahasa kehilangan

Bila esok fajar mengetuk tanpa suara
Izinkan aku untuk tetap tinggal meski sementara
Sebab jatuh hati padamu adalah patah hati yang tak disengaja 
Kutemukan diriku hilang, namun masih mencinta

Bertemu denganmu tidak pernah ada dalam rencana
Ketidaksengajaan yang sama sekali tak pernah kutanyakan kepada pemilik semesta
Dan aku berusaha mengukir kisah dengan tinta yang paling bercahaya
Walau hanya bisa menatapmu dari balik jendela kata

Kucoba merajut asa dari serpih waktu
Namun yang kudapat luka penuh pilu
Sajak-sajak ini akan tetap berhujan membasahi perjalananku
Sebab patah tak selalu berarti layu, kadang ia mengajarkan hati untuk utuh kembali, perlahan dan syahdu.`,
  },
  {
    title: "Jalan Memutar",
    author: "Abiyan Atilah Akbar",
    source: "Pinterest",
    lyrics: `Kita tumbuh di lapangan yang sama
Tentang mimpi yang tumbuh bersama
Tak lupa dengan tawa kecil yang selalu ada
Menemani langkah di setiap harapan

Kita sama-sama mudah tertawa
Sama-sama keras kepala
Kadang orang lain bertanya
Apakah kita sahabat atau saudara 

Aku melihatku dalam dirimu
Dan melihatmu dalam diriku
Bukan karna kamu kembaranku
Tapi karena ambisimu sejalan denganku

Sekarang jarak memisahkan kita
Dan langkah kita berjalan di tempat yang berbeda
Tapi aku tahu, meski jalannya berbeda
Kita tetap punya tekad yang sama

Kau buatku belajar, ini bukan cuma persahabatan
Tapi sebuah kisah saudara yang tak sedarah
Yang tetap ada walau waktu dan jarak memisahkan
Yang sejalan denganku walau tidak di sisi yang sama`,
  },
  {
    title: "Tempat Hangat Ku",
    author: "Alisa Adiratna",
    source: "Google",
    lyrics: `Di meja kecil, hangat itu menunggu
Menyadariku bahwa tak usah buru-buru
Minum teh manis di cangkir baruku
Hanya setetes pun cukup bagiku

Di hari penuh badai
Meja hangat itu tetap setia
Apapun hidangan yang tersaji
Membentuk sebuah bahasa
Yang hanya rumah yang mengerti

Tanpa makanan hangatmu
Aku tahu dunia terasa dingin
Namun saat duduk di meja itu pun
Aku seperti anak kecil
Yang akhirnya tau mana tempat asal

Kami duduk tanpa kata
Bersatu menjadi keluarga
Berbincang tanpa lelah
Sederhana, tapi cukup bahagia

Kupeluk erat dengan tangan
Membuang rasa capek pelan-pelan
Tanpa mereka, aku tak akan kuat
Menjalani hidup yang berat`,
  },
  {
    title: "Saat Namamu Menjadi Rumah",
    author: "Alvanno Lorenszo Hersan",
    source: "Canva",
    lyrics: `Di bawah langit yang diam menua bersama malam
Kutemukan hangat di balik matamu yang tenang
Hening pun terasa hidup saat berbagi diam
Karena ada kamu di setiap jeda dan senang

Kita belajar sabar dari jatuhnya hujan
Yang perlahan mengajarkan arti kata rindu
Setiap tetesnya menyebut namamu, seperti kenangan
Datang pelan, lalu menetap sebagai rasa itu

Langkah kecil kita seirama dalam satu langkah
Tak perlu megah, cukup jujur dalam cerita
Meski kadang ragu menyapa di tengah resah
Kita saling percaya pada arah dan cinta

Jika dunia berlari mengejar waktu
Kau alasanku untuk berhenti merasakannya 
Karena bersamamu, aku berdamai dengan diriku
Dan cinta tak lagi mimpi, tapi menjadi nyata

Pada akhirnya, aku ingin selalu pulang 
Ke tempat hatiku belajar tenang
Bukan kemewahan, hanya rasa ingin menang
Saat namamu membuat segalanya senang`,
  },
  {
    title: "Ketika Langit Memilih Diam",
    author: "Angel Oktarini",
    source: "Pinterest",
    lyrics: `Microchip pembawa telur mengitari pakan
Menyusupi tiap-tiap sari yang kusebut rezeki
Jamur sunyi melahap dahaga perlahan
Riwayat pun habis tanpa saksi

Sungguh tak kau hiraukan hatimu
Mata tertuju bahkan bukan ke dirimu
Tapi ke dia, dia, dan dia
Mereka si penghias akar kepala

Berteriak dan berbisik layaknya siswa penuh tanya
Pakaian merah putih pantas dipakaikan untuk mereka
Mungkin, seratus akan memenuhi rapor mereka
Mungkin, ia harus katakan itu pada mereka

Jika saja dunia kartun itu nyata
Sudah digambarkan burung di atas kepala
Namun, burung-burung itu tak membawa nada
Hanya paruh yang melukai makna

Bayangan dan burung ini kian menyiksa
Doa kembali sebagai irama
Ia tanya langit dengan tangan hampa makna
Namun, hanya diam yang ia terima

Yang dulunya ia puja
Tak pernah datang menoleh sekalipun
Hancur sudah altar dibuatnya
Iman terjun sebagai kebisuan

Saat burung dan bayangan telah letih bekerja
Tak ada jerit, maupun darah
Hanya seorang pion turun dari papan dunia
Ditelan tanpa arah, tanpa rumah`,
  },
  {
    title: "Bisikan Alam",
    author: "Arini Dwi Syafiqa",
    source: "Pinterest",
    lyrics: `Mentari pagi menyapa bumi
Burung bernyanyi di dahan pohon
Cahaya hangat menyentuh bumi
Angin sejuk datang berpelan

Gunung berdiri tegak dan tinggi
Awan putih melintas tenang
Langit biru tampak bersih dan asri
Menenangkan hati yang bimbang

Sungai mengalir jernih dan damai
Batu kecil terbasuh air
Ikan berenang bebas dan ramai
Mengikuti arus yang mengalir

Hutan hijau penuh kehidupan
Daun berbisik ditiup angin
Alam memberi kesejukan
Untuk jiwa yang ingin tenang

Mari jaga alam selama
Dengan rasa cinta sejati
Agar tetap indah selama
Menjadi warisan penuh arti`,
  },
  {
    title: "Tak Lagi Sama",
    author: "Aurelia Ryanlee",
    source: "Pinterest",
    lyrics: `Dulu kita melangkah satu arah 
Menghuni selasar sekolah 
Dunia terasa begitu cerah
Sebab kita selalu berbagi kisah

Namun waktu menyeret kita pada jalan sendiri 
Logo seragam kita sudah berbeda 
Engkau sibuk menata diri dan prestasi 
Sedangkan aku larut dalam semesta tak bernama

Kenyataan membuat kita kian terasing 
Ambisi menumpuk melahap habis waktu 
Sapa yang singkat tetap berakhir pada hening 
Semua tak lagi sama seperti saat itu

Meski jarak kini membentang di antara kita 
Menapaki jalan yang berbeda arah 
Aku belajar merelakan separuh cerita 
Bahwa pernah ada cerita "kita" yang indah

Jika suatu hari langkah kita berpapasan lagi
Aku harap rasa itu masih tetap sama
Rasa tulus tanpa mengenal kata "pergi"
Sederhana, apa adanya, sepanjang masa`,
  },
  {
    title: "Hampa",
    author: "Bernard Frederich Mok",
    source: "Pinterest",
    lyrics: `Di tempat ini, tempatku menaruh
Tempatku bertaut teduh..
Engkau seperti rumah...
yang perlahan kehilangan arah

Walau hatinya kosong dan gelap
Ada lampu yang mengajak kamu
Main kau ikutin jalan-jalan
Terus berjalan

Kau rasa capek tapi kau lanjut
Mengikuti lampu itu lampunya
Ketawa-tawa dengan senang hati
Jalan-berjalan

Selanjutnya sinar matahari
Menyakiti matamu dan akhirnya 
Lampu yang kau ikuti telah
Menunjukkanmu bahwa
Kamu tidak pernah sendirian

Orang yang dekat denganmu
Peluk mu walaupun
Waktu bisa kejam tetap
Habiskan dengan orang kamu`,
  },
  {
    title: "Lembaran baru",
    author: "Brandon Lucky Niu Septian",
    source: "Pinterest",
    lyrics: `Aku menutup buku yang usang
Penuh coretan dan luka lama
Kini hadirmu datang memelang
Membawa pena dengan warna utama

Kertas putih kini terbuka
Menanti kisah yang akan dituliskan
Tak ada lagi bayang-bayang duka
Hanya ada binar yang terpancarkan

Tiap kata adalah benih yang tumbuh
Menyusun kalimat tentang rasa percaya
Kau basah perih hingga benar-benar luluh,
Mengubah gulita jadi cahaya.

Kita mulai bab dengan rindu
Dimana setiap barisnya adalah janji.
Tak perlu lagi ada ragu yang membelenggu
Sebab hatiku telah kau singgahi.

Cinta ini berseni di atas aksara
Mekar abadi dalam setiap kertas
Menjadi cerita paling indah tiada tara
Kisah manis yang tak terbatas`,
  },
  {
    title: "Dalam Doaku",
    author: "Brilliant Warren",
    source: "Google",
    lyrics: `Setiap hari aku menyebut nama-Mu,
Saat hati tenang maupun gelisah.
Tak selalu hidup berjalan mudah,
namun aku percaya Engkau selalu ada.

Ketika langkah terasa ragu,
aku berhenti dan kembali berdoa.
Mencari kekuatan dalam diam,
agar hatiku tak mudah menyerah.

Aku belajar sabar dari waktu,
belajar ikhlas dari keadaan.
Sebab tidak semua harus kupahami,
cukup kujalani dengan keyakinan.

Engkau mengajarkanku untuk bersyukur,
atas hal kecil maupun yang besar.
Agar aku tak lupa diri,
dan tetap rendah hati dalam hidup.

Pada akhirnya aku berserah,
menitipkan harap pada-Mu.
Dengan iman sebagai pegangan,
aku melangkah menata masa depan.`,
  },
  {
    title: "Semesta",
    author: "Cheryl Cleo",
    source: "Pinterest",
    lyrics: `Pagi hari matahari bersinar 
Menyinari bumi dengan cerah 
Embun jatuh di daun-daun segar
Menambah indah suasana alam raya

Langit biru tampak cerah 
Awan putih bergerak perlahan 
Burung bernyanyi penuh ceria 
Menyambut pagi dengan bahagia

Pepohonan hijau berdiri tegak 
Memberi teduh bagi kehidupan 
Angin sepoi berhembus kencang 
Membawa damai dan ketenangan

Sungai mengalir jernih dan tenang
Menjadi sumber bagi semua makhluk-Nya
Ikan berenang bebas riang 
Di alam yang harus kita jaga

Alam adalah karunia Tuhan 
Wajib dijaga sepanjang masa
Dengan rasa cinta dan kepedulian 
Seluas alam semesta yang tiada bandingnya`,
  },
  {
    title: "Sahabat di Setiap Langkah",
    author: "Darwin Jonathan",
    source: "Pinterest",
    lyrics: `Di sudut pagi yang masih berembun,
kau hadir dengan senyum sederhana,
menghapus ragu yang sempat berlabuh
di hati yang lelah oleh dunia.

Kita pernah jatuh di jalan yang sama,
lutut terluka, mimpi pun retak,
namun genggamanmu tak pernah lepas,
menguatkan langkah yang hampir sesak.

Persahabatan bukan tentang tawa saja,
bukan pula sekadar cerita ringan,
ia tumbuh dari saling percaya,
berakar dalam kejujuran dan ketulusan.

Jika nanti waktu memisahkan jarak,
biarlah kenangan jadi jembatan,
karena sahabat sejati tak hilang oleh ruang,
ia tinggal, menetap, di dalam kenangan.

Di setiap langkah yang akan kita tempuh,
meski arah berbeda membentang,
semoga mimpi-mimpi kita tetap bertemu,
di puncak harapan yang sama-sama kita perjuangkan.`,
  },
  {
    title: "Kasih di Atap yang Sama",
    author: "Excell Antolin",
    source: "Google",
    lyrics: `Di bawah atap yang terasa teduh,
Kita duduk berbagi cerita lama. 
Menghapus segala lelah yang riuh, 
Dalam hangatnya pelukan sesama.

Ayah tersenyum menatap jendela, 
Ibu menyeduh doa dalam cangkir. 
Meski dunia penuh dengan celah,
Kasih mereka tak pernah berakhir.

Kita adalah dahan yang berbeda, 
Namun satu akar tempat berpijak. 
Saling menjaga dalam suka duka, 
Tidak ragu meski badai mengacak.

Rumah bukanlah sekadar dinding, 
Tapi tempat hati merasa tenang. 
Di sana sayang selalu sebanding, 
Membawa pulang jiwa yang guncang.

Terima kasih untuk cinta ini, 
Menjadi pelita di gelapnya bumi. 
Yang tumbuh subur tanpa syarat,
Menjaga langkah agar tak tersesat.`,
  },
  {
    title: "Puisi Untukmu",
    author: "Federico Nathan Bustan",
    source: "XiaoHongShu",
    lyrics: `Oktober turun bersama hujan yang pelan
Langit menyimpan namamu dalam ingatan
Di sela waktu muncul terang yang enggan
Seperti April singgah tanpa perkenalan

Ada cahaya berdiam di sepasang mata
Detak memilih bersembunyi di dada
Perasaan tubuh tanpa pernah berkata
Takut terpisah sebelum tiba waktunya

Langkah mendekat, niatku kian tertahan
Kata cinta karam di laut keraguan
Aku berpaling dari sebuah pengakuan
Takut kehilangan sebelum keberanian

Kita dua arus di samudra yang luas
Bertemu tanpa mencari, lalu terpisah
Jika kau belum siap untuk berlabu sejenak
Aku akan tinggal sebagai ombak yang rela

Di Januari kutitipkan rindu yang bisu
Waktu menjadi saksi janji yang semu
Puisi ini hadir sebagai isyarat untukmu
Bahwa aku di sini menunggumu`,
  },
  {
    title: "Langkah Menuju Pencerahan",
    author: "Gisella Eillen Dea",
    source: "Pinterest",
    lyrics: `Saat dunia terasa gelap 
Kutemukan cahaya di hati 
Bukan dari langit yang tinggi 
Tapi dari kesadaran sejati

Buddha ajarkan jalan kebenaran 
Untuk hidup tanpa kebencian 
Segala mahluk patut disayang 
Karena semua makhluk ingin kedamaian

Dalam diam kutemukan tenang 
Seperti danau tanpa gelombang 
Dalam batin kutemukan ruang 
Cukup senyum dan pancarkan kasih sayang

Kekekalan hanya membawa duka 
Melepaskan maka damai terasa 
Yang sejati tak akan perna sirna 
Meski waktu terus berputar tanpa jeda

Kini kusadari sepenuhnya 
Cahaya itu tak pernah pergi 
Ia tinggal di dalam jiwa
Menuntun menuju nirwana suci`,
  },
  {
    title: "Sumber Kehidupan",
    author: "Grand Firstdo Chen",
    source: "Google",
    lyrics: `Jagad Raya memberikan kita banyak kehidupan
Sandang pangan dan juga papan
Rimba luas menghasilkan napas bagi bumi pertiwi
Tanpa adanya dia kita tidak bisa hidup dengan damai

Jagad bekerja dengan rukun
Tiada ucap kata diam dan sunyi
Mengedarkan surya dan rembulan
Semua berjalan dengan wajar dan alami

Langit memiliki keindahan luas tak bertepi
Bumi memiliki keindahan mengayomi tanpa imbalan
Laksana makhluk hidup berdampingan saling menatapi
Manusia memiliki kasih dan keindahan

Pesona manusia satwa tumbuhan
Langit bumi oh indahnya semesta
Dari pundak gunung ke dasar lautan
Semua ini keindahan semesta

Di jagad raya hanya ada satu pertiwi
Manusia hanya punya satu tempat hidup bersama
Mencintai jagad berarti mencintai itu sendiri
Ketika jagad rusak kehidupan manusia pun musnah`,
  },
  {
    title: "Pertemuan Kita",
    author: "Hartanto Hendry",
    source: "Pinterest",
    lyrics: `Awalnya kita tak saling mengenal
Hanya bertemu lalu tersenyum dengan wajah sederhana
Saling menyapa dengan hati yang kekal
Hingga waktu berjalan perlahan dan rasa asing pun akhirnya sirna

Hari demi hari kita jalani bersama
Berbagi tawa dan kisah yang membuat lega
Perbedaan yang ada kini tak lagi terasa
Karena saling percaya dan memahami sesama

Ketika senang langit menerangi hari kita
Saat sedih mulai turun hujan seketika
Hari-hari penuh dengan suka maupun duka
Akan selalu kita lewati bersama-sama

Persahabatan ini tumbuh perlahan seiring hari
Semakin erat dan sulit terganti
Tak lagi sekadar teman yang biasa begini
Namun sahabat sejati yang selalu dalam hati

Walau waktu dan jarak menghalangi
Ikatan ini tak akan terpisahi
Dari pertemuan yang sederhana
Persahabatan terjaga selamanya`,
  },
  {
    title: "Dewasa Penuh Luka",
    author: "Ivan Octaviansa",
    source: "Google",
    lyrics: `Bagaikan surga untuk kita semua
Hal itu tercipta karena adanya kehangatan
Bagaikan air dan minyak yang tidak bisa bersama
Hingga akhirnya tidak semua keluarga itu adalah rumah untuk bercerita

Keluarga tetap keluarga
Bagaimana bisa aku terluka
Berbekalan sejuta kesedihan
Mengiringi setiap langkah ku
Menguji semangat jiwaku

Karena luka ini, pada akhirnya aku jadi tau arti dari kesabaran
Siapa sangka dewasa yang kukira menyenangkan ternyata sangat menyakitkan
Rumah yang dianggap tempat pulang menjadi teman yang menyimpan luka paling dalam
Suara, canda tawa, senyum di muka, semua menghilang tanpa sisa

Rumahnya tetap ada, tapi isinya sudah tak sama
Kadang aku iri pada rumah lain
Yang hangat nya terasa dari luar jendela
Namun dari perpecahan ini aku belajar
Kita bisa menjadi kuat karena kehilangan

Dan meski rumahku tak lagi utuh
Aku masih percaya pada kata “harapan”
Dari runtuhnya cinta yang pernah ada
Aku membangun diriku sendiri-perlahan, tapi nyata`,
  },
  {
    title: "Lupa Memberitahu",
    author: "Jan Jonathan Lion",
    source: "Google",
    lyrics: `Di ujung senja aku menyimpan cerita
Tentang rindu yang tak sempat terbaca
Kukunci rapat dalam dada
Padahal hatiku ingin kau merasa

Dalam sunyi aku belajar menahan
Saat jarak datang tanpa alasan
Kau pergi seperti angin pelan
Meninggalkan tanya di setiap malam

Langkahku sering berhenti di satu nama
Menunggu kabar yang tak juga tiba
Kusapa sepi tanpa suara
Agar hatiku tetap bisa terjaga

Ada getir yang tak pernah kuucap
Saat tawamu kau bagi pada yang lain
Bukan benci, hanya takut gelap
Cintaku hilang terbawa angin

Kini aku berani berkata nyata
Aku cinta, tanpa banyak kata
Jangan biarkan aku terlambat
Sebelum kisah kita jadi luka`,
  },
  {
    title: "Di Bawah Cahaya-Mu",
    author: "Jason Gunawan",
    source: "Pinterest",
    lyrics: `Di bawah cahaya-Mu aku bersujud,
membaca doa pada denyut waktu,
hati yang lelah Kau tenangkan lembut,
dalam sunyi, Engkau selalu tahu.

Langit mengajariku tentang pasrah,
awan berlalu, hujan pun reda,
aku belajar ikhlas dan tabah,
menyebut nama-Mu di setiap jeda.

Ketika langkah goyah oleh dunia,
iman menjadi pelita jalan,
dosa kuhitung, ampun kupinta,
harap tumbuh di taman pengharapan.

Dalam sabar Kau titipkan makna,
bahwa luka bukan akhir cerita,
setiap takdir adalah cinta,
yang Kau tulis dengan penuh hikmah.

Tuhan, terimalah doa sederhana,
jadikan hidup bernilai ibadah,
hingga akhir nafasku tiba,
aku pulang dengan hati berserah.`,
  },
  {
    title: "Gunung Hijau yang Terlupakan",
    author: "Josepaulo Chandra",
    source: "Pinterest",
    lyrics: `Di puncak bukit yang berembun pagi
Mentari menyapa dengan rona keemasan
Dedaunan menari saat angin pesisir kembali
Membisikkan mesra salam pembuka hati

Sungai kecil mengalir di sela batu,
membawa cerita gunung menuju muara
ikan-ikan sibuk di balik lumut yang biSa,
Bersembunyi tenang di sela air yang jernih.

Kala hujan jatuh menyentuh tanah haus
Aroma petrikor memenuhi rongga dada
Burung kecil merapat di dahan yang tulus
Menanti pelangi kala badai telah reda

Hutan rimba adalah napas bagi nyawa
Tempat rahasia ribuan makhluk berkembang
Namun tangan manusia sering kali buta,
Menghanguskan hijau jadi debu yang gersang

Wahai penghuni bumi, jagalah warisan ini,
Jangan biarkan alam merintih dalam sepi,
Tanpa rimba, tak ada udara untuk bernapas lagi
Jangan biarkan cucu mewarisi sesal di hati.`,
  },
  {
    title: "Sahabat, Bintang di Awan-awan",
    author: "Keiko Trisia Zily",
    source: "Google",
    lyrics: `Kala badai datang menerjang
Kau hadir membawa terang
Duka lara hilang melayang
Kasih sahabat takkan berkurang

Meski jalan berliku tajam 
Semangat kita takkan padam 
Rindu memburu di malam kelam
Kenangan indah tersimpan diam

Tawa pecah di sela canda 
Menghapus duka yang ada di dada
Walau usia terus berbeda 
Jiwa sahabat tetaplah ada 

Kini jarak membentang luas 
Namun rindu tak pernah puas
Persahabatan ini sangat setia 
Menyinnari langkahku setiap waktu tiba

Terima kasih wahai kawan 
Engkaulah bintang di awan-awan 
Hati tulus seindah zaman 
Abadi di setiap jalan`,
  },
  {
    title: "Pelita Harapanku",
    author: "Keisha Clarissa",
    source: "Pinterest",
    lyrics: `Ibu, kaulah cahaya dalam hidupku
Bahkan sejak aku lahir, kau selalu bersamaku
Ibu, dengan kasih sayang tulusmu
Kau jaga dan rawat aku selalu

Setiap pagi sebelum aku bangun 
Kau sudah lebih dulu menyiapkan segalanya
Tenagamu tertumpah untuk keluarga
Walau lelah selalu kau rasakan

Ketika aku sedih dan hampir menyerah
Kau selalu ada di sisiku
Kata-katamu menguatkan diriku 
dan membuatku bangkit kembali teguh

Ibu, kau ajarkan aku arti sabar
Tentang ikhlas dan hati yang benar
Lewat teladan yang kau sebar
Aku tumbuh menjadi tegar

Terima kasih, ibu tercinta
atas kasih yang tak pernah kau minta kembali
Doa-doamu adalah pelita cahaya
Yang diam-diam menuntunku menjadi aku hari ini`,
  },
  {
    title: "Ketika Syal Menggantikan Pelukanmu",
    author: "Khayla Putri Arthamiharja",
    source: "Pinterest",
    lyrics: `Langit senja menua di ujung cakrawala
Menyimpan wajahmu dalam cahaya yang perlahan mereda
Ombak bernapas lirih di pantai yang sepi
Setenang caramu mencinta, tanpa pernah berjanji

Aku duduk bernyanyi di pasir basah
Air mata iatuh, larut bersama resah
Kusadari kini, dengan dada kelu membisu
Tak akan ada lagi dunia mengizinkanku memelukmu

Kuselimuti diri dengan syal pemberian terakhirmu
Kain sederhana, namun hangat oleh rindumu
Kupeluk sval itu sekuat aku bisa
Menangis tanpa sisa, tanpa jeda

Kutoleh kembali pada syal itu, tersenyum dalam tangis
Kenangan mengalir, manis sekaligus tragis
Setiap seratnya menyimpan kisah kita
Cinta yang indah, namun tak sempat menua

Kau bilang cinta kita tak akan mati
Ia abadi menunggu di kehidupan nanti
Biarlah kita bertemu tanpa air mata
Sebagai dua jiwa yang saling mecinta, selamanya`,
  },
  {
    title: "Sang Pengasih",
    author: "Laurensius Richard Leonard",
    image: "/assets/Richard.webp",
    source: "Google",
    lyrics: `Bapa engkau adalah penyelamatku
Saat aku terluka engkau melindungiku
Setiap langkahku Tuhan selalu menemaniku
Aku bingung... aku bimbang aku tak tahu...

Ya Bapa engkau seperti cahaya
Yang selalu menerangiku
S’lalu menjadi penjaga 
Engkau selimuti dengan kesempurnaan-Mu

Ya Tuhan, aku selama ini lupa 
Aku selalu berbuat dosa
Membentak orang tua
Dan selalu lupa berdoa

Waktu yang terus berjalan tak berhenti 
Membuatku bimbang berkali-kali 
Aku menyesal dengan perbuatanku
Aku kembali mengingat perbuatanku dulu

Ya Tuhan, di hadapan-Mu aku terdiam
Menyadari salah yang pernah kuucap
Hatiku gemetar, jiwa pun kelam
Oleh dosa lama yang tak pernah lenyap

Namun kasih engkau selalu membuka jalan
Saat aku jatuh dan kehilangan arah
Aku akan terima apapun sebagai kekuatan 
Untuk hidup baru dalam terang-Mu, Ya Bapa`,
  },
  {
    title: "Di Antara Langit, Bumi, dan Waktu",
    author: "Lionel Dika Gunawan",
    source: "Canva",
    lyrics: `Burung-burung berkicau merdu di pagi hari
Matahari menyinari dunia penuh arti
Langit biru memberi warna pada semesta
Bagaikan hidup yang terus berjalan tanpa jeda

Gunung tinggi menjulang ke angkasa
Batu-batunya tegap menantang masa
Gua gua sunyi terlihat hampa
Seperti fantasi yang hadir dalam mimpiku saja

Angin berhembus membawa pesan alam
Menyusuri lembah, hutan, dan malam
Bintang bertabur di langit gelap
Menjadi saksi rahasia semesta yang senyap

Bumi berputar mengikuti waktu
Mengajarkan arti sabar dan bersatu
Alam semesta begitu luas dan indah
Menjadi rumah kehidupan yang penuh berkah

Langit sore menjadi saksi
Memancarkan cahaya di setiap sisi
Hingga menyilaui setiap mata
Melewati setiap jejak langkah`,
  },
  {
    title: "Persahabatan",
    author: "M. Dzaka Zufaraid Pratama",
    image: "/assets/Dzaka.webp",
    source: "Google",
    lyrics: `Di antara riuh hari yang kadang melelahkan
Ada namamu yang selalu terasa pulang
Bukan karena kau sempurna
Tapi karena kau tinggal bahkan saat aku ingin menyerah pada keadaan

Kita pernah duduk berjam-jam membicarakan hal yang tak penting
Lalu tertawa seakan duniatak punya kuasa atas luka kita
Bahkan hal sederhana bisa terasa begitu berartisaat dilakukan bersama
Kau tahu sisi rapuh ku yang tak kutunjukkan pada banyak orang

Dan kau tak pernah menghakimi
Hanya menepuk bahu pelan, seolah berkata
Tenang, aku di persahabatan kitabukan tentang seberapa sering bertemu
Atau seberapa banyak foto yang diunggah

Ia tentang saling menjaga dalam diam
Tentang doa yang tak pernah disebutkan
Tapi diam-diam dipanjatkan
Jika suatu hari langkah kita berbeda arah

Aku harap kita tetap saling mengingat
Bahwa pernah ada masa
Di mana kita tumbuh bersama menjadi lebih kuat
Karena tahu tidak berjalan sendirian di antara`,
  },
  {
    title: "Atap",
    author: "Maria Invani",
    source: "Pinterest",
    lyrics: `Di bawah langit yang cerah tersimpan begitu banyak kisah
Tempatku bersandar kini telah hilang
Begitu banyak keluh kesahku yang kuserah
Rasanya seperti dikelilingi banyak orang

Ada begitu banyak yang ingin kusampaikan
Begitu banyak pula yang ingin kuceritakan
Namun kenapa tidak bisa diperlihatkan
Bukan tak bisa, tapi tak ada kesempatan

Dinding-dinding membisu menyimpan banyak rahasia
Tentang luka senang sedih yang mengendap jadi rasa
Hanya ia yang tahu apa yang kurasa di balik banyak cerita
Ternyata aku tak sehebat itu kupeluk erat rasa

Aku rindu perkataanmu
Aku rindu saat-saat itu
Aku rindu kenangan itu
Tapi apalah dayaku

Semakin besar usahaku untuk berlari
Ke tempat yang ingin kucapai
Tapi buat apa? aku lelah sendiri
Bagaikan cerita yang tak pernah usai

Waktu yang harus terus berjalan mengikis usia
Harus membawaku kembali ke dunia
Dunia yang begitu penuh tanda tanya 
Dunia yang begitu banyak luka

Yang membuat bahagia bukanlah harta
Bukan pula megahnya istana
Canda tawa serta kasih cinta
Itulah kunci bahagia`,
  },
  {
    title: "Kita",
    author: "Nelvilyana Bong",
    source: "Pinterest",
    lyrics: `Di antara tawa dan diam yang sederhana
Aku belajar menyebut nama mu sebagai rumah
Sama seperti lagu lama
Cinta ini tumbuh tanpa banyak suara

Kadang aku hanya bisa menunggu tanpa tanya
Menyimpan harapan di jeda yang tak pasti
Bukan karena tak bisa berkata
Tapi hanya takut jawabannya melukai

Ada hari ketika aku membayangkan dirimu tak ada
Dan dunia terasa lebih sunyi dari biasanya
Baru kusadari, kehilangan bukan tentang pergi
Melainkan tentang siapa yang tak lagi di sini

Kita tak selalu punya cerita yang rapi
Kadang hanya diam dan saling berprasangka
Namun dari semua hal yang pernah terjadi
Aku harap kita akan selalu bersama

Aku tak tahu seberapa pantas rasa ini bertahan
Atau sampai kapan kita bisa saling menggenggam
Aku tak ingin mencari jawaban lain
Aku hanya ingin kapal kita takkan tenggelam`,
  },
  {
    title: "Keyakinan yang Diberikan Tuhan",
    author: "Olivia Giovanni Ordella",
    source: "Pinterest",
    lyrics: `Tuhan menanam benih kepercayaan
Di dalam hati penuh harapan
Menjaga sikap dan perbuatan
Di setiap langkah kehidupan

Saat kita lelah dan ragu
Kepercayaan itu tetap menyatu
Memberi harapan dalam doa
Agar kita tetap berusaha

Tuhan percaya pada ketulusan
Meskipun manusia tidak sempurna
Kesalahan bukan akhir jalan
Selama mau belajar dan berdoa

Kepercayaan itu menjadi pegangan
Agar hidup tetap pada kebenaran
Menguatkan arti pengorbanan
Dalam setiap sikap dan harapan

Dengan kepercayaan dari Tuhan
Kita jalani hidup dengan iman
Berbuat baik tanpa paksaan
Sampai akhir perjalanan`,
  },
  {
    title: "Alam Raya",
    author: "Queenzie Angeline",
    source: "Pinterest",
    lyrics: `Wahai bumi, betapa indahnya dirimu
Engkau memberikan pesona sepanjang waktu
Pegunungan nan hijau, langit nan biru
Tiada yang mampu menandingi keelokanmu

Oh alam raya, betapa  mulianya dirimu
Senantiasa memberikan yang terbaik bagiku
Tak pernah sekalipun engkau menuntut imbalan dariku
Namun selalu menyayangi semua makhluk di sisimu

Semesta, engkau laksana titisan Tuhan
Yang datang membawa kehidupan dan harapan
Segala makhluk bergantung padamu sepanjang zaman
Tiada yang mampu menggantikan peranmu dalam kehidupan

Angin berbisik lembut menyapa jiwa
Air mengalir menyejukkan rasa
Mentari terbit membawa cahaya
Menyempurnakan alam dengan segala mantra

Maka akan kujaga engkau sepenuh hati
Takkan kubiarkan engkau tersakiti
Karena tanpamu hidup tiada berarti
Alam raya, sumber kehidupan sejati`,
  },
  {
    title: "Tempat Berlabuh",
    author: "Skolastica Selyn Setiawan",
    image: "/assets/Selyn.webp",
    source: "Pinterest",
    lyrics: `Bukan tentang siapa yang pertama datang
Atau siapa yang paling lama menetap
Tapi tentang ia yang tak pernah hilang
Saat dunia terasa sunyi daan senyap

Kita adalah dua baris kalimat
Dalam buku cerita yang sedang dirangkai
Berbagi tawa saat hati merasa hangat
Saling menguatkan saat air mata membasahi

Tak perlu janji setinggi langit biru
Cukup hadirmu di sisiku dalam setiap waktu
Menjadi cermin saat aku ragu
Menjadi rumah tempatku mengadu

Di kala langkah terasa ragu dan sepi
Kau tetap tinggal tanpa banyak janji
Kita belajar kuat dalam sunyi
Menjaga satu sama lain

Persahabatan ini adalah pelabuhan
Tempat kita bersandar dari badai kehidupan
Meski kelak jalan kita menemui percabangan
Detak kenangannya akan tetap abadi dalam ingatan`,
  },
  {
    title: "Jejak Kebersamaan",
    author: "Stephanie Callista",
    source: "Pinterest",
    lyrics: `Hidup ini bagai menapaki kehidupan
Kadang bahagia, kadang jatuh dalam cobaan
Langkah tak selalu indah
Kita hanya perlu tempat untuk berteduh

Tempat tenang untuk kembali
Rumah yang menenangkan hati
Di sanalah keluarga selalu menanti
Membawa kedamaian di hati
 
Terlukis cerita indah dalam hidupku
Sejak aku kecil hingga tumbuh dewasa
Selalu ada keluarga yang mendukung langkahku 
Memberi pelukan yang penuh makna
 
Saat dunia terasa berat dan melelahkan
Berada di ujung keputusasaan
Keluargalah yang memberi kekuatan
Kekuatan untuk bangkit perlahan
 
Keluarga... penuh akan kenangan
Menyimpan cerita dalam kebersamaan
Tawa dan air mata jadi satu cerita
Menjadi memori sepanjang masa`,
  },
  {
    title: "Terang di Kegelapan",
    author: "Valencia Clarisa Ho",
    source: "Google",
    lyrics: `Aku menatap malam dalam sunyi 
Ragaku bersandar di bawah caklawala 
Diantara gelap malam yang memeluk diri 
Bulan dan bintang merajut cahaya
 
Di setiap bait dan sajak yang kutulis perlahan 
Kuselipkan namamu dalam pikiran 
Tersusun dari kata yang tak pernah terucapi  
Saat pajar menyapa pagi, namamu terukir abadi 
 
Semakin aku menyelami 
Semakin nyaman bak ditelan bumi 
Begitu dalam keteduhan yang engkau miliki
Seperti lentera malam yang setia menyinari
 
Engkau membawaku ke dalam mimpi 
Membuat malam sunyi tak lagi terasa sepi
Bagaikan rembulan yang berseri 
Aku tahu kau berlabuh di jiwa ini
 
Senang bisa mengenalmu 
Kau menjelma menjadi lentera di kala kelabu 
Mewarnai hari demi hariku 
Sungguh menakjubkan di bentala yang luas ini`,
  },
  {
    title: "Matahariku",
    author: "Violin Brilliana",
    source: "Pinterest",
    lyrics: `Matahariku
Dari pagi hingga senja
Engkau selalu menyinari bumi
Engkau memberikan cahaya kehidupan bagi seluruh makhluk di bumi

Matahariku
Engkau adalah cahaya dunia
Dengan sinarmu, dunia bercahaya
Dengan cahayamu, dunia sungguh indah

Matahariku
Dengan sinarmu, siang menjadi terang
Dengan sinarmu, engkau berikan kehidupan
Dengan kehangatan, petani bekerja dengan semangat juang

Matahariku
Untuk dunia tetaplah bersinar
Saat senja tiba engkau pamit perlahan
Langit memerah jadi tanda perpisahan

Matahariku
Tanpa kehadiranmu dunia tak bercahaya
Tanpa kehadiranmu dunia gelap gulita
Tanpa kehadiranmu dunia sungguh tak ada artinya`,
  },
];

export default function Page() {
  useEffect(() => {
    if (window.location.hostname.includes("paperoni0.github.io")) {
      window.location.replace("https://batch9mw.home.kg/xa");
    }
  }, []);
  
  useDisableRightClick();
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);
  const [imgErrors, setImgErrors] = useState({});
  const [cols, setCols] = useState(() => {
    if (typeof window === "undefined") return 3;
    return window.innerWidth < 560 ? 1 : window.innerWidth < 820 ? 2 : 3;
  });

  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      setCols(w < 560 ? 1 : w < 820 ? 2 : 3);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const getImageSrc = (poem) => poem.image || `/assets/${poem.author.split(" ")[0]}.webp`;

  const bannerImages = Array.from({ length: 17 }, (_, i) => `assets/banner${i + 1}.webp`);
  const [bannerIndex, setBannerIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((i) => (i + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0a1f0a 0%, #0d2b0d 30%, #112e14 60%, #0a1f0a 100%)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(34,${100 + i * 20},34,0.08) 0%, transparent 70%)`,
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            top: `${[10, 40, 70, 20, 55, 80][i]}%`,
            left: `${[5, 60, 30, 80, 10, 70][i]}%`,
            transform: "translate(-50%, -50%)",
            animation: `pulse ${3 + i}s ease-in-out infinite alternate`,
          }} />
        ))}
        <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.07 }} xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q100,200 0,400 Q100,600 0,800 Q100,1000 0,1200" stroke="#4ade80" strokeWidth="2" fill="none" />
          <path d="M80,0 Q180,300 80,600 Q180,900 80,1200" stroke="#86efac" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <style>{`
        @keyframes pulse { from { opacity:0.3; transform:translate(-50%,-50%) scale(1); } to { opacity:0.7; transform:translate(-50%,-50%) scale(1.1); } }
        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes modalIn { from { opacity:0; transform:scale(0.92) translateY(24px); } to { opacity:1; transform:scale(1) translateY(0); } }
        @keyframes titleIn { from { opacity:0; letter-spacing:0.5em; } to { opacity:1; letter-spacing:0.15em; } }
        @keyframes imgReveal { from { opacity:0; transform:scale(1.05); } to { opacity:1; transform:scale(1); } }
        .banner { position: relative; width: 100%; height: clamp(220px, 40vh, 420px); overflow: hidden; z-index: 1 }
        .banner img { width: 100%; height: 100%; object-fit: cover; object-position: center 60%; display: block; }
        .banner::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,31,10,0.15) 0%, rgba(10,31,10,1) 100%); z-index: 2; }
        .card-hover { transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1); }
        .card-hover:hover { transform: translateY(-8px) scale(1.015); box-shadow: 0 16px 48px rgba(0,0,0,0.6), 0 0 30px rgba(74,222,128,0.12) !important; }
        .card-hover:hover .card-img { transform: scale(1.06); }
        .card-img { transition: transform 0.5s ease; }
        .close-btn:hover { background: rgba(74,222,128,0.25) !important; }
        .overlay-bg { backdrop-filter: blur(10px); }
        .modal-scroll::-webkit-scrollbar { width: 4px; }
        .modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .modal-scroll::-webkit-scrollbar-thumb { background: rgba(74,222,128,0.3); border-radius: 2px; }
      `}</style>
      <div className="banner">
        {bannerImages.map((src, i) => (
          <img key={src} src={src} alt="Foto Kelas" draggable={false} style={{ position: i === 0 ? "relative" : "absolute", top: 0, left: 0, opacity: i === bannerIndex ? 1 : 0, transition: "opacity 1.2s ease", zIndex: i === bannerIndex ? 1 : 0, }} />
        ))}
      </div>
      <header style={{
        textAlign: "center",
        padding: "60px 20px 40px",
        position: "relative",
        zIndex: 1,
        animation: visible ? "fadeSlideUp 1s ease forwards" : "none",
        opacity: 0,
      }}>
        <h1 style={{
          fontSize: "clamp(2rem, 6vw, 4rem)",
          color: "#86efac",
          margin: 0,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          animation: visible ? "titleIn 1.5s ease forwards" : "none",
          opacity: 0,
          textShadow: "0 0 40px rgba(74,222,128,0.4), 0 2px 4px rgba(0,0,0,0.8)",
          fontStyle: "italic",
        }}>
          Semesta Memandang Kala Itu
        </h1>
        <p style={{ color: "#4ade80", opacity: 0.7, marginTop: "12px", fontSize: "0.95rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          ✦ kumpulan puisi karya kelas 10a ✦
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
          <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, #4ade80)" }} />
          <span style={{ color: "#4ade80", fontSize: "1.2rem" }}>-</span>
          <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, #4ade80)" }} />
        </div>
      </header>
      <main style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "10px 24px 100px",
        position: "relative",
        zIndex: 1,
        columns: `${cols} 260px`,
        columnGap: "24px",
      }}>
        {(() => {
          const reordered = [];
          for (let col = 0; col < cols; col++)
            for (let row = col; row < poems.length; row += cols)
              reordered.push(row);
          return reordered.map((idx, i) => {
            const poem = poems[idx];
            return (
              <div
                key={idx}
                className="card-hover"
                onClick={() => setSelected(poem)}
                style={{
                  cursor: "pointer",
                  background: "linear-gradient(160deg, rgba(8,30,8,0.95) 0%, rgba(12,40,12,0.9) 100%)",
                  border: "1px solid rgba(74,222,128,0.18)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 6px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(74,222,128,0.08)",
                  animation: visible ? `fadeSlideUp 0.6s ease forwards` : "none",
                  opacity: 0,
                  animationDelay: `${0.15 + i * 0.1}s`,
                  animationFillMode: "forwards",
                  breakInside: "avoid",
                  marginBottom: "24px",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <div style={{ position: "relative", background: "#071507" }}>
                  {!imgErrors[i] ? (
                    <img
                      className="card-img"
                      src={!imgErrors[i] ? getImageSrc(poem) : "/xa/assets/default.webp"}
                      onError={() => setImgErrors(e => ({ ...e, [i]: true }))}
                      style={{
                        width: "100%", height: "auto", display: "block",
                        animation: "imgReveal 0.8s ease forwards",
                      }}
                    />
                  ) : (
                    <img
                      className="card-img"
                      src="/xa/assets/default.webp"
                      onError={() => setImgErrors(e => ({ ...e, [i]: true }))}
                      style={{
                        width: "100%", height: "auto", display: "block",
                        animation: "imgReveal 0.8s ease forwards",
                      }}
                    />
                  )}
                </div>
                <div style={{ padding: "16px 18px 18px" }}>
                  <p style={{
                    color: "#86efac", opacity: 0.55, margin: 0,
                    fontSize: "0.72rem", lineHeight: "1.5", fontStyle: "italic",
                  }}>
                    Sumber: {poem.source}
                  </p>
                  <div style={{ height: "1px", background: "linear-gradient(to right, rgba(74,222,128,0.3), transparent)", marginBottom: "10px" }} />
                  <h2 style={{
                    color: "#d1fae5", fontSize: "1.05rem", margin: "0 0 4px",
                    fontStyle: "italic", lineHeight: "1.3",
                  }}>
                    {poem.title}
                  </h2>
                  <p style={{
                    color: "#4ade80", opacity: 0.65, margin: "0 0 10px",
                    fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase",
                  }}>
                    — {poem.author}
                  </p>
                </div>
              </div>
            );
          });
        })()}
      </main>
      {selected && (
        <div
          className="overlay-bg"
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,8,0,0.82)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 50, padding: "20px",
          }}
        >
          <div
            className="modal-scroll"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(155deg, #060f06 0%, #091509 50%, #060f06 100%)",
              border: "1px solid rgba(74,222,128,0.22)",
              borderRadius: "22px",
              maxWidth: "500px", width: "100%",
              maxHeight: "90vh", overflowY: "auto",
              boxShadow: "0 0 100px rgba(34,197,94,0.12), 0 24px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(74,222,128,0.1)",
              animation: "modalIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards",
              position: "relative",
            }}
          >
            <div style={{ position: "relative", height: "220px", overflow: "hidden", borderRadius: "22px 22px 0 0" }}>
              <img
                src={getImageSrc(selected)}
                alt={selected.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(4,10,4,0.93) 100%)",
              }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 28px 16px" }}>
                <h2 style={{
                  color: "#86efac", fontSize: "1.5rem", margin: "0 0 4px",
                  fontStyle: "italic", textShadow: "0 2px 12px rgba(0,0,0,0.8)", lineHeight: "1.2",
                }}>
                  {selected.title}
                </h2>
                <p style={{ color: "#4ade80", opacity: 0.75, margin: 0, fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  — {selected.author}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute", top: "12px", right: "12px",
                  background: "rgba(0,0,0,0.55)", border: "1px solid rgba(74,222,128,0.3)",
                  borderRadius: "50%", width: "32px", height: "32px",
                  color: "#86efac", fontSize: "1rem", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  backdropFilter: "blur(4px)", transition: "all 0.2s",
                }}
              >✕</button>
            </div>
            <div style={{ padding: "24px 32px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "22px" }}>
                <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, rgba(74,222,128,0.3))" }} />
                <span style={{ color: "#4ade80", opacity: 0.5, fontSize: "0.9rem" }}>✦</span>
                <div style={{ height: "1px", flex: 1, background: "linear-gradient(to left, transparent, rgba(74,222,128,0.3))" }} />
              </div>
              <pre style={{
                color: "#d1fae5", fontFamily: "'Georgia', serif",
                fontSize: "1rem", lineHeight: "2",
                whiteSpace: "pre-wrap", margin: "0 0 28px",
                opacity: 0.88, textAlign: "left",
              }}>
                {selected.lyrics}
              </pre>
              <button
                className="close-btn"
                onClick={() => setSelected(null)}
                style={{
                  display: "block", width: "100%", padding: "12px",
                  background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.28)",
                  borderRadius: "10px", color: "#86efac", fontSize: "0.82rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  cursor: "pointer", transition: "all 0.2s ease", fontFamily: "'Georgia', serif",
                }}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
      <footer style={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        padding: "32px 20px 28px",
        borderTop: "1px solid rgba(74,222,128,0.15)",
        marginTop: "-40px",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "14px" }}>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #4ade80)" }} />
          <span style={{ color: "#4ade80", opacity: 0.5, fontSize: "0.9rem" }}>✦</span>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #4ade80)" }} />
        </div>
        <p style={{
          color: "#4ade80",
          opacity: 0.55,
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          margin: 0,
          fontStyle: "italic",
        }}>
          © {new Date().getFullYear()} Kelas 10A Angkatan 9 Maitreyawira Palembang — Semesta Memandang Kala Itu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
