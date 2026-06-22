const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
    const livereload = require("livereload");
    const connectLiveReload = require("connect-livereload");

    const liveReloadServer = livereload.createServer();
    liveReloadServer.watch(__dirname);

    app.use(connectLiveReload());

    liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 100);
    });
}

app.use(express.static(__dirname));

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

app.post('/api/send-email', (req, res) => {
    const { name, email, service, details } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Nama wajib diisi.' });
    }

    const serviceNames = {
        website: 'Jasa Pembuatan Website',
        company_profile: 'Company Profile (Cafe, Klinik, dll)',
        bug_solving: 'Bug Solving & Fix Website'
    };
    const selectedServiceName = serviceNames[service] || service;

    const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `[Konsultasi Project] ${selectedServiceName} - ${name}`,
        text: `Halo Ghani,\n\nAda konsultasi masuk dari website portfolio Anda:\n\n` +
            `• Nama: ${name}\n` +
            `• Email Pengirim: ${email || '-'}\n` +
            `• Layanan yang Diminati: ${selectedServiceName}\n` +
            `• Catatan / Detail Kendala:\n${details || 'Ingin konsultasi awal.'}\n\n` +
            `Silakan hubungi kembali klien melalui email di atas.`,
        replyTo: email || undefined
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error saat mengirim email:', error);
            return res.status(500).json({ error: 'Gagal mengirim email ke server SMTP.' });
        }
        console.log('Email berhasil dikirim:', info.response);
        return res.status(200).json({ message: 'Email berhasil terkirim!' });
    });
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}🚀`);
});
