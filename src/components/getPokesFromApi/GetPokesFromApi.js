import axios from 'axios';
import React, { useEffect, useState } from 'react'
//empezas con form de busqueda, si da click 
//que visulaice informacion del poke
//GetPokesFromApi
import { Layout } from '../Layout';

export const GetPokesFromApi = () => {
    const [tipo, setTipo] = useState('water');    
    const [pokemones, setPokemones] = useState([]);    
    const [result, setResult] = useState("");

    useEffect(()=>{
      fetchPokes()
    },[])

    useEffect(()=>{
      console.log(pokemones);
    },[pokemones])

    const fetchPokes=async()=>{
      //https://jsonplaceholder.typicode.com/comments
      //https://pokeapi.co/api/v2/ability/?limit=20&offset=20
      //https://pokeapi.co/api/v2/type/fire/
      const response=await axios('https://pokeapi.co/api/v2/type/'+tipo+'/');
      setPokemones(response.data)    
  }
  
  const handleFindPoke=() => {
      
    console.log('pendiente');
    fetchPokes()
    console.log(pokemones);
  }


    return (
        <Layout>
            <div className="containerNOP">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Ejemplo Visualizando pokemones obtenidos por API en React</h2>                
            </div>
            <div className="container">
            <div className="mb-3">
                <label className="form-label">Buscar pokemon por tipo (en english jeje)</label>
                <input type="text" name="pokemon" value={tipo} onChange={(event) => { setTipo(event.target.value);setResult('') }}
                className="form-control" placeholder="Ejemplo: water, poison, rock"/>
            </div>   

            <div className="mb-3">                
                <button className="btn btn-primary"
                onClick={() => handleFindPoke()}
                >
                    Buscar
                </button>
            </div>
            </div>
            
            <hr/>
            <div className="containerNOP">
              <div className="row">                
                  <p>Tienen ventaja contra</p>
                    {
                      
                      pokemones.damage_relations && pokemones.damage_relations.double_damage_to.map(rel=>{
                        return (
                      <div className="col-6">
                        <div className="p-3 border " key={rel.name} style={{alignItems:'center',margin:'20px 60px'}}>
                            {rel.name}
                        </div>
                      </div>    
                        )
                      })
                      
                    }
                
              </div>
              <hr/>
            <div className="row">
              <p>Pokemones tipo {tipo}</p>
                {
                    pokemones.pokemon && pokemones.pokemon.map(pk=>{
                    return(

                      <div className="col-4">
                        
                        <div className="p-3 border bg-light" key={pk.pokemon.name} style={{alignItems:'center',margin:'20px 60px'}}>
                            <h4>{pk.pokemon.name}</h4>                            
                        </div>
                      </div>
                        
                    )

                    })
                }
                  </div>
            </div>
            
            </div>
        </Layout>
    )
}
