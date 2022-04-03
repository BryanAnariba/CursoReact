import { ToastContainer, toast } from 'react-toastify';
const Toast = ( { msg = '', type='' } ) => {
  toast( msg );
  return (
    <ToastContainer />
  )
}

export {
    Toast
}
