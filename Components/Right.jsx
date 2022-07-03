import { React, useEffect, useState } from 'react'
import Description from './Description'
import { useSelector, useDispatch } from 'react-redux';
import fetchHomeRight from '../store/actions/homeRightAction'
export default function Right() {
     const dispatch = useDispatch()
     // fetch data 
     const fetchData = async () => {
          dispatch(await fetchHomeRight());
     };
     useState(fetchData);
     // main state 
     const [width, setWidth] = useState(0);
     const state = useSelector(state => state.homeRight)
     // dummy state
     const arr = state.box;
     // adding effects on the dom
     useEffect(() => { setWidth(window.innerWidth + 20) })
     // returning jsx
     return (
          <div style={{ width: '38vw', display: `${width < 800 ? "none" : "block"}` }}>
               <div className="p-3 mr-3 border border-3 m-3 border-secondary" style={{ borderRadius: '54px 0% 54px 0%', backgroundColor: 'white' }}>
                    <h2 className="mx-sm-3">{state.heading}</h2>
                    {
                         arr.map((obj, i) => {
                              return <Description node={obj} key={i} />
                         })
                    }

               </div>
          </div>
     )
}
