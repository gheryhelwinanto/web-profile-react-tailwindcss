import { useState } from 'react';
import './index.css';
import Form from './Form';
import Burger from './Burger';

function Header() {
  const [trigger, setTrigger] = useState(false);
  const [press, setPress] = useState(false);
  return (
    <div className="md:py-0 md:px-12 bg-white shadow-lg shadow-gray-400 flex flex-col md:flex-row flex-nowrap items-stetch justify-start">
      <div className="flex flex-col justify-center items-stretch md:items-start md:basis-1/2 lg:basis-3/5  basis-auto flex-grow text-center md:text-start">
        <button
          onClick={() => setPress(true)}
          className="p-3 md:p-0 w-full h-auto flex justify-center md:justify-start"
        >
          <a href="#heading">
            <img
              src="./gg.ico"
              alt="logo-web-profile "
              className="md:p-6 self-center"
            />
          </a>
        </button>
        <Burger
          className="md:hidden dropdown"
          push={press}
          setPush={setPress}
        />
      </div>
      <div className="md:basis-1/2  lg:basis-2/5 md:flex md:flex-row md:flex-nowrap justify-center gap-3 hidden">
        <div className="basis-1/4 text-center py-7 hover:text-yellow-300 lg:hover:bg-yellow-300 font-bold ">
          <a href="#profile" className="text-blue-950 font-outfit">
            Profile
          </a>
        </div>
        <div className="basis-1/4 text-center py-7 hover:text-yellow-300 lg:hover:bg-yellow-300 font-bold ">
          <a href="#article" className="text-blue-950 font-outfit">
            Article
          </a>
        </div>
        <div className="basis-1/4 text-center py-7 hover:text-yellow-300 lg:hover:bg-yellow-300 font-bold ">
          <a href="#experiences" className="text-blue-950 font-outfit">
            Experiences
          </a>
        </div>
        <div className="basis-1/4 text-center py-7 hover:text-yellow-300 lg:hover:bg-yellow-300 font-bold ">
          <button
            className="text-blue-950 font-outfit"
            onClick={() => setTrigger(true)}
          >
            Contact
          </button>
          <Form pop={trigger} setPop={setTrigger} />
        </div>
      </div>
    </div>
  );
}

function Moto() {
  return (
    <div className="bg-cover bg-library w-full h-min">
      <div className="bg-gray-800 bg-opacity-40 w-full h-min lg:h-[37rem] font-comforta font-bold py-32">
        <div className="md:ml-12 md:border-l-white md:border-l-8 font-bold">
          <h1 className=" text-2xl text-center sm:text-4xl pb-6 sm:px-4  md:text-left md:text-5xl lg:text-7xl text-white md:pb-6 md:px-8">
            <span className="firstline opacity-0 ">Dengan </span>
            <span className="secondline opacity-0 ">Membaca</span>
          </h1>
          <h1 className="text-2xl text-center sm:text-4xl p-y-6 sm:px-4 md:text-left  md:text-5xl lg:text-7xl text-white md:py-6 md:px-8">
            <span className="firstline opacity-0">Kita </span>
            <span className="secondline opacity-0">Bangun </span>
            <span className="thirdline opacity-0 text-red-500">Indonesia</span>
          </h1>
          <h1 className="text-2xl text-center sm:text-4xl pt-6 sm:px-4  md:text-left md:text-5xl lg:text-7xl text-white md:pt-6 md:px-8">
            <span className="firstline opacity-0 ">Membaca, </span>
            <span className="thirdline opacity-0">Jendela </span>
            <span className="thirdline opacity-0 text-red-500">Dunia</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden xl:inline">
      <button className=" bg-white rounded-full bg-opacity-60">
        <a href="#profile">
          <img src="/public/down.png" alt="down-btn" />
        </a>
      </button>
    </div>
  );
}

