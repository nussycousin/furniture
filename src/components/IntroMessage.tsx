import { useState } from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// Personal intro note from the seller, shown between the header and the gallery.
// Collapsed by default to keep the gallery high on the screen: only the greeting
// plus a "קרא עוד" toggle show until expanded. Each point is one compact row with
// a leading icon and an emphasized lead-in label for scannability.
const points: { icon: string; label: string; rest: string }[] = [
  {
    icon: '🏷️',
    label: 'גמישות במחיר',
    rest: ': אם אתם צריכים את הרהיט אך במחיר נמוך יותר, מוזמנים תמיד לנסות להציע ונגיע להסכמה.',
  },
  {
    icon: '🤝',
    label: 'עזרה למי שצריך',
    rest: ': אם מישהו נצרך לאחד מהרהיטים בלי יכולת, או שאת/ה חייל/ת בודד/ה, תרשמו לי ואנסה לעזור עד כמה שמתאפשר.',
  },
  {
    icon: '📍',
    label: 'איסוף',
    rest: ': כל הרהיטים מצפת, שכונת רמת רזים.',
  },
]

function IntroMessage() {
  const [open, setOpen] = useState(false)

  return (
    <Box
      component="section"
      sx={{
        maxWidth: 560,
        mx: 'auto',
        textAlign: 'right',
        color: 'text.primary',
      }}
    >
      <Typography variant="body2" sx={{ fontSize: 15, lineHeight: 1.6 }}>
        היי לכולם! בשמחה ובאהבה רבה אני משתחרר עוד חודש וטס לי לחו״ל. אני מוכר את
        הרהיטים שאספתי במהלך השנים האחרונות:
      </Typography>

      <Link
        component="button"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        underline="hover"
        sx={{
          mt: 0.75,
          fontSize: 14,
          fontWeight: 600,
          color: 'primary.main',
          cursor: 'pointer',
        }}
      >
        {open ? 'קרא פחות' : 'קרא עוד'}
      </Link>

      <Collapse in={open} unmountOnExit>
        <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
          {points.map((p) => (
            <Box
              key={p.label}
              sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}
            >
              <Box
                component="span"
                aria-hidden
                sx={{ fontSize: 15, lineHeight: 1.55, flexShrink: 0 }}
              >
                {p.icon}
              </Box>
              <Typography variant="body2" sx={{ fontSize: 14.5, lineHeight: 1.55 }}>
                <Box component="span" sx={{ fontWeight: 600 }}>
                  {p.label}
                </Box>
                {p.rest}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1.75, fontStyle: 'italic', fontSize: 13.5 }}
        >
          באהבה, נותי.
        </Typography>
      </Collapse>
    </Box>
  )
}

export default IntroMessage
