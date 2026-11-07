/* ============================================================
   FALCO — SERVER (MAX SECURITY & FULL CMS)
   ============================================================ */
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import multer from 'multer';
import crypto from 'node:crypto';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ============ CONFIG ============ */
const CONFIG = {
    PORT: parseInt(process.env.PORT || '3000', 10),
    NODE_ENV: process.env.NODE_ENV || 'development',
    BOT_TOKEN: process.env.BOT_TOKEN,
    CHAT_ID: process.env.CHAT_ID,
    // Falco OS (internal system) — receives every application. Empty = off.
    FALCO_OS_URL: (process.env.FALCO_OS_URL || '').replace(/\/+$/, ''),
    FALCO_OS_KEY: process.env.FALCO_OS_KEY || '',
    ADMIN_USER: process.env.ADMIN_USER || 'admin',
    ADMIN_PASS: process.env.ADMIN_PASS || 'falco2026',
    SESSION_SECRET: process.env.SESSION_SECRET || 'falco_secret_key_2026_super_secure',
    SESSION_LIFETIME_MS: 7 * 24 * 60 * 60 * 1000 // 7 days persistent session
};

if (!CONFIG.BOT_TOKEN || !CONFIG.CHAT_ID) {
    console.warn(`⚠️ Warning: BOT_TOKEN or CHAT_ID is not configured. Telegram notifications will be logged only.`);
}

const app = express();
app.set('trust proxy', 1);

/* ============ UPLOADS STORAGE SETUP ============ */
const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Multer Storage with secure randomized filenames and strict MIME whitelist
const ALLOWED_MIME_TYPES = new Set([
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/svg+xml'
]);

const uploadStorage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, UPLOADS_DIR);
    },
    filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const safeName = 'img_' + Date.now() + '_' + crypto.randomBytes(8).toString('hex') + ext;
        cb(null, safeName);
    }
});

const upload = multer({
    storage: uploadStorage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10 MB max per image
    },
    fileFilter: (_req, file, cb) => {
        if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
            return cb(new Error('Only JPEG, PNG, WEBP, GIF, and SVG images are allowed'));
        }
        cb(null, true);
    }
});

/* ============ SECURITY & MIDDLEWARE ============ */
// Keep helmet protection but disable restrictive CSP so inline handlers and dynamic images work reliably
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false, limit: '1mb' }));

// Global rate limiting
app.use(rateLimit({
    windowMs: 60 * 1000,
    max: 500,
    message: { ok: false, error: 'Too many requests. Please try again later.' }
}));

/* ============ DATABASE (JSON) ============ */
const DATA_FILE = path.join(__dirname, 'data.json');

const initialData = {
    content: {
        heroBadge: "Yoshlar ekosistemasi",
        heroTitle: "*Talant* - bu kelajak.",
        heroText: "Falco connects ambitious people with the teams, challenges, and opportunities that help them turn potential into real results.",
        heroImage: "",
        statsMembers: "50+",
        statsProjects: "30+",
        statsMentors: "12+",
        statsCountries: "5+",
        aboutEyebrow: "FALCO HAQIDA",
        aboutTitle: "Jamoadan ko'proq. *Kelajak uchun platforma.*",
        aboutText: "Falco — M Company tarkibidagi yoshlar ekosistemasi. Biz iste'dodlarni topamiz, rivojlantiramiz va real imkoniyatlar bilan bog'laymiz.",
        contactAddress: "108 Amir Temur Avenue, Tashkent 100200",
        contactPhone: "+998 99 129 26 14",
        contactTelegram: "@Falco_uz",
        contactEmail: "info@falco.uz",
        catCompeteImg: "https://picsum.photos/seed/compete/600/800",
        catBuildImg: "https://picsum.photos/seed/build/600/800",
        catVentureImg: "https://picsum.photos/seed/venture/600/800",
        catConnectImg: "https://picsum.photos/seed/connect/600/800",
        resultsItem1Meta: "2025 · XITOY · WorldSkills",
        resultsItem1Title: "Kumush · 2-o'rin",
        resultsItem1Sub: "Logistika tanlovi",
        resultsItem1Img: "https://picsum.photos/seed/skills/600/400",
        resultsItem2Meta: "2024 · YAPONIYA · Madaniyatlararo muhandislik",
        resultsItem2Title: "1-o'rin · Ochiq ishlab chiqarish innovatsiyasi",
        resultsItem2Sub: "Xalqaro loyiha tanlovi",
        resultsItem2Img: "https://picsum.photos/seed/japan/600/400"
    },
    news: [],
    team: [],
    projects: [],
    gallery: [],
    applications: []
};

