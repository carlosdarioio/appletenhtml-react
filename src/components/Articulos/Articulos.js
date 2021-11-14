import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { auth, db } from '../../firebase/firebase';
import { Layout } from '../Layout'

const Articulos = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState("");

    //get all
    const [items, setItems] = useState([])
    const obtenerDatos = async () => {
    
        try {
  
          //const db = firebase.firestore()
          const data = await db.collection('items').get()
          const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          console.log(arrayData)
          setItems(arrayData)    
          
        } catch (error) {
          console.log(error)
        }
  
      }
    useEffect(() => {

        
    
        obtenerDatos()
    
      }, [])
    //end get all

    const AddItem= async () => {
        if(nombre==="" || precio===0 || descripcion==="")
        {
            alert('Rellenar todo');
            return    
        }
        
        try {                        
            const nuevoItem=await db.collection("items").add({              
                nombre,
                precio,
                descripcion,
            });
            
            
            //alert('accion AddItem');
            Swal.fire(
                'Agregado!',
                'Articulo Agregado!',
                'success'
              );
              obtenerDatos();   
              

            setNombre('');
            setPrecio(0);
            setDescripcion('');
            document.querySelector(".btn-secondary").click();
          } catch (err) {
            console.error(err);
            alert(err.message);
          }
      }
  //firebas eauth required    
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
    
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/login");
    fetchUserName();
  }, [user, loading]);
    return (
        <Layout>
            <div className="container">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1>Ejemplo utilizando base de datos firebase 
                    
                </h1>                
                
            </div>
            <h4>CRUD articulos {nombre} | {precio} | {descripcion}  </h4>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Crear
            </button>
            <canvas className="my-4 w-10" id="myChart" width="10" height="10"></canvas>
            <table class="table table-striped table-hover">
            <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Descripcion</th>
    </tr>
  </thead>
  <tbody>
    {
    items.map((item,i) => (
        <tr>
        <th scope="row">{i+1}</th>
        <td>{item.nombre}</td>
        <td>{item.precio}</td>
        <td>{item.descripcion}</td>
        </tr>
        ))
    }
    
  </tbody>
            </table>
            <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
            </div>

            


<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New Articulo</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
        <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Nombre:</label>
            <input 
            type="text" 
            name="nombre"
            className="form-control"             
            value={nombre} 
            onChange={(event) => { setNombre(event.target.value) }}
            required
            />
          </div>
          <div className="mb-3">
            <label className="col-form-label">Precio:</label>
            <input 
            type="number" 
            name="precio"
            className="form-control"             
            value={precio} 
            onChange={(event) => { setPrecio(Number(event.target.value)) }}
            required
            />
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Descripcion:</label>
            <textarea
            name="descripcion"
            className="form-control" 
            value={descripcion}
            onChange={(event) => { setDescripcion(event.target.value) }}            
            required
            />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-primary"
        onClick={() => AddItem()}
        >
            Crear
            </button>
      </div>
    </div>
  </div>
</div>
        </Layout>
    )
}

export default Articulos
