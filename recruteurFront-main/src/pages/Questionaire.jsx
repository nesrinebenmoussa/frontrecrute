import React from "react";
import { useParams } from "react-router";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get, reset } from "../features/Postulation/qesSlice";

function Questionaire() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { qes, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.qes
  );

  useEffect(() => {
    dispatch(get(id))
      .unwrap()
      .then((res) => console.log(res, "totototo"));
    console.log(qes, "sstatee");

    return () => {
      dispatch(reset());
    };
  }, [navigate, dispatch]);

  if (!qes) {
    return (
      <>
        <NavBar />
        <div className='container mt-4'>
         
          <div className='row'>
          <div className='col-xl-8'>
            <div className='card mb-4'> 
            <div className='card-body'>
            <h1>no Questionaire found</h1>
            <button
              className='btn btn-info '
              onClick={() => {
                navigate("/");
              }}>
               
              retour 
            </button>
            </div>
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className='container mt-4'>
        <div className='row gutters'>
          <div className=' '>
            <div className='card h-100'>
              <div className='card-body'>
                <div className='row gutters'>
                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                    <h6 className='mb-2 text-primary'>Responses</h6>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='fullName'>Présentez vous…. </label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Présentez vous….'
                        defaultValue={qes.q1}
                        name='q1'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='eMail'>
                        Quel est votre job de rêve ?
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Quel est votre job de rêve ?'
                        defaultValue={qes.q2}
                        name='q2'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='phone'>
                        {" "}
                        Quelles sont vos qualités et quels sont vos points
                        faibles ?
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        defaultValue={qes.q3}
                        name='q3'
                        placeholder='Quelles sont vos qualités et quels sont vos points faibles ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='website'>
                        {" "}
                        Que savez-vous de notre entreprise ?
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        defaultValue={qes.q4}
                        name='q4'
                        placeholder='Que savez-vous de notre entreprise ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='website'>
                        {" "}
                        En quoi le poste à pourvoir vous intéresse-t-il ?  
                      </label>
                      <input
                        type='url'
                        className='form-control'
                        defaultValue={qes.q5}
                        name='q5'
                        placeholder='En quoi le poste à pourvoir vous intéresse-t-il ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='website'>
                         Comment envisagez-vous votre carrière 
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        defaultValue={qes.q6}
                        name='q6'
                        placeholder='Comment envisagez-vous votre carrière '
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='website'>
                        Quelles sont vos compétences dans le domaine des langues
                        ?
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        defaultValue={qes.q7}
                        name='q7'
                        placeholder='Quelles sont vos compétences dans le domaine des langues ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='website'>
                         Décrivez moi vos expériences professionnelles ?
                      </label>
                      <input
                        type='url'
                        className='form-control'
                        defaultValue={qes.q8}
                        name='q8'
                        placeholder='Décrivez moi vos expériences professionnelles ?'
                      />
                    </div>
                  </div>
                </div>
                <div className='row gutters'>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='Street'>
                        Aimez-vous le travail en équipe ? Pour quelles raisons ?
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        defaultValue={qes.q9}
                        name='q9'
                        placeholder='Aimez-vous le travail en équipe ? Pour quelles raisons ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='ciTy'>
                        {" "}
                        Vous vous voyez où dans cinq ans ?{" "}
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        defaultValue={qes.q10}
                        name='q10'
                        placeholder='Vous vous voyez où dans cinq ans ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='sTate'>
                        Pourquoi devrais-je vous choisir plutôt que quelqu’un
                        d’autre 
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        defaultValue={qes.q11}
                        name='q11'
                        placeholder='Pourquoi devrais-je vous choisir plutôt que quelqu’un d’autre '
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='zIp'>Avez-vous des questions ?</label>
                      <input
                        type='text'
                        className='form-control'
                        defaultValue={qes.q12}
                        name='q12'
                        placeholder='Avez-vous des questions ?'
                      />
                    </div>
                  </div>
                </div>
                <div className='row gutters'>
                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                    <div className='text-right'>
                      <button
                        type='button'
                        id='submit'
                        name='submit'
                        onClick={() => {
                          navigate("/MyOffres/all");
                        }}
                        className='btn btn-primary'>
                        Retour
                      </button>
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

export default Questionaire;
