"use client";
import { useState, useEffect } from "react";
import { useDisableRightClick } from "../hooks/useDisableRightClick";

const poems = [
  {
    title: "Jalan Memutar",
    author: "Abiyan Atilah Akbar",
    image: "/xa/assets/Abiyan.jpg",
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
    image: "/xa/assets/Alisa.jpg",
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
    image: "/xa/assets/Alvanno.png",
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
    image: "/xa/assets/Angel.jpg",
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
    image: "/xa/assets/Arini.jpg",
    source: "",
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
    image: "/xa/assets/Aurelia.jpg",
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
    title: "Dalam Doaku",
    author: "Brilliant Warren",
    image: "/xa/assets/Brilliant.JPG",
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
    title: "Kasih di Atap yang Sama",
    author: "Excell Antolin",
    image: "/xa/assets/Excell.jpg",
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
    title: "Langkah Menuju Pencerahan",
    author: "Gisella Eillen Dea",
    image: "/xa/assets/Gisella.jpg",
    source: "",
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
    image: "/xa/assets/Grand.JPG",
    source: "",
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
    image: "/xa/assets/Hartanto.jpg",
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
    title: "Lupa Memberitahu",
    author: "Jan Jonathan Lion",
    image: "/xa/assets/Jan.jpg",
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
];

export default function JunglePoetry() {
  useDisableRightClick();
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);
  const [imgErrors, setImgErrors] = useState({});
  const [cols, setCols] = useState(3);

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
                      src={poem.image}
                      onError={() => setImgErrors(e => ({ ...e, [i]: true }))}
                      style={{
                        width: "100%", height: "auto", display: "block",
                        animation: "imgReveal 0.8s ease forwards",
                      }}
                    />
                  ) : (
                    <img
                      className="card-img"
                      src="/xa/assets/default.png"
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
                src={selected.image}
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
    </div>
  );
}