if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
}

const readData = () => {
    try {
        const raw = fs.readFileSync(DATA_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        return {
            content: { ...initialData.content, ...(parsed.content || {}) },
            news: Array.isArray(parsed.news) ? parsed.news : [],
            team: Array.isArray(parsed.team) ? parsed.team : [],
            projects: Array.isArray(parsed.projects) ? parsed.projects : [],
            gallery: Array.isArray(parsed.gallery) ? parsed.gallery : [],
            applications: Array.isArray(parsed.applications) ? parsed.applications : []
        };
    } catch (err) {
        console.error('Error reading database:', err);
        return initialData;
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error('Error writing database:', err);
        return false;
    }
};

/* ============ PERSISTENT CRYPTOGRAPHIC TOKEN SESSIONS ============ */
const createToken = (payload) => {
    const data = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + CONFIG.SESSION_LIFETIME_MS })).toString('base64url');
    const sig = crypto.createHmac('sha256', CONFIG.SESSION_SECRET).update(data).digest('base64url');
    return `${data}.${sig}`;
};

const verifyToken = (token) => {
    if (!token || typeof token !== 'string' || !token.includes('.')) return null;
    const [data, sig] = token.split('.');
    const expectedSig = crypto.createHmac('sha256', CONFIG.SESSION_SECRET).update(data).digest('base64url');
    if (sig !== expectedSig) return null;
    try {
        const payload = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
        if (payload.exp && payload.exp < Date.now()) return null;
        return payload;
    } catch {
        return null;
    }
};

/* ============ SECURITY HELPERS ============ */
const cleanHTML = (str = '', maxLen = 3000) => {
    if (typeof str !== 'string') return '';
    return str
        .replace(/<[^>]*>?/gm, '')
        .trim()
        .slice(0, maxLen);
};

const escTg = (str = '') => {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
};

