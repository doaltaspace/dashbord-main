document.addEventListener('DOMContentLoaded', function() {
    // Objek untuk menyimpan semua teks terjemahan
    const translations = {
    en: {
            navAbout: 'About', navExperience: 'Experience', navProjects: 'Projects', navSkills: 'Skills', navEducation: 'Education', navContact: 'LinkedIn',
            navAboutMobile: 'About', navExperienceMobile: 'Experience', navProjectsMobile: 'Projects', navSkillsMobile: 'Skills', navEducationMobile: 'Education', navContactMobile: 'LinkedIn',
            heroTitle: 'Operations Supervisor & Aspiring Product Manager',
            heroSubtitle: "Transforming operational excellence into innovative product solutions. With a solid background in logistics and supply chain, I'm passionate about building products that solve real-world problems.",
            heroDownload: 'Download CV', heroContact: 'Contact', heroEmail: 'Email',
            heroContactCta: 'Email Me',
            locationText: 'Based in Indonesia (GMT+7) · Open to Remote / Hybrid Collaboration',
            availabilityNow: 'Available',
            locationCta: 'Let’s Talk',
            aboutTitle: 'About Me',
            aboutParagraph1: "I am a dynamic professional with over three years of experience in logistics, administration, and operational supervision. My journey has equipped me with a robust skill set in process optimization, data management, and team leadership. I thrive on identifying inefficiencies and implementing data-driven solutions to enhance accuracy and productivity.",
            aboutParagraph2: "My passion for continuous learning has led me to explore the world of product management, where I am currently honing my skills in SDLC, Agile methodologies, and user-centric design. I am excited to leverage my operational background to build products that are not only efficient but also deliver exceptional value to users.",
            competenciesList: `<li class="flex items-center stagger-item"><span class="animated-dot mr-3 flex-shrink-0"></span>Operational Management</li><li class="flex items-center stagger-item"><span class="animated-dot mr-3 flex-shrink-0"></span>Supply Chain & Logistics</li><li class="flex items-center stagger-item"><span class="animated-dot mr-3 flex-shrink-0"></span>Data Analysis & Accuracy</li><li class="flex items-center stagger-item"><span class="animated-dot mr-3 flex-shrink-0"></span>Product Lifecycle (SDLC)</li><li class="flex items-center stagger-item"><span class="animated-dot mr-3 flex-shrink-0"></span>Stakeholder Management</li>`,
            careerTitle: 'Career Experience',
            projectsTitle: 'Featured Projects',
            skillsTitle: 'Technical & Product Skills',
            educationTitle: 'Education & Professional Development',
            footerText: '&copy; 2025 Aldo Doalta Sanonifan. All rights reserved.',
            projectCategory: 'Category',
            aiTitle: 'AI Assistant',
            aiPlaceholder: 'Ask about this CV...',
            aiWelcome: "Hi there! I'm your AI assistant. Feel free to ask me anything about my journey, skills, or experience. I'm here to help!",
            learnMore: 'Learn More',
            viewDetails: 'View Details',
            details: 'Details',
            skillDetails: 'Skill Details',
            copy: 'Copy',
            copied: 'Copied',
            metricsHint: 'Swipe to see more'
        },
    id: {
            navAbout: 'Tentang', navExperience: 'Pengalaman', navProjects: 'Proyek', navSkills: 'Keahlian', navEducation: 'Pendidikan', navContact: 'LinkedIn',
            navAboutMobile: 'Tentang', navExperienceMobile: 'Pengalaman', navProjectsMobile: 'Proyek', navSkillsMobile: 'Keahlian', navEducationMobile: 'Pendidikan', navContactMobile: 'LinkedIn',
            heroTitle: 'Supervisor Operasional & Antusias Manajemen Produk',
            heroSubtitle: "Mengubah keunggulan operasional menjadi solusi produk yang inovatif. Dengan latar belakang yang kuat di bidang logistik dan supply chain, saya bersemangat membangun produk yang memecahkan masalah nyata.",
            heroDownload: 'Unduh CV', heroContact: 'Kontak', heroEmail: 'Email',
            heroContactCta: 'Email Saya',
            locationText: 'Berbasis di Indonesia (GMT+7) · Siap Remote / Hybrid',
            availabilityNow: 'Tersedia',
            locationCta: 'Hubungi',
            aboutTitle: 'Tentang Saya',
            aboutParagraph1: "Saya adalah seorang profesional dinamis dengan pengalaman lebih dari tiga tahun di bidang logistik, administrasi, dan supervisi operasional. Perjalanan ini telah membekali saya dengan keahlian yang kuat dalam optimisasi proses, manajemen data, dan kepemimpinan tim. Saya berkembang dengan mengidentifikasi inefisiensi dan menerapkan solusi berbasis data untuk meningkatkan akurasi dan produktivitas.",
            aboutParagraph2: "Semangat saya untuk terus belajar telah membawa saya untuk menjelajahi dunia manajemen produk, di mana saat ini saya sedang mengasah keterampilan dalam SDLC, metodologi Agile, dan desain yang berpusat pada pengguna. Saya antusias untuk memanfaatkan latar belakang operasional saya untuk membangun produk yang tidak hanya efisien tetapi juga memberikan nilai luar biasa bagi pengguna.",
            competenciesList: `<li class="flex items-center stagger-item"><span class="animated-dot mr-3 flex-shrink-0"></span>Manajemen Operasional</li><li class="flex items-center stagger-item"><span class="animated-dot mr-3 flex-shrink-0"></span>Supply Chain & Logistics</li><li class="flex items-center stagger-item"><span class="animated-dot mr-3 flex-shrink-0"></span>Analisis & Akurasi Data</li><li class="flex items-center stagger-item"><span class="animated-dot mr-3 flex-shrink-0"></span>Product Lifecycle (SDLC)</li><li class="flex items-center stagger-item"><span class="animated-dot mr-3 flex-shrink-0"></span>Manajemen Pemangku Kepentingan</li>`,
            careerTitle: 'Pengalaman Karier',
            projectsTitle: 'Proyek Unggulan',
            skillsTitle: 'Keahlian Teknis & Produk',
            educationTitle: 'Pendidikan & Pengembangan Profesional',
            footerText: '&copy; 2025 Aldo Doalta Sanonifan. Hak cipta dilindungi.',
            projectCategory: 'Kategori',
            aiTitle: 'Asisten AI',
            aiPlaceholder: 'Tanya tentang CV ini...',
            aiWelcome: "Halo! Saya asisten AI Anda. Jangan ragu untuk bertanya apa pun tentang perjalanan, keahlian, atau pengalaman saya. Saya di sini untuk membantu!",
            learnMore: 'Selengkapnya',
            viewDetails: 'Lihat Detail',
            details: 'Detail',
            skillDetails: 'Detail Keahlian',
            copy: 'Salin',
            copied: 'Tersalin',
            metricsHint: 'Geser untuk melihat lainnya'
        }
    };

    // Objek untuk menyimpan semua data portofolio
    const data_en = {
        career: [
            { type: 'career', role: 'Warehouse Supervisor', company: 'PT. Moladin Digital Indonesia', period: 'March 2025 – Present', industry: 'Fintech (Auto Financing)', details: ['Ensured all branch operational SOPs (Standard Operating Procedures) were executed in compliance with company regulations, assuming full responsibility for their implementation.','Managed all branch assets and facilities, including the procurement of office necessities.','Implemented stringent internal controls for managing the inflow and outflow of over 200 assets (vehicle ownership documents & units) monthly, successfully preventing asset misuse, mitigating potential fraud, and maintaining a 99.8% data accuracy rate.','Coordinated intensively with the Head Office (HO) team for reporting and the synchronization of operational strategies.','Established coordination with other branches to ensure the smooth transfer process of vehicle ownership documents and units between locations.','Collaborated with cross-functional teams (Business, Marketing, Collection) to implement risk mitigation strategies and minimize potential fraud.'] },
            { type: 'career', role: 'Administration Staff', company: 'PT. Moladin Digital Indonesia', period: 'July 2024 - March 2025', industry: 'Fintech (Auto Financing)', details: ['Managed and recorded collateral asset data (vehicle ownership documents) and repossessed units into the company\'s information system.','Verified the authenticity and completeness of vehicle ownership documents to prevent fraud and ensure compliance.','Monitored the movement of incoming and outgoing vehicle ownership documents using an internal tracking system to guarantee document security.','Developed a target monitoring dashboard that improved team performance tracking efficiency by 50% and reduced manual recapitulation time.','Fostered collaboration with related teams to ensure a seamless handover process for vehicle ownership documents and repossessed units.'] },
            { type: 'career', role: 'PPIC Staff', company: 'PT. Rajalu', period: 'July 2023 - May 2024', industry: 'Manufacturing (Aluminium)', details: ['Created production schedules based on demand forecasts and customer orders using Odoo and Microsoft Excel.','Monitored production processes and adjusted schedules utilizing Excel/Google Sheets (Pivot Tables, VLOOKUP, Macros) and MRP software.','Coordinated with manufacturing and inventory teams using WMS and TMS to maintain optimal stock levels.','Implemented solutions based on ERP data analysis that successfully reduced production bottlenecks by 15% and increased on-time delivery by 10%.','Generated production reports using Odoo and Excel to support continuous improvement initiatives.'] },
            { type: 'career', role: 'Logistic Administration', company: 'PT. Juali Teknologi Indonesia', period: 'October 2021 - December 2022', industry: 'Logistics / E‑Commerce Ops', details: ['Monitored and controlled logistics operations, including invoice handling, using Odoo ERP and Microsoft Excel.','Analyzed and filtered orders with indications of fraudulent activity using an internal detection system.','Managed the procurement and processing of goods with Odoo to ensure timely acquisition.','Inspected and verified documents and transactions for incoming and outgoing goods using a Warehouse Management System (WMS).','Operated logistics software (Odoo ERP, WMS, and TMS) to track shipments.'] }
        ],
        education: [
            { type: 'education', title: 'Bootcamp Product Management', institution: 'Harisenin.com', period: '2025 (In Progress)', details: ['Key Learnings: SDLC (Agile, Waterfall), Design Thinking, Wireframing, Scrum, PRD, OKR, Product Roadmap, Market & Competitor Research, MVP Definition, Stakeholder Management.'] },
            { type: 'education', title: 'Information Systems (BSc)', institution: 'Universitas Terbuka', period: '2025 - Present', details: ['Pursuing a formal degree to deepen my understanding of information systems and technology.'] },
            { type: 'education', title: 'English Program', institution: 'Kampung Inggris Language Center', period: '2019 - 2020', details: ['Intensive language program to achieve professional working proficiency (B2 Level).'] },
            { type: 'education', title: 'Social Sciences', institution: 'SMA Negeri 8 Kediri', period: 'Graduated 2019', details: ['Completed secondary education with a focus on social sciences.'] }
        ],
        skills: [
            { type: 'skill', name: 'Odoo ERP', level: 80, details: ['Experienced in managing inventory and manufacturing modules.', 'Capable of customizing reports and workflows.'] },
            { type: 'skill', name: 'WMS & TMS', level: 95, details: ['Proficient in using Warehouse and Transport Management Systems for optimizing logistics.'] },
            { type: 'skill', name: 'Agile & Scrum', level: 80, details: ['Familiar with sprint planning, daily stand-ups, and retrospectives.'] },
            { type: 'skill', name: 'PRD & OKR', level: 85, details: ['Skilled in writing Product Requirement Documents and setting Objectives and Key Results.'] },
            { type: 'skill', name: 'Market Research', level: 70, details: ['Able to conduct market analysis and identify user needs.'] },
            { type: 'skill', name: 'Data Analysis', level: 88, details: ['Proficient in analyzing data to derive actionable insights.'] },
            { type: 'skill', name: 'Looker Studio', level: 75, details: ['Experienced in creating dashboards for performance tracking.'] },
            { type: 'skill', name: 'Excel (Advanced)', level: 95, details: ['Expert in using advanced functions like Pivot Tables and VLOOKUP for data management.'] },
            { type: 'skill', name: 'Multimedia', level: 75, details: [
                '<b>Photo Editing</b> — level 85; Tools: Adobe Photoshop, Lightroom, Pixelmator, Canva.',
                'RAW→finish (Lightroom → Photoshop); skin retouch (frequency separation, dodge & burn).',
                'Background cleanup/removal (Pen Tool, Select & Mask), content‑aware fill.',
                'Color correction & cinematic grading (LUTs, Curves, HSL).',
                'Batch presets; exports optimized for IG/FB/web.',
                '<b>Video Editing</b> — level 60; Tools: Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro.',
                'Timeline storytelling (J/L cuts, match cuts), clean transitions, speed ramps, stabilization.',
                'Captions/subtitles, lower‑thirds, simple keyframed motion.',
                'Audio mixing (noise reduction, EQ, ducking); music beat sync.',
                'Color correction vs grading; LUTs; scopes (waveform/vectorscope).',
                'Deliverables: 9:16, 1:1, 16:9.'
            ] }
        ],
        projects: [
            { type: 'project', title: 'Product Analysis: E-Commerce Feature', category: 'Case Study', image: 'https://placehold.co/600x400/111827/f3f4f6?text=E-Commerce+Project', details: ['Conducted a market analysis to identify gaps in a leading e-commerce platform.','Developed a PRD for a new "Try Before You Buy" feature, including user stories and acceptance criteria.','Created low-fidelity wireframes and user flows to illustrate the concept.','Defined OKRs to measure the feature\'s potential success and impact on user engagement.'] },
            { type: 'project', title: 'Logistics Dashboard Redesign', category: 'UI/UX Concept', image: 'https://placehold.co/600x400/1f2937/f3f4f6?text=Logistics+Dashboard', details: ['Identified pain points in the existing logistics dashboard through user interviews.','Redesigned the information architecture for better data visibility and quicker access to critical information.','Created interactive prototypes using Figma to test the new design with stakeholders.','The new design concept showed a potential 30% reduction in time-on-task for key operations.'] },
            { type: 'project', title: 'Inventory Optimization System', category: 'Operational Improvement', image: 'https://placehold.co/600x400/374151/f3f4f6?text=Inventory+System', details: ['Analyzed historical sales and stock data to identify patterns of overstocking and stockouts.','Proposed a new inventory management strategy based on ABC analysis and just-in-time principles.','Developed an Excel-based tool to automate reorder point calculations.','Successfully reduced holding costs by 15% and stockout incidents by 20% in a 3-month pilot.'] }
        ]
    };

    const data_id = {
        career: [
            { type: 'career', role: 'Warehouse Supervisor', company: 'PT. Moladin Digital Indonesia', period: 'Maret 2025 – Sekarang', industry: 'Fintech (Pembiayaan Otomotif)', details: ['Memastikan seluruh SOP (prosedur) operasional cabang berjalan sesuai aturan dan bertanggung jawab penuh atas pelaksanaannya.','Mengelola penuh aset dan gedung cabang, termasuk pemenuhan kebutuhan kantor.','Menerapkan kontrol internal yang ketat pada pengelolaan arus keluar-masuk lebih dari 200 aset (BPKB & Unit) per bulan, berhasil mencegah terjadinya penyalahgunaan aset, serta berhasil menekan potensi fraud dan mempertahankan akurasi data hingga 99.8%.','Berkoordinasi secara intensif dengan tim Head Office (HO) untuk pelaporan dan sinkronisasi strategi operasional.','Menjalin koordinasi dengan cabang lain untuk kelancaran proses transfer BPKB dan unit antar cabang.','Berkolaborasi dengan tim lintas fungsi (Bisnis, Marketing, Collection) untuk menerapkan strategi mitigasi risiko dan meminimalisir potensi fraud.'] },
            { type: 'career', role: 'Administration Staff', company: 'PT. Moladin Digital Indonesia', period: 'Juli 2024 - Maret 2025', industry: 'Fintech (Pembiayaan Otomotif)', details: ['Mengelola data aset jaminan (BPKB) dan unit retract (tarikan) ke dalam sistem informasi perusahaan.','Memverifikasi keaslian dan kelengkapan dokumen BPKB untuk mencegah penipuan dan memastikan kepatuhan.','Memantau pergerakan BPKB masuk dan keluar menggunakan sistem pelacakan internal untuk menjamin keamanan dokumen.','Mengembangkan dasbor pemantauan target yang meningkatkan efisiensi pelacakan kinerja tim sebesar 50% dan mengurangi waktu rekap manual.','Membangun koloborasi dengan tim terkait untuk memastikan kelancaran proses serah terima dokumen BPKB dan unit retract.'] },
            { type: 'career', role: 'PPIC Staff', company: 'PT. Rajalu', period: 'Juli 2023 - Mei 2024', industry: 'Manufaktur (Aluminium)', details: ['Membuat jadwal produksi berdasarkan perkiraan permintaan dan pesanan pelanggan menggunakan Odoo dan Microsoft Excel.','Memantau proses produksi dan menyesuaikan jadwal menggunakan Excel (Pivot Table, VLOOKUP, Makro) dan perangkat lunak MRP.','Berkoordinasi dengan tim manufaktur dan inventaris menggunakan WMS dan TMS untuk menjaga tingkat stok optimal.','Menerapkan solusi berdasarkan analisis data ERP yang sukses mengurangi hambatan produksi sebesar 15% dan meningkatkan ketepatan waktu pengiriman (on-time delivery) sebesar 10%.','Membuat laporan hasil produksi menggunakan Odoo dan Excel untuk mendukung perbaikan berkelanjutan.'] },
            { type: 'career', role: 'Logistic Administration', company: 'PT. Juali Teknologi Indonesia', period: 'Oktober 2021 - Desember 2022', industry: 'Logistik / Operasional E‑Commerce', details: ['Memantau dan mengontrol operasi logistik, termasuk penanganan faktur, menggunakan Odoo ERP dan Microsoft Excel.','Menganalisis dan menyaring pesanan yang terindikasi penipuan menggunakan sistem deteksi internal.','Mengelola pembelian dan pemrosesan barang dengan Odoo untuk memastikan pengadaan tepat waktu.','Memeriksa dan memverifikasi dokumen serta transaksi barang masuk dan keluar menggunakan WMS.','Mengoperasikan perangkat lunak logistik (Odoo ERP, WMS, dan TMS) untuk melacak pengiriman.'] }
        ],
        education: [
             { type: 'education', title: 'Bootcamp Manajemen Produk', institution: 'Harisenin.com', period: '2025 (Sedang Berlangsung)', details: ['Pembelajaran Utama: SDLC (Agile, Waterfall), Design Thinking, Wireframing, Scrum, PRD, OKR, Product Roadmap, Riset Pasar & Kompetitor, Definisi MVP, Manajemen Pemangku Kepentingan.'] },
            { type: 'education', title: 'Sistem Informasi (S1)', institution: 'Universitas Terbuka', period: '2025 - Sekarang', details: ['Mengejar gelar sarjana formal untuk memperdalam pemahaman tentang sistem informasi dan teknologi.'] },
            { type: 'education', title: 'Program Bahasa Inggris', institution: 'Kampung Inggris Language Center', period: '2019 - 2020', details: ['Program bahasa intensif untuk mencapai kemahiran kerja profesional (Level B2).'] },
            { type: 'education', title: 'Ilmu Pengetahuan Sosial', institution: 'SMA Negeri 8 Kediri', period: 'Lulus 2019', details: ['Menyelesaikan pendidikan menengah dengan fokus pada ilmu sosial.'] }
        ],
        skills: [
            { type: 'skill', name: 'Odoo ERP', level: 80, details: ['Berpengalaman dalam mengelola modul inventaris dan manufaktur.', 'Mampu melakukan kustomisasi laporan dan alur kerja.'] },
            { type: 'skill', name: 'WMS & TMS', level: 95, details: ['Mahir menggunakan Sistem Manajemen Gudang dan Transportasi untuk optimasi logistik.'] },
            { type: 'skill', name: 'Agile & Scrum', level: 80, details: ['Memahami <b><i>sprint planning</i></b>, <b><i>daily stand-ups</i></b>, dan <b><i>retrospectives</i></b>.'] },
            { type: 'skill', name: 'PRD & OKR', level: 85, details: ['Terampil dalam menulis <b><i>Product Requirement Documents</i></b> dan menetapkan <b><i>Objectives and Key Results</i></b>.'] },
            { type: 'skill', name: 'Riset Pasar', level: 70, details: ['Mampu melakukan analisis pasar dan mengidentifikasi kebutuhan pengguna.'] },
            { type: 'skill', name: 'Analisis Data', level: 88, details: ['Mahir menganalisis data untuk mendapatkan wawasan yang dapat ditindaklanjuti.'] },
            { type: 'skill', name: 'Looker Studio', level: 75, details: ['Berpengalaman membuat dasbor untuk pemantauan kinerja.'] },
            { type: 'skill', name: 'Excel (Tingkat Lanjut)', level: 95, details: ['Ahli menggunakan fungsi tingkat lanjut seperti Pivot Tables dan VLOOKUP untuk manajemen data.'] },
            { type: 'skill', name: 'Multimedia', level: 75, details: [
                '<b>Editing Foto</b> — level 85; Tools: Adobe Photoshop, Lightroom, Pixelmator, Canva.',
                'Alur RAW→final (Lightroom → Photoshop); retouch kulit (frequency separation, dodge & burn).',
                'Bersih/hapus latar (Pen Tool, Select & Mask), content‑aware fill.',
                'Koreksi warna & grading sinematik (LUTs, Curves, HSL).',
                'Preset batch; ekspor optimal untuk IG/FB/web.',
                '<b>Editing Video</b> — level 60; Tools: Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro.',
                'Storytelling di timeline (J/L cut, match cut), transisi rapi, speed ramp, stabilisasi.',
                'Teks/caption, lower‑third, motion sederhana (keyframe).',
                'Mixing audio (noise reduction, EQ, ducking); sinkron musik ke beat.',
                'Koreksi vs grading warna; LUT; scopes (waveform/vectorscope).',
                'Rasio output: 9:16, 1:1, 16:9.'
            ] }
        ],
        projects: [
            { type: 'project', title: 'Analisis Produk: Fitur E-Commerce', category: 'Studi Kasus', image: 'https://placehold.co/600x400/111827/f3f4f6?text=Proyek+E-Commerce', details: ['Melakukan analisis pasar untuk mengidentifikasi celah pada platform e-commerce terkemuka.','Mengembangkan PRD untuk fitur baru "Coba Sebelum Beli", termasuk <b><i>user stories</i></b> dan kriteria penerimaan.','Membuat <b><i>wireframe</i></b> low-fidelity dan alur pengguna untuk mengilustrasikan konsep.','Mendefinisikan OKR untuk mengukur potensi keberhasilan fitur dan dampaknya pada keterlibatan pengguna.'] },
            { type: 'project', title: 'Desain Ulang Dasbor Logistik', category: 'Konsep UI/UX', image: 'https://placehold.co/600x400/1f2937/f3f4f6?text=Dasbor+Logistik', details: ['Mengidentifikasi <b><i>pain points</i></b> pada dasbor logistik yang ada melalui wawancara pengguna.','Mendesain ulang arsitektur informasi untuk visibilitas data yang lebih baik dan akses lebih cepat ke informasi penting.','Membuat prototipe interaktif menggunakan Figma untuk menguji desain baru dengan para pemangku kepentingan.','Konsep desain baru menunjukkan potensi pengurangan waktu pengerjaan tugas sebesar 30% untuk operasi utama.'] },
            { type: 'project', title: 'Sistem Optimasi Inventaris', category: 'Peningkatan Operasional', image: 'https://placehold.co/600x400/374151/f3f4f6?text=Sistem+Inventaris', details: ['Menganalisis data penjualan dan stok historis untuk mengidentifikasi pola kelebihan stok dan kehabisan stok.','Mengusulkan strategi manajemen inventaris baru berdasarkan analisis ABC dan prinsip <b><i>just-in-time</i></b>.','Mengembangkan alat berbasis Excel untuk mengotomatisasi perhitungan titik pemesanan ulang.','Berhasil mengurangi biaya penyimpanan sebesar 15% dan insiden kehabisan stok sebesar 20% dalam uji coba 3 bulan.'] }
        ]
    };

    // Mengambil elemen DOM yang akan dimanipulasi
    const careerContainer = document.querySelector('#career-grid');
    const projectsContainer = document.querySelector('#projects-grid');
    const skillsContainer = document.querySelector('#skills-grid');
    const educationContainer = document.querySelector('#education-grid');
    
    // Fungsi untuk me-render konten berdasarkan bahasa yang dipilih
    function renderContent(lang) {
        document.documentElement.lang = lang;

        const data = lang === 'id' ? data_id : data_en;
    const currentTranslations = translations[lang];
    const t = currentTranslations;

        // Menerjemahkan semua elemen dengan atribut data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (currentTranslations[key]) {
                el.innerHTML = currentTranslations[key];
            }
        });
        
        document.getElementById('ai-input').placeholder = currentTranslations.aiPlaceholder;

        // Render bagian Pengalaman Karier
        careerContainer.innerHTML = '';
        data.career.forEach((job, index) => {
            const card = document.createElement('div');
            card.className = 'card-3d-container cursor-pointer group';
            card.dataset.type = 'career';
            card.dataset.index = index;
            card.innerHTML = `
                <div class="card card-3d rounded-lg p-6 border border-border bg-card h-full flex flex-col shadow-lg hover:shadow-2xl">
                    <div class="flex justify-between items-start">
                        <h3 class="font-semibold text-primary">${job.role}</h3>
                        <div class="text-xs text-muted">${job.period}</div>
                    </div>
                    <p class="text-sm text-muted mt-1">${job.company}${job.industry ? ` • ${job.industry}` : ''}</p>
                    <p class="text-sm mt-4 flex-grow">${job.details[0]}</p>
                    
                    <div class="text-right mt-4 flex justify-end items-center">
                        <span class="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">${t.learnMore}</span>
                        <div class="w-9 h-9 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg">
                            <svg class="w-5 h-5 text-secondary-foreground transition-all duration-300 group-hover:text-primary-foreground group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                </div>
            `;
            careerContainer.appendChild(card);
        });

        // Render bagian Proyek
        projectsContainer.innerHTML = '';
        data.projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'card-3d-container cursor-pointer group';
            card.dataset.type = 'projects';
            card.dataset.index = index;
            card.innerHTML = `
                <div class="card card-3d rounded-lg border border-border bg-card h-full flex flex-col shadow-lg hover:shadow-2xl overflow-hidden">
                    <div class="relative">
                        <img src="${project.image}" alt="${project.title}" class="object-cover h-48 w-full transition-transform duration-300 group-hover:scale-105" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'flex items-center justify-center h-48 text-xs text-muted',innerText:'Image unavailable'}));">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <p class="text-sm font-semibold text-primary">${project.category}</p>
                        <h3 class="font-bold text-lg mt-2">${project.title}</h3>
                        <p class="text-sm text-muted mt-2 flex-grow">${project.details[0]}</p>
                        
                        <div class="text-right mt-4 flex justify-end items-center">
                            <span class="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">${t.viewDetails}</span>
                            <div class="w-9 h-9 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg">
                                <svg class="w-5 h-5 text-secondary-foreground transition-all duration-300 group-hover:text-primary-foreground group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(card);
        });

        // Render bagian Keahlian
        skillsContainer.innerHTML = '';
    data.skills.forEach((skill, index) => {
            const card = document.createElement('div');
            card.className = 'card-3d-container cursor-pointer group';
            card.dataset.type = 'skills';
            card.dataset.index = index;
            card.innerHTML = `
                <div class="card card-3d rounded-lg p-4 border border-border bg-card h-full flex flex-col justify-center text-center shadow-lg hover:shadow-2xl">
                    <h3 class="font-semibold text-sm text-primary flex-grow">${skill.name}</h3>
                    <div class="skill-bar-container mt-2">
                        <div class="skill-bar-fill" style="width: 0%;" data-level="${skill.level}"></div>
                    </div>
                </div>
            `;
            skillsContainer.appendChild(card);
        });

        // Render bagian Pendidikan
        educationContainer.innerHTML = '';
    data.education.forEach((edu, index) => {
            const card = document.createElement('div');
            card.className = 'card-3d-container cursor-pointer group';
            card.dataset.type = 'education';
            card.dataset.index = index;
            card.innerHTML = `
                <div class="card card-3d rounded-lg p-6 border border-border bg-card h-full flex flex-col shadow-lg hover:shadow-2xl">
                    <div class="flex justify-between items-start">
                        <h3 class="font-semibold text-primary">${edu.title}</h3>
                        <div class="text-xs text-muted">${edu.period}</div>
                    </div>
                    <p class="text-sm text-muted mt-1">${edu.institution}</p>
                    <p class="text-sm mt-4 flex-grow">${edu.details[0]}</p>
                    
                    <div class="text-right mt-4 flex justify-end items-center">
                        <span class="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">${t.details}</span>
                        <div class="w-9 h-9 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg">
                            <svg class="w-5 h-5 text-secondary-foreground transition-all duration-300 group-hover:text-primary-foreground group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                </div>
            `;
            educationContainer.appendChild(card);
        });
        
        // Terapkan kembali efek 3D dan animasi skill bar
        attach3DEffects();
        setTimeout(() => {
            document.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.style.width = `${bar.dataset.level}%`;
            });
        }, 100);
    }
    
    // Fungsi untuk menerapkan efek 3D + aksesibilitas
    function attach3DEffects() {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.querySelectorAll('.card-3d-container').forEach(container => {
            const card = container.querySelector('.card-3d');
            // Aksesibilitas interaktif
            container.setAttribute('tabindex', '0');
            container.setAttribute('role', 'button');
            if (!container.getAttribute('aria-label')) container.setAttribute('aria-label', translations[document.documentElement.lang || 'en'].viewDetails);
            container.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    container.click();
                }
            });
            if (reduceMotion) return; // Skip animasi tilt jika reduce motion
            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
                const { width, height } = rect;
                const rotateX = (y / height - 0.5) * -6; // Kurangi intensitas
                const rotateY = (x / width - 0.5) * 6;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            container.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // Logika untuk Language Switcher
    const langSwitchers = document.querySelectorAll('.lang-switcher');
    
    function moveGlider(switcher) {
        const activeTab = switcher.querySelector('.active');
        const glider = switcher.querySelector('.glider');
        if (activeTab && glider) {
            glider.style.width = `${activeTab.offsetWidth}px`;
            glider.style.left = `${activeTab.offsetLeft}px`;
        }
    }

    langSwitchers.forEach(switcher => {
        switcher.addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON') {
                const lang = e.target.dataset.lang;
                renderContent(lang);
                if (!aiModalOverlay.classList.contains('pointer-events-none')) {
                    if (typeof renderSuggestions === 'function') renderSuggestions();
                }
                langSwitchers.forEach(s => {
                    s.querySelector('.active').classList.remove('active');
                    s.querySelector(`[data-lang="${lang}"]`).classList.add('active');
                    moveGlider(s);
                });
            }
        });
    });

    // Logika untuk animasi Fade-in-up saat scroll
    const faders = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    faders.forEach(fader => observer.observe(fader));
    
    // Logika untuk menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenu.classList.toggle('hidden');
        mobileMenuButton.setAttribute('aria-expanded', String(!expanded));
    });
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    }));

    // Logika untuk cursor spotlight
    const spotlight = document.getElementById('cursor-spotlight');
    window.addEventListener('mousemove', (e) => {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
    });
    document.addEventListener('mousedown', () => {
        spotlight.classList.add('pulse');
    });
    spotlight.addEventListener('animationend', () => {
        spotlight.classList.remove('pulse');
    });
    // Soft-dim spotlight when hovering hero to reduce distraction
    const heroSection = document.getElementById('hero');
    if (heroSection && spotlight) {
        heroSection.addEventListener('mouseenter', () => spotlight.classList.add('dim'));
        heroSection.addEventListener('mouseleave', () => spotlight.classList.remove('dim'));
    }


    // Logika untuk Modal
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const modalHeader = document.getElementById('modal-header');
    const modalBody = document.getElementById('modal-body');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Focus management & trap
    let lastFocusedElement = null;
    function setAriaHiddenForBackground(hidden) {
        document.querySelectorAll('header, main, footer').forEach(el => {
            if (hidden) el.setAttribute('aria-hidden', 'true'); else el.removeAttribute('aria-hidden');
        });
    }
    function trapFocus(container) {
        const focusable = container.querySelectorAll('a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        function handleKey(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            } else if (e.key === 'Escape') { closeModal(); }
        }
        container.addEventListener('keydown', handleKey);
        first.focus();
    }
    function openModal(item, type) {
        const lang = document.documentElement.lang || 'en';
        const categoryText = translations[lang].projectCategory || 'Category';
        const isCareer = type === 'career';
        const subtitleLine = isCareer && item.company
            ? `${item.company}${item.industry ? ' • ' + item.industry : ''}`
            : (type === 'projects' ? `${categoryText}: ${item.category}` : (item.institution || 'Skill Details'));

        modalHeader.innerHTML = `
            <div>
                <h2 class="text-xl font-bold">${item.role || item.title || item.name}</h2>
                <p class="text-sm text-muted">${subtitleLine}</p>
            </div>
        `;
        let detailsMarkup = '';
        if (type === 'skills' && /multimedia/i.test(item.name || '')) {
            const isID = (lang === 'id');
            const photoHeading = isID ? 'Editing Foto' : 'Photo Editing';
            const videoHeading = isID ? 'Editing Video' : 'Video Editing';
            const arr = Array.isArray(item.details) ? item.details : [];
            const photoIdx = arr.findIndex(d => /photo|editing foto/i.test(d));
            const videoIdx = arr.findIndex(d => /video|editing video/i.test(d));
            let photoDetails = [];
            let videoDetails = [];
            if (photoIdx !== -1 && videoIdx !== -1) {
                const pStart = photoIdx + 1;
                const pEnd = Math.max(pStart, videoIdx);
                photoDetails = arr.slice(pStart, pEnd).filter(s => s && !/^<b>/i.test(s));
                const vStart = videoIdx + 1;
                videoDetails = arr.slice(vStart).filter(s => s && !/^<b>/i.test(s));
            } else {
                const mid = Math.ceil(arr.length / 2);
                photoDetails = arr.slice(0, mid);
                videoDetails = arr.slice(mid);
            }
            const renderList = (list) => list.map(detail => `
                <li class="flex items-start modal-detail-item">
                    <span class="animated-dot mr-4 mt-2 flex-shrink-0"></span>
                    <span>${detail}</span>
                </li>`).join('');
            detailsMarkup = `
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="font-semibold text-primary mb-2">${photoHeading}</h3>
                        <ul class="space-y-3">${renderList(photoDetails)}</ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-primary mb-2">${videoHeading}</h3>
                        <ul class="space-y-3">${renderList(videoDetails)}</ul>
                    </div>
                </div>`;
        } else {
            const detailsHtml = (item.details || []).map(detail => 
                `<li class="flex items-start modal-detail-item">
                    <span class="animated-dot mr-4 mt-2 flex-shrink-0"></span>
                    <span>${detail}</span>
                </li>`
            ).join('');
            detailsMarkup = `<ul class="space-y-3">${detailsHtml}</ul>`;
        }
        modalBody.innerHTML = detailsMarkup;
        
    modalOverlay.classList.remove('opacity-0', 'pointer-events-none');
    modalOverlay.setAttribute('aria-hidden', 'false');
    modalContent.classList.remove('scale-95', 'opacity-0');
    setAriaHiddenForBackground(true);
    lastFocusedElement = document.activeElement;
    trapFocus(modalContent);
    // Lock background scroll
    document.documentElement.classList.add('overflow-hidden');

        const detailItems = modalBody.querySelectorAll('.modal-detail-item');
        detailItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        });
    }

    function closeModal() {
        modalOverlay.classList.add('opacity-0', 'pointer-events-none');
        modalOverlay.setAttribute('aria-hidden', 'true');
        modalContent.classList.add('scale-95', 'opacity-0');
    setAriaHiddenForBackground(false);
    // Unlock background scroll
    document.documentElement.classList.remove('overflow-hidden');
        if (lastFocusedElement) lastFocusedElement.focus();
    }

    document.addEventListener('click', (e) => {
        const card = e.target.closest('.card-3d-container');
        if (card) {
            const type = card.dataset.type;
            const index = card.dataset.index;
            const lang = document.documentElement.lang || 'en';
            const data = lang === 'id' ? data_id : data_en;

            if (data[type] && data[type][index]) {
                openModal(data[type][index], type);
            }
        }
    });

    modalCloseBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Logika untuk Theme Toggle (Dark/Light Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    function setInitialTheme() {
        const isDark = localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.classList.toggle('dark', isDark);
        
        if (isDark) {
            lightIcon.classList.remove('opacity-0', 'scale-0');
            darkIcon.classList.add('opacity-0', 'scale-0');
        } else {
            darkIcon.classList.remove('opacity-0', 'scale-0');
            lightIcon.classList.add('opacity-0', 'scale-0');
        }
    }

    setInitialTheme();

    themeToggleBtn.addEventListener('click', function() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
        
        if (isDark) {
            darkIcon.classList.add('opacity-0', 'scale-0');
            lightIcon.classList.remove('opacity-0', 'scale-0');
        } else {
            lightIcon.classList.add('opacity-0', 'scale-0');
            darkIcon.classList.remove('opacity-0', 'scale-0');
        }
        // Re-initialize background particles for new theme
        setTimeout(init, 300);
    });

    // Logika untuk tombol Download CV
    const downloadBtn = document.getElementById('download-cv-btn');
    downloadBtn.addEventListener('click', function() {
        const lang = document.documentElement.lang || 'en';
        let downloadUrl = '';

        if (lang === 'id') {
            downloadUrl = 'https://drive.google.com/uc?export=download&id=1n5Ir0mvY5qmvmVagF3zg3mIBr57v7Cpx';
        } else { // Default to English
            downloadUrl = 'https://drive.google.com/uc?export=download&id=1XIvjuatOfUGDHzGsYCyfE-qaZRUht19i';
        }

        window.open(downloadUrl, '_self');
    });

    // Logika untuk header dan tombol Back to Top
    const header = document.querySelector('header');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    // Flag untuk throttle efek partikel saat scroll
    let isScrolling = false;
    let scrollTimeoutId = null;

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
        backToTopBtn.classList.toggle('visible', window.scrollY > 300);
        // Tandai sedang scroll untuk mengurangi beban gambar koneksi partikel
        isScrolling = true;
        if (scrollTimeoutId) clearTimeout(scrollTimeoutId);
        scrollTimeoutId = setTimeout(() => { isScrolling = false; }, 140);
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Logika untuk Tombol Kontak Melayang (FAB) dan AI Assistant
    const fabContainer = document.querySelector('.fab-container');
    const aiFabBtn = document.getElementById('ai-fab-btn');
    let fabTimeout;

    fabContainer.addEventListener('mouseenter', () => {
        clearTimeout(fabTimeout);
        fabContainer.classList.add('active');
        aiFabBtn.classList.add('fade-out');
    });

    fabContainer.addEventListener('mouseleave', () => {
        fabTimeout = setTimeout(() => {
            fabContainer.classList.remove('active');
            aiFabBtn.classList.remove('fade-out');
        }, 750);
    });
    
    // Logika untuk AI Assistant Modal
    const aiModalOverlay = document.getElementById('ai-modal-overlay');
    const aiModalContent = document.getElementById('ai-modal-content');
    const aiModalCloseBtn = document.getElementById('ai-modal-close-btn');
    const aiSendBtn = document.getElementById('ai-send-btn');
    const aiClearBtn = document.getElementById('ai-clear-btn');
    const aiInput = document.getElementById('ai-input');
    const aiChatBox = document.getElementById('ai-chat-box');
    const aiSuggestions = document.getElementById('ai-suggestions');

    function openAiModal() {
        aiModalOverlay.classList.remove('opacity-0', 'pointer-events-none');
        aiModalOverlay.setAttribute('aria-hidden', 'false');
        aiModalContent.classList.remove('scale-95', 'opacity-0');
    aiFabBtn.setAttribute('aria-expanded','true');
        if (aiChatBox.children.length === 0) {
            const lang = document.documentElement.lang || 'en';
            addMessageToChat(translations[lang].aiWelcome, 'ai');
        }
        // (Re)render suggestions every open to reflect current language
        renderSuggestions();
    setTimeout(()=> aiInput.focus(), 60);
    // Lock background scroll
    document.documentElement.classList.add('overflow-hidden');
    }

    function closeAiModal() {
        aiModalOverlay.classList.add('opacity-0', 'pointer-events-none');
        aiModalOverlay.setAttribute('aria-hidden', 'true');
        aiModalContent.classList.add('scale-95', 'opacity-0');
        aiFabBtn.setAttribute('aria-expanded','false');
    aiFabBtn.focus();
    // Unlock background scroll
    document.documentElement.classList.remove('overflow-hidden');
    }
    
    function addMessageToChat(message, sender, rawText = '') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `w-full flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
        const bubble = document.createElement('div');
        bubble.className = `group relative max-w-[80%] p-3 rounded-lg ${sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} whitespace-pre-line text-sm leading-relaxed`;
        bubble.innerHTML = message;
        if (sender === 'ai') {
            const lang = document.documentElement.lang || 'en';
            const t = translations[lang];
            const copyBtn = document.createElement('button');
            copyBtn.type = 'button';
            copyBtn.className = 'opacity-0 group-hover:opacity-100 transition-opacity absolute -top-2 -right-2 bg-card border border-border text-xs px-2 py-0.5 rounded-md shadow';
            copyBtn.textContent = t.copy;
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(rawText || bubble.textContent.trim());
                copyBtn.textContent = t.copied;
                setTimeout(()=> copyBtn.textContent = t.copy, 1500);
            });
            bubble.appendChild(copyBtn);
        }
        messageDiv.appendChild(bubble);
        aiChatBox.appendChild(messageDiv);
        aiChatBox.scrollTop = aiChatBox.scrollHeight;
    }
    
    function buildKnowledge(lang) {
        const data = lang === 'id' ? data_id : data_en;
        const docs = [];
        data.career.forEach(c => docs.push({ type:'career', text:`${c.role} ${c.company} ${c.period} ${c.details.join(' ')}` }));
        data.projects.forEach(p => docs.push({ type:'project', text:`${p.title} ${p.category} ${p.details.join(' ')}` }));
        data.skills.forEach(s => docs.push({ type:'skill', text:`${s.name} level ${s.level} ${s.details.join(' ')}` }));
        data.education.forEach(e => docs.push({ type:'education', text:`${e.title} ${e.institution} ${e.period} ${e.details.join(' ')}` }));
        // Synthetic profile summary to reinforce retrieval
        docs.push({ type:'summary', text: lang==='id'
            ? 'Supervisor operasional menuju product management dengan kekuatan akurasi data 99.8%, reduksi bottleneck 15%, peningkatan on-time delivery 10%, penurunan stockout 20%.'
            : 'Operations supervisor transitioning to product management; strengths: 99.8% data accuracy, 15% bottleneck reduction, 10% on-time delivery improvement, 20% stockout reduction.' });
        return docs;
    }
    function simpleSimilarity(a,b){
        a=a.toLowerCase(); b=b.toLowerCase();
        let score=0; const tokens = Array.from(new Set(a.split(/[^a-z0-9]+/).filter(t=>t.length>2)));
        tokens.forEach(tok=>{ if (b.includes(tok)) score += tok.length>6 ? 2 : 1; });
        return score;
    }
    function classifyIntent(q){
        const s = q.toLowerCase();
        const map = [
            {k:['/summary','summary','ringkas','profil'], t:'summary'},
            {k:['/value','value','proposisi'], t:'value'},
            {k:['/metrics','metrics','impact','angka','dampak','hasil'], t:'metrics'},
            {k:['/skills','skills','skill','keahlian','kompetensi'], t:'skills'},
            {k:['/transition','transition','transisi','switch','beralih'], t:'transition'}
        ];
        for (const m of map){ if (m.k.some(v=>s.includes(v))) return m.t; }
        return 'retrieval';
    }
    const answerTemplates = {
        en: {
            summary: () => `Professional Summary\n-------------------\nBlends operational rigor with emerging product mindset. Impact themes:\n• Data integrity (99.8% accuracy)\n• Process optimization (-15% bottlenecks)\n• Delivery reliability (+10% OTD)\n• Inventory resilience (-20% stockouts)\nDifferentiator: Converts ground-level inefficiencies into structured product hypotheses.`,
            value: () => `Value Proposition\n-----------------\nI reduce operational friction and translate validated process insights into prioritised product bets improving reliability, speed, and stakeholder trust.`,
            metrics: () => `Impact Metrics\n--------------\n• Data accuracy: 99.8% (200+ assets / month)\n• Bottlenecks: -15% via schedule optimisation\n• On-Time Delivery: +10% through ERP-informed adjustments\n• Stockouts: -20% (ABC + JIT)\n• Monitoring Efficiency: +50% via dashboard automation`,
            skills: () => `Skill Clusters\n--------------\nOperations: SOP governance, asset control, WMS/TMS\nProduct Foundations: SDLC, Agile ceremonies, PRD, OKR\nAnalysis: Advanced Excel, dashboarding, market & competitor scan\nTooling: Odoo ERP, Looker Studio, Figma (low-fi)`,
            transition: () => `Transition Narrative\n-------------------\nYears in operations exposed systemic friction (latency, accuracy, fraud risk). Began framing them as product problems → studied PM frameworks (SDLC, discovery, OKR) → applied via case studies & dashboard redesign. Focus now: evidence-led prioritisation & stakeholder alignment.`,
            defaultFollow: 'Try: /summary /value /metrics /skills /transition or ask a custom question.'
        },
        id: {
            summary: () => `Ringkasan Profesional\n--------------------\nMemadukan ketelitian operasional dengan pemikiran produk. Tema dampak:\n• Integritas data (99.8% akurasi)\n• Optimisasi proses (-15% bottleneck)\n• Ketepatan pengiriman (+10% OTD)\n• Ketahanan inventaris (-20% stockout)\nPembeda: Mengubah inefisiensi lapangan menjadi hipotesis produk terstruktur.`,
            value: () => `Proposisi Nilai\n---------------\nSaya mengurangi friksi operasional dan menerjemahkan insight proses tervalidasi menjadi inisiatif produk prioritas yang meningkatkan keandalan, kecepatan, dan kepercayaan stakeholder.`,
            metrics: () => `Metrik Dampak\n-------------\n• Akurasi data: 99.8% (200+ aset / bulan)\n• Bottleneck: -15% lewat optimasi jadwal\n• On-Time Delivery: +10% via penyesuaian ERP\n• Stockout: -20% (ABC + JIT)\n• Efisiensi Monitoring: +50% lewat dashboard otomatis`,
            skills: () => `Cluster Keahlian\n----------------\nOperasional: Tata kelola SOP, kontrol aset, WMS/TMS\nDasar Produk: SDLC, ritus Agile, PRD, OKR\nAnalisis: Excel lanjutan, dashboard, riset pasar & kompetitor\nPerangkat: Odoo ERP, Looker Studio, Figma (low-fi)`,
            transition: () => `Narasi Transisi\n---------------\nPengalaman operasi mengekspos friksi sistemik (latensi, akurasi, risiko fraud). Mulai membingkai sebagai masalah produk → mempelajari kerangka PM → diaplikasikan via studi kasus & redesign dashboard. Fokus: prioritisasi berbasis bukti & alignment stakeholder.`,
            defaultFollow: 'Coba: /summary /value /metrics /skills /transition atau ajukan pertanyaan lain.'
        }
    };
    function generateAnswer(query, lang){
        const intent = classifyIntent(query);
        if (intent !== 'retrieval') {
            const tpl = answerTemplates[lang][intent];
            if (tpl) return tpl();
        }
        const docs = buildKnowledge(lang);
        const scored = docs.map(d=>({...d, score:simpleSimilarity(query,d.text)}))
            .filter(d=>d.score>0)
            .sort((a,b)=>b.score-a.score)
            .slice(0,5);
        if (!scored.length) return answerTemplates[lang].defaultFollow;
        const intro = lang==='id'? 'Poin relevan:' : 'Relevant points:';
        const mapped = scored.map(s=>`• (${s.type}) ${s.text.substring(0,180)}...`).join('\n');
        const follow = answerTemplates[lang].defaultFollow;
        return `${intro}\n${mapped}\n\n${follow}`;
    }
    function streamAnswer(fullText){
        const chunkSize = 40;
        let index = 0;
        const messageDiv = document.createElement('div');
        messageDiv.className = 'w-full flex justify-start';
        const bubble = document.createElement('div');
        bubble.className = 'group relative max-w-[80%] p-3 rounded-lg bg-secondary text-secondary-foreground whitespace-pre-line text-sm leading-relaxed';
        messageDiv.appendChild(bubble);
        aiChatBox.appendChild(messageDiv);
        function push(){
            bubble.textContent = fullText.slice(0,index);
            aiChatBox.scrollTop = aiChatBox.scrollHeight;
            if (index < fullText.length){
                index += chunkSize;
                setTimeout(push, 35);
            } else {
                // Append copy button after streaming finished
                const copyBtn = document.createElement('button');
                const lang = document.documentElement.lang || 'en';
                const t = translations[lang];
                copyBtn.type = 'button';
                copyBtn.className = 'opacity-0 group-hover:opacity-100 transition-opacity absolute -top-2 -right-2 bg-card border border-border text-xs px-2 py-0.5 rounded-md shadow';
                copyBtn.textContent = t.copy;
                copyBtn.addEventListener('click', () => {
                    navigator.clipboard.writeText(fullText.trim());
                    copyBtn.textContent = t.copied;
                    setTimeout(()=> copyBtn.textContent = t.copy, 1500);
                });
                bubble.appendChild(copyBtn);
            }
        }
        push();
    }
    function handleAiChat(){
        const userInput = aiInput.value.trim();
        if(!userInput) return;
        addMessageToChat(userInput,'user');
        aiInput.value='';
        const lang = document.documentElement.lang || 'en';
        const answer = generateAnswer(userInput, lang);
        streamAnswer(answer);
    }
    function renderSuggestions(){
        if(!aiSuggestions) return;
        const lang = document.documentElement.lang || 'en';
        const labels = lang==='id' ? [
            {q:'/summary', l:'Ringkasan Profil'},
            {q:'/metrics', l:'Metrik Dampak'},
            {q:'/skills', l:'Cluster Keahlian'},
            {q:'/transition', l:'Narasi Transisi'},
            {q:'/value', l:'Nilai Unik'}
        ] : [
            {q:'/summary', l:'Profile Summary'},
            {q:'/metrics', l:'Impact Metrics'},
            {q:'/skills', l:'Skill Clusters'},
            {q:'/transition', l:'Transition Story'},
            {q:'/value', l:'Unique Value'}
        ];
        aiSuggestions.innerHTML = '<div class="flex flex-wrap gap-2">' + labels.map(item=>`<button type="button" data-q="${item.q}" class="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border suggestion-btn">${item.l}</button>`).join('') + '</div>';
        aiSuggestions.querySelectorAll('.suggestion-btn').forEach(btn => btn.addEventListener('click', ()=> {
            aiInput.value = btn.dataset.q;
            handleAiChat();
        }));
    }
    aiClearBtn.addEventListener('click', ()=>{ aiChatBox.innerHTML=''; renderSuggestions(); });

    // Selalu tampilkan AI FAB (menggunakan assistant lokal)
    aiFabBtn.removeAttribute('hidden');
    aiFabBtn.style.display = 'flex';
    aiFabBtn.addEventListener('click', openAiModal);
    aiModalCloseBtn.addEventListener('click', closeAiModal);
    aiModalOverlay.addEventListener('click', (e) => { if(e.target === aiModalOverlay) closeAiModal(); });
    aiSendBtn.addEventListener('click', handleAiChat);
    aiInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleAiChat(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAiModal(); });

    // Efek Bounce saat klik tombol
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.btn');
        if (btn) {
            btn.classList.add('bouncing');
            btn.addEventListener('animationend', () => {
                btn.classList.remove('bouncing');
            }, { once: true });
        }
    });

    // Script untuk animasi background
    const canvas = document.getElementById('interactive-bg');
    const ctx = canvas.getContext('2d');
    function resizeCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        // Reset then scale so drawing API uses CSS pixel coordinates
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
    }
    resizeCanvas();

    let particlesArray;

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            // Gunakan batas CSS pixels karena context sudah diskalakan dengan DPR
            const maxX = window.innerWidth;
            const maxY = window.innerHeight;
            if (this.x > maxX || this.x < 0) this.directionX = -this.directionX;
            if (this.y > maxY || this.y < 0) this.directionY = -this.directionY;
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function init() {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        particlesArray = [];
        if (reduceMotion) return; // Disable efek jika prefer reduce
        const isDark = document.documentElement.classList.contains('dark');
        // Tuning ulang jumlah partikel untuk kelancaran scrolling
        let baseCount = Math.floor((window.innerHeight * window.innerWidth) / 16000);
        let numberOfParticles = Math.min(
            isDark ? 120 : 120,
            Math.max(40, baseCount + (isDark ? 8 : 10))
        );
        // Batasi lebih ketat di layar kecil
        if (window.innerWidth < 768) numberOfParticles = Math.min(numberOfParticles, 60);
        const particleColor = isDark ? 'rgba(255,255,255,0.085)' : 'rgba(0,0,0,0.12)';
        for (let i = 0; i < numberOfParticles; i++) {
            // Sedikit lebih kecil di dark mode agar tidak terlalu mencolok
            let size = (Math.random() * (isDark ? 2.3 : 2.4)) + (isDark ? 1.2 : 1.2);
            let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * .3) - .15;
            let directionY = (Math.random() * .3) - .15;
            particlesArray.push(new Particle(x, y, directionX, directionY, size, particleColor));
        }
    }

    function connect() {
        if (!particlesArray.length) return;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // Skip menggambar koneksi saat reduce-motion, layar kecil, atau sedang scroll untuk hindari jank
        if (reduceMotion || window.innerWidth < 640 || isScrolling) return;
        const isDark = document.documentElement.classList.contains('dark');
        // Garis lebih kuat di dark mode untuk visibilitas lebih baik
        const lineColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
        const maxDistance = (isDark ? 130 : 110) * (isDark ? 130 : 110); // squared
        // Track apakah partikel sudah punya koneksi agar tidak ada yang terisolasi
        const hasConnection = new Array(particlesArray.length).fill(false);
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = dx * dx + dy * dy;
                if (distance < maxDistance) {
                    let opacityValue = 1 - (distance / maxDistance);
                    const baseAlpha = isDark ? 0.07 : 0.06;
                    ctx.strokeStyle = lineColor.replace(isDark ? '0.08' : '0.06', (opacityValue * baseAlpha).toString());
                    ctx.lineWidth = isDark ? 1.0 : 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                    hasConnection[a] = true;
                    hasConnection[b] = true;
                }
            }
        }
        // Fallback: pastikan setiap partikel punya minimal satu koneksi (nearest neighbor) jika belum terhubung
        for (let i = 0; i < particlesArray.length; i++) {
            if (hasConnection[i]) continue;
            let nearestIndex = -1;
            let nearestDist = Infinity;
            for (let j = 0; j < particlesArray.length; j++) {
                if (i === j) continue;
                let dx = particlesArray[i].x - particlesArray[j].x;
                let dy = particlesArray[i].y - particlesArray[j].y;
                let d2 = dx * dx + dy * dy;
                if (d2 < nearestDist) { nearestDist = d2; nearestIndex = j; }
            }
            if (nearestIndex !== -1) {
                // Draw subtle fallback line
                const fallbackAlpha = isDark ? 0.035 : 0.035;
                ctx.strokeStyle = lineColor.replace(isDark ? '0.08' : '0.06', fallbackAlpha.toString());
                ctx.lineWidth = isDark ? 1.0 : 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[nearestIndex].x, particlesArray[nearestIndex].y);
                ctx.stroke();
            }
        }
    }

    let rafActive = true;
    function animate() {
        if (!rafActive) return;
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth, innerHeight);
        particlesArray.forEach(p => p.update());
        connect();
    }

    window.addEventListener('resize', function(){
        resizeCanvas();
        init();
    });

    // Inisialisasi awal
    renderContent('en');
    langSwitchers.forEach(moveGlider);
    init();
    animate();
    // Pause particles when tab hidden, resume when visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            rafActive = false;
        } else {
            if (!rafActive) {
                rafActive = true;
                animate();
            }
        }
    });
});
