import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography,IconButton, Avatar, Checkbox } from "@mui/material"
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

export const PostCard = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Card  sx={{ maxWidth: 360,margin:5,boxShadow:2 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image="https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014828/ecommerce/pineapplemuffin1.webp"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite style={{ color: 'red' }} />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
      <IconButton aria-label="chat">
          <ChatBubbleOutlineIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon  />
        </IconButton>
     
    </CardActions>
  </Card>
  )
}
