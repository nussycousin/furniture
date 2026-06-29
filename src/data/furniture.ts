export type FurnitureItem = {
  id: string
  name: string // Hebrew, e.g. "כורסת קטיפה"
  images: string[] // 1 or more image URLs (Unsplash placeholders for now)
  dimensions?: string // e.g. "רוחב 80 × עומק 75 × גובה 90 ס״מ"
  description: string // Hebrew, 1–2 sentences
  price: string // Hebrew, e.g. "₪450" — placeholder "מחיר — למילוי" until set
}

// Images are the user's real product photos in public/furniture/ (served at /furniture/).
// descriptions are placeholders; confirm/replace with real copy.
export const furniture: FurnitureItem[] = [
  {
    id: 'sofa',
    name: 'ספה פינתית',
    images: ['/furniture/sofa.jpeg',
      '/furniture/Decorative pillow.jpeg'
    ],
    dimensions: 'ספה פינתית בשני חלקים — 220 × 95 ס״מ ו-180 × 95 ס״מ, גובה 80 ס״מ',
    description: 'ספה פינתית מעור (צבע בהיר) בשני חלקים, מציעה ישיבה מרווחת ונוחה , בקניית הספה אני מצרף חמש כריות נוי.',
    price: '800 ש״ח',
  },
  {
    id: 'washing-machine',
    name: 'מכונת כביסה Miele',
    images: ['/furniture/washing-machine.jpeg'],
    dimensions: 'רוחב 60 × עומק 58 ס״מ, גובה 83 ס״מ',
    description: 'מכונת כביסה של Miele (מותג פרימיום אמין מאוד שיחזיק שנים).',
    price: '800 ש״ח (או 1200 ש״ח לסט יחד עם המייבש)',
  },
  {
    id: 'drying-machine',
    name: 'מייבש כביסה Electrolux',
    images: ['/furniture/drying machine.jpeg'],
    dimensions: 'רוחב 60 × עומק 60 × גובה 85 ס״מ',
    description: 'מייבש כביסה פתח חזית של אלקטרולוקס. עושה את העבודה בצורה מצוינת.',
    price: '700 ש״ח (או 1200 ש״ח לסט יחד עם מכונת הכביסה)',
  },
  
  {
    id: 'microwave',
    name: 'מיקרוגל Midea',
    images: ['/furniture/microwave.jpeg'],
    description: 'מיקרוגל מכני אמין ופשוט להפעלה של חברת מידאה. מתחמם מהר.',
    price: '100 ש״ח',
  },
  {
    id: 'toaster',
    name: 'טוסטר לחיצה Gold Line',
    images: ['/furniture/toaster.jpeg'],
    description: 'טוסטר לחיצה (פסי גריל) מבית Gold Line, אידיאלי להכנת כריכים חמים.',
    price: '50 ש״ח',
  },
  {
    id: 'toaster-oven-hemilton',
    name: 'טוסטר אובן Hemilton (גדול)',
    images: ['/furniture/toaster-oven.jpeg'],
    description: 'טוסטר אובן גדול יחסית של המילטון, כולל תבניות מקורית.',
    price: '150 ש״ח',
  },
  {
    id: 'toaster-oven-sol',
    name: 'טוסטר אובן Sol Exclusive',
    images: ['/furniture/toaster-oven-new.jpeg'],
    description: 'טוסטר אובן חדש קומפקטי ונקי עם בוררי טמפרטורה, טיימר ומצבי הפעלה.',
    price: '250 ש״ח',
  },
  {
    id: 'cutlery-set',
    name: 'סט סכו״ם 24 חלקים (חדש בקופסה)',
    images: ['/furniture/Cutlery.jpeg'],
    description: 'סט סכו״ם יוקרתי כסף-זהב באריזה המקורית.',
    price: '150 ש״ח',
  },
  {
    id: 'guess-coat',
    name: 'מעיל אלגנט Guess',
    images: ['/furniture/suit-guess.jpeg'],
    dimensions: 'מידה XL ( אורך 100 ס״מ)',
    description: 'מעיל צמר/תערובת אלגנטי בצבע אפור מבית Guess, במצב מעולה.',
    price: '350 ש״ח',
  },
  {
    id: 'lg-sound-bar',
    name: 'מקרן קול וסאבוופר LG',
    images: ['/furniture/LG-sound-bar.jpeg'],
    description: 'מערכת שמע של LG (סאונד בר + סאב)  לשדרוג חוויית הקולנוע הביתי או סתם לשמוע מוזיקה באיכות גבוהה.',
    price: '600 ש״ח',
  },
  {
    id: 'shabbat-hotplate',
    name: 'פלטת שבת Gold Line (חדשה)',
    images: ['/furniture/Shabbat Hotplate.jpeg'],
    description: 'פלטת שבת גדולה ואיכותית של Gold Line, שומש פעם אחת .',
    price: '60 ש״ח',
  },
  {
    id: 'vacuum-cleaner',
    name: 'שואב אבק ציקלון',
    images: ['/furniture/Vacuum Cleaner.jpeg'],
    description: 'שואב אבק עוצמתי ללא שקית (טכנולוגיית ציקלון), כולל כל האביזרים הנלווים.',
    price: '120 ש״ח',
  },
  {
    id: 'geese-quilt',
    name: 'שמיכת נוצות אווז זוגית',
    images: ['/furniture/Geese Quilt.jpeg'],
    dimensions: '2.0 × 2.20 מטר',
    description: ' שמיכת פוך נוצות אווז זוגית ומפנקת. השמיכה הכי נעימה שתמצאו בשוק של Carmia Quilt.',
    price: '450 ש״ח',
  },
  {
    id: 'aminach-mattresses',
    name: 'סט שני מזרני עמינח רקיע (תבור)',
    // הוספת תמונת התווית כתמונה שנייה
    images: [
      '/furniture/Mattresses Tavor.jpeg',
      '/furniture/Mattress Label.jpeg',
    ],
    dimensions: ' רוחב 0.90 × אורך 1.90 × גובה 0.25 מטר (עבור כל מזרן) סה"כ 1.90 * 1.80 ',
    description: 'שני מזרני עמינח איכותיים מדגם רקיע (תבור), שמורים מאוד. נמכרים יחד או בנפרד.',
    price: 'מזרן בודד ב 800 ש"ח שניהם ב1200 ש"ח',
  },
  {
    id: 'laundry-basket',
    name: 'סל כביסה גמיש אפור',
    images: ['/furniture/Laundry Basket.jpeg'],
    description: 'סל כביסה מפלסטיק גמיש בצבע אפור עם ידיות נשיאה נוחות.',
    price: '20 ש״ח',
  },
  {
    id: 'visco-mattress-large',
    name: 'מזרן ויסקו זוגי',
    images: ['/furniture/Mattresses Aeroflex.jpeg'],
    dimensions: '195 × 160 × 25 ס״מ',
    description: 'מזרן ויסקו נוח כמו ענן,של Aeroflex מעניק תמיכה מושלמת לגוף.',
    price: '1200 ש״ח',
  },
  {
    id: 'foam-mattress-small',
    name: 'מזרן יחיד',
    images: ['/furniture/Mattresses star.jpeg'],
    dimensions: '190 × 80 × 20 ס״מ',
    description: 'מזרן יחיד , star נוח ממש.',
    price: '350 ש״ח',
  },
  {
    id: 'trash-can-large',
    name: 'פח אשפה גדול',
    images: ['/furniture/trash can L.jpeg'],
    description: 'פח אשפה גדול ונוח למטבח.',
    price: '25 ש״ח',
  },
  {
    id: 'kettle-goldline',
    name: 'קומקום חשמלי Gold Line',
    images: ['/furniture/WhatsApp Image 2026-06-29 at 18.57.42.jpeg'],
    description: 'קומקום חשמלי לבן של Gold Line בנפח 1.7 ליטר, עובד מצוין.',
    price: 'למסירה',
  },
  {
    id: 'cookware-set',
    name: 'סט כלי בישול והגשה',
    images: [
      '/furniture/WhatsApp Image 2026-06-29 at 18.57.41.jpeg',
      '/furniture/WhatsApp Image 2026-06-29 at 18.57.41 (1).jpeg',
      '/furniture/WhatsApp Image 2026-06-29 at 19.06.28.jpeg',
    ],
    description: 'מגוון כלי בישול והגשה — סירים, מחבתות, פומפיה, מסננת, כלי הגשה, צלחות, כוסות יין וסכו״ם. נמכרים יחד או בנפרד.',
    price: ' למסירה',
  },
  {
    id: 'wall-pictures',
    name: 'מבחר תמונות ושלטי קיר',
    images: [
      '/furniture/WhatsApp Image 2026-06-29 at 18.57.42 (1).jpeg',
      '/furniture/WhatsApp Image 2026-06-29 at 18.57.42 (2).jpeg',
      '/furniture/WhatsApp Image 2026-06-29 at 18.57.42 (5).jpeg',
      '/furniture/WhatsApp Image 2026-06-29 at 18.57.43.jpeg',
    ],
    description: 'מבחר תמונות ושלטי קיר מעוצבים — תמונת ינשופים לחדר ילדים, תמונת פטרייה ממוסגרת, פוסטר "טובי ישראלי" ושלט "RELAX". נמכרות יחד או בנפרד.',
    price: 'למסירה',
  },
  {
    id: 'water-cooler-strauss',
    name: 'בר מים Strauss Water',
    images: ['/furniture/WhatsApp Image 2026-06-29 at 18.57.42 (3).jpeg'],
    description: 'בר מים (קולר) של Strauss Water בצבע אדום — מים חמים וקרים בלחיצת כפתור.',
    price: 'למסירה',
  },
  {
    id: 'writing-desk',
    name: 'שולחן כתיבה לבן',
    images: ['/furniture/WhatsApp Image 2026-06-29 at 18.57.42 (4).jpeg'],
    description: 'שולחן כתיבה לבן עם ארבע מגירות, יציב ומרווח לעבודה או ללימודים.',
    price: ' 150 ש״ח',
  }
]