const formatSubmittedDate = (date) => {
    const d = new Date(date || Date.now());
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${day} ${month} ${year}, ${hours}:${minutes}`;
};

// Constant-time string equality check to prevent timing attacks
const safeCompare = (a = '', b = '') => {
    const bufA = Buffer.from(String(a));
    const bufB = Buffer.from(String(b));
    if (bufA.length !== bufB.length) return false;
    return crypto.timingSafeEqual(bufA, bufB);
};

const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ ok: false, error: 'Unauthorized: Missing token' });
    }
    const token = authHeader.slice(7).trim();
    const session = verifyToken(token);
    if (!session) {
        return res.status(401).json({ ok: false, error: 'Unauthorized: Session expired or invalid' });
    }
    req.user = session;
    next();
};

/* ============================================================
   🔐 AUTHENTICATION
   ============================================================ */
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { ok: false, error: 'Too many login attempts. Please try again in 15 minutes.' }
});

app.post('/api/admin/login', loginLimiter, (req, res) => {
    const { username, password } = req.body || {};
    if (!username || !password) {
        return res.status(400).json({ ok: false, error: 'Username and password required' });
    }

    const isValidUser = safeCompare(username, CONFIG.ADMIN_USER);
    const isValidPass = safeCompare(password, CONFIG.ADMIN_PASS);

    if (isValidUser && isValidPass) {
        const token = createToken({ role: 'admin', user: username });
        return res.json({ ok: true, token, role: 'admin' });
    }

    res.status(401).json({ ok: false, error: 'Invalid admin credentials' });
});

app.post('/api/admin/logout', requireAuth, (_req, res) => {
    res.json({ ok: true });
});

app.get('/api/admin/me', requireAuth, (_req, res) => {
    res.json({ ok: true, role: 'admin' });
});

/* ============================================================
   📷 FILE UPLOADS (ADMIN ONLY)
   ============================================================ */
app.post('/api/admin/upload', requireAuth, (req, res) => {
    upload.single('file')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ ok: false, error: `Upload error: ${err.message}` });
        } else if (err) {
            return res.status(400).json({ ok: false, error: err.message });
        }
        if (!req.file) {
            return res.status(400).json({ ok: false, error: 'No file uploaded' });
        }
        const fileUrl = `/uploads/${req.file.filename}`;
        res.json({ ok: true, url: fileUrl, filename: req.file.filename });
    });
});

app.get('/api/admin/uploads', requireAuth, (_req, res) => {
    try {
        const files = fs.readdirSync(UPLOADS_DIR)
            .filter(f => !f.startsWith('.'))
            .map(f => {
                const stat = fs.statSync(path.join(UPLOADS_DIR, f));
                return {
                    filename: f,
                    url: `/uploads/${f}`,
                    size: stat.size,
                    time: stat.mtimeMs
                };
            })
            .sort((a, b) => b.time - a.time);
        res.json({ ok: true, files });
    } catch (err) {
        res.status(500).json({ ok: false, error: 'Failed to list uploads' });
    }
});

app.delete('/api/admin/uploads/:filename', requireAuth, (req, res) => {
    try {
        const safeFilename = path.basename(req.params.filename);
        const filePath = path.join(UPLOADS_DIR, safeFilename);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        res.json({ ok: true });
    } catch (err) {
        res.status(500).json({ ok: false, error: 'Failed to delete file' });
    }
});

/* ============================================================
   📝 PUBLIC API
   ============================================================ */
app.get('/api/content', (_req, res) => res.json(readData().content || {}));
app.get('/api/news', (_req, res) => res.json(readData().news || []));
app.get('/api/team', (_req, res) => res.json(readData().team || []));
app.get('/api/projects', (_req, res) => res.json(readData().projects || []));
app.get('/api/gallery', (_req, res) => res.json(readData().gallery || []));

/* ============================================================
   🔧 CMS API (ADMIN ONLY)
   ============================================================ */
// --- Content & Photos ---
app.post('/api/admin/content', requireAuth, (req, res) => {
    const data = readData();
    const b = req.body || {};
    data.content = {
        ...data.content,
        heroBadge: cleanHTML(b.heroBadge || data.content.heroBadge || ''),
        heroTitle: cleanHTML(b.heroTitle || data.content.heroTitle || ''),
        heroText: cleanHTML(b.heroText || data.content.heroText || ''),
        heroImage: cleanHTML(b.heroImage || data.content.heroImage || ''),
        statsMembers: cleanHTML(b.statsMembers || data.content.statsMembers || '50+'),
        statsProjects: cleanHTML(b.statsProjects || data.content.statsProjects || '30+'),
        statsMentors: cleanHTML(b.statsMentors || data.content.statsMentors || '12+'),
        statsCountries: cleanHTML(b.statsCountries || data.content.statsCountries || '5+'),
        aboutEyebrow: cleanHTML(b.aboutEyebrow || data.content.aboutEyebrow || ''),
        aboutTitle: cleanHTML(b.aboutTitle || data.content.aboutTitle || ''),
        aboutText: cleanHTML(b.aboutText || data.content.aboutText || ''),
        contactAddress: cleanHTML(b.contactAddress || data.content.contactAddress || ''),
        contactPhone: cleanHTML(b.contactPhone || data.content.contactPhone || ''),
        contactTelegram: cleanHTML(b.contactTelegram || data.content.contactTelegram || ''),
        contactEmail: cleanHTML(b.contactEmail || data.content.contactEmail || ''),
        // Category Photos on Homepage
        catCompeteImg: cleanHTML(b.catCompeteImg || data.content.catCompeteImg || 'https://picsum.photos/seed/compete/600/800'),
        catBuildImg: cleanHTML(b.catBuildImg || data.content.catBuildImg || 'https://picsum.photos/seed/build/600/800'),
        catVentureImg: cleanHTML(b.catVentureImg || data.content.catVentureImg || 'https://picsum.photos/seed/venture/600/800'),
        catConnectImg: cleanHTML(b.catConnectImg || data.content.catConnectImg || 'https://picsum.photos/seed/connect/600/800'),
        // Results & Achievements preview on Homepage
        resultsItem1Meta: cleanHTML(b.resultsItem1Meta || data.content.resultsItem1Meta || '2025 · XITOY · WorldSkills'),
        resultsItem1Title: cleanHTML(b.resultsItem1Title || data.content.resultsItem1Title || "Kumush · 2-o'rin"),
        resultsItem1Sub: cleanHTML(b.resultsItem1Sub || data.content.resultsItem1Sub || 'Logistika tanlovi'),
        resultsItem1Img: cleanHTML(b.resultsItem1Img || data.content.resultsItem1Img || 'https://picsum.photos/seed/skills/600/400'),
        resultsItem2Meta: cleanHTML(b.resultsItem2Meta || data.content.resultsItem2Meta || '2024 · YAPONIYA · Madaniyatlararo muhandislik'),
        resultsItem2Title: cleanHTML(b.resultsItem2Title || data.content.resultsItem2Title || "1-o'rin · Ochiq ishlab chiqarish innovatsiyasi"),
        resultsItem2Sub: cleanHTML(b.resultsItem2Sub || data.content.resultsItem2Sub || 'Xalqaro loyiha tanlovi'),
        resultsItem2Img: cleanHTML(b.resultsItem2Img || data.content.resultsItem2Img || 'https://picsum.photos/seed/japan/600/400')
    };
    writeData(data);
    res.json({ ok: true, content: data.content });
});

// --- News ---
app.post('/api/admin/news', requireAuth, (req, res) => {
    const { title, category, date, desc, image } = req.body || {};
    if (!title || !desc) return res.status(400).json({ ok: false, error: 'Title and description required' });

    const data = readData();
    const newNews = {
        id: Date.now(),
        title: cleanHTML(title),
        date: cleanHTML(date) || new Date().toISOString().split('T')[0],
        category: cleanHTML(category || 'General'),
        desc: cleanHTML(desc),
        image: cleanHTML(image) || 'https://picsum.photos/seed/news/600/400'
    };
    data.news = [newNews, ...(data.news || [])];
    writeData(data);
    res.json({ ok: true, news: newNews });
});

app.put('/api/admin/news/:id', requireAuth, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { title, category, date, desc, image } = req.body || {};
    const data = readData();
    const item = (data.news || []).find(n => n.id === id);
    if (!item) return res.status(404).json({ ok: false, error: 'News item not found' });

    if (title !== undefined) item.title = cleanHTML(title);
    if (category !== undefined) item.category = cleanHTML(category);
    if (date !== undefined) item.date = cleanHTML(date);
    if (desc !== undefined) item.desc = cleanHTML(desc);
    if (image !== undefined) item.image = cleanHTML(image);

    writeData(data);
    res.json({ ok: true, news: item });
});

app.delete('/api/admin/news/:id', requireAuth, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const data = readData();
    data.news = (data.news || []).filter(n => n.id !== id);
    writeData(data);
    res.json({ ok: true });
});

// --- Team ---
app.post('/api/admin/team', requireAuth, (req, res) => {
    const { name, role, category, desc, image } = req.body || {};
    if (!name || !role) return res.status(400).json({ ok: false, error: 'Name and role required' });

    const data = readData();
    const newMember = {
        id: Date.now(),
        name: cleanHTML(name),
        role: cleanHTML(role),
        category: cleanHTML(category || 'core').toLowerCase(),
        desc: cleanHTML(desc || ''),
        image: cleanHTML(image) || 'https://picsum.photos/seed/team/500/500'
    };
    data.team = [...(data.team || []), newMember];
    writeData(data);
    res.json({ ok: true, member: newMember });
});

app.put('/api/admin/team/:id', requireAuth, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, role, category, desc, image } = req.body || {};
    const data = readData();
    const item = (data.team || []).find(t => t.id === id);
    if (!item) return res.status(404).json({ ok: false, error: 'Team member not found' });

    if (name !== undefined) item.name = cleanHTML(name);
    if (role !== undefined) item.role = cleanHTML(role);
    if (category !== undefined) item.category = cleanHTML(category).toLowerCase();
    if (desc !== undefined) item.desc = cleanHTML(desc);
    if (image !== undefined) item.image = cleanHTML(image);

    writeData(data);
    res.json({ ok: true, member: item });
});

app.delete('/api/admin/team/:id', requireAuth, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const data = readData();
    data.team = (data.team || []).filter(t => t.id !== id);
    writeData(data);
    res.json({ ok: true });
});

// --- Projects ---
app.post('/api/admin/projects', requireAuth, (req, res) => {
    const { title, category, meta, desc, link, image } = req.body || {};
    if (!title || !desc) return res.status(400).json({ ok: false, error: 'Title and description required' });

    const data = readData();
    const newProject = {
        id: Date.now(),
        title: cleanHTML(title),
        category: cleanHTML(category || 'startup').toLowerCase(),
        meta: cleanHTML(meta || 'STARTUP'),
        desc: cleanHTML(desc),
        link: cleanHTML(link || '#'),
        image: cleanHTML(image) || 'https://picsum.photos/seed/project/800/600'
    };
    data.projects = [...(data.projects || []), newProject];
    writeData(data);
    res.json({ ok: true, project: newProject });
});

app.put('/api/admin/projects/:id', requireAuth, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { title, category, meta, desc, link, image } = req.body || {};
    const data = readData();
    const item = (data.projects || []).find(p => p.id === id);
    if (!item) return res.status(404).json({ ok: false, error: 'Project not found' });

    if (title !== undefined) item.title = cleanHTML(title);
    if (category !== undefined) item.category = cleanHTML(category).toLowerCase();
    if (meta !== undefined) item.meta = cleanHTML(meta);
    if (desc !== undefined) item.desc = cleanHTML(desc);
    if (link !== undefined) item.link = cleanHTML(link);
    if (image !== undefined) item.image = cleanHTML(image);

    writeData(data);
    res.json({ ok: true, project: item });
});

app.delete('/api/admin/projects/:id', requireAuth, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const data = readData();
    data.projects = (data.projects || []).filter(p => p.id !== id);
    writeData(data);
    res.json({ ok: true });
});

// --- Gallery ---
app.post('/api/admin/gallery', requireAuth, (req, res) => {
    const { title, category, size, image } = req.body || {};
    if (!image) return res.status(400).json({ ok: false, error: 'Image URL required' });

    const data = readData();
    const newPhoto = {
        id: Date.now(),
        title: cleanHTML(title || ''),
        category: cleanHTML(category || 'competitions').toLowerCase(),
        size: cleanHTML(size || 'standard').toLowerCase(),
        image: cleanHTML(image)
    };
    data.gallery = [...(data.gallery || []), newPhoto];
    writeData(data);
    res.json({ ok: true, photo: newPhoto });
});

app.put('/api/admin/gallery/:id', requireAuth, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { title, category, size, image } = req.body || {};
    const data = readData();
    const item = (data.gallery || []).find(g => g.id === id);
    if (!item) return res.status(404).json({ ok: false, error: 'Gallery item not found' });

    if (title !== undefined) item.title = cleanHTML(title);
    if (category !== undefined) item.category = cleanHTML(category).toLowerCase();
    if (size !== undefined) item.size = cleanHTML(size).toLowerCase();
    if (image !== undefined) item.image = cleanHTML(image);

    writeData(data);
    res.json({ ok: true, photo: item });
});

app.delete('/api/admin/gallery/:id', requireAuth, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const data = readData();
    data.gallery = (data.gallery || []).filter(g => g.id !== id);
    writeData(data);
    res.json({ ok: true });
});

// --- Applications Management ---
app.get('/api/admin/applications', requireAuth, (_req, res) => {
    res.json(readData().applications || []);
});

app.put('/api/admin/applications/:id/status', requireAuth, (req, res) => {
    const { status } = req.body || {};
    const allowed = ['pending', 'reviewed', 'accepted', 'rejected'];
    if (!allowed.includes(status)) {
        return res.status(400).json({ ok: false, error: 'Invalid status' });
    }

    const data = readData();
    const appData = (data.applications || []).find(a => a.id === req.params.id);
    if (!appData) return res.status(404).json({ ok: false, error: 'Application not found' });

    appData.status = status;
    writeData(data);
    res.json({ ok: true, application: appData });
});

app.delete('/api/admin/applications/:id', requireAuth, (req, res) => {
    const data = readData();
    data.applications = (data.applications || []).filter(a => a.id !== req.params.id);
    writeData(data);
    res.json({ ok: true });
});

/* ============================================================
   📩 FORM SUBMISSION (JOIN FALCO)
   ============================================================ */
const submitLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 10,
    message: { ok: false, error: 'Ariza yuborish limiti oshdi. 1 soatdan so\'ng urinib ko\'ring.' }
});

app.post('/api/submit', submitLimiter, async (req, res) => {
    try {
        const b = req.body || {};

        // Bot Trap 1: Honeypot check
        if (b.website_url) {
            return res.status(400).json({ ok: false, error: 'Invalid request' });
        }

        // Bot Trap 2: Math Captcha check
        if (!b.captcha || Number(b.captcha) !== Number(b.captchaExpected)) {
            return res.status(400).json({ ok: false, error: 'Kaptcha noto\'g\'ri yechildi' });
        }

        // Bot Trap 3: Form completion time check (at least 2.5 seconds)
        const timeSpent = Date.now() - Number(b.formStartedAt || 0);
        if (timeSpent < 2500) {
            return res.status(400).json({ ok: false, error: 'Ariza juda tez to\'ldirildi. Iltimos, qaytadan yuboring.' });
        }

        // Field validation
        if (!b.fullName || b.fullName.trim().length < 2) {
            return res.status(400).json({ ok: false, error: 'Ism va familiya kamida 2 harf bo\'lishi kerak' });
        }
        if (!b.email || !b.email.includes('@') || !b.email.includes('.')) {
            return res.status(400).json({ ok: false, error: 'Email manzili noto\'g\'ri' });
        }
        if (!b.phone || b.phone.trim().length < 7) {
            return res.status(400).json({ ok: false, error: 'Telefon raqami noto\'g\'ri' });
        }

        const appData = {
            id: 'app_' + Date.now(),
            fullName: cleanHTML(b.fullName, 120),
            age: cleanHTML(b.age, 10),
            location: cleanHTML(b.location, 100),
            phone: cleanHTML(b.phone, 30),
            telegram: cleanHTML(b.telegram, 60),
            email: cleanHTML(b.email, 120),
            isStudent: cleanHTML(b.isStudent || 'No', 20),
            degree: cleanHTML(b.degree || '—', 50),
            degreeDesc: cleanHTML(b.degreeDesc || '—', 150),
            skills: cleanHTML(b.skills || '—', 150),
            skillDetails: cleanHTML(b.skillDetails || '—', 2000),
            experience: cleanHTML(b.experience || '—', 2000),
            socialLinks: cleanHTML(b.socialLinks || '—', 250),
            whyJoin: cleanHTML(b.whyJoin || '—', 2000),
            goal: cleanHTML(b.goal || '—', 2000),
            whyChoose: cleanHTML(b.whyChoose || '—', 2000),
            preferredRole: cleanHTML(b.preferredRole || '—', 250),
            timeCommitment: cleanHTML(b.timeCommitment || '—', 50),
            readyToParticipate: cleanHTML(b.readyToParticipate || 'Yes', 20),
            handleFailures: cleanHTML(b.handleFailures || '—', 2000),
            falcoCore: cleanHTML(b.falcoCore || 'No', 20),
            source: cleanHTML(b.source || 'Website', 50),
            additional: cleanHTML(b.additional || '—', 1000),
            status: 'pending',
            date: new Date().toISOString()
        };

        // Save to Database
        const db = readData();
        db.applications = [appData, ...(db.applications || [])];
        writeData(db);

        // Format Telegram Notification EXACTLY as requested by user template
        const tgMessage = [
            '🚀 <b>New Join Team Request</b>\n',
            `👤 <b>Full Name:</b> ${escTg(appData.fullName)}`,
            `🎂 <b>Age:</b> ${escTg(appData.age)}`,
            `📍 <b>Location:</b> ${escTg(appData.location)}\n`,
            `📞 <b>Phone:</b> ${escTg(appData.phone)}`,
            `💬 <b>Telegram:</b> ${escTg(appData.telegram)}`,
            `📩 <b>Email:</b> ${escTg(appData.email)}\n`,
            `🎓 <b>Student:</b> ${escTg(appData.isStudent)}`,
            `📘 <b>Degree:</b> ${escTg(appData.degree)}`,
            `📝 <b>Degree Description:</b> ${escTg(appData.degreeDesc)}\n`,
            `📌 <b>Skills:</b> ${escTg(appData.skills)}`,
            `📚 <b>Skill Details:</b> ${escTg(appData.skillDetails)}`,
            `🏆 <b>Experience:</b> ${escTg(appData.experience)}`,
            `🔗 <b>Social Links:</b> ${escTg(appData.socialLinks)}\n`,
            `🎯 <b>Why Join the Team:</b>\n${escTg(appData.whyJoin)}\n`,
            `🚀 <b>Goal:</b>\n${escTg(appData.goal)}\n`,
            `🤝 <b>Why We Should Choose Him:</b>\n${escTg(appData.whyChoose)}\n`,
            `👨‍💻 <b>Preferred Role:</b> ${escTg(appData.preferredRole)}`,
            `⏰ <b>Time Commitment:</b> ${escTg(appData.timeCommitment)}`,
            `✅ <b>Ready to Participate:</b> ${escTg(appData.readyToParticipate)}\n`,
            `🔁 <b>Handling Failures:</b>\n${escTg(appData.handleFailures)}\n`,
            `🔥 <b>Falco Core Member:</b> ${escTg(appData.falcoCore)}\n`,
            `💬 <b>Additional Message:</b>\n"${escTg(appData.additional)}"\n`,
            `📅 <b>Submitted At:</b> ${formatSubmittedDate(appData.date)}`
        ].join('\n');

        // Send the application to Falco OS. It saves the student in Intake,
        // posts this application to the Telegram group with Approve / Reject
        // buttons and gives back the student's personal bot link.
        let falco = null;
        if (CONFIG.FALCO_OS_URL && CONFIG.FALCO_OS_KEY) {
            try {
                const osRes = await fetch(`${CONFIG.FALCO_OS_URL}/api/integrations/site-application`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'x-falco-key': CONFIG.FALCO_OS_KEY },
                    body: JSON.stringify({ application: appData }),
                    signal: AbortSignal.timeout(10000)
                });
                const osJson = await osRes.json().catch(() => ({}));
                if (osRes.ok && osJson.ok) {
                    falco = osJson;
                    const saved = readData();
                    const stored = (saved.applications || []).find(a => a.id === appData.id);
                    if (stored) {
                        stored.falcoOsId = osJson.id;
                        writeData(saved);
                    }
                } else {
                    console.error('Falco OS rejected the application:', osJson.error || osRes.status);
                }
            } catch (osErr) {
                console.error('Falco OS is not reachable:', osErr.message);
            }
        }

        // If Falco OS already posted to the group, do not send it twice.
        // If Falco OS is off or down, the site posts to the group itself as before.
        if (!falco?.posted_to_telegram && CONFIG.BOT_TOKEN && CONFIG.CHAT_ID) {
            try {
                await fetch(`https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: CONFIG.CHAT_ID,
                        text: tgMessage,
                        parse_mode: 'HTML'
                    })
                });
            } catch (tgErr) {
                console.error('Telegram notification error:', tgErr.message);
            }
        }

        const reference = 'FALCO-' + Date.now().toString(36).toUpperCase();
        res.json({ ok: true, reference, id: appData.id, telegramUrl: falco?.telegram_url || '' });
    } catch (error) {
        console.error('Submit error:', error);
        res.status(500).json({ ok: false, error: 'Serverda xatolik yuz berdi' });
    }
});

