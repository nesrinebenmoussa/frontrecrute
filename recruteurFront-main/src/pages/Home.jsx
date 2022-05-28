import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getAnnonceByrec, reset } from "../features/annonce/annonceSlice";
import AnnonceCard from "./AnnonceCard";
import NavBar from "./NavBar";
import { getbyDiplome } from "../features/Postulation/cvSlice";

function Home() {
  const { user } = useSelector((state) => state.auth);
  const { annonces, isLoading } = useSelector((state) => state.annonces);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    search: "",
  });

  const { search } = formData;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getAnnonceByrec());
    dispatch(reset());
  }, [dispatch, ]);
  console.log(annonces, "annonces in the com");
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const findBydDiplome = () => {
    console.log(search, "hedha aalesh shnlawej ");
    navigate(`/cvs/${search}`)
  };
  return (
    <>
      <NavBar />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='section-title text-center mb-4 pb-2'>
              <h4 className='title mb-4'>Our Annonces</h4>

              <p className='text-muted para-desc mx-auto mb-0'>
                Join us and see what's next
              </p>
            </div>
          </div>
        </div>{" "}
        <div className='contianer-fluid mb-3'>
          <div class='input-group mb-3'>
            <input
              type='text'
              class='form-control'
              placeholder='Search By  Diplome'
              aria-label='Search'
              aria-describedby='basic-addon2'
              value={formData.search}
              name='search'
              onChange={onChange}
            />
            <div class='input-group-append'>
              <button
                class='input-group-text'
                id='search-btn'
                onClick={findBydDiplome}>
                Search
              </button>
            </div>
          </div>

       
        </div>
        <div>
          <button
            type='submit    '
            className='btn btn-primary btn-lg'
            onClick={() => {
              navigate("/AddAnnonce");
            }}>
            Add new{" "}
          </button>
        </div>
        <div className='row'>
          {annonces.length > 0 ? (
            annonces.map((an) => <AnnonceCard key={an._id} annonce={an} />)
          ) : (
            <h1>no annonces yet</h1>
          )}
        </div>
        {/*end col*/}
      </div>
    </>
  );
}

export default Home;
