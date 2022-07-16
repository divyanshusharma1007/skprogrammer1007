import { Card } from "react-bootstrap"
import Image from "next/image"
import img from '../Images/spidy.jpg'
export default function HomeCard({ data }) {

     return (
          <div className="col-md-4 my-2">
               <Card className="border-3 border-secondary shadow-lg rounded" style={{ height: '100%' }}>
                    <div className='mx-1 mt-1'>
                         <Image src={img} />
                    </div>
                    <Card.Body>
                         <Card.Title className="text-secondary">{data?.langName}</Card.Title>
                         <Card.Text className="text-secondary">
                              <ul>
                                   {data?.langUse.split('\n').map((e) => <li>{e}</li>)}
                              </ul>
                         </Card.Text>
                    </Card.Body>
               </Card>
          </div>
     )
}