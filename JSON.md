JSON

1)codificar
algo útil para el lenguaje --> string JSON --> JSON.stringify(objeto)

2)decodificar
string JSON ---> algo útil para el lenguaje --> JSON.parse(string json)


----------------------------------
path

"/a/b/c/d"

segmentos dinámicos en la URL (parámetros) --> params -----> :

"/x/cosa" ---> literal

"/x/:cosa" --> "/x/hola"

cosa --> "hola"

TODOS los parámetros dinámicos de la URL, estrán en el objeto PARAMS de la petición

"/hola/:a/:b/:c" ----> { a , b , c}

"/hola/adios/4/x"

{
    a : "adios",
    b : "4",
    c : "x"
}


params -----> :nombre-parametro

params -----> :nombre-parametro(regex)

--------------------

API rest/restful --> representational state


<--JSON-->

endpoints ---> URL + métodos

-----------------------------------------

GET /api-todo 
respuesta: [{id,tarea,terminada}]

POST /api-todo/crear
petición: { tarea : "blablabla" }
respuesta: { id }

DELETE /api-todo/borrar/:id 
respuesta: {ressultado :ok|ko}

PUT /api-todo/actualizar/:id/:operacion
respuesta: {ressultado :ok|ko}

operación 1 --> editar texto --> petición: { tarea : "blablabla" }
operación 2 ---> toggle estado




respuesta: { error : error en servidor }
respuesta: { error : error en la petición }
respuesta: { error : not found }

--------------------------------

GET /api-todo ---> "método GET"
POST /api-todo ---> "método POST"
PUT /api-todo ---> "método PUT"
DELETE /api-todo ---> "método DELETE"
cualquier otra petición --> '{ error : "not found" }'





.use((error,peticion,respuesta,siguiente) => {

})



400 --> bad request

DELETE /api-todo/borrar/:id 