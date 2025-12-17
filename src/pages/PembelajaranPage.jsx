import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PembelajaranPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const timelineData = [
{
  minggu: 'Pertemuan 1',
  judul: 'Pengantar Pendidikan Kewarganegaraan',
  ringkas: 'Pengantar konsep dasar Pendidikan Kewarganegaraan serta peran mahasiswa dan dosen dalam proses pembelajaran.',
  hasil: 'Memahami pengertian Kewarganegaraan',
  materi: (
    <>
      <h6>1. Pengertian</h6>
      <p>
        <strong>Pendidikan:</strong> Upaya sadar suatu masyarakat dan negara untuk meningkatkan pengetahuan, keterampilan, dan keadaban.<br/>
        <strong>Kewarganegaraan:</strong> Segala hal yang menyangkut bangsa, negara, serta hubungan negara dengan warganya.<br/>
        <strong>Pendidikan Kewarganegaraan:</strong> Upaya sadar negara untuk memberikan pemahaman mengenai konsep-konsep kenegaraan serta hubungan antara warga dan negara.
      </p>

      <h6>2. Ringkasan Pembahasan</h6>
      <ul>
            <li>Pendidikan Kewarganegaraan penting bagi mahasiswa karena membantu memahami hak dan kewajiban, serta membentuk kesadaran berbangsa.</li>
            <li>Hubungan antara warga negara dan negara adalah saling mengikat: warga memiliki hak dan kewajiban, sedangkan negara memberikan perlindungan dan aturan yang adil.</li>
            <li>Mahasiswa perlu aktif agar materi dapat dipahami secara mendalam dan dapat diterapkan dalam kehidupan nyata.</li>
            <li>Metode problem solving membantu mahasiswa memahami isu kenegaraan dengan pendekatan analitis dan praktis.</li>
      </ul>

      <h6>3. Refleksi Mingguan</h6>
      <ul>
        <li>Saya belajar bahwa Pendidikan Kewarganegaraan membekali saya dengan pemahaman tentang hak dan kewajiban sebagai warga negara serta pentingnya partisipasi aktif.</li>
      </ul>

      <p><em>Ingat, Pendidikan Kewarganegaraan bukan hanya teori—tetapi proses pembentukan karakter dan kesadaran berbangsa.</em></p>
    </>
  )
},
    {
  minggu: 'Pertemuan 2',
  judul: 'Identitas Nasional dan Sejarah Pembentukan Bangsa Indonesia',
  ringkas: 'Memahami konsep identitas nasional, sejarah pembentukan bangsa, faktor pembentuk identitas, serta teori-teori bangsa.',
  hasil: 'Memahami identitas nasional dan faktor-faktor pembentukan bangsa Indonesia.',
  materi: (
    <>
      <h6>1. Pengertian</h6>
      <p>
        <strong>Identitas Nasional:</strong> Ciri khas yang menyatukan seluruh kelompok di Indonesia—melampaui suku, agama, ras, budaya, dan daerah. Contoh penting: Sumpah Pemuda 28 Oktober 1928.<br/>
        <strong>Sejarah Pembentukan Bangsa Indonesia:</strong> Kesadaran nasional modern dimulai jauh sebelum proklamasi 1945, melalui organisasi kebangsaan seperti Boedi Oetomo dan gerakan tokoh perintis.<br/>
        <strong>Konsep Bangsa:</strong> Menurut Bung Karno, bangsa Indonesia adalah komunitas yang memiliki hasrat untuk bersama dan karakter komunitas.<br/>
        <strong>Kolonialisme & Imperialisme:</strong> Kebijakan untuk menguasai negara lain (kolonialisme) dan memperluas kekuasaan melalui kolonisasi atau kekuatan militer (imperialisme) menjadi latar munculnya kesadaran nasional.<br/>
        <strong>Nasionalisme:</strong> Cita-cita negara Indonesia: bersatu, berdaulat, adil, dan makmur.
      </p>

      <h6>2. Ringkasan Pembahasan</h6>
      <ul>
        <li>Faktor pembentuk identitas bersama: Primordial (suku), Sakral (agama/ideologi), Tokoh, Bhinneka Tunggal Ika, Sejarah pengalaman bersama.</li>
        <li>Teori Bangsa Ernest Renan: Bangsa terbangun atas kesadaran moral, ingatan sejarah, dan tekad hidup bersama.</li>
        <li>Teori Bangsa Benedict Anderson: Bangsa sebagai "Imagined Community", terbentuk saat masyarakat membayangkan diri sebagai satu komunitas berdasarkan pengalaman sejarah bersama.</li>
        <li>Identitas nasional penting karena menyatukan seluruh kelompok di Indonesia tanpa memandang etnis/agama.</li>
      </ul>

      <h6>3. Refleksi Mingguan</h6>
      <ul>
        <li>Saya belajar bahwa identitas nasional terbentuk melalui kesadaran, tekad, dan pengalaman bersama, bukan keseragaman etnis atau agama.</li>
        <li>Saya memahami sejarah penjajahan mempengaruhi nasionalisme saya dengan menumbuhkan kesadaran persatuan dan kedaulatan bangsa.</li>
        <li>Saya memahami bahwa Bhinneka Tunggal Ika berarti bersatu dalam keberagaman dalam kehidupan sehari-hari.</li>
        <li>Pemikiran Renan dan Anderson membantu saya melihat bangsa Indonesia secara lebih kritis dan menyadari pentingnya tekad bersama.</li>
      </ul>

      <p><em>Ingat, pemahaman identitas nasional dan sejarah bangsa membantu membentuk kesadaran berbangsa yang kritis dan bertanggung jawab.</em></p>
    </>
  )
},

{
  minggu: 'Pertemuan 3',
  judul: 'Relasi Rakyat, Negara, dan Hukum dalam Kekuasaan Modern',
  ringkas: 'Memahami hubungan rakyat, negara, dan hukum melalui teori kontrak sosial serta unsur pembentuk negara dan legitimasi kekuasaan.',
  hasil: 'Memahami segitiga kekuasaan, teori kontrak sosial, pembentukan negara, bentuk negara, dan legitimasi kekuasaan.',
  materi: (
    <>
      <h6>1. Pengertian</h6>
      <p>
        <strong>Segitiga Kekuasaan:</strong> Rakyat, Negara, dan Hukum saling membutuhkan. Rakyat memberi legitimasi, negara menjalankan kekuasaan, dan hukum mengatur serta membatasi kekuasaan.<br/>
        <strong>Teori Kontrak Sosial:</strong> Negara lahir dari kesepakatan rakyat untuk menciptakan keteraturan dan keamanan. Hobbes melihat kondisi alamiah kacau, Locke relatif damai tetapi hak tidak aman, Rousseau murni tapi rusak oleh ketidaksetaraan sosial.<br/>
        <strong>Pembentukan Negara & Hukum:</strong> Rakyat menyerahkan sebagian hak untuk hukum dan kekuasaan negara. Pandangan filsuf: Hobbes – hukum perintah penguasa; Locke – kekuasaan terbatas; Rousseau – rakyat pembuat hukum sekaligus yang menaati.<br/>
        <strong>Hubungan Timbal Balik:</strong> Kekuasaan berasal dari rakyat; jika negara melanggar kontrak, rakyat berhak menolak, memberontak, atau mengganti pemerintahan.<br/>
        <strong>Unsur Pembentuk Negara:</strong> Unsur konstitutif: rakyat, wilayah, pemerintah berdaulat. Unsur deklaratif: proklamasi, pengakuan dari negara lain.<br/>
        <strong>Bentuk Negara:</strong> Berdasarkan ideologi (Kapitalis, Welfare State, Komunis, Sosial Demokrat, Pancasila, Negara Agama), pemegang kekuasaan (Kerajaan, Republik), distribusi wewenang (Negara Kesatuan, Federasi).<br/>
        <strong>Sumber Legitimasi:</strong> Religius, elitis, aristokratis, pragmatis, ideologis, demokratis.
      </p>

      <h6>2. Ringkasan Pembahasan</h6>
      <ul>
        <li>Teori kontrak sosial penting karena menjelaskan bahwa negara lahir dari persetujuan rakyat untuk melindungi kepentingan bersama.</li>
        <li>Perbedaan pandangan Hobbes, Locke, dan Rousseau: Hobbes – keadaan kacau, Locke – hak dasar perlu dijaga, Rousseau – rakyat sebagai pembuat hukum.</li>
        <li>Rakyat memberikan legitimasi kepada negara melalui persetujuan dan kepatuhan terhadap hukum.</li>
        <li>Bentuk negara dan sumber legitimasi menentukan karakter kekuasaan serta bagaimana negara berinteraksi dengan rakyat.</li>
        <li>Jika negara menyimpang dari kontrak sosial, rakyat berhak melakukan tindakan etis: menolak, memberontak, atau mengganti pemerintahan sesuai prinsip Locke & Rousseau.</li>
      </ul>

      <h6>3. Refleksi Mingguan</h6>
      <ul>
        <li>Saya memahami posisi saya sebagai rakyat dalam segitiga kekuasaan: memberikan legitimasi, mematuhi hukum, dan menuntut negara menjalankan kewajibannya.</li>
        <li>Saya menilai bahwa negara saat ini sudah cukup memenuhi kontrak sosialnya, namun masih perlu pengawasan dan partisipasi aktif warga.</li>
        <li>Legitimasi demokratis menurut saya paling kuat karena berasal dari kedaulatan rakyat dan memastikan pemerintahan bertanggung jawab.</li>
        <li>Jika negara menyimpang dari kontrak, tindakan etis dan konstitusional bagi rakyat adalah menuntut perubahan melalui mekanisme hukum, partisipasi politik, dan kontrol sosial.</li>
        <li>Materi ini membantu saya menjadi warga negara yang kritis dan sadar hak-hak politik, serta memahami bahwa kekuasaan negara lahir, dibatasi, dan dilegitimasi oleh rakyat.</li>
      </ul>

      <p><em>Ingat, kekuasaan negara tidak berdiri sendiri—ia lahir, dibatasi, dan dilegitimasi oleh rakyat.</em></p>
    </>
  )
},

{
  minggu: 'Pertemuan 4',
  judul: 'Ideologi dan Falsafah Bangsa',
  ringkas: 'Memahami pengertian ideologi, sistem pemikiran, jenis-jenis ideologi, serta Pancasila sebagai pandangan hidup dan dasar negara.',
  hasil: 'Memahami ideologi, jenis-jenis ideologi, fungsi ideologi dalam politik dan sosiokultural, serta Pancasila sebagai pandangan hidup dan dasar negara.',
  materi: (
    <>
      <h6>1. Pengertian</h6>
      <p>
        <strong>Ideologi:</strong> Kumpulan gagasan, keyakinan, dan konsep yang menyeluruh dan sistematis, mengatur tindakan dan perilaku kelompok manusia dalam politik, ekonomi, sosial, budaya, dan agama. Ideologi merupakan perwujudan filsafat sebagai pandangan hidup.<br/>
        <strong>Arti Luas & Sempit:</strong> Luas: ilmu tentang gagasan dan cita-cita yang menjadi pedoman berpikir & bertindak; Sempit: pedoman hidup dalam bidang tertentu, misal politik atau ekonomi.<br/>
        <strong>Ideologi sebagai Sistem Pemikiran:</strong> Membentuk sistem pemikiran dan panduan tindakan individu/kelompok, dipahami melalui sosiologi, antropologi, politik, dan filsafat.<br/>
        <strong>Dari Perspektif Filsafat:</strong> Sistem pemikiran rasional & sistematis, menjawab pertanyaan tentang hakikat manusia, struktur sosial, realitas, dan tujuan hidup bersama. Ideologi bisa terbuka (dinamis, adaptif, contoh: Pancasila) atau tertutup (dogmatis, contoh: fasisme).<br/>
        <strong>Pancasila:</strong> Pandangan hidup dan dasar negara Indonesia, hasil sintesis nilai budaya Nusantara, pemikiran dunia, dan sejarah panjang.
      </p>

      <h6>2. Ringkasan Pembahasan</h6>
      <ul>
        <li>Ideologi berfungsi sebagai cetak biru tindakan politik, membentuk sistem pemerintahan, distribusi kekuasaan, dan kebijakan publik.</li>
        <li>Ideologi memiliki dimensi sosiokultural: menyatukan perilaku sosial, menjadi perekat identitas kolektif, dan sebagai alat kontrol sosial.</li>
        <li>Jenis-jenis ideologi utama: 
          <ul>
            <li>Liberalisme: hak individu, pembagian kekuasaan, negara dibatasi.</li>
            <li>Sosialisme: kepentingan bersama, kritik masyarakat borjuis; berkembang menjadi Sosial Demokrat & Komunisme.</li>
            <li>Anarkhisme: menghapus negara, masyarakat otonom.</li>
            <li>Sindikalisme: menekankan peran serikat pekerja dan kelompok kreatif.</li>
          </ul>
        </li>
        <li>Pancasila sebagai ideologi terbuka: adaptif, memberi ruang kritik, dasar filsafat dan pandangan hidup bangsa Indonesia.</li>
        <li>Ideologi membentuk cara pandang dan perilaku sosial masyarakat serta menjadi landasan pembangunan negara.</li>
      </ul>

      <h6>3. Refleksi Mingguan</h6>
      <ul>
        <li>Ideologi yang paling sesuai dengan pandangan hidup saya adalah Pancasila karena bersifat terbuka, adaptif, dan sesuai dengan nilai-nilai budaya bangsa.</li>
        <li>Saya memahami bahwa ideologi mempengaruhi keputusan politik dan sosial saya dengan membimbing nilai, prioritas, dan sikap terhadap masalah masyarakat.</li>
        <li>Saya memahami Pancasila sebagai pandangan hidup dan dasar negara: sebagai kerangka berpikir, panduan tindakan, dan pedoman hidup berbangsa yang menyatukan keberagaman.</li>
        <li>Materi ini menegaskan bahwa ideologi bukan sekadar gagasan, tetapi kerangka berpikir yang mengatur cara masyarakat memahami realitas dan menentukan arah masa depan.</li>
      </ul>

      <p><em>Ingat, Pancasila sebagai ideologi, pandangan hidup, dan dasar negara membantu membentuk kesadaran berbangsa dan kerangka berpikir kritis warga negara.</em></p>
    </>
  )
},

{
  minggu: 'Pertemuan 5',
  judul: 'Konstitusi dan Tata Kelola Negara',
  ringkas: 'Memahami teori kontrak sosial, prinsip negara hukum, definisi dan ruang lingkup konstitusi, hierarki hukum, sumber hukum, serta dinamika konstitusi Indonesia.',
  hasil: 'Memahami konstitusi sebagai dasar hukum tertinggi, hubungan rakyat-negara, prinsip demokratisasi, amandemen, dan sejarah konstitusi Indonesia.',
  materi: (
    <>
      <h6>1. Pengertian</h6>
      <p>
        <strong>Kontrak Sosial:</strong> Negara dan pemerintahan terbentuk melalui kesepakatan sukarela rakyat untuk melepaskan sebagian hak alami demi keteraturan dan keamanan. Negara sebagai pelayan rakyat, hukum sebagai kesepakatan bersama.<br/>
        <strong>Rule of Law (Negara Hukum):</strong> Semua warga dan penyelenggara negara terikat hukum; hukum menjadi jalan tengah menyelesaikan konflik; unsur negara hukum: perlindungan HAM, pembagian kekuasaan, pemerintahan berdasarkan undang-undang, peradilan tata usaha negara.<br/>
        <strong>Konstitusi:</strong> Naskah dasar yang mengatur kaidah fundamental bernegara, mengatur lembaga negara, struktur ketatanegaraan, hubungan negara-masyarakat, dan nilai dasar bangsa.<br/>
        <strong>Konstitusi Demokratis:</strong> Kedaulatan dari rakyat, perlindungan minoritas, jaminan hak individu, pembatasan kekuasaan pemerintah, trias politica, check and balance.<br/>
        <strong>Hierarki Hukum & Sumber Hukum:</strong> Konstitusi sebagai norma dasar, semua peraturan harus sesuai; Mahkamah Konstitusi berwenang menguji undang-undang bertentangan.<br/>
        <strong>Dinamika & Amandemen:</strong> Konstitusi Indonesia berubah melalui mekanisme formal untuk mencegah penyalahgunaan kekuasaan dan menyesuaikan kebutuhan demokratisasi; fase: UUD 1945, Konstitusi RIS, UUDS 1950, UUD 1945 Kembali, Amandemen 1999–2002.
      </p>

      <h6>2. Ringkasan Pembahasan</h6>
      <ul>
        <li>Teori kontrak sosial menjelaskan asal-usul negara dari persetujuan rakyat, hakikat hubungan rakyat–negara–hukum.</li>
        <li>Prinsip Rule of Law menjamin kesetaraan di hadapan hukum, perlindungan HAM, dan pembagian kekuasaan.</li>
        <li>Konstitusi adalah hukum tertinggi yang menjadi dasar pembentukan semua peraturan hukum di bawahnya.</li>
        <li>Konstitusi demokratis menegaskan hak rakyat, perlindungan minoritas, trias politica, serta mekanisme check and balance.</li>
        <li>Dinamika konstitusi Indonesia menunjukkan perubahan yang menyesuaikan konteks politik dan kebutuhan demokratisasi, termasuk amandemen 1999–2002.</li>
        <li>Mahkamah Konstitusi berperan menjaga keselarasan peraturan dengan konstitusi melalui judicial review.</li>
      </ul>

      <h6>3. Refleksi Mingguan</h6>
      <ul>
        <li>Saya memahami bahwa konstitusi harus menjadi hukum tertinggi untuk menjamin legitimasi, keteraturan, dan perlindungan hak-hak warga negara.</li>
        <li>Saya menyadari risiko bila konstitusi dapat diubah dengan mudah: potensi penyalahgunaan kekuasaan dan ketidakstabilan hukum.</li>
        <li>Peran Mahkamah Konstitusi penting untuk menjaga kesesuaian peraturan dengan konstitusi dan memastikan keadilan bagi seluruh rakyat.</li>
        <li>Saya memahami bahwa amandemen UUD 1945 diperlukan setelah reformasi untuk memperkuat demokrasi, HAM, dan pemerintahan yang akuntabel.</li>
        <li>Materi ini menegaskan hubungan konstitusi dengan kontrak sosial: kekuasaan negara lahir dari persetujuan rakyat dan dibatasi oleh hukum yang sah.</li>
      </ul>

      <p><em>Ingat, konstitusi adalah fondasi hukum, politik, dan etika negara, sekaligus perwujudan kontrak sosial antara rakyat dan penguasa.</em></p>
    </>
  )
},

{
  minggu: 'Pertemuan 6',
  judul: 'Fungsi dan Peran Negara',
  ringkas: 'Memahami tujuan, fungsi, dan peran negara, proses kebijakan publik, filsafat kebijakan, serta prinsip-prinsip good governance.',
  hasil: 'Memahami tujuan negara, fungsi reguler, administrasi, dan pembangunan, serta prinsip good governance dalam penyelenggaraan negara.',
  materi: (
    <>
      <h6>1. Pengertian</h6>
      <p>
        <strong>Tujuan Negara:</strong> Menjelaskan arah dan sasaran negara melalui lima teori utama: kemerdekaan, kekuasaan, ketertiban, kesejahteraan, dan keadilan.<br/>
        <strong>Fungsi Negara:</strong> 
        <ul>
          <li><strong>Fungsi Reguler:</strong> Politik, diplomatik, yuridis.</li>
          <li><strong>Fungsi Administrasi:</strong> Mengelola birokrasi agar selaras dengan prinsip negara hukum.</li>
          <li><strong>Fungsi Pembangunan:</strong> Mewujudkan kesejahteraan umum dan mencerdaskan kehidupan publik.</li>
        </ul>
        <strong>Kebijakan Publik:</strong> Proses penerapan nilai moral melalui otoritas negara, mencakup definisi masalah, agenda, perumusan, adopsi, implementasi, dan evaluasi.<br/>
        <strong>Good Governance:</strong> Prinsip transparansi, partisipasi, responsivitas, supremasi hukum, efisiensi, efektivitas, dan keadilan sebagai landasan etis penyelenggaraan negara.
      </p>

      <h6>2. Ringkasan Pembahasan</h6>
      <ul>
        <li>Negara memiliki tujuan untuk menjamin kemerdekaan, keamanan, kesejahteraan, dan keadilan bagi rakyat.</li>
        <li>Fungsi reguler negara meliputi politik (pertahanan & keamanan), diplomatik (kerja sama internasional), dan yuridis (penegakan hukum).</li>
        <li>Fungsi administrasi memastikan birokrasi efektif dan selaras dengan hukum.</li>
        <li>Fungsi pembangunan fokus pada kesejahteraan umum dan pendidikan publik.</li>
        <li>Kebijakan publik lahir dari proses politik, dilema nilai, dan etika pemerintah untuk mencapai kebaikan bersama.</li>
        <li>Prinsip good governance menjamin transparansi, partisipasi, responsivitas, supremasi hukum, efisiensi, efektivitas, dan keadilan.</li>
      </ul>

      <h6>3. Refleksi Mingguan</h6>
      <ul>
        <li>Saya memahami bahwa negara harus memiliki tujuan yang jelas untuk melindungi, membangun, dan menyejahterakan rakyatnya.</li>
        <li>Saya menyadari pentingnya fungsi reguler, administrasi, dan pembangunan agar negara berjalan sesuai prinsip negara hukum.</li>
        <li>Saya memahami bahwa kebijakan publik harus etis, responsif, dan partisipatif agar sesuai dengan kepentingan rakyat.</li>
        <li>Saya menyadari pentingnya prinsip good governance: transparansi, partisipasi, supremasi hukum, efisiensi, efektivitas, dan keadilan untuk menciptakan pemerintahan yang akuntabel dan inklusif.</li>
      </ul>

      <p><em>Ingat, fungsi dan peran negara tidak hanya mengatur kehidupan publik, tetapi juga membentuk kerangka etis, hukum, dan sosial untuk kesejahteraan seluruh warga.</em></p>
    </>
  )
},

{
  minggu: 'Pertemuan 9',
  judul: 'Demokrasi Indonesia',
  ringkas: 'Memahami pengertian demokrasi, sistem politik, bentuk pemerintahan, prinsip demokrasi, dan indikator negara demokratis di Indonesia.',
  hasil: 'Memahami konsep demokrasi, penerapannya dalam Pancasila dan UUD 1945, serta prinsip dan indikator demokrasi di Indonesia.',
  materi: (
    <>
      <h6>1. Pengertian</h6>
      <p>
        <strong>Etimologi:</strong> Demokrasi berasal dari bahasa Yunani: <em>demos</em> = rakyat, <em>kratos/cratein</em> = pemerintahan; makna: pemerintahan oleh rakyat.<br/>
        <strong>Definisi Abraham Lincoln (1863):</strong> "Government of the people, by the people, and for the people."<br/>
        <strong>Tiga Makna Demokrasi:</strong>
        <ul>
          <li><strong>Sebagai Bentuk Pemerintahan:</strong> Dipimpin rakyat untuk kepentingan rakyat (Plato & Aristoteles).</li>
          <li><strong>Sebagai Sistem Politik:</strong> Pembagian kekuasaan, pemerintahan konstitusional, pemilu bebas dan adil, musyawarah, dan mayoritas.</li>
          <li><strong>Dalam Pancasila (Indonesia):</strong> Demokrasi Pancasila tercermin dalam Sila ke-4: "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan."</li>
        </ul>
      </p>

      <h6>2. Ringkasan Pembahasan</h6>
      <ul>
        <li>Indonesia menganut demokrasi Pancasila dengan prinsip musyawarah mufakat dan pembagian kekuasaan yang seimbang.</li>
        <li>Bentuk sistem pemerintahan demokratis meliputi sistem parlementer, trias politica (pemisahan kekuasaan), dan sistem referendum.</li>
        <li>Prinsip-prinsip demokrasi mencakup pembagian kekuasaan, pemerintahan berdasarkan hukum, pemilu bebas, multi-partai, pers bebas, perlindungan HAM, dan administrasi publik yang diawasi.</li>
        <li>Alasan Indonesia disebut negara demokrasi: cita-cita etis bangsa, aspek sosiologis (keluar dari kolonialisme & multikulturalisme), dan yuridis berdasarkan UUD 1945.</li>
        <li>Indikator demokrasi: kebebasan sipil, pemilu jujur & adil, akuntabilitas pemerintah, peran partai politik, independensi peradilan, perlindungan hak minoritas, informasi publik, dan partisipasi warga.</li>
      </ul>

      <h6>3. Refleksi Mingguan</h6>
      <ul>
        <li>Saya memahami bahwa demokrasi berarti pemerintahan oleh rakyat, untuk rakyat, dan dari rakyat, sesuai prinsip Pancasila.</li>
        <li>Saya menyadari pentingnya musyawarah mufakat dan pembagian kekuasaan agar pemerintah tidak tirani dan hak rakyat terlindungi.</li>
        <li>Saya memahami prinsip demokrasi yang harus dijalankan: pemilu bebas, pers bebas, perlindungan HAM, dan administrasi yang transparan.</li>
        <li>Saya menyadari bahwa keberhasilan demokrasi di Indonesia tergantung pada partisipasi aktif warga, akuntabilitas pemerintah, dan penghormatan terhadap keragaman budaya.</li>
      </ul>

      <p><em>Ingat, demokrasi bukan sekadar sistem politik, tetapi kerangka bagi rakyat untuk berpartisipasi aktif, melindungi hak, dan membangun negara yang adil dan berdaulat.</em></p>
    </>
  )
},

{
  minggu: 'Pertemuan 11',
  judul: 'Multikulturalisme',
  ringkas: 'Memahami konsep multikulturalisme, implementasinya di Indonesia, tantangan, nilai Pancasila, dan strategi membangun toleransi.',
  hasil: 'Memahami pentingnya multikulturalisme dalam negara-bangsa Indonesia, tantangan keberagaman, dan peran Pancasila dalam membangun masyarakat inklusif.',
  materi: (
    <>
      <h6>1. Pengertian</h6>
      <p>
        <strong>Multikulturalisme:</strong> Pandangan yang menekankan pengakuan dan penghargaan terhadap keberagaman budaya, agama, etnis, bahasa, dan identitas dalam masyarakat. Bukan sekadar hidup berdampingan, tetapi juga melindungi dan memfasilitasi keberagaman.<br/>
        <strong>Perbedaan dengan Pluralitas:</strong> Pluralitas hanya fakta keberagaman; multikulturalisme menekankan dimensi normatif untuk mengelola keberagaman secara adil.<br/>
        <strong>Konteks Indonesia:</strong> Ratusan etnis, bahasa, agama, dan budaya. Multikulturalisme di Indonesia bersifat historis dan esensial, tercermin dalam Sumpah Pemuda, Pancasila, dan UUD 1945.
      </p>

      <h6>2. Ringkasan Pembahasan</h6>
      <ul>
        <li>Multikulturalisme penting untuk mengelola keberagaman dan menciptakan kohesi sosial serta identitas kebangsaan yang inklusif.</li>
        <li>Tantangan muncul dari etnosentrisme, diskriminasi, konflik identitas, intoleransi, dan dominasi budaya mayoritas.</li>
        <li>Pancasila menyediakan nilai dasar: Humanisme, Persatuan, Demokrasi Permusyawaratan, dan Keadilan Sosial untuk menjaga harmoni dalam keberagaman.</li>
        <li>Tujuan multikulturalisme: menciptakan stabilitas nasional, menghargai hak minoritas, mencegah konflik horizontal, dan membangun solidaritas sosial.</li>
      </ul>

      <h6>3. Refleksi Mingguan</h6>
      <ul>
        <li>Saya menyadari bahwa sebagai warga negara, saya harus aktif menciptakan lingkungan sosial yang inklusif dan toleran.</li>
        <li>Saya sudah berusaha menghargai perbedaan di kampus, keluarga, dan masyarakat dengan mendengarkan dan menghormati perspektif orang lain.</li>
        <li>Saya melihat diskriminasi masih ada dalam bentuk stereotip dan perlakuan berbeda terhadap minoritas, dan saya berkomitmen untuk mengedukasi diri sendiri dan orang lain untuk menguranginya.</li>
        <li>Pancasila membantu saya menyelesaikan konflik dengan mengedepankan nilai kemanusiaan, persatuan, musyawarah, dan keadilan sosial, sehingga keberagaman menjadi kekuatan, bukan ancaman.</li>
      </ul>

      <p><em>Ingat, multikulturalisme bukan sekadar kerangka sosial, tetapi juga dasar etis untuk membentuk masyarakat inklusif dan demokratis.</em></p>
    </>
  )
},
  ];

  return (
    <div>
      {/* Header */}
      <section
        className="py-5"
        style={{
          background: 'linear-gradient(135deg, #e0dedeff 0%, #000000ff 100%)',
          color: 'white',
          animation: 'fadeInDown 0.8s ease-out'
        }}
      >
        <div className="container text-center">
          <h1
            className="display-4 fw-bold mb-3"
            style={{ animation: 'fadeInDown 0.8s ease-out 0.1s both' }}
          >
            Pembelajaran 8 Minggu
          </h1>
          <p className="lead" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            Perjalanan belajar yang mengubah perspektif
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {timelineData.map((item, idx) => (
                <div
                  key={idx}
                  className="mb-5"
                  style={{ animation: `fadeInUp 0.8s ease-out ${0.1 + idx * 0.15}s both` }}
                >
                  <div className="row align-items-center">
                    {idx % 2 === 0 ? (
                      <>
                        <div className="col-md-6">
                          <div
                            className="card h-100 shadow-sm border-0"
                            style={{ cursor: 'pointer' }}
                            onClick={() => toggle(idx)}
                          >
                            <div className="card-body">
                              <span className="badge bg-primary mb-2">{item.minggu}</span>
                              <h5 className="card-title fw-bold">{item.judul}</h5>
                              <p className="card-text text-muted mb-2">{item.ringkas}</p>
                              <div className="alert alert-info mb-0">
                                <strong>📊 Hasil:</strong> {item.hasil}
                              </div>
                              {openIndex === idx && <div className="mt-3">{item.materi}</div>}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                          <div
                            style={{
                              width: '60px',
                              height: '60px',
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '24px'
                            }}
                          >
                            📚
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-md-6 d-flex justify-content-center order-md-last">
                          <div
                            style={{
                              width: '60px',
                              height: '60px',
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '24px'
                            }}
                          >
                            ✨
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="card h-100 shadow-sm border-0"
                            style={{ cursor: 'pointer' }}
                            onClick={() => toggle(idx)}
                          >
                            <div className="card-body">
                              <span className="badge bg-success mb-2">{item.minggu}</span>
                              <h5 className="card-title fw-bold">{item.judul}</h5>
                              <p className="card-text text-muted mb-2">{item.ringkas}</p>
                              <div className="alert alert-info mb-0">
                                <strong>📊 Hasil:</strong> {item.hasil}
                              </div>
                              {openIndex === idx && <div className="mt-3">{item.materi}</div>}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
