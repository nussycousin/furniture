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
    id: 'table',
    name: 'שולחן סלון עץ מלא',
    images: ['/furniture/dining-room-table.jpeg'],
    dimensions: '100 × 100 ס״מ (1 × 1 מ׳)',
    description: 'שולחן סלון מרובע מעץ מלא בשילוב פרזול מתכת, כבד ומרשים.',
    price: '400 ש״ח',
  },
  {
    id: 'refrigerator',
    name: 'מיקרר Normande דגם ND-510BG',
    images: ['/furniture/refrigerator.jpeg'],
    dimensions: 'רוחב 68 × עומק 75 ס״מ, גובה 1.80 מ׳',
    description: 'מקרר בעיצוב מודרני עם חזית זכוכית שחורה כמו חדש. נפח כולל של 510 ליטר (394 קירור, 116 מקפיא).',
    price: '2000 ש״ח',
  },
  {
    id: 'sofa',
    name: 'ספה פינתית',
    images: ['/furniture/sofa.jpeg'],
    dimensions: 'ספה פינתית בשני חלקים — 220 × 95 ס״מ ו-180 × 95 ס״מ, גובה 80 ס״מ',
    description: 'ספה פינתית מעור (צבע בהיר) בשני חלקים, מציעה ישיבה מרווחת ונוחה.',
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
    id: 'espresso-machine',
    name: 'מכונת קפה ומקציף Nespresso',
    images: ['/furniture/Espresso-machine.jpeg'],
    description: 'מכונת אספרסו Pixie של Nespresso כולל מקציף חלב מקורי (Aeroccino).',
    price: '250 ש״ח',
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
    id: 'mirror',
    name: 'מראת גוף',
    images: ['/furniture/mirror.jpeg'],
    dimensions: 'רוחב 45 × גובה 115 ס״מ',
    description: 'מראת גוף מלבנית עם מסגרת נקייה (קיימות מסגרות בצבע שחור או לבן).',
    price: '50 ש״ח',
  },
  {
    id: 'fan',
    name: 'מאוורר רצפה Gold Line',
    images: ['/furniture/fan.jpeg'],
    description: 'מאוורר קופסה מרובע עם רשת מסתובבת וטיימר.',
    price: '50 ש״ח',
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
    id: 'dimplex-heater',
    name: 'קמין חשמלי Dimplex',
    images: ['/furniture/heat-spreader.jpeg'],
    dimensions: 'רוחב 40 × עומק 26 × גובה 55 ס״מ',
    description: 'תנור חימום חשמלי איכותי מבית Dimplex בעיצוב קמין עם אפקט גחלים.',
    price: '200 ש״ח',
  },
  {
    id: 'designed-trash-can',
    name: 'פח אשפה מעוצב',
    images: ['/furniture/Designed-trash-can.jpeg'],
    description: 'פח פלסטיק דמוי ראטן, נוח לשירותים או למשרד.',
    price: '30 ש״ח',
  },
  {
    id: 'led-zeppelin',
    name: 'פוסטר ממוסגר - Led Zeppelin',
    images: ['/furniture/Led Zeppelin.jpeg'],
    dimensions: 'גובה 90 ס"מ x רוחב 60 ס"מ',
    description: 'תמונת עטיפת אלבום ממוסגרת של Led Zeppelin - Mothership.',
    price: '100 ש״ח',
  }
]