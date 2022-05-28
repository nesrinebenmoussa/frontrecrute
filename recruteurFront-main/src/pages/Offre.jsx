import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAnnonceByid } from "../features/annonce/annonceSlice";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { remmove } from "../features/Postulation/PostulationSlice";
import {
  getByA,
  reject,
  accept,
  update,
  reset,
} from "../features/Postulation/PostulationSlice";

import { useParams } from "react-router";
function Offre({ postulation }) {
  const { annonces } = useSelector((state) => state.annonces);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <tr>
        <td className='text-truncate'>
          {postulation.name} {postulation.lastname}
        </td>
        <td className='text-truncate'>{postulation.reponse}</td>
        <td colSpan={3}>
          
            <button
              className='btn btn-success'
              onClick={() => {
                console.log(" accept ");
                dispatch(accept(postulation._id));
              }}>
              Accept{" "}
            </button>{" "}
         

         
            <button
              className='btn btn-danger'
              onClick={() => {
                dispatch(reject(postulation._id));
                console.log(" annuler ");
              }}>
              Reject{" "}
            </button>{" "}
      
         
           
            <button
              className='btn btn-info'
              onClick={() => {
                
               navigate('/Questionaire/'+postulation._id)
              }}>
              Questionaire{" "}
            </button>{" "}

              
            <button
              className='btn btn-info'
              onClick={() => {
                
               navigate('/cv/'+postulation.condidat)
              }}>
              CV{" "}
            </button>{" "}

              
            <button
              className='btn btn-info'
              onClick={() => {
                
               navigate('/Postulation/'+postulation._id)
              }}>
              Consulter{" "}
            </button>{" "}
           
        </td>
      </tr>
    </>
  );
}

export default Offre;
