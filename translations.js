const translations = {
    id: {
        // Navigation
        lang_button: "Bahasa",
        nav_about: "Tentang",
        nav_skills: "Keahlian",
        nav_projects: "Proyek",
        nav_experience: "Pengalaman",
        nav_gallery: "Galeri",
        
        // Hero
        hero_greeting: "Halo, Saya Rachel 👋",
        hero_subtitle: "Data Analyst & AI Engineer",
        
        // About
        about_title: "Tentang Saya",
        about_name: "Rachel Bronzen",
        about_origin: "Asal",
        about_origin_value: "Surabaya, Indonesia",
        about_status: "Status",
        about_status_value: "Mahasiswa",
        about_department: "Departemen",
        about_department_value: "Teknik Informatika",
        about_institute: "Institut",
        about_institute_value: "Institut Teknologi Sepuluh Nopember (ITS)",
        about_batch: "Angkatan",
        about_batch_value: "2023",
        about_semester: "Semester",
        about_semester_value: "6",
        
        // Skills
        skills_title: "Keahlian",
        skills_common: "Keahlian Umum",
        skills_programming: "Bahasa Pemrograman",
        skills_tools: "Tools & Version Control",
        skills_ai: "AI Engineer",
        skills_ai_ml: "AI/Machine Learning & Computer Vision",
        skills_frameworks: "Frameworks & Libraries",
        skills_platforms: "Tools & Platforms",
        skills_data: "Data Engineer",
        skills_data_analysis: "Data Analysis & BI",
        
        // Projects
        projects_title: "Proyek",
        project_1_title: "IT Performance Analytics Dashboard",
        project_1_date: "Sep 2025 – Des 2025",
        project_1_category: "Data Analytics & Dashboard Development",
        project_1_desc_1: "Mengganti proses pelaporan manual berbasis Excel dengan pipeline analisis data menggunakan Python dan Pandas untuk mengolah ribuan data tiket Incident dan Request",
        project_1_desc_2: "Mengimplementasikan logika perhitungan otomatis SLA dan Time Breach berdasarkan matriks Business Criticality dan Severity untuk meningkatkan akurasi evaluasi kinerja IT",
        project_1_desc_3: "Mengembangkan dashboard interaktif berbasis Streamlit untuk monitoring SLA compliance dan tren performa layanan, sehingga mempercepat pelaporan dan mendukung identifikasi bottleneck secara strategis",
        
        project_2_title: "Sistem Pakar Rekomendasi Laptop",
        project_2_date: "Sep 2025 – Des 2025",
        project_2_category: "Decision Support System",
        project_2_desc_1: "Mengembangkan sistem pendukung keputusan berbasis web dengan metode Hybrid (Forward Chaining untuk rule-based filtering dan SAW untuk weighted ranking) guna menerjemahkan kebutuhan pengguna menjadi rekomendasi spesifikasi laptop yang terukur",
        project_2_desc_2: "Mengotomatisasi pengumpulan dan pembaruan dataset melalui web scraping terjadwal, serta melakukan data cleaning dan pembentukan matriks keputusan menggunakan Pandas",
        project_2_desc_3: "Mengimplementasikan fitur Explainable AI dan validasi anggaran pengguna untuk meningkatkan transparansi rekomendasi, serta mendeploy sistem agar dapat digunakan secara interaktif",
        
        project_3_title: "Predictive Maintenance Analysis",
        project_3_date: "Nov 2025 – Des 2025",
        project_3_category: "Machine Learning Project",
        project_3_desc_1: "Menganalisis dataset sensor industri dan melakukan preprocessing serta penanganan class imbalance menggunakan CT-GAN untuk meningkatkan kualitas data pelatihan",
        project_3_desc_2: "Membangun dan mengevaluasi beberapa model serta mengimplementasikan Hybrid Soft Voting Ensemble untuk meningkatkan stabilitas prediksi",
        project_3_desc_3: "Mencapai ROC-AUC 0.9570 dan Recall 80.88%, serta menggunakan SHAP untuk menginterpretasikan kontribusi fitur utama dalam mendeteksi potensi kegagalan mesin",
        
        project_4_title: "Multimodal Emotion Recognition System",
        project_4_date: "Penelitian Tugas Akhir (Ongoing)",
        project_4_category: "AI Research & Data Analysis",
        project_4_desc_1: "Melakukan Exploratory Data Analysis (EDA) secara komprehensif pada dataset multimodal MELD untuk menganalisis distribusi fitur audio, teks, dan visual",
        project_4_desc_2: "Mengkaji dan mengimplementasikan arsitektur baseline MemoCMT untuk mengoptimalkan penyilangan (cross-modal) representasi fitur audio dan teks",
        project_4_desc_3: "Merancang integrasi sistem dynamic gating fusion untuk pemrosesan data visual, bertujuan menghasilkan model klasifikasi yang ringan (lightweight) dan memiliki ketahanan tinggi terhadap gangguan (noise-robust)",
        
        project_5_title: "Klasifikasi Spesies Alien Invasif",
        project_5_date: "Kolaborasi BRIN Yogyakarta (Ongoing)",
        project_5_category: "Computer Vision & Object Detection",
        project_5_desc_1: "Mengakuisisi dan memproses dataset gambar spesies alien invasif berdasarkan spesifikasi kebutuhan ekologis dari BRIN Yogyakarta",
        project_5_desc_2: "Melakukan anotasi presisi pada ratusan data gambar menggunakan perangkat lunak computer vision (CVAT) untuk membangun dataset training yang berkualitas",
        project_5_desc_3: "Melatih dan memvalidasi model Object Detection (arsitektur YOLO) untuk mengidentifikasi dan mengklasifikasikan spesies invasif secara akurat guna mendukung pemantauan keanekaragaman hayati",
        
        project_6_title: "Memories of You - Expert System Game Engine",
        project_6_date: "Game Logic & Development",
        project_6_category: "Game Development & Expert System",
        project_6_desc_1: "Merancang dan mengimplementasikan Sistem Pakar (Expert System) sebagai core logic engine untuk mengatur sistem pengambilan keputusan dan progresi level pemain secara dinamis",
        project_6_desc_2: "Membangun algoritma berbasis aturan (rule-based) yang menganalisis interaksi pemain untuk mengklasifikasikan status emosional mereka ke dalam metrik psikologis 5 Stages of Grief",
        
        project_7_title: "Teman Tumbuh - Android App Backend",
        project_7_date: "Backend Development",
        project_7_category: "Backend API & Database Management",
        project_7_desc_1: "Mengembangkan arsitektur backend untuk aplikasi Android yang berfokus pada kalkulasi nutrisi anak guna pencegahan stunting",
        project_7_desc_2: "Membangun RESTful API dan sistem database untuk memproses metrik kesehatan pengguna, serta merancang logika komputasi untuk menghasilkan rekomendasi asupan makanan harian secara personal",
        
        project_8_title: "XenoTimes - News Credibility Verification Platform",
        project_8_date: "Backend & AI Integration",
        project_8_category: "Backend Development & NLP Integration",
        project_8_desc_1: "Membangun infrastruktur backend terintegrasi Artificial Intelligence untuk menganalisis dan memverifikasi kredibilitas tautan berita secara otomatis (identifikasi misinformasi/hoaks)",
        project_8_desc_2: "Mengembangkan API yang memproses hasil prediksi model AI untuk menyajikan metrik persentase kepercayaan berita, dilengkapi dengan penjabaran sebab-akibat (XAI) guna meningkatkan transparansi bagi pengguna",
        
        // Experience
        experience_title: "Pengalaman",
        exp_1_title: "Admin Laboratorium Manajemen Cerdas Informasi",
        exp_1_date: "Jun 2025 – Sekarang",
        exp_1_org: "Teknik Informatika, Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia",
        exp_1_desc_1: "Mendukung pengembangan project website pengabdian masyarakat bersama dosen dan tim mahasiswa",
        exp_1_desc_2: "Mengelola koordinasi project antara dosen, mahasiswa, dan pihak eksternal",
        exp_1_desc_3: "Mempresentasikan dan memperkenalkan project Lab MCI kepada mahasiswa dan mitra eksternal",
        
        exp_2_title: "Data Analyst Intern",
        exp_2_date: "Sep 2025 – Des 2025",
        exp_2_org: "PT. Pelabuhan Indonesia (Persero) Regional 3, Surabaya, Indonesia",
        exp_2_desc_1: "Mengolah ribuan data tiket Incident dan Request menggunakan Python untuk proses cleaning, transformasi, dan analisis SLA",
        exp_2_desc_2: "Mengembangkan dashboard interaktif berbasis Streamlit untuk monitoring SLA dan tren performa layanan",
        exp_2_desc_3: "Mengotomatisasi proses pelaporan bulanan yang sebelumnya manual berbasis Excel sehingga meningkatkan efisiensi dan akurasi analisis",
        
        exp_3_title: "Asisten Dosen Sistem Basis Data",
        exp_3_date: "Sep 2025 – Des 2025",
        exp_3_org: "Teknik Informatika, Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia",
        exp_3_desc_1: "Menyampaikan materi kuliah untuk mendukung pemahaman konsep basis data dan pengerjaan praktikum",
        exp_3_desc_2: "Membimbing mahasiswa dalam implementasi query SQL dan perancangan skema database",
        exp_3_desc_3: "Melakukan penilaian tugas, praktikum, dan evaluasi performa akademik mahasiswa",
        
        exp_4_title: "Asisten Dosen Jaringan Komputer",
        exp_4_date: "Sep 2025 – Des 2025",
        exp_4_org: "Teknik Informatika, Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia",
        exp_4_desc_1: "Menyampaikan materi kuliah untuk mendukung pemahaman konsep jaringan komputer dan pengerjaan praktikum",
        exp_4_desc_2: "Membimbing mahasiswa dalam implementasi protokol jaringan dan konfigurasi sistem jaringan",
        exp_4_desc_3: "Melakukan penilaian tugas, praktikum, dan evaluasi performa akademik mahasiswa",
        
        exp_5_title: "Kepala Biro External, Departemen External Affairs",
        exp_5_date: "Feb 2025 – Des 2025",
        exp_5_org: "Himpunan Mahasiswa Teknik Computer-Informatika (HMTC) ITS, Surabaya, Indonesia",
        exp_5_desc_1: "Menginisiasi dan mengembangkan konsep kerja sama eksternal untuk mendukung kegiatan organisasi",
        exp_5_desc_2: "Menyusun proposal kemitraan dan melakukan komunikasi dengan pihak eksternal",
        exp_5_desc_3: "Mengelola tim dalam pelaksanaan program kolaborasi",
        
        // Gallery
        gallery_title: "Galeri",
        
        // Footer
        footer_copyright: "© 2026 Lala",
    },
    en: {
        // Navigation
        lang_button: "Language",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_gallery: "Gallery",
        
        // Hero
        hero_greeting: "Hello, I'm Rachel 👋",
        hero_subtitle: "Data Analyst & AI Engineer",
        
        // About
        about_title: "About Me",
        about_name: "Rachel Bronzen",
        about_origin: "Origin",
        about_origin_value: "Surabaya, Indonesia",
        about_status: "Status",
        about_status_value: "Student",
        about_department: "Department",
        about_department_value: "Information Technology",
        about_institute: "Institute",
        about_institute_value: "Institut Teknologi Sepuluh Nopember (ITS)",
        about_batch: "Batch",
        about_batch_value: "2023",
        about_semester: "Semester",
        about_semester_value: "6",
        
        // Skills
        skills_title: "Skills",
        skills_common: "Common Skills",
        skills_programming: "Programming Languages",
        skills_tools: "Tools & Version Control",
        skills_ai: "AI Engineer",
        skills_ai_ml: "AI/Machine Learning & Computer Vision",
        skills_frameworks: "Frameworks & Libraries",
        skills_platforms: "Tools & Platforms",
        skills_data: "Data Engineer",
        skills_data_analysis: "Data Analysis & BI",
        
        // Projects
        projects_title: "Projects",
        project_1_title: "IT Performance Analytics Dashboard",
        project_1_date: "Sep 2025 – Des 2025",
        project_1_category: "Data Analytics & Dashboard Development",
        project_1_desc_1: "Replaced manual Excel-based reporting process with data analysis pipeline using Python and Pandas to process thousands of Incident and Request tickets",
        project_1_desc_2: "Implemented automated SLA and Time Breach calculation logic based on Business Criticality and Severity matrix to improve accuracy of IT performance evaluation",
        project_1_desc_3: "Developed interactive Streamlit-based dashboard for SLA compliance monitoring and service performance trends, accelerating reporting and supporting strategic bottleneck identification",
        
        project_2_title: "Laptop Expert Recommendation System",
        project_2_date: "Sep 2025 – Des 2025",
        project_2_category: "Decision Support System",
        project_2_desc_1: "Developed web-based decision support system with Hybrid method (Forward Chaining for rule-based filtering and SAW for weighted ranking) to translate user needs into measured laptop specification recommendations",
        project_2_desc_2: "Automated dataset collection and updates through scheduled web scraping, and performed data cleaning and decision matrix formation using Pandas",
        project_2_desc_3: "Implemented Explainable AI features and user budget validation to improve recommendation transparency, and deployed system for interactive use",
        
        project_3_title: "Predictive Maintenance Analysis",
        project_3_date: "Nov 2025 – Des 2025",
        project_3_category: "Machine Learning Project",
        project_3_desc_1: "Analyzed industrial sensor dataset and performed preprocessing and class imbalance handling using CT-GAN to improve training data quality",
        project_3_desc_2: "Built and evaluated multiple models and implemented Hybrid Soft Voting Ensemble to improve prediction stability",
        project_3_desc_3: "Achieved ROC-AUC 0.9570 and Recall 80.88%, and used SHAP to interpret contributions of key features in detecting potential machine failures",
        
        project_4_title: "Multimodal Emotion Recognition System",
        project_4_date: "Thesis Research (Ongoing)",
        project_4_category: "AI Research & Data Analysis",
        project_4_desc_1: "Conducted comprehensive Exploratory Data Analysis (EDA) on MELD multimodal dataset to analyze distribution of audio, text, and visual features",
        project_4_desc_2: "Examined and implemented MemoCMT baseline architecture to optimize cross-modal representation of audio and text features",
        project_4_desc_3: "Designed dynamic gating fusion system integration for visual data processing, aiming to produce lightweight classification models with high noise robustness",
        
        project_5_title: "Invasive Alien Species Classification",
        project_5_date: "BRIN Yogyakarta Collaboration (Ongoing)",
        project_5_category: "Computer Vision & Object Detection",
        project_5_desc_1: "Acquired and processed invasive species image dataset based on ecological requirements specifications from BRIN Yogyakarta",
        project_5_desc_2: "Performed precise annotation on hundreds of images using computer vision software (CVAT) to build quality training dataset",
        project_5_desc_3: "Trained and validated Object Detection model (YOLO architecture) to accurately identify and classify invasive species to support biodiversity monitoring",
        
        project_6_title: "Memories of You - Expert System Game Engine",
        project_6_date: "Game Logic & Development",
        project_6_category: "Game Development & Expert System",
        project_6_desc_1: "Designed and implemented Expert System as core logic engine to manage player decision-making systems and level progression dynamically",
        project_6_desc_2: "Built rule-based algorithm that analyzes player interactions to classify their emotional status into 5 Stages of Grief psychological metrics",
        
        project_7_title: "Teman Tumbuh - Android App Backend",
        project_7_date: "Backend Development",
        project_7_category: "Backend API & Database Management",
        project_7_desc_1: "Developed backend architecture for Android application focused on child nutrition calculation for stunting prevention",
        project_7_desc_2: "Built RESTful API and database system to process user health metrics, and designed computation logic to generate personalized daily food intake recommendations",
        
        project_8_title: "XenoTimes - News Credibility Verification Platform",
        project_8_date: "Backend & AI Integration",
        project_8_category: "Backend Development & NLP Integration",
        project_8_desc_1: "Built AI-integrated backend infrastructure to automatically analyze and verify news link credibility (misinformation/hoax identification)",
        project_8_desc_2: "Developed API that processes AI model prediction results to present news trust percentage metrics, equipped with cause-effect explanation (XAI) to improve user transparency",
        
        // Experience
        experience_title: "Experience",
        exp_1_title: "Smart Information Management Lab Administrator",
        exp_1_date: "Jun 2025 – Present",
        exp_1_org: "Information Technology, Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia",
        exp_1_desc_1: "Supported development of community service website project together with faculty and student team",
        exp_1_desc_2: "Managed project coordination between faculty, students, and external parties",
        exp_1_desc_3: "Presented and introduced Lab MCI project to students and external partners",
        
        exp_2_title: "Data Analyst Intern",
        exp_2_date: "Sep 2025 – Des 2025",
        exp_2_org: "PT. Pelabuhan Indonesia (Persero) Regional 3, Surabaya, Indonesia",
        exp_2_desc_1: "Processed thousands of Incident and Request tickets using Python for cleaning, transformation, and SLA analysis",
        exp_2_desc_2: "Developed interactive Streamlit-based dashboard for SLA monitoring and service performance trends",
        exp_2_desc_3: "Automated monthly reporting process that was previously manual Excel-based, improving efficiency and analysis accuracy",
        
        exp_3_title: "Teaching Assistant - Database Systems",
        exp_3_date: "Sep 2025 – Des 2025",
        exp_3_org: "Information Technology, Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia",
        exp_3_desc_1: "Delivered lecture materials to support understanding of database concepts and practical assignments",
        exp_3_desc_2: "Guided students in SQL query implementation and database schema design",
        exp_3_desc_3: "Graded assignments, practicum work, and evaluated student academic performance",
        
        exp_4_title: "Teaching Assistant - Computer Networks",
        exp_4_date: "Sep 2025 – Des 2025",
        exp_4_org: "Information Technology, Institut Teknologi Sepuluh Nopember (ITS), Surabaya, Indonesia",
        exp_4_desc_1: "Delivered lecture materials to support understanding of computer networking concepts and practical assignments",
        exp_4_desc_2: "Guided students in network protocol implementation and network system configuration",
        exp_4_desc_3: "Graded assignments, practicum work, and evaluated student academic performance",
        
        exp_5_title: "Head of External Bureau, External Affairs Department",
        exp_5_date: "Feb 2025 – Des 2025",
        exp_5_org: "Computer-Information Engineering Student Association (HMTC) ITS, Surabaya, Indonesia",
        exp_5_desc_1: "Initiated and developed external cooperation concepts to support organizational activities",
        exp_5_desc_2: "Prepared partnership proposals and communicated with external parties",
        exp_5_desc_3: "Managed team in implementing collaboration programs",
        
        // Gallery
        gallery_title: "Gallery",
        
        // Footer
        footer_copyright: "© 2026 Lala",
    }
};
