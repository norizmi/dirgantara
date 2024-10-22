/* eslint-disable react/no-unescaped-entities */
import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import MobileView from "../Layout/MobileView";

function HowToPlay() {
  return (
    <>
      <MobileView>
        <Header />
        <div>
          <div className="font-sans bg-[#BEBEBE] p-7 pb-24">
            <h2 className="text-2xl font-semibold">Cara Bermain</h2>
            <p className="font-extralight mt-2 text-md w-96">
              Sudah siap bermain permainan dirgantara? Mari bermain bersama
              dengan penuh semangat
            </p>
          </div>

          <div className="p-7">
            <h1 className="text-xl text-center font-semibold">
              HandBook Permainan Dirgantara
            </h1>
            <div className="mt-7">
                    <div className="font-sans">
                        <h1 className="text-2xl font-bold">Persiapan</h1>
                        <ol className="mt-3 text-justify text-md">
                            <li className="mb-2">1. Sebelum memulai permainan, setiap pemain harus memindai kode QR unik yang tertera pada kartu yang disediakan. Kode QR ini akan menghubungkan pemain ke situs web Dirgantara</li>
                            <li>2. Setelah berhasil memindai kode QR, pemain akan diarahkan ke halaman spinner pada situs web Dirgantara. Halaman spinner ini akan digunakan sebagai pengganti dadu dalam permainan.</li>
                        </ol>
                    </div>

                    <div className="font-sans">
                        <h1 className="text-2xl font-bold mt-6">Cara Bermain</h1>
                        <ol className="mt-3 text-justify text-md">
                            <li className="mb-2">1. Permainan dimulai dengan setiap pemain bergiliran memutar spinner pada halaman web. Spinner akan menentukan berapa langkah yang harus diambil oleh pemain pada papan permainan.</li>
                            <li className="mb-2">2. Setelah memutar spinner, pemain harus melangkah sesuai dengan angka yang muncul pada spinner. Pergerakan pemain mengikuti aturan ular tangga tradisional, seperti naik tangga atau turun ular.</li>
                            <li className="mb-2">3. Di beberapa nomor tertentu pada papan permainan, terdapat "spesial nomor" yang membuat pemain mendapatkan pertanyaan atau tantangan seputar digital marketing.</li>
                            <li className="mb-2">4. Jika pemain berhenti di kotak bertanda "tantangan" atau "pertanyaan", pemain akan diberi kartu sesuai dengan jenis kotak tersebut.</li>
                            <li className="mb-2">5. Pada kartu tantangan atau pertanyaan, terdapat soal atau tugas yang harus dijawab atau dilakukan oleh pemain.</li>
                            <li className="mb-2">6. Pemain harus menjawab pertanyaan atau melakukan tantangan yang tertera pada kartu dengan benar.</li>
                            <li className="mb-2">7. Jika pemain berhasil menjawab atau melakukan tantangan dengan benar, mereka akan mendapatkan powerup atau keuntungan yang tertera di kartu tersebut.</li>
                            <li className="mb-2">8. Powerup dapat berupa poin tambahan, kesempatan untuk melangkah lebih jauh, atau keuntungan lainnya sesuai dengan keterangan pada kartu.</li>
                            <li>9. Jika pemain tidak dapat menjawab atau melakukan tantangan dengan benar, mereka tidak mendapatkan powerup, dan pemain selanjutnya akan mendapat giliran.</li>
                        </ol>
                    </div>

                    <div className="font-sans">
                        <h1 className="text-2xl font-bold mt-6">Aturan Tambahan</h1>
                        <ol className="mt-3 text-justify text-md">
                            <li className="mb-2">1. Permainan dimainkan seperti ular tangga tradisional, dengan aturan tambahan dari spesial nomor, kartu tantangan/pertanyaan, dan powerup.</li>
                            <li className="mb-2">2. Pemain dapat maju atau mundur sesuai dengan angka pada spinner dan harus mengikuti aturan ular tangga seperti biasa (naik tangga atau turun ular).</li>
                            <li className="mb-2">3. Powerup yang diperoleh dari kartu dapat digunakan sesuai dengan keterangan pada kartu tersebut, seperti melangkah lebih jauh, mendapatkan poin tambahan, atau keuntungan lainnya.</li>
                            <li className="mb-2">4. Permainan berakhir ketika salah satu pemain mencapai kotak finish.</li>
                            <li className="mb-2">5. Pemenang ditentukan oleh pemain yang mencapai kotak finish terlebih dahulu atau memiliki skor tertinggi jika terdapat sistem penilaian.</li>
                        </ol>
                    </div>
            </div>
          </div>
        </div>
        <Footer />
      </MobileView>
    </>
  );
}

export default HowToPlay;
