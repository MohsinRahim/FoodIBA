import { ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function CartItem({ item, onEdit }) {
  return (
    <ListItem secondaryAction={
      <IconButton edge="end" aria-label="edit" onClick={() => onEdit(item)}>
        <EditIcon />
      </IconButton>
    }>
      <ListItemText
        primary={item.name}
        secondary={
          <>
            <Typography component="span" variant="body2">
              {`Quantity: ${item.quantity} | Price: $${item.price}`}
            </Typography>
            <Typography component="span" variant="body2">
              {`Special Instructions: ${item.specialInstructions}`}
            </Typography>
          </>
        }
      />
      <Typography variant="subtitle1">{`$${(item.quantity * item.price).toFixed(2)}`}</Typography>
    </ListItem>
  );
}
