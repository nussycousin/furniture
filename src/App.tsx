import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Gallery from './components/Gallery.tsx'
import IntroMessage from './components/IntroMessage.tsx'
import FurnitureDialog from './components/FurnitureDialog.tsx'
import { furniture } from './data/furniture.ts'
import type { FurnitureItem } from './data/furniture.ts'

function App() {
  const [selected, setSelected] = useState<FurnitureItem | null>(null)

  return (
    <Box sx={{ minHeight: '100dvh', bgcolor: 'background.default' }}>
      <Container maxWidth="md" sx={{ py: { xs: 5, sm: 8 } }}>
        <Box component="header" sx={{ mb: { xs: 4, sm: 6 } }}>
          <Typography variant="h1" sx={{ fontSize: { xs: 38, sm: 50 }, mb: 1.5 }}>
            רהיטים
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: 18, maxWidth: 480 }}
          >
            אוסף קטן ונבחר. לחצו על פריט לפרטים נוספים.
          </Typography>
          <Box
            sx={{ mt: 2.5, width: 48, height: 3, borderRadius: 2, bgcolor: 'primary.main' }}
          />
        </Box>
        <Box sx={{ mb: { xs: 5, sm: 7 } }}>
          <IntroMessage />
        </Box>
        <Gallery items={furniture} onSelect={setSelected} />
      </Container>

      <FurnitureDialog item={selected} onClose={() => setSelected(null)} />
    </Box>
  )
}

export default App
