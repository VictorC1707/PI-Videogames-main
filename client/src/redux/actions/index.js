
const axios = require('axios').default;


export const VIDEO_GAMES = "VIDEO_GAMES";
export const VIDEO_GAMES_NAME = "VIDEO_GAMES_NAME";
export const SORT_BY_RATING = "SORT_BY_RATING";
export const FILTER_CREATED_GAME = "FILTER_CREATED_GAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_BY_GENRE = "GET_BY_GENRE";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const CREATED_GAME = "CREATED_GAME";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_DETAILS = "GET_DETAILS";
export const DELETE_GAME = "DELETE_GAME";

//solicitud Get a ruta /videogames
//promesas
{/*export const getVideogames = () => (dispatch) => {
  return axios
    .get("/videogames")
    .then((response) => {
      dispatch({
        type: VIDEO_GAMES,
        payload: response.data,
      });
    })
    .catch((error) => {
      return error;
    });
}; */}
export const getVideogames = () => async (dispatch) => {
  try {
    const call = await axios.get("/videogames");
    return dispatch({
      type: VIDEO_GAMES,
      payload: call.data,
    });
  } catch (error) {
    
    return error;
  }
};


//solicitud get a la ruta /videogames/${id} 
//promesas
{/*export const getDetail = (id) => (dispatch) => {
  return axios
    .get(/videogames/${id})
    .then((response) => {
      dispatch({
        type: GET_DETAILS,
        payload: response.data,
      });
    })
    .catch((error) => {
      return error;
    });
}; */}

export const getDetail = (id) => async (dispatch) => {
      try {
        const response = await axios.get(`/videogames/${id}`);
        
         return dispatch({
          type: GET_DETAILS,
          payload: response.data,
         })
      } catch (error) {
        return error;
      }
};

//solicitud delete a la ruta /videogames/${id}
//promesas
{/*export const deleteGame = (id) => (dispatch) => {
  return axios
    .delete(/videogames/${id})
    .then((g) => {
      dispatch({
        type: DELETE_GAME,
        payload: g.data,
      });
    })
    .catch((error) => {
      return error;
    });
}; */}

export const deleteGame = (id) => async (dispatch) =>{

    try {
    return await axios.delete(`/videogames/${id}`).then( (g) => dispatch ({
    type: DELETE_GAME,
    payload: g.data
  }))
    } catch (error) {
      return error;
    }
};

//solicitud get a /videogames
//promesas
{/*export const getPlatform = () => (dispatch) => {
  axios
    .get("/videogames")
    .then((response) => {
      const allPlat = response.data.map((e) => e.platforms);
      const plats = allPlat.flat();
      const unicos = [...new Set(plats)];
      dispatch({
        type: GET_PLATFORMS,
        payload: unicos,
      });
    })
    .catch((error) => {
      return error;
    });
}; */}
export const getPlatform = () => async (dispatch) => {
 try {
    const response = await axios.get(`/videogames`);
    
   
    const allPlat = await response.data.map((e) => e.platforms);
    
    
    const plats = await allPlat.flat();
    const unicos = [...new Set(plats)];
    
    return dispatch({
      type: GET_PLATFORMS,
      payload: unicos,
    })
 } catch (error) {
  return error;
 }
};

//solicitud post a ruta /videogames
//promesas
{/*export const postGame = (game) => () => {
  return axios
    .post("/videogames", game)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}; */}
export const postGame = (game) => async () => {

  try {

     const response = await axios.post("/videogames", game);
    
    return response;
    
  } catch (error) {
    return error;
  }
};

//realiza una solicitud get a la ruta  /videogames con parametro de consulta
//promesas
{/*export const getVideogamesName = (name) => (dispatch) => {
  return axios
    .get(/videogames?name=${name})
    .then((response) => {
      dispatch({ type: VIDEO_GAMES_NAME, payload: response.data });
    })
    .catch((error) => {
      return error;
    });
}; */}
export const getVideogamesName = (name) => async (dispatch) => {
  try {
    const response = await axios.get(`/videogames?name=${name}`);
    
   
    return dispatch({ type: VIDEO_GAMES_NAME, payload: response.data });
  } catch (error) {
    
    return error;
  }
};

//solicitud get a la ruta /genres
//promesas
{/*export const getByGenres = () => (dispatch) => {
  axios
    .get("/genres")
    .then((response) => {
      dispatch({
        type: GET_BY_GENRE,
        payload: response.data,
      });
    })
    .catch((error) => {
      return error;
    });
}; */}

export const getByGenres = () => async  (dispatch) => {
  try {
    const response = await axios.get(`/genres`);
    
  
    return dispatch({
      type: GET_BY_GENRE,
      payload: response.data,
    })
  } catch (error) {
    return error;
  }

};

export const filterByGenres = (payload) => {
  return {
    type: FILTER_BY_GENRES,
    payload,
  }
}

export const filterCreatedGame = (payload) => {
    return{
      type: FILTER_CREATED_GAME,
      payload,
    }
};

export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload,
    }
};

export const sortByRating = (payload) => {
  return {
    type: SORT_BY_RATING,
    payload,
  };

}