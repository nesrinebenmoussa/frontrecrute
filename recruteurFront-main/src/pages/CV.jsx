import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { get, reset } from "../features/Postulation/cvSlice";

function CV() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { cv } = useSelector((state) => state.cv);

  useEffect(() => {
    dispatch(get(id))
      .unwrap()
      .then((cv) => console.log(cv, "from dispatch"));
    console.log(cv, "cv vvvvv");

    return(()=>{dispatch(reset())})
  }, [id]);

  console.log(id, "iddd");
  return (
    <>
      {" "}
      <NavBar />
      <div className='container-xl px-4 mt-4'>
        <hr className='mt-0 mb-4' />
        <div className='row'>
          <div className='col-xl-8'>
            <div className='card mb-4'>
              <div className='card-header'>CV Details</div>
             {cv?.name ? (<div className='card-body' >
                <form>
                  <div className='mb-3'>
                    <label class='small mb-1'>Name </label>
                    <input
                      class='form-control'
                      id='inputUsername'
                      type='text'
                      
                      value={cv?.name} 
                    />
                  </div>

                  <div className='row gx-3 mb-3'>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputFirstName'>
                        Diplome
                      </label>
                      <input
                        class='form-control'
                        id='inputFirstName'
                        type='text' 
                        value={cv?.diplome} 
                      />
                    </div>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputLastName'>
                        Formation
                      </label>
                      <input
                        class='form-control'
                        id='inputLastName'
                        type='text'
                       
                        value={cv?.formation} 
                      />
                    </div>
                        <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputLastName'>
                        Adress
                      </label>
                      <input
                        class='form-control'
                        id='inputLastName'
                        type='text'
                        
                        value={cv?.adress} 
                      />
                    </div>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputLastName'>
                        Experience
                      </label>
                      <input
                        class='form-control'
                        id='inputLastName'
                        type='text'
                        
                        value={cv?.experience} 
                      />
                    </div>
                  </div>
                  <div className='row gx-3 mb-3'>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputOrgName'>
                       Langues
                      </label>
                      <input
                        class='form-control'
                        id='inputOrgName'
                        type='text'
                        
                        value={cv?.langues} 
                      />
                    </div>

                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputLocation'>
                        Niveau
                      </label>
                      <input
                        class='form-control'
                        id='inputLocation'
                        type='text'
                      
                        value={cv?.niveau} 
                      />
                    </div>
                  </div>

                  <div className='mb-3'>
                    <label class='small mb-1' htmlFor='inputEmailAddress'>
                      Email address
                    </label>
                    <input
                      class='form-control'
                      id='inputEmailAddress'
                      type='email'
                      
                      value={cv?.email} 
                    />
                  </div>

                  <div className='row gx-3 mb-3'>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputPhone'>
                        Phone number
                      </label>
                      <input
                        class='form-control'
                        id='inputPhone'
                        type='tel'
                     
                        value={cv?.tel} 
                      />
                    </div>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputBirthday'>
                        Last Update
                      </label>
                      <input
                        class='form-control'
                        id='inputBirthday'
                        type='text'
                        name='birthday'
                      
                        value={cv?.updatedAt}
                      />
                    </div>
                  </div>
                  <button class='btn btn-primary' type='button' onClick={()=>{
                      navigate('/MyOffres/all')
                  }}>
                   Retour
                  </button>
                </form>
              </div> ):(<div className='card-body' ><h1>no cv proved </h1> </div>) }
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default CV;
