import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  create,
  reset,
  getAnnonceByrec,
  getAnnonceByid,
  update,
} from "../features/annonce/annonceSlice";

import NavBar from "./NavBar";
function ConsulterAnnonce() {
  const { id } = useParams();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const {annonces } = useSelector((state)=>state.annonces)
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(getAnnonceByid(id)).unwrap().then(res => console.log(res , 'annonce state '))
  }, [user, dispatch]);

   

  const [formData, setFormData] = useState({
    title: annonces.title,
    salary: annonces.salary,
    specialite:annonces.specialite,
    _id: annonces._id,
  });

  const { title , salary, specialite, _id } = formData;

  useEffect(() => {
    
 
  }, [annonces,user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
     title,
     salary,
     specialite,
      _id: annonces._id,
    };

    dispatch(update(userData))
      .unwrap()
      .then((data) => {
        toast.success("done");
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
        toast.error("verify");
      });
  };


  
  return (
    <>
      <NavBar />
      <div>
        <link
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
          rel='stylesheet'
        />
        <div className='container'>
          <div className='view-account'>
            <section className='module'>
              <div className='module-inner'>
                <div className='side-bar'>
                  <div className='user-info'>
                    <img
                      className='img-profile img-circle img-responsive center-block'
                      src='https://bootdey.com/img/Content/avatar/avatar1.png'
                      alt
                    />
                    <ul className='meta list list-unstyled'>
                      <li className='name'>{user.name}</li>
                      <li>{user.tel} </li>
                      <li className='activity'>{user.email}</li>
                    </ul>
                  </div>
                </div>
                <div className='content-panel'>
                  <h2 className='title'>Update Annonce  </h2>
                  <form className='form-horizontal' onSubmit={onSubmit}>
                    <fieldset className='fieldset'>
                      <h3 className='fieldset-title'>Postulations</h3>

                      <div className='form-group'>
                        <label className='col-md-2 col-sm-3 col-xs-12 control-label'>
                          Title 
                        </label>
                        <div className='col-md-10 col-sm-9 col-xs-12'>
                          <input
                            type='text'
                            className='form-control'
                            defaultValue={annonces.title}
                            onChange={onChange}
                            name='title'
                          />
                        </div>
                      </div>

                      <div className='form-group'>
                        <label className='col-md-2 col-sm-3 col-xs-12 control-label'>
                          Salary
                        </label>
                        <div className='col-md-10 col-sm-9 col-xs-12'>
                          <input
                            type='number'
                            className='form-control'
                            defaultValue={annonces.salary}
                            onChange={onChange}
                            name='salary'
                          />
                        </div>
                      </div>
                    
                      <div className='form-group'>
                        <label className='col-md-2  col-sm-3 col-xs-12 control-label'>
                          Specialite
                        </label>
                        <div className='col-md-10 col-sm-9 col-xs-12'>
                          <input
                            type='text'
                            className='form-control'
                            defaultValue={annonces.specialite}
                            onChange={onChange}
                            name='specialite'
                          />
                        </div>
                      </div>
                    
                    </fieldset>
                    <hr />
                    <div className='form-group'>
                      <div className='col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0'>
                        <input
                          className='btn btn-primary'
                          type='submit'
                          defaultValue='Update Profile'
                        />
                        <button className="btn btn-info ml-4" onClick={()=>{
                            navigate('/MyOffres/'+annonces._id)
                        }}> Postulations </button>

                             </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsulterAnnonce;
