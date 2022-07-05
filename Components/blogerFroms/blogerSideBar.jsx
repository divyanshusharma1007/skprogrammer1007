import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Container } from 'react-bootstrap'
import  Link from 'next/link'
import glassMorphism from '../../helpers/glassMorphism'
export default function blogerSideBar() {
    return (
        <Container className="text-light" style={{position:'fixed',top:'99px',width:'35%',left:'-42px'}}>
            <div
                className="mx-5 px-1"
                style={glassMorphism}
            >
                <h3 className='p-3'>Welcome Bloger !</h3>
                <hr  className='text-center mx-2' style={{color:'black',height:'5px',borderRadius:'10px'}} />
                <div className="text-white mx-3 py-2">
                    <Link className="my-3" href="/bloger/profile" ><h4 style={{cursor:'pointer'}}>My Profile</h4></Link>
                    <Link className="my-3" href="/bloger/create" ><h4 style={{cursor:'pointer'}}>Create Blog</h4></Link>
                    <Link className="my-3" href="/bloger/showblogs" ><h4 style={{cursor:'pointer'}}>My Blogs</h4></Link>
                </div>
            </div>
        </Container>
    )
}