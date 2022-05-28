import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {getbyDiplome} from "../features/Postulation/cvSlice";
import NavBar from "./NavBar";

function CVS() {
  const { diplome } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(diplome, "this is what i got ");

  const {cv} = useSelector(state => state.cv)
    const {user } = useSelector(state => state.auth)
  useEffect(()=>{
    dispatch(getbyDiplome(diplome))
    console.log(cv,  'cvss')
  } ,[ dispatch , navigate])
  return (
    <>
      <NavBar />
      <section >
        <div className='container mt-4'> 

        <div className="row">
        <div className="col-md-6 col-xl-3">
        {cv.length > 0 ? (
            cv.map((c) => (

<div className="card m-b-30">
<div className="card-body row">
    <div className="col-6">
        <a href=""><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" className="img-fluid rounded-circle w-60" /></a>
    </div>
    <div className="col-6 card-title align-self-center mb-0">
        <h5>{c.name}</h5>
        <p className="m-0">{c.diplome}</p>
    </div>
</div>
<ul className="list-group list-group-flush">
    <li class="list-group-item"><i class="fa fa-envelope float-right"></i>Email :   {c.email} </li>
    <li className="list-group-item"><i class="fa fa-phone float-right"></i>Phone : {c.tel}</li>
</ul>
<div className="card-body">
    <button className="btn btn-info" > consulter</button>
</div>
</div>
            ))
          ) : (
            <h1>no cv found</h1>
          )}
        
        </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default CVS;
