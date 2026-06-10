import { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import Grow from '@mui/material/Grow'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import WhatsAppButton from './WhatsAppButton.tsx'
import type { FurnitureItem } from '../data/furniture.ts'

type Props = {
  item: FurnitureItem | null
  onClose: () => void
}

function CloseIcon() {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      sx={{ width: 20, height: 20, fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}
    >
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </Box>
  )
}

function FurnitureDialog({ item, onClose }: Props) {
  // Keep the last item mounted so content stays visible during the close animation.
  const [shown, setShown] = useState<FurnitureItem | null>(item)
  useEffect(() => {
    if (item) setShown(item)
  }, [item])

  return (
    <Dialog
      open={Boolean(item)}
      onClose={onClose}
      slots={{ transition: Grow }}
      maxWidth="sm"
      fullWidth
      aria-labelledby="furniture-dialog-title"
      slotProps={{
        paper: { sx: { borderRadius: 3, overflow: 'hidden', m: 2 } },
        backdrop: { sx: { bgcolor: 'rgba(43, 43, 43, 0.45)' } },
      }}
    >
      {shown && (
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={onClose}
            aria-label="סגירה"
            sx={{
              position: 'absolute',
              top: 10,
              insetInlineStart: 10,
              zIndex: 1,
              color: 'text.primary',
              bgcolor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(4px)',
              '&:hover': { bgcolor: '#fff' },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Image(s): horizontal swipe strip when more than one. */}
          <Box
            sx={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              bgcolor: '#F0ECE6',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
            }}
          >
            {shown.images.map((src, i) => (
              <Box
                key={i}
                component="img"
                src={src}
                alt={shown.images.length > 1 ? `${shown.name} ${i + 1}` : shown.name}
                sx={{
                  flex: '0 0 100%',
                  width: '100%',
                  height: { xs: 300, sm: 380 },
                  objectFit: 'contain',
                  scrollSnapAlign: 'center',
                  display: 'block',
                }}
              />
            ))}
          </Box>

          <Box sx={{ p: { xs: 2.5, sm: 3.5 } }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'baseline',
                columnGap: 1.5,
                rowGap: 0.25,
                mb: 1.5,
              }}
            >
              <Typography
                id="furniture-dialog-title"
                variant="h2"
                sx={{ fontSize: { xs: 28, sm: 34 } }}
              >
                {shown.name}
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 500, // slightly lighter than the title (600)
                  color: 'primary.main',
                  fontSize: { xs: 22, sm: 26 },
                  whiteSpace: 'nowrap',
                }}
              >
                {shown.price}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: 15, mb: 2.5, lineHeight: 1.6 }}
            >
              <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                מידות:{' '}
              </Box>
              {shown.dimensions}
            </Typography>

            <Typography variant="body1" sx={{ fontSize: 17, lineHeight: 1.7, mb: 3.5 }}>
              {shown.description}
            </Typography>

            <WhatsAppButton itemName={shown.name} fullWidth />
          </Box>
        </Box>
      )}
    </Dialog>
  )
}

export default FurnitureDialog
