import React, { useEffect,useState } from 'react'
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {
  const [popular,setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    },[]);
    const getPopular = async () =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=33c3f49764894c1896d34e60ebe3d9ca&number=9`);
        const data = await api.json();
        setPopular(data.recipes);
    };

  return (
    <div>
        return(
          <Wrapper>
            <h3>Popular Picks</h3>
            <Splide>
            {popular.map((recipe=>{
              return(
                <SplideSlide>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}></img>
                  </Card>
                </SplideSlide>
              );
            }))}
            </Splide>
          </Wrapper>
        );
    </div>
  );
}

const Wrapper = styled.div`
  margin:4rem 0rem;
  
`
const Card = styled.div`
  min-height:25rem;
  border-radius:2rem;
  overflow:hidden;
img{
  border-radius:2rem;
}

`

export default Popular;