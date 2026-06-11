import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Personal intro note from the seller, shown between the header and the gallery.
// Each bullet's lead-in label (the words before the colon) is emphasized for scannability.
const bullets: { label: string; rest: string }[] = [
  {
    label: 'גמישות במחיר',
    rest: ': אם אתם צריכים את הרהיט אך במחיר נמוך יותר, מוזמנים תמיד לנסות להציע ונגיע להסכמה.',
  },
  {
    label: 'עזרה למי שצריך',
    rest: ': אם מישהו נצרך לאחד מהרהיטים בלי יכולת, או שאת/ה חייל/ת בודד/ה, תרשמו לי ואנסה לעזור עד כמה שמתאפשר.',
  },
  {
    label: '📍 איסוף',
    rest: ': כל הרהיטים מצפת, שכונת רמת רזים.',
  },
]

function IntroMessage() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: 600,
        mx: 'auto',
        textAlign: 'right',
        color: 'text.primary',
      }}
    >
      <Typography variant="body1" sx={{ fontSize: 17, lineHeight: 1.7 }}>
        היי לכולם! בשמחה ובאהבה רבה אני משתחרר עוד חודש וטס לי לחו״ל. אני מוכר את
        הרהיטים שאספתי במהלך השנים האחרונות:
      </Typography>

      <Box
        component="ul"
        sx={{
          listStyle: 'disc',
          pr: 3,
          pl: 0,
          my: 2.5,
          '& > li': { mb: 1.5, fontSize: 17, lineHeight: 1.7 },
          '& > li:last-of-type': { mb: 0 },
        }}
      >
        {bullets.map((b) => (
          <Typography component="li" variant="body1" key={b.label}>
            <Box component="span" sx={{ fontWeight: 600 }}>
              {b.label}
            </Box>
            {b.rest}
          </Typography>
        ))}
      </Box>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mt: 3, fontStyle: 'italic', fontSize: 16 }}
      >
        באהבה, נוסי.
      </Typography>
    </Box>
  )
}

export default IntroMessage
