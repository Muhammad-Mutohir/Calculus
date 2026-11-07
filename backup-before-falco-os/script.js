/* ============================================================
   FALCO — SHARED SCRIPT
   ============================================================ */

const TRANSLATIONS = {
    uz: {
        'nav.home': 'Bosh sahifa', 'nav.about': 'Biz haqimizda', 'nav.opportunities': 'Imkoniyatlar', 'nav.achievements': 'Yutuqlar',
        'nav.projects': 'Loyihalar', 'nav.team': 'Jamoa', 'nav.gallery': 'Galereya', 'nav.contact': 'Aloqa', 'nav.join': 'Qo\'shilish',
        'btn.join': 'Falco\'ga qo\'shilish', 'btn.explore': 'Imkoniyatlarni ko\'rish',
        'hero.badge': 'Yoshlar ekosistemasi', 'hero.title': '<em class="serif">Ambitsiya</em> jamoasini topadi.',
        'hero.text': 'Falco ambitsiyali yoshlarni jamoalar, tanlovlar va imkoniyatlar bilan bog\'laydi — bu yerda salohiyat real natijalarga aylanadi.',
        'hero.members': 'A\'zolar', 'hero.projects': 'Loyihalar',
        'pillars.title': 'Nima uchun Falco?',
        'pillar1.title': 'Iste\'dod — yo\'nalish bilan', 'pillar1.text': 'Ambitsiyali yoshlarga o\'z ko\'nikmalarini qayerda qo\'llash mumkinligini aniqlashga yordam beramiz.',
        'pillar2.title': 'Odamlar — jamoalarga', 'pillar2.text': 'Umumiy maqsad, to\'ldiruvchi ko\'nikmalar va mazmunli ish atrofida odamlarni birlashtiramiz.',
        'pillar3.title': 'Salohiyat — natijaga', 'pillar3.text': 'Loyihalar, tanlovlar va o\'lchanadigan natijalar orqali o\'rganishni rag\'batlantiramiz.',
        'results.eyebrow': 'NATIJALAR GAPIRADI', 'results.title': 'Harakat orqali qurilgan. Natijalar bilan isbotlangan.',
        'results.text': 'Xalqaro muhandislik tanlovlaridan zamonaviy texnologiyalargacha.',
        'results.more': 'Barcha yutuqlar',
        'results.item1.meta': '2025 · XITOY · WorldSkills', 'results.item1.title': 'Kumush · 2-o\'rin', 'results.item1.sub': 'Logistika tanlovi', 'results.item1.cta': 'Yutuqni ko\'rish',
        'results.item2.meta': '2024 · YAPONIYA · Madaniyatlararo muhandislik', 'results.item2.title': '1-o\'rin · Ochiq ishlab chiqarish innovatsiyasi', 'results.item2.sub': 'Xalqaro loyiha tanlovi', 'results.item2.cta': 'Yutuqni ko\'rish',
        'explore.eyebrow': 'KATEGORIYALARNI O\'RGANISH', 'explore.title': 'Falco\'da <em class="serif">o\'z yo\'lingizni</em> toping.',
        'explore.text': 'Turli qiziqishlar. Bitta ekosistema. Eng katta ta\'sir ko\'rsatishingiz mumkin bo\'lgan sohani tanlang.',
        'cat.competitions': 'Tanlovlar', 'cat.competitions.text': 'O\'z mahoratingizni sinab ko\'ring va xalqaro sahnada Falco\'ni himoya qiling.',
        'cat.projects': 'Loyihalar va texnologiya', 'cat.projects.text': 'Iste\'dodli odamlar bilan g\'oyalarni real yechimlarga aylantiring.',
        'cat.startups': 'Startaplar', 'cat.startups.text': 'G\'oyalarni tekshiring va jamoa ko\'magi bilan yechimlar yarating.',
        'cat.community': 'Hamjamiyat', 'cat.community.text': 'Ambitsiyali odamlar bilan tanishing va birgalikda o\'sing.',
        'cat.cta': 'Batafsil',

        // NEWS SECTION
        'news.eyebrow': 'SO\'NGGI YANGILIKLAR',
        'news.title': 'Yangiliklar va e\'lonlar',
        'news.text': 'Falco hamjamiyatida nimalar bo\'layotganini kuzatib boring.',

        'proj.eyebrow': 'G\'OYALAR HARAKATGA', 'proj.title': 'Ambitsiya bilan qurilgan. G\'oyalar bilan boshqariladi.',
        'proj.text': 'Loyihalar, startaplar va ambitsiyali jamoalarni kashf eting.', 'proj.more': 'Barcha loyihalar',
        'proj.agro.meta': 'STARTAP · AGROTECH', 'proj.agro.title': 'AgroBoost', 'proj.agro.sub': 'Aqlli qishloq xo\'jaligi uchun texnologik yechimlar', 'proj.agro.cta': 'Loyihani ko\'rish',
        'proj.robotics.meta': 'MUHANDISLIK · HARDWARE', 'proj.robotics.title': 'Muhandislik va robototexnika', 'proj.robotics.sub': 'Prototiplar, avtomatlashtirish', 'proj.robotics.cta': 'Loyihalarni ko\'rish',
        'team.eyebrow': 'ODAMLAR BILAN TANISHISH', 'team.title': 'Har bir yutuq ortida <em class="serif">jamoa</em> turadi.', 'team.text': 'Turli sohalardan kelgan ambitsiyali odamlarni birlashtiramiz.', 'team.more': 'Barcha jamoa',
        'gallery.eyebrow': 'GALEREYA', 'gallery.title': 'Bizni Falco qilgan <em class="serif">lahzalar</em>.', 'gallery.text': 'Tanlovlar va loyihalardan to tadbirlargacha.', 'gallery.more': 'Barcha galereya',
        'cta.title': 'Kerakli imkoniyatni topa olmadingizmi?', 'cta.text': 'Bizga qiziqishingiz haqida aytib bering.', 'cta.btn': 'Falco hamjamiyatiga qo\'shilish',
        'about.eyebrow': 'FALCO HAQIDA', 'about.title': 'Jamoadan ko\'proq. <em class="serif">Kelajak uchun platforma.</em>',
        'about.text': 'Falco — M Company tarkibidagi yoshlar ekosistemasi. Biz iste\'dodlarni topamiz, rivojlantiramiz va real imkoniyatlar bilan bog\'laymiz.',
        'about.whatwedo.eyebrow': 'BIZ NIMA QILAMIZ', 'about.whatwedo.title': 'Tanlovlar, hamkorlikdagi loyihalar, jamoa shakllantirish va startap rivojlantirish orqali.',
        'about.whatwedo.text1': 'Falco odamlarga o\'zlarini sinab ko\'rish va hissa qo\'shish yo\'llarini yaratadi.',
        'about.whatwedo.text2': 'Biz shunchaki odamlarni birlashtirmaymiz. Biz iste\'dodni imkoniyatlar bilan bog\'laymiz.',
        'about.stats.members': 'A\'zolar', 'about.stats.projects': 'Loyihalar', 'about.stats.mentors': 'Mentorlar', 'about.stats.free': 'Bepul',
        'about.matters.title': 'Muhimi — siz nima olib kelishga tayyorsiz.',
        'about.matters.initiative': 'Tashabbus', 'about.matters.initiativeText': 'Siz mukammal lahzani kutmasdan harakat qilasiz.',
        'about.matters.curiosity': 'Qiziquvchanlik', 'about.matters.curiosityText': 'Siz o\'rganishga tayyorsiz.',
        'opp.eyebrow': 'IMKONIYATLARNI O\'RGANISH', 'opp.title': 'Falco\'da <em class="serif">o\'z yo\'lingizni</em> toping.', 'opp.text': 'Turli qiziqishlar. Bitta ekosistema.',
        'opp.c1.title': 'Tanlovlar va chaqiriqlar', 'opp.c1.text': 'O\'z mahoratingizni sinab ko\'ring.', 'opp.c1.l1': 'Muhandislik tanlovlar', 'opp.c1.l2': 'Biznes chempionatlari', 'opp.c1.l3': 'Ko\'nikmalar', 'opp.c1.l4': 'Jamoani tayyorlash', 'opp.c1.cta': 'Tanlovlarni ko\'rish',
        'opp.c2.title': 'Loyihalar va texnologiya', 'opp.c2.text': 'G\'oyalarni real yechimlarga aylantiring.', 'opp.c2.l1': 'Robototexnika', 'opp.c2.l2': 'Dasturiy ta\'minot', 'opp.c2.l3': 'Tadqiqot', 'opp.c2.l4': 'Real muammolar', 'opp.c2.cta': 'Loyihalarni ko\'rish',
        'opp.c3.title': 'Startaplar', 'opp.c3.text': 'G\'oyalarni tekshiring.', 'opp.c3.l1': 'Idea validation', 'opp.c3.l2': 'Mentorlik', 'opp.c3.l3': 'Pitch', 'opp.c3.l4': 'Resurslar', 'opp.c3.cta': 'Startaplarni ko\'rish',
        'opp.c4.title': 'Hamjamiyat', 'opp.c4.text': 'Birgalikda o\'sing.', 'opp.c4.l1': 'Networking', 'opp.c4.l2': 'Tadbirlar', 'opp.c4.l3': 'Bilim almashish', 'opp.c4.l3b': 'Shaxsiy o\'sish', 'opp.c4.cta': 'Hamjamiyatni ko\'rish',
        'opp.g1.title': 'Global imkoniyatlar', 'opp.g1.text': 'Xalqaro sahnada Falco\'ni himoya qiling.',
        'opp.g2.title': 'Volontyorlik', 'opp.g2.text': 'Muhim sabablarga hissa qo\'shing.',
        'opp.g3.title': 'Ish va frilans', 'opp.g3.text': 'Haqiqiy loyihalar va pullik imkoniyatlar.',
        'opp.cta.eyebrow': 'QAYERGA MOSLIGINGIZNI BILMAYSIZMI?', 'opp.cta.title': 'Hammasini <em class="serif">o\'rganib chiqing</em>.', 'opp.cta.text': 'Bir nechta sohalarda bo\'lishingiz mumkin.', 'opp.cta.btn': 'Barcha imkoniyatlar',
        'projpage.eyebrow': 'G\'OYALAR HARAKATGA', 'projpage.title': 'Ambitsiya bilan qurilgan. <em class="serif">G\'oyalar bilan boshqariladi.</em>', 'projpage.text': 'Loyihalar, startaplar.',
        'projpage.filter.all': 'Barchasi', 'projpage.filter.startup': 'Startaplar', 'projpage.filter.hardware': 'Hardware', 'projpage.filter.software': 'Software', 'projpage.filter.research': 'Tadqiqot',
        'projpage.p1.title': 'AgroBoost', 'projpage.p1.sub': 'Aqlli qishloq xo\'jaligi', 'projpage.p1.meta': 'STARTAP · AGROTECH', 'projpage.p1.cta': 'Ko\'rish',
        'projpage.p2.title': 'FreshLine Pro', 'projpage.p2.sub': 'Ta\'minot zanjiri platformasi', 'projpage.p2.meta': 'STARTAP · FOOD-TECH', 'projpage.p2.cta': 'Ko\'rish',
        'projpage.p3.title': 'RobCont', 'projpage.p3.sub': 'Avtonom robototexnika', 'projpage.p3.meta': 'MUHANDISLIK · ROBOTOTEKNIKA', 'projpage.p3.cta': 'Ko\'rish',
        'projpage.p4.title': 'FoodQuest', 'projpage.p4.sub': 'Ovqat qidirish ilovasi', 'projpage.p4.meta': 'SOFTWARE · MOBIL', 'projpage.p4.cta': 'Ko\'rish',
        'projpage.p5.title': 'ClinicGo', 'projpage.p5.sub': 'Klinika platformasi', 'projpage.p5.meta': 'STARTAP · HEALTHTECH', 'projpage.p5.cta': 'Ko\'rish',
        'projpage.p6.title': 'VisionEdge', 'projpage.p6.sub': 'Edge-AI nazorat', 'projpage.p6.meta': 'TADQIQOT · AI', 'projpage.p6.cta': 'Ko\'rish',
        'projpage.cta.eyebrow': 'O\'Z G\'OYANGIZ BORMI?', 'projpage.cta.title': 'Falco bilan qurishni boshlang.', 'projpage.cta.text': 'G\'oyalarni loyihalarga aylantiramiz.', 'projpage.cta.btn': 'Falco bilan qurish',
        'ach.eyebrow': 'NATIJALAR GAPIRADI · 2024–2026', 'ach.title': 'Harakat orqali qurilgan. <em class="serif">Natijalar bilan isbotlangan.</em>', 'ach.text': 'Xalqaro tanlovlardan texnologiyalargacha.',
        'ach.s1': 'Tanlovlar', 'ach.s2': 'Medallar', 'ach.s3': 'Davlatlar', 'ach.s4': 'Mukofotlar',
        'ach.a1.meta': '2025 · XITOY · WorldSkills', 'ach.a1.title': 'Kumush · 2-o\'rin', 'ach.a1.sub': 'Logistika', 'ach.a1.text': 'Xalqaro tanlovda kumush medal.',
        'ach.a2.meta': '2024 · YAPONIYA', 'ach.a2.title': '1-o\'rin', 'ach.a2.sub': 'Xalqaro loyiha', 'ach.a2.text': '1-o\'rin madaniyatlararo muhandislikda.',
        'ach.a3.meta': '2024 · J.KOREYA · Robototexnika', 'ach.a3.title': 'Top 5 finalist', 'ach.a3.sub': 'Avtonom robototexnika', 'ach.a3.text': '40+ jamoa orasida top 5.',
        'ach.a4.meta': '2025 · O\'ZBEKISTON · President Tech Award', 'ach.a4.title': 'Maxsus eslatma', 'ach.a4.sub': 'Milliy mukofot', 'ach.a4.text': 'Raqamli transformatsiya uchun.',
        'ach.more.title': 'Ishtirokdan ko\'proq.', 'ach.more.text': 'Muhandislik, texnologiya va xalqaro raqobatda o\'sish.',
        'teamPage.eyebrow': 'ODAMLAR BILAN TANISHISH', 'teamPage.title': 'Har bir yutuq ortida <em class="serif">jamoa</em> turadi.', 'teamPage.text': 'Ambitsiyali odamlar.',
        'teamPage.filter.all': 'Barchasi', 'teamPage.filter.core': 'Asosiy', 'teamPage.filter.tech': 'Texnologiya', 'teamPage.filter.business': 'Biznes', 'teamPage.filter.media': 'Media',
        'teamPage.p1.role': 'Asoschi / CEO', 'teamPage.p1.name': 'Abdulla Karimov', 'teamPage.p1.desc': 'Falco\'ni ekosistemaga aylantirmoqda.',
        'teamPage.p2.role': 'Biznes', 'teamPage.p2.name': 'Gulnora Matkarimova', 'teamPage.p2.desc': 'Loyihalarni hamkorlar bilan bog\'laydi.',
        'teamPage.p3.role': 'Bosh muhandis', 'teamPage.p3.name': 'Bekzod Rakhimov', 'teamPage.p3.desc': 'Texnologiya loyihalari.',
        'teamPage.p4.role': 'Media', 'teamPage.p4.name': 'Madina Ismailova', 'teamPage.p4.desc': 'Hikoyalar aytib beradi.',
        'teamPage.p5.role': 'Dasturchi', 'teamPage.p5.name': 'Azizbek Tursunov', 'teamPage.p5.desc': 'Raqamli mahsulotlar.',
        'teamPage.p6.role': 'PM', 'teamPage.p6.name': 'Nilufar Yusupova', 'teamPage.p6.desc': 'Jamoalarni muvofiqlashtiradi.',
        'teamPage.p7.role': 'Robototexnika', 'teamPage.p7.name': 'Sardor Jumayev', 'teamPage.p7.desc': 'Avtonom tizimlar.',
        'teamPage.p8.role': 'Kontent', 'teamPage.p8.name': 'Dilnoza Rasulova', 'teamPage.p8.desc': 'Vizual kontent.',
        'teamPage.stats.members': 'A\'zolar', 'teamPage.stats.mentors': 'Mentorlar', 'teamPage.stats.teams': 'Jamoalar', 'teamPage.stats.countries': 'Davlatlar',
        'teamPage.cta.eyebrow': 'KEYINGI QADAM', 'teamPage.cta.title': 'Quruvchilar hamjamiyati.', 'teamPage.cta.text': 'Hissa qo\'shishga tayyormisiz?', 'teamPage.cta.btn': 'Falco\'ga qo\'shilish',
        'gal.eyebrow': 'GALEREYA', 'gal.title': 'Bizni Falco qilgan <em class="serif">lahzalar</em>.', 'gal.text': 'Jamoamiz hayotidan lavhalar.',
        'gal.filter.all': 'Barchasi', 'gal.filter.competitions': 'Tanlovlar', 'gal.filter.projects': 'Loyihalar', 'gal.filter.events': 'Tadbirlar', 'gal.filter.community': 'Hamjamiyat',
        'gal.s1': 'Fotosuratlar', 'gal.s2': 'Tadbirlar', 'gal.s3': 'Sayohatlar', 'gal.s4': 'Yillar',
        'gal.more.title': 'Fotosuratlardan ko\'proq — <em class="serif">harakatdagi hamjamiyat</em>.', 'gal.more.text': 'Har bir surat real lahzani aks ettiradi.',
        'contactPage.eyebrow': 'BOG\'LANING', 'contactPage.title': 'Biz bilan <em class="serif">bog\'laning</em>.', 'contactPage.text': 'Savollaringiz bormi?',
        'contact.address': 'Manzil', 'contact.phone': 'Telefon / Telegram', 'contact.email': 'Email',
        'contact.cta.eyebrow': 'HAMJAMIYATGA QO\'SHILING', 'contact.cta.title': 'Kattaroq narsaning bir qismi bo\'ling.', 'contact.cta.text': 'Arizalar ochiq.', 'contact.cta.btn': 'Falco\'ga qo\'shilish', 'contact.cta.tg': 'Telegramda yozish',
        'contact.faq.eyebrow': 'FAQ', 'contact.faq.title': 'Ko\'p beriladigan <em class="serif">savollar</em>',
        'contact.faq.q1': 'Qanday qo\'shilaman?', 'contact.faq.a1': 'Join sahifasidagi arizani to\'ldiring.',
        'contact.faq.q2': 'Bepulmi?', 'contact.faq.a2': 'Ha, mutlaqo bepul.',
        'contact.faq.q3': 'Texnik bilim kerakmi?', 'contact.faq.a3': 'Yo\'q, ko\'plab yo\'nalishlar bor.',
        'contact.faq.q4': 'Qanday imkoniyatlar?', 'contact.faq.a4': 'Tanlovlar, loyihalar, startaplar, mentorlar.',
        'contact.faq.q5': 'Hamkorlik qilish mumkinmi?', 'contact.faq.a5': 'Ha, partners@falco.uz manziliga yozing.',
        'join.eyebrow': 'FALCO\'GA QO\'SHILISH', 'join.title': 'Sizning navbatdagi <em class="serif">bobingiz</em> shu yerdan boshlanadi.', 'join.text': 'Arizani to\'ldiring. Bir necha daqiqa vaqt oladi.',
        'join.step1': '01 — Siz haqingizda', 'join.step2': '02 — Ta\'lim', 'join.step3': '03 — Ko\'nikmalar', 'join.step4': '04 — Motivatsiya', 'join.step5': '05 — Yakuniy',
        'join.s1.title': 'Keling, tanishaylik', 'join.s1.desc': 'Kim ekanligingizni aytib bering.',
        'join.fullName': 'To\'liq ism', 'join.fullName.ph': 'Zafarov Behruzjon',
        'join.age': 'Yosh', 'join.age.ph': '18', 'join.location': 'Manzil', 'join.location.ph': 'Toshkent',
        'join.phone': 'Telefon', 'join.phone.ph': '+998 90 123 45 67', 'join.telegram': 'Telegram', 'join.telegram.ph': '@username',
        'join.email': 'Email', 'join.email.ph': 'you@example.com',
        'join.s2.title': 'Ta\'lim', 'join.s2.desc': 'Qayerda o\'qiysiz?', 'join.isStudent': 'Talabamisiz?', 'join.degree': 'Ta\'lim darajasi', 'join.degreeDesc': 'Yo\'nalish / Universitet', 'join.degreeDesc.ph': 'TATU, Iqtisodiyot',
        'join.select': 'Tanlang', 'join.yes': 'Ha', 'join.no': 'Yo\'q',
        'join.s3.title': 'Ko\'nikma va tajriba', 'join.s3.desc': 'Nima olib kelishingiz mumkin?', 'join.skills': 'Asosiy yo\'nalish', 'join.skills.select': 'Yo\'nalishni tanlang',
        'join.skillDetails': 'Ko\'nikma tafsilotlari', 'join.skillDetails.ph': 'Qaysi tillar, texnologiyalar?', 'join.experience': 'Tajriba', 'join.experience.ph': 'Loyihalar, tanlovlar?',
        'join.socialLinks': 'Ijtimoiy havolalar', 'join.socialLinks.ph': 'https://github.com/username',
        'join.s4.title': 'Motivatsiyangiz', 'join.s4.desc': 'Nega Falco?', 'join.whyJoin': 'Nega qo\'shilmoqchisiz?', 'join.whyJoin.ph': 'Sizni nima rag\'batlantiradi?',
        'join.goal': 'Maqsadingiz', 'join.goal.ph': 'Nimaga erishmoqchisiz?', 'join.whyChoose': 'Nega aynan siz?', 'join.whyChoose.ph': 'Kuchli tomonlaringiz...',
        'join.s5.title': 'Oxirgi savollar', 'join.s5.desc': 'Deyarli tayyor.', 'join.preferredRole': 'Rol', 'join.preferredRole.ph': 'Frontend developer...',
        'join.timeCommitment': 'Vaqt', 'join.ready': 'Tayyormisiz?', 'join.failures': 'Muvaffaqiyatsizlikni hal qilish', 'join.failures.ph': 'Munosabat...',
        'join.falcoCore': 'Falco Core Member?', 'join.source': 'Qayerdan topdingiz?', 'join.source.tg': 'Telegram', 'join.source.ig': 'Instagram', 'join.source.friend': 'Do\'st', 'join.source.uni': 'Universitet', 'join.source.other': 'Boshqa',
        'join.additional': 'Qo\'shimcha', 'join.additional.ph': 'Yana nima?', 'join.agree': 'Men shaxsiy ma\'lumotlarimni qayta ishlashga ruxsat beraman.',
        'join.next': 'Davom etish', 'join.back': 'Orqaga', 'join.submit': 'Yuborish', 'join.sending': 'Yuborilmoqda...',
        'join.aside.title': 'Falco\'ning bir qismi bo\'ling.', 'join.aside.text': 'Hamjamiyatga qo\'shilish bepul.',
        'join.aside.b1': 'Loyihalar va tanlovlar', 'join.aside.b2': 'Ambitsiyadoshlar', 'join.aside.b3': 'O\'rganish va o\'sish',
        'join.aside.note': 'CV shart emas.',
        'join.faq.title': 'Ko\'p beriladigan <em class="serif">savollar</em>',
        'join.faq.q1': 'Ariza qancha vaqt ko\'riladi?', 'join.faq.a1': 'Odatda 24 soat ichida.',
        'join.faq.q2': 'Tanlov mezonlari?', 'join.faq.a2': 'Motivatsiya, ko\'nikmalar, moslik.',
        'join.faq.q3': 'Rad etilsa?', 'join.faq.a3': '3-6 oydan keyin yana urinib ko\'ring.',
        'join.faq.q4': 'Bir nechta yo\'nalish?', 'join.faq.a4': 'Arizada bitta. Keyin o\'zgartirish mumkin.',
        'success.title': 'Sizning navbatdagi bobingiz shu yerdan boshlanadi.', 'success.text': 'Falco\'ga ariza topshirganingiz uchun rahmat.',
        'success.ref': 'Ariza raqami: yuborilgandan so\'ng yaratiladi', 'success.back': 'Bosh sahifaga qaytish',
        'footer.tagline': 'Ambitsiya jamoasini topadi.', 'footer.platform': 'Platforma', 'footer.company': 'Kompaniya', 'footer.social': 'Ijtimoiy',
        'footer.rights': '© 2024–2026 Falco. Barcha huquqlar himoyalangan.', 'footer.privacy': 'Maxfiylik', 'footer.terms': 'Shartlar',
        'err.required': 'Bu maydonni to\'ldiring', 'err.email': 'Email noto\'g\'ri', 'err.phone': 'Telefon noto\'g\'ri', 'err.age': 'Yosh 16–32', 'err.telegram': '@username (4–32)', 'err.min': 'Juda qisqa', 'err.agree': 'Rozilik bering', 'err.send': 'Xatolik.',
    },

    ru: {
        'nav.home': 'Главная', 'nav.about': 'О нас', 'nav.opportunities': 'Возможности', 'nav.achievements': 'Достижения',
        'nav.projects': 'Проекты', 'nav.team': 'Команда', 'nav.gallery': 'Галерея', 'nav.contact': 'Контакты', 'nav.join': 'Присоединиться',
        'btn.join': 'Присоединиться к Falco', 'btn.explore': 'Смотреть возможности',
        'hero.badge': 'Молодёжная экосистема', 'hero.title': '<em class="serif">Амбиция</em> находит свою команду.',
        'hero.text': 'Falco связывает амбициозных людей с командами, вызовами и возможностями.',
        'hero.members': 'Участников', 'hero.projects': 'Проектов',
        'pillars.title': 'Почему Falco?',
        'pillar1.title': 'Талант — с направлением', 'pillar1.text': 'Помогаем определить, где навыки могут пригодиться.',
        'pillar2.title': 'Люди — в команды', 'pillar2.text': 'Соединяем людей вокруг общих задач.',
        'pillar3.title': 'Потенциал — в результат', 'pillar3.text': 'Поощряем обучение через проекты.',
        'results.eyebrow': 'РЕЗУЛЬТАТЫ ГОВОРЯТ', 'results.title': 'Построено действием. Доказано результатами.',
        'results.text': 'От международных соревнований до технологий.', 'results.more': 'Все достижения',
        'results.item1.meta': '2025 · КИТАЙ · WorldSkills', 'results.item1.title': 'Серебро · 2-е', 'results.item1.sub': 'Логистика', 'results.item1.cta': 'Смотреть',
        'results.item2.meta': '2024 · ЯПОНИЯ', 'results.item2.title': '1-е · Производственные инновации', 'results.item2.sub': 'Международный проект', 'results.item2.cta': 'Смотреть',
        'explore.eyebrow': 'ИЗУЧИТЕ КАТЕГОРИИ', 'explore.title': 'Найдите свой <em class="serif">путь в Falco</em>.', 'explore.text': 'Разные интересы. Одна экосистема.',
        'cat.competitions': 'Соревнования', 'cat.competitions.text': 'Проверьте навыки и представляйте Falco.',
        'cat.projects': 'Проекты и технологии', 'cat.projects.text': 'Превращайте идеи в решения.',
        'cat.startups': 'Стартапы', 'cat.startups.text': 'Исследуйте идеи с поддержкой.',
        'cat.community': 'Сообщество', 'cat.community.text': 'Растите вместе.',
        'cat.cta': 'Подробнее',

        // NEWS SECTION
        'news.eyebrow': 'ПОСЛЕДНИЕ НОВОСТИ',
        'news.title': 'Новости и обновления',
        'news.text': 'Узнайте, что происходит в сообществе Falco.',

        'proj.eyebrow': 'ИДЕИ В ДЕЙСТВИИ', 'proj.title': 'Построено амбицией. Управляется идеями.', 'proj.text': 'Откройте проекты.', 'proj.more': 'Все проекты',
        'proj.agro.meta': 'СТАРТАП · АГРОТЕХ', 'proj.agro.title': 'AgroBoost', 'proj.agro.sub': 'Технологии для сельского хозяйства', 'proj.agro.cta': 'Смотреть',
        'proj.robotics.meta': 'ИНЖЕНЕРИЯ · HARDWARE', 'proj.robotics.title': 'Инженерия и робототехника', 'proj.robotics.sub': 'Прототипы, автоматизация', 'proj.robotics.cta': 'Смотреть',
        'team.eyebrow': 'ПОЗНАКОМЬТЕСЬ', 'team.title': 'За каждым достижением <em class="serif">команда</em>.', 'team.text': 'Амбициозные люди.', 'team.more': 'Вся команда',
        'gallery.eyebrow': 'ГАЛЕРЕЯ', 'gallery.title': '<em class="serif">Моменты</em> Falco.', 'gallery.text': 'Из жизни команды.', 'gallery.more': 'Вся галерея',
        'cta.title': 'Не нашли возможность?', 'cta.text': 'Расскажите о своих интересах.', 'cta.btn': 'Присоединиться',
        'about.eyebrow': 'О FALCO', 'about.title': 'Больше чем команда. <em class="serif">Платформа для будущего.</em>',
        'about.text': 'Falco — молодёжная экосистема в составе M Company.',
        'about.whatwedo.eyebrow': 'ЧТО МЫ ДЕЛАЕМ', 'about.whatwedo.title': 'Через соревнования, проекты и развитие стартапов.',
        'about.whatwedo.text1': 'Создаём пути для развития.', 'about.whatwedo.text2': 'Соединяем талант с возможностями.',
        'about.stats.members': 'Участников', 'about.stats.projects': 'Проектов', 'about.stats.mentors': 'Менторов', 'about.stats.free': 'Бесплатно',
        'about.matters.title': 'Важно то, что вы готовы привнести.', 'about.matters.initiative': 'Инициатива', 'about.matters.initiativeText': 'Действуйте.',
        'about.matters.curiosity': 'Любознательность', 'about.matters.curiosityText': 'Учитесь и улучшайтесь.',
        'opp.eyebrow': 'ИЗУЧИТЕ ВОЗМОЖНОСТИ', 'opp.title': 'Найдите свой <em class="serif">путь в Falco</em>.', 'opp.text': 'Одна экосистема.',
        'opp.c1.title': 'Соревнования', 'opp.c1.text': 'Проверьте навыки.', 'opp.c1.l1': 'Инженерные', 'opp.c1.l2': 'Бизнес', 'opp.c1.l3': 'Навыки', 'opp.c1.l4': 'Подготовка', 'opp.c1.cta': 'Смотреть',
        'opp.c2.title': 'Проекты', 'opp.c2.text': 'Идеи в решения.', 'opp.c2.l1': 'Робототехника', 'opp.c2.l2': 'ПО', 'opp.c2.l3': 'Исследования', 'opp.c2.l4': 'Реальные задачи', 'opp.c2.cta': 'Смотреть',
        'opp.c3.title': 'Стартапы', 'opp.c3.text': 'Развивайте идеи.', 'opp.c3.l1': 'Валидация', 'opp.c3.l2': 'Менторство', 'opp.c3.l3': 'Питч', 'opp.c3.l4': 'Ресурсы', 'opp.c3.cta': 'Смотреть',
        'opp.c4.title': 'Сообщество', 'opp.c4.text': 'Растите вместе.', 'opp.c4.l1': 'Нетворкинг', 'opp.c4.l2': 'События', 'opp.c4.l3': 'Знания', 'opp.c4.l3b': 'Рост', 'opp.c4.cta': 'Смотреть',
        'opp.g1.title': 'Глобальные возможности', 'opp.g1.text': 'Представляйте Falco.',
        'opp.g2.title': 'Волонтёрство', 'opp.g2.text': 'Вносите вклад.',
        'opp.g3.title': 'Работа', 'opp.g3.text': 'Реальные проекты.',
        'opp.cta.eyebrow': 'НЕ ЗНАЕТЕ?', 'opp.cta.title': 'Изучите <em class="serif">всё</em>.', 'opp.cta.text': 'Можно несколько.', 'opp.cta.btn': 'Все возможности',
        'projpage.eyebrow': 'ИДЕИ В ДЕЙСТВИИ', 'projpage.title': 'Построено амбицией. <em class="serif">Управляется идеями.</em>', 'projpage.text': 'Проекты, стартапы.',
        'projpage.filter.all': 'Все', 'projpage.filter.startup': 'Стартапы', 'projpage.filter.hardware': 'Hardware', 'projpage.filter.software': 'Software', 'projpage.filter.research': 'Исследования',
        'projpage.p1.title': 'AgroBoost', 'projpage.p1.sub': 'Умное сельское хозяйство', 'projpage.p1.meta': 'СТАРТАП · АГРОТЕХ', 'projpage.p1.cta': 'Смотреть',
        'projpage.p2.title': 'FreshLine Pro', 'projpage.p2.sub': 'Прозрачность поставок', 'projpage.p2.meta': 'СТАРТАП · FOOD-TECH', 'projpage.p2.cta': 'Смотреть',
        'projpage.p3.title': 'RobCont', 'projpage.p3.sub': 'Автономная робототехника', 'projpage.p3.meta': 'ИНЖЕНЕРИЯ · РОБОТОТЕХНИКА', 'projpage.p3.cta': 'Смотреть',
        'projpage.p4.title': 'FoodQuest', 'projpage.p4.sub': 'Поиск еды', 'projpage.p4.meta': 'SOFTWARE · МОБИЛЬНОЕ', 'projpage.p4.cta': 'Смотреть',
        'projpage.p5.title': 'ClinicGo', 'projpage.p5.sub': 'Запись в клинику', 'projpage.p5.meta': 'СТАРТАП · HEALTHTECH', 'projpage.p5.cta': 'Смотреть',
        'projpage.p6.title': 'VisionEdge', 'projpage.p6.sub': 'Edge-AI контроль', 'projpage.p6.meta': 'ИССЛЕДОВАНИЯ · AI', 'projpage.p6.cta': 'Смотреть',
        'projpage.cta.eyebrow': 'ЕСТЬ ИДЕЯ?', 'projpage.cta.title': 'Стройте с Falco.', 'projpage.cta.text': 'Поможем реализовать.', 'projpage.cta.btn': 'Строить',
        'ach.eyebrow': 'РЕЗУЛЬТАТЫ · 2024–2026', 'ach.title': 'Построено действием. <em class="serif">Доказано результатами.</em>', 'ach.text': 'От соревнований до технологий.',
        'ach.s1': 'Соревнований', 'ach.s2': 'Медалей', 'ach.s3': 'Стран', 'ach.s4': 'Наград',
        'ach.a1.meta': '2025 · КИТАЙ · WorldSkills', 'ach.a1.title': 'Серебро · 2-е', 'ach.a1.sub': 'Логистика', 'ach.a1.text': 'Серебро на международном конкурсе.',
        'ach.a2.meta': '2024 · ЯПОНИЯ', 'ach.a2.title': '1-е', 'ach.a2.sub': 'Международный проект', 'ach.a2.text': '1-е место.',
        'ach.a3.meta': '2024 · ЮЖ. КОРЕЯ', 'ach.a3.title': 'Топ-5', 'ach.a3.sub': 'Робототехника', 'ach.a3.text': 'Топ-5 из 40+.',
        'ach.a4.meta': '2025 · УЗБЕКИСТАН', 'ach.a4.title': 'Особое', 'ach.a4.sub': 'Премия', 'ach.a4.text': 'За инновации.',
        'ach.more.title': 'Больше чем участие.', 'ach.more.text': 'Растущий послужной список.',
        'teamPage.eyebrow': 'ЛЮДИ', 'teamPage.title': 'За достижениями <em class="serif">команда</em>.', 'teamPage.text': 'Амбициозные люди.',
        'teamPage.filter.all': 'Все', 'teamPage.filter.core': 'Ядро', 'teamPage.filter.tech': 'Технологии', 'teamPage.filter.business': 'Бизнес', 'teamPage.filter.media': 'Медиа',
        'teamPage.p1.role': 'Основатель / CEO', 'teamPage.p1.name': 'Абдулла Каримов', 'teamPage.p1.desc': 'Строит экосистему.',
        'teamPage.p2.role': 'Бизнес', 'teamPage.p2.name': 'Гульнора Маткаримова', 'teamPage.p2.desc': 'Партнёры и ресурсы.',
        'teamPage.p3.role': 'Ведущий инженер', 'teamPage.p3.name': 'Бекзод Рахимов', 'teamPage.p3.desc': 'Техпроекты.',
        'teamPage.p4.role': 'Медиа', 'teamPage.p4.name': 'Мадина Исмаилова', 'teamPage.p4.desc': 'Истории.',
        'teamPage.p5.role': 'Разработчик', 'teamPage.p5.name': 'Азизбек Турсунов', 'teamPage.p5.desc': 'Цифровые продукты.',
        'teamPage.p6.role': 'PM', 'teamPage.p6.name': 'Нилуфар Юсупова', 'teamPage.p6.desc': 'Координация.',
        'teamPage.p7.role': 'Робототехника', 'teamPage.p7.name': 'Сардор Джумаев', 'teamPage.p7.desc': 'Автономные системы.',
        'teamPage.p8.role': 'Контент', 'teamPage.p8.name': 'Дильноза Расулова', 'teamPage.p8.desc': 'Визуал.',
        'teamPage.stats.members': 'Участников', 'teamPage.stats.mentors': 'Менторов', 'teamPage.stats.teams': 'Команд', 'teamPage.stats.countries': 'Стран',
        'teamPage.cta.eyebrow': 'СЛЕДУЮЩИЙ ШАГ', 'teamPage.cta.title': 'Сообщество созидателей.', 'teamPage.cta.text': 'Готовы?', 'teamPage.cta.btn': 'Присоединиться',
        'gal.eyebrow': 'ГАЛЕРЕЯ', 'gal.title': '<em class="serif">Моменты</em> Falco.', 'gal.text': 'Из жизни команды.',
        'gal.filter.all': 'Все', 'gal.filter.competitions': 'Соревнования', 'gal.filter.projects': 'Проекты', 'gal.filter.events': 'События', 'gal.filter.community': 'Сообщество',
        'gal.s1': 'Фото', 'gal.s2': 'Событий', 'gal.s3': 'Путешествий', 'gal.s4': 'Лет',
        'gal.more.title': 'Больше чем фото — <em class="serif">сообщество в действии</em>.', 'gal.more.text': 'Реальные моменты.',
        'contactPage.eyebrow': 'СВЯЗЬ', 'contactPage.title': 'Свяжитесь с <em class="serif">нами</em>.', 'contactPage.text': 'Всегда на связи.',
        'contact.address': 'Адрес', 'contact.phone': 'Телефон / Telegram', 'contact.email': 'Email',
        'contact.cta.eyebrow': 'ПРИСОЕДИНЯЙТЕСЬ', 'contact.cta.title': 'Станьте частью большего.', 'contact.cta.text': 'Заявки открыты.', 'contact.cta.btn': 'Присоединиться', 'contact.cta.tg': 'Telegram',
        'contact.faq.eyebrow': 'FAQ', 'contact.faq.title': 'Часто задаваемые <em class="serif">вопросы</em>',
        'contact.faq.q1': 'Как присоединиться?', 'contact.faq.a1': 'Заполните форму Join.',
        'contact.faq.q2': 'Бесплатно?', 'contact.faq.a2': 'Да, полностью.',
        'contact.faq.q3': 'Нужны навыки?', 'contact.faq.a3': 'Нет.',
        'contact.faq.q4': 'Возможности?', 'contact.faq.a4': 'Соревнования, проекты, стартапы.',
        'contact.faq.q5': 'Партнёрство?', 'contact.faq.a5': 'Пишите partners@falco.uz.',
        'join.eyebrow': 'ПРИСОЕДИНИТЬСЯ', 'join.title': 'Ваша следующая <em class="serif">глава</em>.', 'join.text': 'Заполните заявку.',
        'join.step1': '01 — О вас', 'join.step2': '02 — Образование', 'join.step3': '03 — Навыки', 'join.step4': '04 — Мотивация', 'join.step5': '05 — Финал',
        'join.s1.title': 'Давайте познакомимся', 'join.s1.desc': 'Кто вы.',
        'join.fullName': 'Имя', 'join.fullName.ph': 'Зафаров Бехрузжон',
        'join.age': 'Возраст', 'join.age.ph': '18', 'join.location': 'Город', 'join.location.ph': 'Ташкент',
        'join.phone': 'Телефон', 'join.phone.ph': '+998 90 123 45 67', 'join.telegram': 'Telegram', 'join.telegram.ph': '@username',
        'join.email': 'Email', 'join.email.ph': 'you@example.com',
        'join.s2.title': 'Образование', 'join.s2.desc': 'Где учитесь?', 'join.isStudent': 'Студент?', 'join.degree': 'Уровень', 'join.degreeDesc': 'Направление', 'join.degreeDesc.ph': 'ТУИТ, Экономика',
        'join.select': 'Выберите', 'join.yes': 'Да', 'join.no': 'Нет',
        'join.s3.title': 'Навыки', 'join.s3.desc': 'Что привнесёте?', 'join.skills': 'Направление', 'join.skills.select': 'Выберите',
        'join.skillDetails': 'Детали', 'join.skillDetails.ph': 'Языки, технологии?', 'join.experience': 'Опыт', 'join.experience.ph': 'Проекты?',
        'join.socialLinks': 'Ссылки', 'join.socialLinks.ph': 'https://github.com/username',
        'join.s4.title': 'Мотивация', 'join.s4.desc': 'Почему Falco?', 'join.whyJoin': 'Почему?', 'join.whyJoin.ph': 'Что мотивирует?',
        'join.goal': 'Цель', 'join.goal.ph': 'Что достичь?', 'join.whyChoose': 'Почему вас?', 'join.whyChoose.ph': 'Сильные стороны...',
        'join.s5.title': 'Последние вопросы', 'join.s5.desc': 'Почти готово.', 'join.preferredRole': 'Роль', 'join.preferredRole.ph': 'Frontend developer...',
        'join.timeCommitment': 'Занятость', 'join.ready': 'Готовы?', 'join.failures': 'Как с неудачами?', 'join.failures.ph': 'Подход...',
        'join.falcoCore': 'Core Member?', 'join.source': 'Откуда?', 'join.source.tg': 'Telegram', 'join.source.ig': 'Instagram', 'join.source.friend': 'Друг', 'join.source.uni': 'Университет', 'join.source.other': 'Другое',
        'join.additional': 'Доп', 'join.additional.ph': 'Что ещё?', 'join.agree': 'Разрешаю обработку данных.',
        'join.next': 'Продолжить', 'join.back': 'Назад', 'join.submit': 'Отправить', 'join.sending': 'Отправка...',
        'join.aside.title': 'Станьте частью.', 'join.aside.text': 'Бесплатно.',
        'join.aside.b1': 'Проекты', 'join.aside.b2': 'Единомышленники', 'join.aside.b3': 'Обучение',
        'join.aside.note': 'Без резюме.',
        'join.faq.title': 'Часто задаваемые <em class="serif">вопросы</em>',
        'join.faq.q1': 'Сколько ждать?', 'join.faq.a1': '24 часа.',
        'join.faq.q2': 'Критерии?', 'join.faq.a2': 'Мотивация, навыки.',
        'join.faq.q3': 'Откажут?', 'join.faq.a3': 'Подайте снова через 3-6 мес.',
        'join.faq.q4': 'Несколько?', 'join.faq.a4': 'Одно в заявке.',
        'success.title': 'Ваша глава начинается.', 'success.text': 'Спасибо за заявку.',
        'success.ref': 'Номер заявки', 'success.back': 'На главную',
        'footer.tagline': 'Амбиция находит команду.', 'footer.platform': 'Платформа', 'footer.company': 'Компания', 'footer.social': 'Соцсети',
        'footer.rights': '© 2024–2026 Falco. Все права защищены.', 'footer.privacy': 'Приватность', 'footer.terms': 'Условия',
        'err.required': 'Заполните', 'err.email': 'Email', 'err.phone': 'Телефон', 'err.age': '16–32', 'err.telegram': '@username', 'err.min': 'Коротко', 'err.agree': 'Согласие', 'err.send': 'Ошибка.',
    },

    en: {
        'nav.home': 'Home', 'nav.about': 'About', 'nav.opportunities': 'Opportunities', 'nav.achievements': 'Achievements',
        'nav.projects': 'Projects', 'nav.team': 'Team', 'nav.gallery': 'Gallery', 'nav.contact': 'Contact', 'nav.join': 'Join',
        'btn.join': 'Join Falco', 'btn.explore': 'Explore opportunities',
        'hero.badge': 'Youth-driven ecosystem', 'hero.title': '<em class="serif">Ambition</em> finds its team.',
        'hero.text': 'Falco connects ambitious people with the teams, challenges, and opportunities that help them turn potential into real results.',
        'hero.members': 'Members', 'hero.projects': 'Projects',
        'pillars.title': 'Why Falco?',
        'pillar1.title': 'Talent with direction', 'pillar1.text': 'Help ambitious people identify where their skills can contribute.',
        'pillar2.title': 'People into teams', 'pillar2.text': 'Connect people around shared challenges and complementary skills.',
        'pillar3.title': 'Potential into progress', 'pillar3.text': 'Encourage learning through projects and measurable outcomes.',
        'results.eyebrow': 'RESULTS THAT SPEAK', 'results.title': 'Built through action. Proven through results.',
        'results.text': 'From international engineering competitions to emerging technologies.', 'results.more': 'All achievements',
        'results.item1.meta': '2025 · CHINA · WorldSkills', 'results.item1.title': 'Silver · 2nd place', 'results.item1.sub': 'Logistics competition', 'results.item1.cta': 'Explore achievement',
        'results.item2.meta': '2024 · JAPAN · Cross-cultural Engineering', 'results.item2.title': '1st · Open Manufacturing Innovation', 'results.item2.sub': 'International project competition', 'results.item2.cta': 'Explore achievement',
        'explore.eyebrow': 'EXPLORE CATEGORIES', 'explore.title': 'Find your <em class="serif">path in Falco</em>.',
        'explore.text': 'Different interests. One ecosystem. Choose the area where you can make the biggest impact.',
        'cat.competitions': 'Competitions', 'cat.competitions.text': 'Challenge yourself and represent Falco on international stages.',
        'cat.projects': 'Projects & Technology', 'cat.projects.text': 'Turn ideas into real solutions with talented people.',
        'cat.startups': 'Startups', 'cat.startups.text': 'Explore and develop ideas with community support.',
        'cat.community': 'Community', 'cat.community.text': 'Meet ambitious people and grow together.', 'cat.cta': 'Explore more',

        // NEWS SECTION
        'news.eyebrow': 'LATEST NEWS',
        'news.title': 'News & Updates',
        'news.text': 'See what\'s happening in the Falco community.',

        'proj.eyebrow': 'IDEAS INTO ACTION', 'proj.title': 'Built by ambition. Driven by ideas.', 'proj.text': 'Discover projects, ventures, and ambitious teams.', 'proj.more': 'All projects',
        'proj.agro.meta': 'STARTUP · AGROTECH', 'proj.agro.title': 'AgroBoost', 'proj.agro.sub': 'Technology-driven solutions for smarter agriculture', 'proj.agro.cta': 'Discover project',
        'proj.robotics.meta': 'ENGINEERING · HARDWARE', 'proj.robotics.title': 'Engineering & Robotics', 'proj.robotics.sub': 'Prototype development, automation, technical challenges', 'proj.robotics.cta': 'Explore projects',
        'team.eyebrow': 'MEET THE PEOPLE', 'team.title': 'Behind every achievement there is a <em class="serif">team</em>.', 'team.text': 'We bring together ambitious people from different backgrounds.', 'team.more': 'All team',
        'gallery.eyebrow': 'GALLERY', 'gallery.title': 'Moments that make us <em class="serif">Falco</em>.', 'gallery.text': 'Snapshots from our community.', 'gallery.more': 'View all gallery',
        'cta.title': 'Can\'t find the right opportunity?', 'cta.text': 'Tell us what interests you.', 'cta.btn': 'Join the Falco community',
        'about.eyebrow': 'ABOUT FALCO', 'about.title': 'More than a team. <em class="serif">A platform for what comes next.</em>',
        'about.text': 'Falco is a youth-driven ecosystem within M Company.',
        'about.whatwedo.eyebrow': 'WHAT WE DO', 'about.whatwedo.title': 'Through competitions, collaborative projects, team formation, and startup development.',
        'about.whatwedo.text1': 'Falco creates pathways for people to challenge themselves.', 'about.whatwedo.text2': 'We help connect talent with opportunities.',
        'about.stats.members': 'Members', 'about.stats.projects': 'Projects', 'about.stats.mentors': 'Mentors', 'about.stats.free': 'Free',
        'about.matters.title': 'What matters is what you\'re ready to bring.', 'about.matters.initiative': 'Initiative', 'about.matters.initiativeText': 'You take action.',
        'about.matters.curiosity': 'Curiosity', 'about.matters.curiosityText': 'You\'re willing to learn and improve.',
        'opp.eyebrow': 'EXPLORE OPPORTUNITIES', 'opp.title': 'Find your <em class="serif">path in Falco</em>.', 'opp.text': 'Different interests. One ecosystem.',
        'opp.c1.title': 'Competitions & Challenges', 'opp.c1.text': 'Challenge yourself and represent Falco.', 'opp.c1.l1': 'Engineering & technical', 'opp.c1.l2': 'Business & case', 'opp.c1.l3': 'Skill development', 'opp.c1.l4': 'Team preparation', 'opp.c1.cta': 'Explore competitions',
        'opp.c2.title': 'Projects & Technology', 'opp.c2.text': 'Turn ideas into real solutions.', 'opp.c2.l1': 'Robotics & hardware', 'opp.c2.l2': 'Software & digital', 'opp.c2.l3': 'Research', 'opp.c2.l4': 'Real-world problem solving', 'opp.c2.cta': 'Explore projects',
        'opp.c3.title': 'Startups', 'opp.c3.text': 'Explore and develop ideas.', 'opp.c3.l1': 'Idea validation', 'opp.c3.l2': 'Mentorship', 'opp.c3.l3': 'Pitch preparation', 'opp.c3.l4': 'Resources & partners', 'opp.c3.cta': 'Explore startups',
        'opp.c4.title': 'Community', 'opp.c4.text': 'Grow together.', 'opp.c4.l1': 'Networking', 'opp.c4.l2': 'Events & meetups', 'opp.c4.l3': 'Knowledge sharing', 'opp.c4.l3b': 'Personal growth', 'opp.c4.cta': 'Explore community',
        'opp.g1.title': 'Global Opportunities', 'opp.g1.text': 'Represent Falco internationally.',
        'opp.g2.title': 'Volunteering', 'opp.g2.text': 'Contribute to causes that matter.',
        'opp.g3.title': 'Work & Freelancing', 'opp.g3.text': 'Real projects and paid opportunities.',
        'opp.cta.eyebrow': 'NOT SURE WHERE YOU FIT?', 'opp.cta.title': 'Explore <em class="serif">everything</em>.', 'opp.cta.text': 'You can be part of multiple areas.', 'opp.cta.btn': 'View all opportunities',
        'projpage.eyebrow': 'IDEAS INTO ACTION', 'projpage.title': 'Built by ambition. <em class="serif">Driven by ideas.</em>', 'projpage.text': 'Discover projects and teams.',
        'projpage.filter.all': 'All', 'projpage.filter.startup': 'Startups', 'projpage.filter.hardware': 'Hardware', 'projpage.filter.software': 'Software', 'projpage.filter.research': 'Research',
        'projpage.p1.title': 'AgroBoost', 'projpage.p1.sub': 'Tech-driven smarter agriculture', 'projpage.p1.meta': 'STARTUP · AGROTECH', 'projpage.p1.cta': 'Discover',
        'projpage.p2.title': 'FreshLine Pro', 'projpage.p2.sub': 'Supply chain transparency', 'projpage.p2.meta': 'STARTUP · FOOD-TECH', 'projpage.p2.cta': 'Discover',
        'projpage.p3.title': 'RobCont', 'projpage.p3.sub': 'Autonomous construction robotics', 'projpage.p3.meta': 'ENGINEERING · ROBOTICS', 'projpage.p3.cta': 'Discover',
        'projpage.p4.title': 'FoodQuest', 'projpage.p4.sub': 'Community food discovery', 'projpage.p4.meta': 'SOFTWARE · MOBILE', 'projpage.p4.cta': 'Discover',
        'projpage.p5.title': 'ClinicGo', 'projpage.p5.sub': 'Clinic appointment platform', 'projpage.p5.meta': 'STARTUP · HEALTHTECH', 'projpage.p5.cta': 'Discover',
        'projpage.p6.title': 'VisionEdge', 'projpage.p6.sub': 'Edge-AI industrial quality control', 'projpage.p6.meta': 'RESEARCH · AI', 'projpage.p6.cta': 'Discover',
        'projpage.cta.eyebrow': 'HAVE AN IDEA?', 'projpage.cta.title': 'Build with Falco.', 'projpage.cta.text': 'We help turn ideas into working projects.', 'projpage.cta.btn': 'Build with Falco',
        'ach.eyebrow': 'RESULTS THAT SPEAK · 2024–2026', 'ach.title': 'Built through action. <em class="serif">Proven through results.</em>', 'ach.text': 'From international competitions to technologies.',
        'ach.s1': 'Competitions', 'ach.s2': 'Medals', 'ach.s3': 'Countries', 'ach.s4': 'Intl. Awards',
        'ach.a1.meta': '2025 · CHINA · WorldSkills', 'ach.a1.title': 'Silver · 2nd place', 'ach.a1.sub': 'Logistics competition', 'ach.a1.text': 'Silver medal at international logistics competition.',
        'ach.a2.meta': '2024 · JAPAN', 'ach.a2.title': '1st · Open Manufacturing Innovation', 'ach.a2.sub': 'International project', 'ach.a2.text': 'First place at international cross-cultural engineering competition.',
        'ach.a3.meta': '2024 · SOUTH KOREA · Robotics', 'ach.a3.title': 'Top 5 Finalist', 'ach.a3.sub': 'Autonomous robotics', 'ach.a3.text': 'Top 5 among 40+ teams.',
        'ach.a4.meta': '2025 · UZBEKISTAN · President Tech Award', 'ach.a4.title': 'Special Mention', 'ach.a4.sub': 'National technology award', 'ach.a4.text': 'For innovation in digital transformation.',
        'ach.more.title': 'More than participation.', 'ach.more.text': 'A growing track record.',
        'teamPage.eyebrow': 'MEET THE PEOPLE', 'teamPage.title': 'Behind every achievement <em class="serif">a team</em>.', 'teamPage.text': 'Ambitious people.',
        'teamPage.filter.all': 'All', 'teamPage.filter.core': 'Core Team', 'teamPage.filter.tech': 'Technology', 'teamPage.filter.business': 'Business', 'teamPage.filter.media': 'Media',
        'teamPage.p1.role': 'Founder / CEO', 'teamPage.p1.name': 'Abdulla Karimov', 'teamPage.p1.desc': 'Building Falco into an ecosystem.',
        'teamPage.p2.role': 'Business', 'teamPage.p2.name': 'Gulnora Matkarimova', 'teamPage.p2.desc': 'Connecting projects with partners.',
        'teamPage.p3.role': 'Lead Engineer', 'teamPage.p3.name': 'Bekzod Rakhimov', 'teamPage.p3.desc': 'Directing tech projects.',
        'teamPage.p4.role': 'Media', 'teamPage.p4.name': 'Madina Ismailova', 'teamPage.p4.desc': 'Telling stories.',
        'teamPage.p5.role': 'Software Engineer', 'teamPage.p5.name': 'Azizbek Tursunov', 'teamPage.p5.desc': 'Building digital products.',
        'teamPage.p6.role': 'Project Manager', 'teamPage.p6.name': 'Nilufar Yusupova', 'teamPage.p6.desc': 'Coordinating teams.',
        'teamPage.p7.role': 'Robotics Engineer', 'teamPage.p7.name': 'Sardor Jumayev', 'teamPage.p7.desc': 'Autonomous systems.',
        'teamPage.p8.role': 'Content Creator', 'teamPage.p8.name': 'Dilnoza Rasulova', 'teamPage.p8.desc': 'Visual content.',
        'teamPage.stats.members': 'Members', 'teamPage.stats.mentors': 'Mentors', 'teamPage.stats.teams': 'Teams', 'teamPage.stats.countries': 'Countries',
        'teamPage.cta.eyebrow': 'YOUR NEXT STEP', 'teamPage.cta.title': 'A community of doers and builders.', 'teamPage.cta.text': 'Ready to contribute?', 'teamPage.cta.btn': 'Join Falco',
        'gal.eyebrow': 'GALLERY', 'gal.title': 'Moments that make us <em class="serif">Falco</em>.', 'gal.text': 'Snapshots from our community.',
        'gal.filter.all': 'All', 'gal.filter.competitions': 'Competitions', 'gal.filter.projects': 'Projects', 'gal.filter.events': 'Events', 'gal.filter.community': 'Community',
        'gal.s1': 'Photos', 'gal.s2': 'Events', 'gal.s3': 'Journeys', 'gal.s4': 'Years',
        'gal.more.title': 'More than photos — <em class="serif">a community in action</em>.', 'gal.more.text': 'Every shot reflects a real moment.',
        'contactPage.eyebrow': 'GET IN TOUCH', 'contactPage.title': 'Get in <em class="serif">touch</em>.', 'contactPage.text': 'Have questions? We are always here.',
        'contact.address': 'Address', 'contact.phone': 'Phone / Telegram', 'contact.email': 'Email',
        'contact.cta.eyebrow': 'JOIN THE COMMUNITY', 'contact.cta.title': 'Ready to be part of something bigger?', 'contact.cta.text': 'Applications are open.', 'contact.cta.btn': 'Join Falco', 'contact.cta.tg': 'Message on Telegram',
        'contact.faq.eyebrow': 'FAQ', 'contact.faq.title': 'Frequently asked <em class="serif">questions</em>',
        'contact.faq.q1': 'How do I join?', 'contact.faq.a1': 'Fill out the application on the Join page.',
        'contact.faq.q2': 'Is it free?', 'contact.faq.a2': 'Yes, completely free.',
        'contact.faq.q3': 'Do I need technical skills?', 'contact.faq.a3': 'No, many directions available.',
        'contact.faq.q4': 'What opportunities?', 'contact.faq.a4': 'Competitions, projects, startups, mentors.',
        'contact.faq.q5': 'Can I partner?', 'contact.faq.a5': 'Write to partners@falco.uz.',
        'join.eyebrow': 'JOIN FALCO', 'join.title': 'Your next <em class="serif">chapter</em> starts here.', 'join.text': 'Fill out the application. It only takes a few minutes.',
        'join.step1': '01 — About you', 'join.step2': '02 — Education', 'join.step3': '03 — Skills', 'join.step4': '04 — Motivation', 'join.step5': '05 — Final',
        'join.s1.title': 'Let\'s get to know you', 'join.s1.desc': 'Tell us who you are.',
        'join.fullName': 'Full name', 'join.fullName.ph': 'Zafarov Behruzjon',
        'join.age': 'Age', 'join.age.ph': '18', 'join.location': 'Location', 'join.location.ph': 'Tashkent',
        'join.phone': 'Phone', 'join.phone.ph': '+998 90 123 45 67', 'join.telegram': 'Telegram', 'join.telegram.ph': '@username',
        'join.email': 'Email', 'join.email.ph': 'you@example.com',
        'join.s2.title': 'Education', 'join.s2.desc': 'Where do you study?', 'join.isStudent': 'Student?', 'join.degree': 'Degree', 'join.degreeDesc': 'Degree / University', 'join.degreeDesc.ph': 'TUIT, Economics',
        'join.select': 'Select', 'join.yes': 'Yes', 'join.no': 'No',
        'join.s3.title': 'Skills & experience', 'join.s3.desc': 'What can you bring?', 'join.skills': 'Main direction', 'join.skills.select': 'Select direction',
        'join.skillDetails': 'Skill details', 'join.skillDetails.ph': 'Languages, technologies?', 'join.experience': 'Experience', 'join.experience.ph': 'Projects, competitions?',
        'join.socialLinks': 'Social links', 'join.socialLinks.ph': 'https://github.com/username',
        'join.s4.title': 'Your motivation', 'join.s4.desc': 'Why Falco?', 'join.whyJoin': 'Why do you want to join?', 'join.whyJoin.ph': 'What motivates you?',
        'join.goal': 'Your goal', 'join.goal.ph': 'What do you want to achieve?', 'join.whyChoose': 'Why should we choose you?', 'join.whyChoose.ph': 'Your strengths...',
        'join.s5.title': 'A few last questions', 'join.s5.desc': 'Almost there.', 'join.preferredRole': 'Preferred role', 'join.preferredRole.ph': 'Frontend developer...',
        'join.timeCommitment': 'Time commitment', 'join.ready': 'Ready to participate?', 'join.failures': 'How do you handle failures?', 'join.failures.ph': 'Your approach...',
        'join.falcoCore': 'Falco Core Member?', 'join.source': 'How did you find us?', 'join.source.tg': 'Telegram', 'join.source.ig': 'Instagram', 'join.source.friend': 'Through a friend', 'join.source.uni': 'University', 'join.source.other': 'Other',
        'join.additional': 'Additional message', 'join.additional.ph': 'Anything else?', 'join.agree': 'I give Falco permission to process my personal information.',
        'join.next': 'Continue', 'join.back': 'Back', 'join.submit': 'Submit application', 'join.sending': 'Sending...',
        'join.aside.title': 'Become part of Falco.', 'join.aside.text': 'Joining is free.',
        'join.aside.b1': 'Discover projects', 'join.aside.b2': 'Connect with people', 'join.aside.b3': 'Learn and grow',
        'join.aside.note': 'No CV required.',
        'join.faq.title': 'Frequently asked <em class="serif">questions</em>',
        'join.faq.q1': 'How long does review take?', 'join.faq.a1': 'Usually within 24 hours.',
        'join.faq.q2': 'Selection criteria?', 'join.faq.a2': 'Motivation, skills, and team fit.',
        'join.faq.q3': 'What if rejected?', 'join.faq.a3': 'You can apply again after 3-6 months.',
        'join.faq.q4': 'Multiple directions?', 'join.faq.a4': 'One main direction. You can switch later.',
        'success.title': 'Your next chapter starts here.', 'success.text': 'Thank you for applying to Falco.',
        'success.ref': 'Application reference', 'success.back': 'Back to home',
        'footer.tagline': 'Ambition finds its team.', 'footer.platform': 'Platform', 'footer.company': 'Company', 'footer.social': 'Social',
        'footer.rights': '© 2024–2026 Falco. All rights reserved.', 'footer.privacy': 'Privacy', 'footer.terms': 'Terms',
        'err.required': 'This field is required', 'err.email': 'Invalid email', 'err.phone': 'Invalid phone', 'err.age': 'Age 16–32', 'err.telegram': '@username (4–32)', 'err.min': 'Too short', 'err.agree': 'Please accept', 'err.send': 'Send failed.',
    }
};

