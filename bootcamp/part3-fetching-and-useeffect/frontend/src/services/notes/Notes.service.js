import axios from 'axios';
const getNotes = () => {
  return axios.get( `https://jsonplaceholder.typicode.com/posts` )
    .then(( { data } ) => {
      console.log( data );
      return data;
    })
    .catch(( err ) => {
      //console.error( { err } );
      return err;
    });
};

const save = ( addNote ) => {
  //return Promise.reject( 'ups.' )
  return axios.post( `https://jsonplaceholder.typicode.com/posts`, addNote )
    .then(( response ) => {
      const { data } = response;
      console.log(data)
      return data;
    })
    .catch(( err ) => {
      //console.error( { err } );
      return err;
    });
}

export {
  getNotes,
  save
}