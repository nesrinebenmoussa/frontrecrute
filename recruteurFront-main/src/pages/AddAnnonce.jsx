import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
 
import { create, reset , getAnnonceByrec } from "../features/annonce/annonceSlice";
 
import NavBar from "./NavBar";

function AddAnnonce() {
  const [formData, setFormData] = useState({
    recruter: "",
    title: "",
    salary: "",
    specialite: " ",
  });

  const { recruter, title, salary, specialite } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state)=> state.auth) 
  const { annonces, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.annonces
  );

  useEffect(() => {
  
   if(isError){
       toast.error(message)
   }
  }, [annonces, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(!title || !salary || !specialite){
      toast.error('please add all fields')
    }else {
    
      const Data = {
        recruter : user._id,
        title,
        salary,
        specialite,
      };
      console.log(Data);
      dispatch(create(Data))
        .unwrap()
        .then((data) => { 
          dispatch(getAnnonceByrec(user._id))
          toast.success('added succesfully ')
          navigate("/");
        })
        .catch((err) => { 
          toast.error(err);
        });
    }
  
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
                    <li>{user.email} </li>
                  </ul>
                </div>
              </div>
              <div className='content-panel'>
                <h2 className='title'>Add new Annonce </h2>
                <form className='form-horizontal'  >
                  <fieldset className='fieldset'>
                    <h3 className='fieldset-title'></h3>

                    <div className='form-group'>
                      <label className='col-md-2 col-sm-3 col-xs-12 control-label'>
                        Title
                      </label>
                      <div className='col-md-10 col-sm-9 col-xs-12'>
                        <input
                          type='text'
                          className='form-control' 
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
                          onChange={onChange}
                          name='salary'
                        />
                      </div>
                    </div>
                 
             
                      <label className='col-md-2  col-sm-3 col-xs-12 control-label'>
                      Specialite
                      </label>
                      <div className='col-md-10 col-sm-9 col-xs-12'>
                        <input
                          type='text'
                          className='form-control' 
                          onChange={onChange}
                          name='specialite'
                        />
                      </div>
                    
                    
                  </fieldset>
                  <hr />
                  <div className='form-group'>
                    <div className='col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0'>
                      <button  className="btn btn-success" onClick={onSubmit}>
                        add new annonce
                      </button>
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


export default AddAnnonce;
