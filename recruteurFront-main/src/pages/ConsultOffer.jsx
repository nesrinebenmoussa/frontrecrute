import React from "react";
import NavBar from "./NavBar";
import { useEffect ,useState} from "react"; 
import { toast } from 'react-toastify' ;
import { useParams } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  getById} from '../features/Postulation/PostulationSlice'
 
function ConsultPost() {
    const {id}=useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { postulations  , isLoading} =
    useSelector((state) => state.postulations);
   
  useEffect(() => {
    dispatch(getById(id)).unwrap().then(
      (res)=>{
     console.log(res) 
      }
      
    )
 
    console.log(postulations , 'hedhom ')
   
  }, [
    dispatch,
    navigate,  
  
  ]);


 
   
   


    
if(isLoading){
    return (<h1>...</h1>)
}else{

      
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row gutters">
        
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary">Personal Details</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">Num Cin</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter num cin"

                        defaultValue={postulations.cin}
                        name="cin"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="eMail">date de naissance</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter date"
                       
                        defaultValue={postulations.datenaissance}

                        name="datenaissance"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phone">Name</label>
                      <input
                        type="text"
                        className="form-control"
                       
                        name="name"
                        placeholder="Enter name"
                        defaultValue={postulations.name}

                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">LastName</label>
                      <input
                        type="url"
                        className="form-control"
                       
                        name="lastname"
                        placeholder="ENter Last Name"
                        defaultValue={postulations.lastname}

                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">tel </label>
                      <input
                        type="url"
                        className="form-control"
                       
                        name="tel"
                        placeholder="Enter tel number"
                        defaultValue={postulations.tel}

                      />
                    </div>
                  </div>
                 
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">Email</label>
                      <input
                        type="url"
                        className="form-control"
                       
                        name="email"
                        defaultValue={postulations.email}

                        placeholder="Enter email adresse"
                      />
                    </div>
                  </div>
                                  </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">
                      Experience Professionelle
                    </h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="Street">Diplome</label>
                      <input
                        type="text"
                        className="form-control"
                       
                        name="diplome"
                        placeholder="Enter diplome"
                        defaultValue={postulations.diplome}

                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="ciTy">Date obtention</label>
                      <input
                        type="text"
                        className="form-control"
                       
                        name="datedep"
                        placeholder="Enter Date"
                        
                        defaultValue={postulations.datedep?.toLocaleString('en-US')}

                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="sTate">experience</label>
                      <input
                        type="number"
                        className="form-control"
                       
                        name="exp"
                        placeholder="Enter experience month number"
                        defaultValue={postulations.exp}

                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="zIp">moyenne fin d'etude</label>
                      <input
                        type="number"
                        className="form-control"
                       
                        name="moyfe"
                        placeholder="Enter moyenne"
                        defaultValue={postulations.moyfe}

                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit" 
                        className="btn btn-primary"
                        onClick={()=>{
                          navigate('/MyOffres/all')
                        }}
                      >
Retour                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
}
export default ConsultPost;
