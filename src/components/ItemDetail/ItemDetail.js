import {Link, useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const ItemDetail = ({item}) => {

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="container my-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        <p>{item.description}</p>
                        <p>Precio: ${item.price}</p>
                    </Card.Text>
                    <Button onClick={handleVolver} variant="primary">Volver</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail