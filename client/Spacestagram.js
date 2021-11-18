import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OutlinedFavorite from '@material-ui/icons/FavoriteBorderOutlined';
import { Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  favButton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    alignSelf: 'right',
  },
  root: {
    maxWidth: 600,
  },
  grid: {
    backgroundImage: `url(https://images.unsplash.com/photo-1549119246-cf57ef8a17b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80)`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: '0px',
  },
  media: {
    height: 50,
    paddingTop: '56.25%',
  },
}));

export default function App() {
  
  const classes = useStyles();

  const getData = async () => {
    try {
      const res = await axios.get('/apicall');
      setImgs(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const [imgs, setImgs] = useState();

  const [clicks, setClicks] = useState([]);

  const [loading, setLoading] = useState(true);


  const handleIconClick = (id) => {
    let result = clicks.includes(id)
      ? clicks.filter((click) => click != id)
      : [...clicks, id];
    setClicks(result);
  };

  const setLocalStorage= ()=>{
    let favArray=[];
    imgs.forEach((img)=>{
      if(clicks.includes(img.date)){
        favArray.push(img)
      }
    })
    localStorage.setItem('likes', JSON.stringify(favArray))
  }


  useEffect(() => {
    if(localStorage.likes){
      let favoriteClicks=[]
      let favorites=JSON.parse(localStorage.likes)
      favorites.forEach((favorite)=>{
        favoriteClicks.push(favorite.date)
      })
      setClicks(favoriteClicks)
    }
    getData();
  }, []);

  console.log(clicks)

  return (
    <>
      {loading === false ? (
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          className={classes.grid}
        >
          <Link to={'/userprofile'} onClick={()=>{setLocalStorage()}}>Your Favorites</Link>
          <div>
            <Typography
              variant='h1'
              component='h2'
              style={{ justifyContent: 'center', color: 'white' }}
            >
              Spacestagram
            </Typography>
            {imgs &&
              imgs
                .sort((a, b) => {
                  let dateA = parseInt(a.date[6] + a.date[8] + a.date[9], 10);
                  let dateB = parseInt(b.date[6] + b.date[8] + b.date[9], 10);
                  return dateB - dateA;
                })
                .map((image) => {
                  return (
                    <Card
                      className={classes.root}
                      style={{ marginBottom: '25px' }}
                      key={image.date}
                    >
                      <CardHeader title={image.title} subheader={image.date} />
                      <CardMedia
                        className={classes.media}
                        image={image.hdurl}
                        title={image.title}
                      />
                      <CardContent>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          component='p'
                        >
                          {image.explanation}
                        </Typography>
                      </CardContent>
                      <IconButton
                        className={classes.favButton}
                        aria-label='add to favorites'
                        onClick={() => handleIconClick(image.date)}
                      >
                        {clicks.includes(image.date) ? (
                          <div
                            style={{
                              display: 'flex',
                              direction: 'row',
                              justifyContent: 'center',
                              textAlign: 'center',
                            }}
                          >
                            <FavoriteIcon style={{ fill: 'red' }} />
                            <Alert
                              action={
                                <Button
                                  className={classes.favButton}
                                  color='inherit'
                                  size='small'
                                ></Button>
                              }
                            >
                              Added to your favorites!!
                            </Alert>
                          </div>
                        ) : (
                          <OutlinedFavorite />
                        )}
                      </IconButton>
                    </Card>
                  );
                })}
          </div>
        </Grid>
      ) : (
        <Loading />
      )}
    </>
  );
}
