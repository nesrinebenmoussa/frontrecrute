import React from "react";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getByA , getByRec , update,reset} from '../features/Postulation/PostulationSlice'
import {useParams} from 'react-router'
import Offre from "./Offre";
function AllOffres() { 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { postulations  , isLoading} =
    useSelector((state) => state.postulations);
    const {user} = useSelector(state => state.auth)
   
  useEffect(() => {
    dispatch(getByRec(user._id)).unwrap().then(
      (res)=>{
     console.log(res) 
      }
      
    )
 
    console.log(postulations , 'hedhom ')
   
  }, [
    dispatch,
    navigate,  
  
  ]);


 
  
  return (
    <>
      <NavBar />

      <div className='container mt-4'>
        <div className='col-12 col-sm-12 col-md-12'>
          <div className='card'>
            <div className='card-header'>
              <h4>All  Postulations</h4>
            </div>

            <input className="form-control" placeholder="find by position "/>
            <div className='card-body'>
              <div className='media-list position-relative'>
                <div
                  className='table-responsive'
                  id='project-team-scroll'
                  tabIndex={1}
                  style={{ height: 400, overflow: "hidden", outline: "none" }}>
                  <table className='table table-hover table-xl mb-0'>
                    <thead>
                      <tr>
                        <th> Name</th>
                        <th>status</th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {postulations.length >0 ? postulations.map((p)=>(

<Offre key={p._id}  postulation={p}/> 
               
              
                ))     :  <h1>no postulation found</h1>}
                   
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllOffres;
