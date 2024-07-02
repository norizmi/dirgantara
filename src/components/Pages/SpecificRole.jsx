import { useParams, Link } from 'react-router-dom';
import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import MobileView from "../Layout/MobileView";
import cc from "../assets/images/cc1.jpg"
import ceo from "../assets/images/ceo2.jpg"
import sm from "../assets/images/sm1.jpg"
import designer from "../assets/images/designer.jpg"
import ba from "../assets/images/ba.jpg"
import seo from "../assets/images/seo.jpg"
import Back from "../assets/icon/back.svg";

const roleInfo = {
  'ceo': {
    title: 'CEO',
    image: ceo,
    description: 'Chief Executive Officer (CEO) adalah jabatan tertinggi yang ada pada jajaran manajemen dari suatu perusahaan baik itu perusahaan dengan skala besar maupun menengah. Dalam aktivitas bisnis, seorang CEO diberikan kepercayaan untuk mengelola keseluruhan perusahaan, membuat keputusan penting dan bertindak sebagai titik komunikasi utama dengan dewan direksi sekaligus para pemegang saham.',
  },
  'social-media': {
    title: 'Social Media Specialist',
    image: sm,
    description: 'Social Media Specialist adalah posisi penting dalam tim pemasaran digital perusahaan yang bertanggung jawab untuk mengelola dan mengembangkan kehadiran online perusahaan. Dalam aktivitas sehari-hari, seorang Social Media Specialist diberikan tugas untuk merancang strategi konten, mengelola akun media sosial, berinteraksi dengan audiens, dan menganalisis performa kampanye untuk meningkatkan engagement dan brand awareness perusahaan.'
  },
  'content-creator': {
    title: 'Content Creator',
    image: cc,
    description: 'Content Creator adalah posisi kunci dalam strategi pemasaran digital dan komunikasi suatu perusahaan atau merek. Dalam aktivitas sehari-hari, seorang Content Creator diberikan tanggung jawab untuk menghasilkan berbagai jenis konten yang menarik, informatif, dan relevan, termasuk artikel, video, podcast, infografis, dan materi visual lainnya. Tugas utama mereka adalah menciptakan konten yang dapat menarik perhatian audiens target, meningkatkan engagement, dan mendukung tujuan pemasaran serta branding perusahaan.'
  },
  'graphic-designer': {
    title: 'Graphic Designer',
    image: designer,
    description: 'Graphic Designer adalah profesional kreatif yang berperan penting dalam tim desain dan pemasaran perusahaan. Dalam aktivitas pekerjaannya, seorang Graphic Designer diberikan tanggung jawab untuk menciptakan konten visual yang menarik, mengkomunikasikan pesan brand secara efektif, dan menghasilkan berbagai materi desain untuk kebutuhan pemasaran, branding, dan komunikasi perusahaan.'
  },
  'brand-ambassador': {
    title: 'Brand Ambassador',
    image: ba,
    description: 'Brand Ambassador adalah representasi penting dari citra dan nilai suatu merek atau perusahaan. Dalam perannya, seorang Brand Ambassador diberikan tanggung jawab untuk mempromosikan produk atau layanan, membangun hubungan dengan pelanggan, dan meningkatkan kesadaran merek melalui berbagai kegiatan publik, media sosial, dan kampanye pemasaran.'
  },
  'seo': {
    title: 'SEO Specialist',
    image: seo,
    description: 'SEO (Search Engine Optimization) Specialist adalah posisi kunci dalam tim pemasaran digital yang fokus pada optimalisasi visibilitas online perusahaan. Dalam kegiatan sehari-hari, seorang SEO Specialist diberikan tugas untuk menganalisis, menerapkan, dan memantau strategi SEO, meningkatkan peringkat situs web di mesin pencari, dan memaksimalkan lalu lintas organik untuk meningkatkan kehadiran online perusahaan.'
  }
};

function SpecificRole() {
  const { roleName } = useParams();
  const role = roleInfo[roleName];

  if (!role) {
    return <div>Role not found</div>;
  }

  return (
    <MobileView>
      <Header />
      <div className="p-9">
      <Link to="/role">
              <img
                src={Back}
                alt="button_back"
                className=" hover:bg-slate-200 p-2 hover:rounded-fullm mb-7"
              />
            </Link>
        <h2 className="text-2xl font-bold mb-6">{role.title}</h2>
        <img src={role.image} alt={role.title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h1 className='text-xl font-semibold font-sans mb-4 mt-4'>Penjelasan Role</h1>
        <p className="text-gray-700 w-72 text-sm text-justify">{role.description}</p>
      </div>
      <Footer />
    </MobileView>
  );
}

export default SpecificRole;