const I18N = {
    current: 'en',
    t(key, vars = {}) {
        const dict = TRANSLATIONS[this.current] || TRANSLATIONS.en;
        let str = dict[key] || TRANSLATIONS.en[key] || key;
        Object.keys(vars).forEach(k => { str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]); });
        return str;
    },
    detect() {
        const saved = localStorage.getItem('falco_lang');
        if (saved && TRANSLATIONS[saved]) return saved;
        const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
        return TRANSLATIONS[nav] ? nav : 'en';
    },
    apply(lang) {
        if (!TRANSLATIONS[lang]) return;
        this.current = lang;
        localStorage.setItem('falco_lang', lang);
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.innerHTML = this.t(el.getAttribute('data-i18n'));
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            el.setAttribute('placeholder', this.t(el.getAttribute('data-i18n-ph')));
        });
        document.querySelectorAll('.lang-switch button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    },
    init() {
        document.querySelectorAll('.lang-switch button').forEach(btn => {
            btn.addEventListener('click', () => this.apply(btn.dataset.lang));
        });
        this.apply(this.detect());
    }
};

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const initNavbar = () => {
    const nav = $('.nav-wrap');
    if (!nav) return;
    const onScroll = () => {
        nav.style.background = window.scrollY > 20 ? 'rgba(10,31,20,.95)' : 'rgba(10,31,20,.85)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
};

const initMobileMenu = () => {
    const burger = $('#burger');
    const menu = $('#mobileMenu');
    const close = $('#mobileClose');
    if (!burger || !menu) return;
    burger.addEventListener('click', () => { menu.classList.add('open'); document.body.style.overflow = 'hidden'; });
    const closeMenu = () => { menu.classList.remove('open'); document.body.style.overflow = ''; };
    close?.addEventListener('click', closeMenu);
    $$('a', menu).forEach(a => a.addEventListener('click', closeMenu));
};

const initReveal = () => {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach(el => io.observe(el));
};

const initFAQ = () => {
    $$('.faq-item').forEach(item => {
        const q = $('.faq-q', item);
        const a = $('.faq-a', item);
        if (!q || !a) return;
        q.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            $$('.faq-item').forEach(i => {
                i.classList.remove('open');
                const aa = $('.faq-a', i);
                if (aa) aa.style.maxHeight = null;
            });
            if (!isOpen) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
        });
    });
};

