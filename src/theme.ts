import { createTheme } from '@mui/material/styles'

// Warm, editorial furniture-boutique palette.
// Off-white background, charcoal text, one quiet terracotta accent.
const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    background: {
      default: '#FAF7F2',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2B2B2B',
      secondary: '#6F6A63',
    },
    primary: {
      main: '#B5651D', // muted terracotta accent
      contrastText: '#FFFFFF',
    },
    divider: 'rgba(43, 43, 43, 0.10)',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Inter", "Heebo", system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
})

export default theme
