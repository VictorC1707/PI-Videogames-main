const express = require("express");
const { Videogame} = require("../db");

const router = express.Router();
const { getGames, createGame, gameId} = require("./controllers");

// Obtencion de juego en funcion del parametro de consulta

//promesas
{/*router.get("/", (req, res) => {
  const { name } = req.query;
  getGames()
    .then((response) => {
      if (name) {
        const gameFilter = response.filter((e) =>
          e.name.toLowerCase().includes(name.toLowerCase())
        );
        res.status(200).send(gameFilter);
      } else {
        res.status(200).send(response);
      }
    })
    .catch((error) => {
      res.status(400).send(error);
    });
}) */}

router.get("/", async (req, res) => {
    try {
      const { name } = req.query;
      const response = await getGames();
      if (name) {
        
        const gameFilter = response.filter((e) =>
          e.name.toLowerCase().includes(name.toLowerCase())
        );
  
        return res.status(200).send(gameFilter);
      }
    
      res.status(200).send(response);
      
    } catch (error) {
      res.status(400).send(error);
    }
  });

  //obtener por id 
  //promesas
  {/*router.get("/:id", (req, res) => {
  const { id } = req.params;
  gameId(id)
    .then((data) => {
      if (!data || Object.keys(data).length === 0) {
        res.status(400).send("No se encontro el juego");
      } else {
        res.status(200).json(data);
      }
    })
    .catch((error) => {
      res.status(404).send(error);
    });
}); */ }
  router.get("/:id", async (req, res) => {
    try {
      const {id} = req.params;  
      const data= await gameId(id)
      
     
      if(!data || Object.keys(data).length === 0){
        return res.status(400).send("No se encontro el juego")
       }
    
     
      res.status(200).json(data);
     
    } catch (error) {
      res.status(404).send(error)
    }
  });

  //creando juego
  //promesas
  {/*router.post("/", (req, res) => {
  const { name, description, released, rating, background_image, genres, platforms } = req.body;

  createGame(name, description, released, rating, background_image, genres, platforms)
    .then((response) => {
      if (response.name && response.description && response.platforms && response.background_image) {
        res.status(201).send(response);
      } else {
        res.status(404).send(response);
      }
    })
    .catch((error) => {
      res.status(400).send(error);
    });
}) */}
  
  router.post("/", async (req, res) => {
    const {name, description, released, rating, background_image, genres, platforms} = req.body;
    
    try {
      const response = await createGame(
        name,
        description,
        released,
        rating,
        background_image,
        genres,
        platforms
      );
      if(response.name && response.description  && response.platforms && response.background_image){
        return res.status(201).send(response);
      }
      else {
        return res.status(404).send(response);
      }
  
    } catch (error) {
      return res.status(400).send(error);
    }
      
  });

  //eliminar 
  //promesas
  {/*router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Videogame.findByPk(id)
    .then((response) => {
      response
        .destroy()
        .then(() => {
          res.status(200).send("Eliminado con éxito");
        })
        .catch((error) => {
          res.status(400).send("No se pudo eliminar el juego");
        });
    })
    .catch((error) => {
      res.status(400).send("No se encontró el juego");
    });
}); */}

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
     try {
        const response = await Videogame.findByPk(id);
        await response.destroy(id);
        res.status(200).send("Eliminado con exito");
     } catch (error) {
      res.status(400).send("no se pudo eliminar el juego");
     }
  
  });
  
  module.exports = router;