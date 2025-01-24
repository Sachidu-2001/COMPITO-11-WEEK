import {Button, Container} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

function AppleOthers() {
  return (
    <Container fluid className='bg-black'>
      <h2 className='text-white'>Altro da esplorare</h2>
      <div>
        <Button variant='dark' className='fs-2 py-4 mb-3 w-100 d-flex justify-content-between text-danger'>Esplora per genere <Icon.CaretRight className='my-auto'/> </Button>
        <Button variant='dark' className='fs-2 py-4 mb-3 w-100 d-flex justify-content-between text-danger'>Decenni <Icon.CaretRight className='my-auto'/> </Button>
        <Button variant='dark' className='fs-2 py-4 mb-3 w-100 d-flex justify-content-between text-danger'>Attivià e stati d'animo <Icon.CaretRight className='my-auto'/> </Button>
        <Button variant='dark' className='fs-2 py-4 mb-3 w-100 d-flex justify-content-between text-danger'>Worldwide <Icon.CaretRight className='my-auto'/> </Button>
        <Button variant='dark' className='fs-2 py-4 mb-3 w-100 d-flex justify-content-between text-danger'>Classifiche <Icon.CaretRight className='my-auto'/> </Button>
        <Button variant='dark' className='fs-2 py-4 mb-3 w-100 d-flex justify-content-between text-danger'>Audio spaziale <Icon.CaretRight className='my-auto'/> </Button>
        <Button variant='dark' className='fs-2 py-4 mb-3 w-100 d-flex justify-content-between text-danger'>Video musicali <Icon.CaretRight className='my-auto'/> </Button>
        <Button variant='dark' className='fs-2 py-4 mb-3 w-100 d-flex justify-content-between text-danger'>Nuovi artisti <Icon.CaretRight className='my-auto'/> </Button>
        <Button variant='dark' className='fs-2 py-4 mb-3 w-100 d-flex justify-content-between text-danger'>Hit del passato <Icon.CaretRight className='my-auto'/> </Button>
      </div>
      &nbsp;
    </Container>
  );
}

export default AppleOthers;
