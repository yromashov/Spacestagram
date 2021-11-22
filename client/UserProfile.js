import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/fontawesome-free-solid';
import { faChevronLeft } from '@fortawesome/fontawesome-free-solid';

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

export default function UserProfile() {
  const classes = useStyles();

  const favorites = JSON.parse(localStorage.likes);

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      className={classes.grid}
    >
      <div style={{ display: 'flex' }}>
        <Link
          to={'/'}
          style={{
            marginLeft: '0%',
            position: 'fixed',
            display: 'block',
            marginTop: '.5%',
            textDecoration: 'none',
          }}
        >
          <div style={{ display: 'flex', marginLeft: '-300px' }}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{
                height: '40px',
                width: '50',
                color: 'white',
                alignSelf: 'center',
              }}
            />
            <p
              style={{
                color: 'white',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontSize: '2rem',
              }}
            >
              Back
            </p>
          </div>
        </Link>
        <Typography
          variant='h1'
          component='h1'
          style={{
            justifyContent: 'center',
            color: 'white',
            display: 'inline',
          }}
        >
          Your Favorites
        </Typography>
      </div>
      {favorites &&
        favorites
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
                  {/* {clicks.includes(image.date) ? (
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
                    )} */}
                </IconButton>
              </Card>
            );
          })}
    </Grid>
  );
}
