document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    whatsappNumber: '628123456789',
    developerName: 'Ghani',

    activeTab: 'all',
    expandedService: null,
    faqIndex: null,
    activeReview: 0,
    modalOpen: false,

    contactForm: {
      name: '',
      email: '',
      service: 'website',
      details: '',
      isValid: false
    },

    calc: {
      serviceType: 'website',
      complexity: 'medium', // for bug solving
      pages: 3,
      features: {
        cms: false,
        payment: false,
        auth: false,
        seo: false,
        multilang: false,
        booking: false
      },
      estimatedPrice: 0,
      estimatedTimeline: '',
    },

    services: [
      {
        id: 'website',
        title: 'Jasa Pembuatan Website',
        brief: 'Web apps kustom, dashboard, & landing page interaktif.',
        icon: 'fa-solid fa-laptop-code',
        colorClass: 'bg-purple',
        badge: 'Hot Seller',
        priceLabel: 'Mulai dari',
        price: 'Rp 2.500.000',
        features: [
          'UI/UX Design Kustom',
          'Responsive di HP & Tablet',
          'Optimasi Kecepatan & SEO',
          'Integrasi API & Database',
          'Garansi Bebas Bug 3 Bulan',
          'Free Domain & Hosting 1 Thn'
        ]
      },
      {
        id: 'company_profile',
        title: 'Company Profile',
        brief: 'Website profesional untuk tingkatkan kredibilitas bisnis Anda.',
        icon: 'fa-solid fa-store',
        colorClass: 'bg-cyan',
        badge: 'Populer',
        priceLabel: 'Mulai dari',
        price: 'Rp 1.500.000',
        features: [
          'Desain Premium & Modern',
          'Menu Interaktif / List Layanan',
          'Integrasi Google Maps & Kontak',
          'Form Reservasi / Booking WhatsApp',
          'Mudah Dikelola (CMS Sederhana)',
          'Optimasi Local SEO Google Bisnis'
        ]
      },
      {
        id: 'bug_solving',
        title: 'Bug Solving & Fix',
        brief: 'Perbaikan error cepat, optimasi performa, & refactoring kode.',
        icon: 'fa-solid fa-bug-slash',
        colorClass: 'bg-emerald',
        badge: 'Express 24h',
        priceLabel: 'Mulai dari',
        price: 'Rp 300.000',
        features: [
          'Deteksi Cepat Sumber Error',
          'Perbaikan Kode Aman & Bersih',
          'Optimasi Load Time Halaman',
          'Perbaikan Keamanan Website',
          'Laporan Detail Penyebab Error',
          'Konsultasi Pencegahan Bug'
        ]
      }
    ],

    projects: [
      {
        title: 'Coffee Senja',
        category: 'company_profile',
        desc: 'Website company profile Cafe modern dengan menu interaktif, galeri estetik, & reservasi meja online terintegrasi WA.',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600',
        tags: ['Cafe', 'Alpine.js', 'Premium UI'],
        demoUrl: '#'
      },
      {
        title: 'SmileDental Clinic Portal',
        category: 'company_profile',
        desc: 'Portal website klinik gigi profesional. Fitur booking jadwal dokter, list perawatan, & profil dokter spesialis.',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
        tags: ['Klinik', 'Booking System', 'SEO Optimized'],
        demoUrl: '#'
      },
      {
        title: 'SaaS Analytics Dashboard',
        category: 'website',
        desc: 'Dashboard web custom yang kompleks untuk visualisasi data real-time, manajemen user, & laporan keuangan.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
        tags: ['SaaS', 'Tailwind', 'ChartJS', 'API Integrations'],
        demoUrl: '#'
      },
      {
        title: 'Fix Database Leak & Security Patch',
        category: 'bug_solving',
        desc: 'Menyelesaikan celah keamanan SQL Injection, memulihkan performa database lambat, dan menerapkan API rate-limiting.',
        image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=600',
        tags: ['Debugging', 'SQL Fix', 'Security', 'Express'],
        demoUrl: '#'
      }
    ],

    testimonials: [
      {
        name: 'Budi Santoso',
        company: 'Owner Cafe Kopi Senja',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
        rating: 5,
        text: 'Sangat puas dengan website cafe buatan Mas Ghani! Desainnya keren, interaktif banget, dan pelanggan gampang buat reservasi meja langsung lewat WhatsApp. Penjualan naik drastis sejak ada website!'
      },
      {
        name: 'dr. Sarah Wijaya',
        company: 'Direktur SmileDental Klinik',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
        rating: 5,
        text: 'Membuat website klinik gigi di sini adalah keputusan terbaik kami. Sekarang pasien bisa lihat jadwal dokter secara langsung dan pesan janji temu tanpa antre lama. Sistem kerjanya rapi, profesional, dan tepat waktu.'
      },
      {
        name: 'Rian Hidayat',
        company: 'CTO TechStart Indonesia',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
        rating: 5,
        text: 'Ketika sistem utama kami mengalami crash yang tidak terduga, tim Bug Solving Mas Ghani langsung bertindak cepat. Kurang dari 4 jam bug teratasi dan sistem berjalan 2x lebih cepat karena dioptimalkan secara mendalam. Rekomendasi utama!'
      }
    ],

    faqs: [
      {
        q: 'Berapa lama proses pengerjaan website?',
        a: 'Waktu pengerjaan bervariasi tergantung kerumitan. Untuk Company Profile Cafe/Klinik standard biasanya selesai dalam 3-7 hari kerja. Sedangkan untuk Custom Web Application bisa berkisar antara 2-4 minggu. Kami selalu memberikan estimasi timeline yang jelas di awal.'
      },
      {
        q: 'Apakah saya mendapatkan akses admin/dashboard pengelola?',
        a: 'Ya, tentu! Untuk jasa pembuatan website & company profile, kami menyediakan opsi integrasi Admin Panel / CMS (Content Management System) yang ramah pengguna. Anda dapat dengan mudah mengubah menu, jadwal, foto, atau artikel tanpa perlu mengerti bahasa coding.'
      },
      {
        q: 'Bagaimana sistem pembayaran jasanya?',
        a: 'Sistem pembayaran menggunakan sistem Down Payment (DP) sebesar 50% di awal sebelum project dimulai, kemudian sisanya 50% dilunasi setelah website selesai divalidasi oleh Anda dan siap dideploy ke domain publik.'
      },
      {
        q: 'Apakah ada garansi jika website error setelah serah terima?',
        a: 'Setiap project website yang kami kerjakan mendapatkan garansi bebas bug/error gratis selama 3 bulan penuh. Jika ada kendala teknis atau link rusak, kami siap memperbaiki dengan segera tanpa biaya tambahan.'
      },
      {
        q: 'Bisakah memperbaiki bug website yang dibuat developer lain?',
        a: 'Sangat bisa! Layanan Bug Solving & Fix kami dirancang khusus untuk menganalisis kode yang sudah ada, mencari letak kesalahan, memperbaikinya, dan memberikan rekomendasi agar error serupa tidak terulang di kemudian hari.'
      }
    ],

    init() {
      this.calculatePrice();

      setInterval(() => {
        this.activeReview = (this.activeReview + 1) % this.testimonials.length;
      }, 7000);

      this.$watch('calc.serviceType', () => this.calculatePrice());
      this.$watch('calc.complexity', () => this.calculatePrice());
      this.$watch('calc.pages', () => this.calculatePrice());
      this.$watch('calc.features.cms', () => this.calculatePrice());
      this.$watch('calc.features.payment', () => this.calculatePrice());
      this.$watch('calc.features.auth', () => this.calculatePrice());
      this.$watch('calc.features.seo', () => this.calculatePrice());
      this.$watch('calc.features.multilang', () => this.calculatePrice());
      this.$watch('calc.features.booking', () => this.calculatePrice());
    },

    toggleService(id) {
      if (this.expandedService === id) {
        this.expandedService = null;
      } else {
        this.expandedService = id;
      }
    },

    filteredProjects() {
      if (this.activeTab === 'all') {
        return this.projects;
      }
      return this.projects.filter(p => p.category === this.activeTab);
    },

    calculatePrice() {
      let price = 0;
      let days = 0;

      if (this.calc.serviceType === 'website') {
        price = 2500000;
        days = 5;

        if (this.calc.pages > 3) {
          price += (this.calc.pages - 3) * 200000;
          days += Math.ceil((this.calc.pages - 3) * 0.5);
        }

        if (this.calc.features.cms) { price += 1500000; days += 3; }
        if (this.calc.features.payment) { price += 1200000; days += 3; }
        if (this.calc.features.auth) { price += 1000000; days += 2; }
        if (this.calc.features.seo) { price += 300000; }
        if (this.calc.features.multilang) { price += 600000; days += 1; }

        this.calc.estimatedTimeline = `${days} - ${days + 3} Hari Kerja`;

      } else if (this.calc.serviceType === 'company_profile') {
        price = 1500000;
        days = 4;

        if (this.calc.pages > 3) {
          price += (this.calc.pages - 3) * 150000;
          days += Math.ceil((this.calc.pages - 3) * 0.5);
        }

        if (this.calc.features.booking) { price += 500000; days += 1; }
        if (this.calc.features.cms) { price += 800000; days += 2; }
        if (this.calc.features.seo) { price += 300000; }
        if (this.calc.features.multilang) { price += 500000; days += 1; }

        this.calc.estimatedTimeline = `${days} - ${days + 2} Hari Kerja`;

      } else if (this.calc.serviceType === 'bug_solving') {
        if (this.calc.complexity === 'easy') {
          price = 300000;
          this.calc.estimatedTimeline = 'Dalam 24 Jam';
        } else if (this.calc.complexity === 'medium') {
          price = 800000;
          this.calc.estimatedTimeline = '1 - 2 Hari Kerja';
        } else {
          price = 2000000; // Complex / System issues
          this.calc.estimatedTimeline = '3 - 5 Hari Kerja';
        }
      }

      this.calc.estimatedPrice = price;
    },

    formatRupiah(value) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(value);
    },

    openConsultation(serviceId = 'website') {
      this.contactForm.service = serviceId;
      this.modalOpen = true;
    },

    submitConsultation() {
      if (!this.contactForm.name) {
        alert('Mohon masukkan nama Anda.');
        return;
      }

      fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.contactForm.name,
          email: this.contactForm.email,
          service: this.contactForm.service,
          details: this.contactForm.details
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Gagal mengirim email.');
          }
          return response.json();
        })
        .then(data => {
          alert('Form konsultasi berhasil terkirim via Email!');
          this.modalOpen = false;
          this.contactForm.name = '';
          this.contactForm.email = '';
          this.contactForm.details = '';
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Terjadi kesalahan saat mengirim form: ' + error.message);
        });
    },

    orderCalculatedSetup() {
      const serviceNames = {
        website: 'Jasa Pembuatan Website Kustom',
        company_profile: 'Company Profile (Cafe/Klinik/dll)',
        bug_solving: 'Bug Solving & Fix'
      };

      const selectedServiceName = serviceNames[this.calc.serviceType];
      let detailsText = '';

      if (this.calc.serviceType === 'bug_solving') {
        const complexities = { easy: 'Ringan (Easy)', medium: 'Sedang (Medium)', hard: 'Rumit/Kompleks (Hard)' };
        detailsText = `• *Tingkat Kerumitan:* ${complexities[this.calc.complexity]}\n`;
      } else {
        detailsText = `• *Jumlah Halaman:* ${this.calc.pages} Halaman\n` +
          `• *Fitur Tambahan:* \n` +
          Object.keys(this.calc.features)
            .filter(f => this.calc.features[f])
            .map(f => {
              const labels = {
                cms: '  - Integrasi CMS / Admin Panel',
                payment: '  - Payment Gateway',
                auth: '  - Login User & Database',
                seo: '  - SEO Optimasi Halaman',
                multilang: '  - Multi-Bahasa',
                booking: '  - Booking / Reservasi Online'
              };
              return labels[f];
            }).join('\n') || '  - Fitur Standard Standar';
      }

      const text = `Halo Kak ${this.developerName},\n\n` +
        `Saya ingin memesan layanan dengan spesifikasi custom yang sudah saya hitung di website Link Market.\n\n` +
        `*Spesifikasi Pesanan:*\n` +
        `• *Layanan:* ${selectedServiceName}\n` +
        detailsText + `\n\n` +
        `*Estimasi Hasil Kalkulator:*\n` +
        `• *Total Harga:* ${this.formatRupiah(this.calc.estimatedPrice)}\n` +
        `• *Estimasi Waktu:* ${this.calc.estimatedTimeline}\n\n` +
        `Mohon konfirmasi pesanan ini agar kita bisa masuk ke tahap briefing detail. Terima kasih!`;

      const encodedText = encodeURIComponent(text);
      const url = `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodedText}`;

      window.open(url, '_blank');
    },

    orderServiceDirect(serviceId) {
      const serviceNames = {
        website: 'Jasa Pembuatan Website',
        company_profile: 'Company Profile',
        bug_solving: 'Bug Solving & Fix'
      };

      const serviceName = serviceNames[serviceId] || serviceId;

      const text = `Halo Kak ${this.developerName},\n\n` +
        `Saya tertarik dengan layanan *${serviceName}* yang tertera di bio Instagram Anda.\n` +
        `Bisa tolong jelaskan prosedur awal pengerjaan dan detail paketnya?\n\n` +
        `Terima kasih!`;

      const encodedText = encodeURIComponent(text);
      const url = `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodedText}`;

      window.open(url, '_blank');
    }
  }));
});