function Profile() {
  return (
    <div className="p-10 flex flex-col flex-nowrap gap-2 items-center">
      <div className="flex flex-col items-center flex-nowrap">
        <div className="basis-2/4 rounded-full bg-gray-400 overflow-hidden md:pt-4">
          <img
            src="/photo-profile.png"
            alt="photo-profile"
            className="w-36 h-36"
          />
        </div>
        <div className="basis-1/4 py-2">
          <h1 className="text-2xl font-semibold font-comforta">
            Ghery Helwinanto
          </h1>
        </div>
        <div className="basis-1/4">
          <h2 className="text-lg text-center py-2 font-outfit">
            Mahasiswa Program Studi Ilmu Perpustakaan | Story Structure
            Enthusiast
          </h2>
        </div>
      </div>
      <div className="py-4">
        <h3 className="text-xl text-center font-semibold p-2">About</h3>
        <p className="text-start px-14 font-outfit text-lg pb-2 tracking-wide md:text-justify">
          Saya saat ini sedang menempuh pendidikan sebagai mahasiswa program
          studi Ilmu Perpustakaan di salah satu perguruan tinggi negeri di
          Indonesia, yaitu Universitas Terbuka. Selama menempuh pendidikan saya
          memanfaatkan waktu yang saya miliki di luar waktu belajar dengan
          mengikuti beberapa pelatihan untuk tujuan pengembangan diri. Selain
          mempelajari ilmu tentang kepustakawanan di bangku perkuliahan, saya
          memiliki ketertarikan dalam hal dunia editing naskah fiksi. Editing
          naskah merupakan bagian yang krusial bagi penerbitan sebuah buku,
          khususnya novel. Oleh sebab itu, saya telah menulis beberapa teori,
          saran, serta teknik penulisan agar pembaca dapat menambah khazanah
          ilmu pengetahuan mengenai topik editing tersebut. Tidak hanya itu,
          saya juga meluangkan waktu untuk belajar mengenai pengembangan website
          atau web development untuk pengembangan karir di masa depan.
        </p>
      </div>
    </div>
  );
}

function Firstwave() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#374151"
        fillOpacity="#374151"
        d="M0,128L48,149.3C96,171,192,213,288,245.3C384,277,480,299,576,266.7C672,235,768,149,864,133.3C960,117,1056,171,1152,208C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
}