/* ============================================================
   FILTERS
   ============================================================ */
const initFilters = () => {
    $$('.filters').forEach(group => {
        const btns = $$('.filter-btn', group);
        const targetId = group.dataset.target;
        const target = targetId ? document.getElementById(targetId) : null;
        if (!target) return;
        btns.forEach(btn => {
            btn.onclick = () => {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const f = btn.dataset.filter;
                $$('[data-category]', target).forEach(item => {
                    item.style.display = (f === 'all' || item.dataset.category === f) ? '' : 'none';
                });
            };
        });
    });
};

/* ============================================================
   DYNAMIC CMS CONTENT HYDRATION
   ============================================================ */
const formatTitle = (text = '') => {
    if (!text) return '';
    return text.replace(/\*(.*?)\*/g, '<em class="serif">$1</em>');
};

const initDynamicCMS = async () => {
    try {
        // 1. CONTENT (Hero, Stats, About, Contact)
        const resContent = await fetch('/api/content').catch(() => null);
        if (resContent && resContent.ok) {
            const content = await resContent.json();

            // Hero
            const heroTitleEl = document.getElementById('heroTitle');
            if (heroTitleEl && content.heroTitle) {
                heroTitleEl.innerHTML = formatTitle(content.heroTitle);
                heroTitleEl.removeAttribute('data-i18n');
            }
            const heroTextEl = document.getElementById('heroText');
            if (heroTextEl && content.heroText) {
                heroTextEl.textContent = content.heroText;
                heroTextEl.removeAttribute('data-i18n');
            }
            const heroBadgeEl = document.querySelector('[data-i18n="hero.badge"]');
            if (heroBadgeEl && content.heroBadge) {
                heroBadgeEl.textContent = content.heroBadge;
                heroBadgeEl.removeAttribute('data-i18n');
            }

            // Contact page elements
            const contactGrid = document.querySelector('.contact-grid');
            if (contactGrid) {
                if (content.contactAddress) {
                    const addrLink = contactGrid.querySelector('a[href*="maps"]');
                    if (addrLink) addrLink.textContent = content.contactAddress;
                }
                if (content.contactPhone) {
                    const phoneLink = contactGrid.querySelector('a[href^="tel:"]');
                    if (phoneLink) {
                        phoneLink.href = 'tel:' + content.contactPhone.replace(/\s+/g, '');
                        phoneLink.textContent = content.contactPhone;
                    }
                }
                if (content.contactTelegram) {
                    const tgLink = contactGrid.querySelector('a[href*="t.me"]');
                    if (tgLink) {
                        const handle = content.contactTelegram.replace('@', '');
                        tgLink.href = 'https://t.me/' + handle;
                        tgLink.textContent = '@' + handle;
                    }
                }
                if (content.contactEmail) {
                    const emailLink = contactGrid.querySelector('a[href^="mailto:"]');
                    if (emailLink) {
                        emailLink.href = 'mailto:' + content.contactEmail;
                        emailLink.textContent = content.contactEmail;
                    }
                }
            }
        }

        // 2. NEWS (Home Page)
        const newsContainer = document.getElementById('newsContainer');
        if (newsContainer) {
            const resNews = await fetch('/api/news').catch(() => null);
            if (resNews && resNews.ok) {
                const news = await resNews.json();
                if (Array.isArray(news) && news.length > 0) {
                    newsContainer.innerHTML = news.slice(0, 3).map(n => `
                        <article class="feature-card reveal in">
                            <div class="feature-media">
                                <img src="${n.image}" alt="${n.title}" onerror="this.src='https://picsum.photos/seed/news/600/400'">
                            </div>
                            <div class="feature-content">
                                <div class="feature-meta">${n.category} <span class="dot"></span> ${n.date}</div>
                                <h3 style="font-size:1.2rem">${n.title}</h3>
                                <div class="award" style="font-size:.85rem; display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${n.desc}</div>
                                <span class="feature-link">Batafsil <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                            </div>
                        </article>
                    `).join('');
                }
            }
        }

        // 3. TEAM (Team Page)
        const teamGrid = document.getElementById('teamGrid');
        if (teamGrid) {
            const resTeam = await fetch('/api/team').catch(() => null);
            if (resTeam && resTeam.ok) {
                const team = await resTeam.json();
                if (Array.isArray(team) && team.length > 0) {
                    teamGrid.innerHTML = team.map(t => `
                        <div class="team-card reveal in" data-category="${t.category || 'core'}">
                            <div class="team-photo">
                                <img src="${t.image}" alt="${t.name}" onerror="this.src='https://picsum.photos/seed/team/500/500'">
                            </div>
                            <div class="team-info">
                                <span class="team-role">${t.role}</span>
                                <h4>${t.name}</h4>
                                <p class="team-desc">${t.desc || ''}</p>
                            </div>
                        </div>
                    `).join('');
                    initFilters();
                }
            }
        }

        // 4. PROJECTS (Projects Page & Home Preview)
        const projectsGrid = document.getElementById('projectsGrid');
        const homeProjectsContainer = document.getElementById('homeProjectsContainer');
        if (projectsGrid || homeProjectsContainer) {
            const resProjects = await fetch('/api/projects').catch(() => null);
            if (resProjects && resProjects.ok) {
                const projects = await resProjects.json();
                if (Array.isArray(projects) && projects.length > 0) {
                    if (projectsGrid) {
                        projectsGrid.innerHTML = projects.map(p => `
                            <a href="${p.link || '#'}" class="feature-card reveal in" data-category="${p.category || 'startup'}">
                                <div class="feature-media">
                                    <img src="${p.image}" alt="${p.title}" onerror="this.src='https://picsum.photos/seed/project/800/600'">
                                </div>
                                <div class="feature-content">
                                    <div class="feature-meta">${p.meta || (p.category ? p.category.toUpperCase() : 'PROJECT')}</div>
                                    <h3>${p.title}</h3>
                                    <div class="award">${p.desc}</div>
                                    <span class="feature-link"><span>Ko'rish</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                                </div>
                            </a>
                        `).join('');
                        initFilters();
                    }
                    if (homeProjectsContainer) {
                        homeProjectsContainer.innerHTML = projects.slice(0, 3).map(p => `
                            <a href="${p.link || '/projects'}" class="feature-card reveal in">
                                <div class="feature-media">
                                    <img src="${p.image}" alt="${p.title}" onerror="this.src='https://picsum.photos/seed/project/800/600'">
                                </div>
                                <div class="feature-content">
                                    <div class="feature-meta">${p.meta || (p.category ? p.category.toUpperCase() : 'PROJECT')}</div>
                                    <h3>${p.title}</h3>
                                    <div class="award">${p.desc}</div>
                                    <span class="feature-link"><span>Ko'rish</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                                </div>
                            </a>
                        `).join('');
                    }
                }
            }
        }

        // 5. GALLERY (Gallery Page)
        const galleryGrid = document.getElementById('galleryGrid');
        if (galleryGrid) {
            const resGallery = await fetch('/api/gallery').catch(() => null);
            if (resGallery && resGallery.ok) {
                const gallery = await resGallery.json();
                if (Array.isArray(gallery) && gallery.length > 0) {
                    galleryGrid.innerHTML = gallery.map(g => `
                        <div class="g-item ${g.size || 'standard'} reveal in" data-category="${g.category || 'competitions'}">
                            <img src="${g.image}" alt="${g.title || 'Falco'}" onerror="this.src='https://picsum.photos/seed/gallery/600/400'">
                        </div>
                    `).join('');
                    initFilters();
                }
            }
        }
    } catch (err) {
        console.warn('CMS dynamic hydration notice:', err);
    }
};

