import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/fetchMovie';
import {
  CastList,
  CastItem,
  CastImg,
  CastName,
  CastCharacter,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <CastList>
      {cast.length === 0 && <p>Sorry, we don't have any cast on this movie</p>}

      {cast.map(({ id, profile_path, name, character }) => (
        <CastItem key={id}>
          <CastImg
            src={
              profile_path === null
                ? `http://dummyimage.com/150x225/99cccc.gif&text=No+Foto`
                : imgBaseUrl.concat(profile_path)
            }
            alt=""
          />
          <CastName>{name}</CastName>
          <CastCharacter>{character}</CastCharacter>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
