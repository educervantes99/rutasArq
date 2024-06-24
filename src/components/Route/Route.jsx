import { Link } from 'react-router-dom';
import './Route.css';
import piramide from '../../assets/p1.png'

let colors = [
  '#fcb7af',
  '#b0f2c2',
  '#b0c2f2',
  '#fdf9c4',
  '#FDFFA7',
  '#c5c6c8',
  '#9F83B8',
  '#d8f8e1',
  '#ffda9e',
  '#b2e2f2',
  '#6CB6EC',
  '#ffe4e1',
  '#d0fff8'
]


export const Route = ({route}) => {

  return (
    <div className="routeContainer">
      <div className='sitesRoute'>

        {route?.map((item)=>
               { return (<Link key={item} className='siteRoute' to={`/state/${item}`}>
                            <img style={{background: `${colors[Math.floor(Math.random() * (colors.length))]}`}} className='piramide' src={piramide} alt="" />
                            <p>{item}</p>
                        </Link>)
                }
            )}
      </div> 
    </div>
  )
}