/* ============================================================
   JOIN FORM HANDLER (MAX SECURITY & RELIABILITY)
   ============================================================ */
const initJoinForm = () => {
    const form = document.getElementById('joinForm');
    if (!form) return;

    // 1. Math Captcha Generation
    const num1 = Math.floor(Math.random() * 8) + 2;
    const num2 = Math.floor(Math.random() * 8) + 2;
    const expectedAnswer = num1 + num2;

    const captchaText = document.getElementById('captchaText');
    const captchaExpected = document.getElementById('captchaExpected');
    const captchaInput = document.getElementById('captchaInput');
    const formStartedAtInput = document.getElementById('formStartedAt');

    if (captchaText) captchaText.textContent = `${num1} + ${num2} = ?`;
    if (captchaExpected) captchaExpected.value = expectedAnswer;
    if (formStartedAtInput) formStartedAtInput.value = Date.now();
    sessionStorage.setItem('form_started_at', Date.now());

    // 2. Multi-step Navigation
    let currentStep = 1;
    const steps = $$('.form-step', form);
    const stepItems = $$('.step-item');
    const totalSteps = steps.length || 5;
    const btnNext = form.querySelector('[data-action="next"]');
    const btnBack = form.querySelector('[data-action="back"]');
    const btnSubmit = form.querySelector('[data-action="submit"]');

    const showStep = (n) => {
        currentStep = n;
        steps.forEach((s, i) => s.classList.toggle('active', i + 1 === n));
        stepItems.forEach((s, i) => {
            s.classList.toggle('active', i + 1 === n);
            s.classList.toggle('done', i + 1 < n);
        });
        if (btnBack) btnBack.style.display = n === 1 ? 'none' : 'inline-flex';
        if (btnNext) btnNext.style.display = n === totalSteps ? 'none' : 'inline-flex';
        if (btnSubmit) btnSubmit.style.display = n === totalSteps ? 'inline-flex' : 'none';
        window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
    };

    const validateStep = (n) => {
        const stepEl = steps[n - 1];
        if (!stepEl) return true;
        let ok = true;

        $$('[required]', stepEl).forEach(field => {
            const val = field.type === 'checkbox' ? field.checked : String(field.value || '').trim();
            if (!val) {
                ok = false;
                field.style.borderColor = 'var(--danger)';
            } else {
                field.style.borderColor = '';
            }
        });

        // Special field validations
        if (n === 1) {
            const emailField = form.querySelector('input[name="email"]');
            if (emailField && (!emailField.value.includes('@') || !emailField.value.includes('.'))) {
                ok = false;
                emailField.style.borderColor = 'var(--danger)';
            }
            const phoneField = form.querySelector('input[name="phone"]');
            if (phoneField && phoneField.value.replace(/\D/g, '').length < 7) {
                ok = false;
                phoneField.style.borderColor = 'var(--danger)';
            }
        }

        // Step 5 Captcha validation
        if (n === totalSteps && captchaInput) {
            if (Number(captchaInput.value) !== expectedAnswer) {
                ok = false;
                captchaInput.style.borderColor = 'var(--danger)';
                alert("Robot emasligingizni tasdiqlash uchun misolni to'g'ri yeching!");
            } else {
                captchaInput.style.borderColor = '';
            }
        }

        return ok;
    };

    btnNext?.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateStep(currentStep)) {
            showStep(Math.min(currentStep + 1, totalSteps));
        }
    });

    btnBack?.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentStep > 1) {
            showStep(currentStep - 1);
        }
    });

    stepItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            if (i + 1 <= currentStep) showStep(i + 1);
        });
    });

    $$('input, select, textarea', form).forEach(f => {
        f.addEventListener('input', () => { f.style.borderColor = ''; });
        f.addEventListener('change', () => { f.style.borderColor = ''; });
    });

    // 3. Single Submit Handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!validateStep(totalSteps)) return;

        const formData = new FormData(form);
        const data = {};
        formData.forEach((v, k) => {
            data[k] = typeof v === 'string' ? v.trim() : v;
        });

        // Ensure anti-bot timestamp
        if (!data.formStartedAt) {
            data.formStartedAt = Number(sessionStorage.getItem('form_started_at')) || Date.now() - 5000;
        }

        const origBtnText = btnSubmit.textContent;
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'Yuborilmoqda...';

        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const json = await res.json().catch(() => ({}));
            if (!res.ok || !json.ok) {
                throw new Error(json.error || `HTTP ${res.status}`);
            }

            const ref = json.reference || ('FALCO-' + Date.now().toString(36).toUpperCase());
            sessionStorage.setItem('falco_ref', ref);
            window.location.href = '/success?ref=' + encodeURIComponent(ref);
        } catch (err) {
            console.error('Submit error:', err);
            btnSubmit.disabled = false;
            btnSubmit.textContent = origBtnText;
            alert('Xatolik: ' + err.message);
        }
    });

    showStep(1);
};

/* ============================================================
   SUCCESS PAGE
   ============================================================ */
const initSuccess = () => {
    const refEl = document.getElementById('successRef');
    if (!refEl) return;
    const urlParams = new URLSearchParams(window.location.search);
    const refFromUrl = urlParams.get('ref');
    refEl.textContent = refFromUrl || sessionStorage.getItem('falco_ref') || 'FALCO-PENDING';
};

/* ============================================================
   DOM INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    I18N.init();
    initNavbar();
    initMobileMenu();
    initReveal();
    initFAQ();
    initFilters();
    initDynamicCMS();
    initJoinForm();
    initSuccess();
});