function Exp() {
  return (
    <div className="bg-gray-700 -mt-6 text-white py-6 px-4 md:px-8">
      <div
        className="pt-14 pb-6 flex flex-col flex-nowrap gap-4"
        id="experiences"
      >
        <div className="md:justify-center">
          <h2 className="p-4 md:py-6 text-xl text-center font-semibold">
            Experiences
          </h2>
        </div>
        <div className="flex flex-col border-l-white border-l-2 gap-6">
          <div className="px-12 flex flex-col">
            <div className="bullets bg-white w-6 h-6 rounded-full z-10 relative -left-[3.8rem]"></div>
            <h4 className="font-comforta">November 2018 - Maret 2019</h4>
            <h2 className="font-outfit text-2xl tracking-wide font-bold">
              WAITER - STAF DAPUR
            </h2>
            <h2 className="font-outfit text-lg">
              Istana Lesehan - Tulungagung
            </h2>
            <p className="py-4 font-comforta text-sm tracking-wider">
              Pada bulan pertama masa kerja saya, saya bertugas sebagai seorang
              waiter yang berperan dalam mencatat pesanan dan mengantarkan
              hidangan-hidangan yang telah dipesan ke meja pelanggan termasuk
              dengan menjaga kebersihan meja makan. Pada bulan berikutnya, saya
              dipindah ke bagian dapur untuk berperan sebagai staf dapur bagian
              pantry. Dalam rangka menunjang tugas operasional dapur, saya
              menjalankan peran staf dapur dengan berkomunikasi dengan juru
              masak lain dan berkolaborasi dalam pengaturan dan penyajian
              hidangan-hidangan yang masuk melalui daftar pesanan yang diberikan
              oleh waiter/waitress. Saya juga berperan dalam menyajikan hidangan
              dengan memperhatikan tampilan estetis dan presentasi yang menarik
              pada hidangan yang kemudian siap untuk diantarkan ke meja
              pelanggan. Pada periode waktu tersebut saya dapat beradaptasi
              dengan perubahan berdasarkan pada pergantian peran dari waiter
              menjadi staf dapur.
            </p>
            <div className="bullets bg-white w-6 h-6 rounded-full z-10 relative -left-[3.8rem]"></div>
            <h4 className="font-comforta">November 2019 - Juni 2020</h4>
            <h2 className="font-outfit text-2xl tracking-wide font-bold">
              GRAPHIC DESIGNER - OPERATOR MESIN
            </h2>
            <h2 className="font-outfit text-lg">
              Lamira Digital Printing - Tulungagung
            </h2>
            <p className="py-4 font-comforta text-sm tracking-wider">
              Sebagai graphic designer, saya mengoperasikan komputer untuk
              menjalankan tugas membuat desain grafis seperti brosur, desain
              banner, ID card, desain sertifikat, serta stiker dengan
              memanfaatkan aplikasi Photoshop CS6 dan CorelDraw sesuai dengan
              permintaan customer. Selain itu, saya juga mengoperasikan mesin
              percetakan ketika dibutuhkan dan juga menjalankan tugas kasir.
              Pada masa kerja tersebut, saya berhasil memberikan kontribusi pada
              penjualan hingga mencapai 3 juta rupiah dalam sehari. Dimana
              jumlah pendapatan dari penjualan produk-produk tersebut belum
              pernah mencapai jumlah tersebut sebelumnya.
            </p>
          </div>
          <div className="px-12 flex flex-col">
            <div className="bullets bg-white w-6 h-6 rounded-full z-10 relative -left-[3.8rem]"></div>
            <h4 className="font-comforta">Maret 2021 - Januari 2022</h4>
            <h2 className="font-outfit text-2xl tracking-wide font-bold">
              BARISTA - STAF DAPUR
            </h2>
            <h2 className="font-outfit text-lg">PHAN PHAN - Tulungagung</h2>
            <p className="py-4 font-comforta text-sm tracking-wider">
              Selama masa awal kerja, saya berperan sebagai barista di PHAN
              PHAN. Sebagai barista, saya memberikan pelayanan terhadap customer
              sesuai dengan pesanan. Saya juga sempat dipindahkan ke franchise
              lain yang masih dikelola oleh pemilik yang sama. Pada saat
              menjelang bulan ramadhan hingga sampai Hari Raya Idul Fitri, saya
              dipindahkan ke franchise D&apos;kriuk untuk menjalankan tugas
              menjadi staf dapur. Sebagai staf dapur, saya berperan untuk
              memasak produk-produk franchise seperti ayam, kentang, dan jamur
              sesuai dengan SOP yang diberikan. Dalam waktu tersebut, saya juga
              dipercaya untuk menjalankan tugas kasir di beberapa kesempatan
              untuk menunjang operasional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Secondwave() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#374151"
        fillOpacity="1"
        d="M0,160L34.3,133.3C68.6,107,137,53,206,32C274.3,11,343,21,411,69.3C480,117,549,203,617,240C685.7,277,754,267,823,245.3C891.4,224,960,192,1029,170.7C1097.1,149,1166,139,1234,144C1302.9,149,1371,171,1406,181.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
      ></path>
    </svg>
  );
}

function Card(pictures) {
  return (
    <div className="card rounded-xl">
      <div className="rounded-t-xl w-auto sm:h-64 overflow-hidden bg-gray-600 ">
        <img
          className="sm:bg-cover rounded-t-xl"
          src={pictures.pic}
          alt="gambar"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="pt-4 text-center text-3xl font-semibold font-outfit">
          {pictures.title}
        </h2>
        <p className="px-4 text-center">{pictures.teks}</p>
      </div>
      <div className="btn text-center py-4">
        <a href={pictures.goto}>
          <button className="rounded-lg border-blue-600 border-2 text-blue-600 hover:text-white p-3 font-comforta transition-transform hover:bg-blue-600 hover:scale-110">
            Kunjungi
          </button>
        </a>
      </div>
    </div>
  );
}

// Footer
function Footer() {
  return (
    <>
      <div className="p-8 bg-gray-700 text-white">
        <h4 className="text-base text-center font-comforta">
          Created by Ghery Helwinanto @2024
        </h4>
      </div>
    </>
  );
}

export {
  Header,
  Arrow,
  Profile,
  Moto,
  Exp,
  Firstwave,
  Secondwave,
  Card,
  Footer,
};
