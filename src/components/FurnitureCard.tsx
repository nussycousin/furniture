import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { FurnitureItem } from '../data/furniture.ts'

type Props = {
  item: FurnitureItem
  onSelect?: (item: FurnitureItem) => void
}

function FurnitureCard({ item, onSelect }: Props) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 1, // 14px (theme shape)
        overflow: 'hidden',
        bgcolor: 'background.paper',
        boxShadow: '0 6px 24px rgba(43, 43, 43, 0.06)',
        transition: 'transform 220ms ease, box-shadow 220ms ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 14px 36px rgba(43, 43, 43, 0.12)',
        },
      }}
    >
      <CardActionArea onClick={() => onSelect?.(item)}>
        <Box
          component="img"
          src={item.images[0]}
          alt={item.name}
          loading="lazy"
          sx={{
            width: '100%',
            aspectRatio: '4 / 5',
            objectFit: 'cover',
            display: 'block',
            bgcolor: '#F0ECE6',
          }}
        />
        <Box sx={{ px: 2.5, py: 2 }}>
          <Typography variant="h6" component="h3" sx={{ fontSize: 20, lineHeight: 1.3 }}>
            {item.name}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default FurnitureCard
