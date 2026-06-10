import Box from '@mui/material/Box'
import FurnitureCard from './FurnitureCard.tsx'
import type { FurnitureItem } from '../data/furniture.ts'

type Props = {
  items: FurnitureItem[]
  onSelect?: (item: FurnitureItem) => void
}

function Gallery({ items, onSelect }: Props) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: { xs: 2.5, sm: 3.5 },
      }}
    >
      {items.map((item) => (
        <FurnitureCard key={item.id} item={item} onSelect={onSelect} />
      ))}
    </Box>
  )
}

export default Gallery
