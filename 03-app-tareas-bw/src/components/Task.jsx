export const Task = ( { id, tituloTarea, descripcionTarea, estadoTarea,prioridadTarea, editarTarea, eliminarTarea } ) => {

    return (
        <tr>
            <td>{ id }</td>
            <td>{ tituloTarea }</td>
            <td>{ descripcionTarea }</td>
            <td>{ ( estadoTarea === false ) ? 'Pendiente' : 'Completada' }</td>
            <td>{ ( prioridadTarea === true ) ? 'Alta' : 'Normal' }</td>
            <td><button className="btn btn-outline-info" onClick={ () => editarTarea( id ) }>Editar</button></td>
            <td><button className="btn btn-outline-danger" onClick={ () => eliminarTarea( id ) }>Eliminar</button></td>
        </tr>
    )
}