/* ============================================================
   🌐 ROUTING & STATIC ASSETS
   ============================================================ */
// Static files (no-cache for admin/login to prevent stale browser cache)
app.use((req, res, next) => {
    if (req.path.startsWith('/admin') || req.path.startsWith('/login') || req.path.startsWith('/api/')) {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    }
    next();
});

app.use(express.static(path.join(__dirname, 'public'), { index: false }));

const cleanPages = {
    '/': 'index.html',
    '/about': 'about.html',
    '/opportunities': 'opportunities.html',
    '/projects': 'projects.html',
    '/achievements': 'achievements.html',
    '/team': 'team.html',
    '/gallery': 'gallery.html',
    '/contact': 'contact.html',
    '/join': 'join.html',
    '/success': 'success.html',
    '/login': 'login.html',
    '/admin': 'admin.html'
};

// Clean URL redirects
app.get('/:page.html', (req, res, next) => {
    const cleanUrl = '/' + req.params.page;
    if (cleanPages[cleanUrl]) {
        return res.redirect(301, cleanUrl);
    }
    next();
});

// Explicit routes
for (const [urlPath, htmlFile] of Object.entries(cleanPages)) {
    app.get(urlPath, (_req, res) => {
        res.sendFile(path.join(__dirname, 'public', htmlFile));
    });
}

// Redirect student portal paths to home (student portal disabled)
app.get(['/student', '/student-login', '/student.html', '/student-login.html'], (_req, res) => {
    res.redirect(302, '/');
});

// SPA fallback for non-file routes
app.use((_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Global error handler
app.use((err, _req, res, _next) => {
    console.error('Unhandled server error:', err);
    res.status(500).json({ ok: false, error: 'Internal server error' });
});

/* ============ START SERVER ============ */
app.listen(CONFIG.PORT, () => {
    console.log(`\n🦅 Falco Server started → http://localhost:${CONFIG.PORT}`);
    console.log(`🔒 Security active: Rate-limiting, HMAC Persistent Sessions, Multer Protection`);
    console.log(`📂 CMS API ready: Content, Photos, News, Team, Projects, Gallery, Applications, Uploads\n`);
});
