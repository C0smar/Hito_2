import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardPizza( {img,title,ingredientes,precio}) {
  return (

    <Card className='tarjeta' style={{ width: '22rem' }}>
      <Card.Img className = "imagen" variant="top" src= {img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='tarjetaTexto'>  Ingredientes :
          
          <br />
        <p>🍕{ingredientes.map ((ingredientes,index) => ( <span key={index}> {ingredientes}</span>))}</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> <div className='menuPrecio'><strong> Precio: ${precio} </strong>  </div> </ListGroup.Item>
        <ListGroup.Item> <div className='menuBotones'><button className='botonVerMas'> Ver Más 👀</button> <button className='botonAñadir'> Añadir 🛒</button> </div></ListGroup.Item>
      </ListGroup>
      
    </Card>
  );
}

export default CardPizza;