import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
  },
  media: {
    height: 180,
  },
  discription:{
      maxHeight:85
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://karnosh.s3.eu-central-1.amazonaws.com/54ER4TY54RF4JU7JK65DFG.png"
          title="WIXOSS Diva(A)Live"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6" align="center">
          WIXOSS Diva(A)Live
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"  className={classes.discription}>
          قصة انمي Boruto: Naruto Next Generations تدور حول ناروتو الذي كان شينوبي شاب بموهبة خارقة استطاع تحقيق حلمه المتمثل في أن يصبح أفضل نينجا في القرية ليتم نحث وجهه بعد ذلك فوق تمثال الهوكاج وفي هذا الأنمي سيظهر جيل جديد من النينجا على أهبة الإستعداد لأخد المشعل ويقودوهم ابن ناروتو: بوروتو!

</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
