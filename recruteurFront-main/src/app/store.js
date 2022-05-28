import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import annonceReducer from "../features/annonce/annonceSlice";
import postulationReducer from "../features/Postulation/PostulationSlice";
import recruterReducer from "../features/recruter/recruterSlice";
import qesReducer from "../features/Postulation/qesSlice";
import cvReducer from "../features/Postulation/cvSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        annonces: annonceReducer,
        postulations: postulationReducer,
        recruters: recruterReducer,
        qes: qesReducer,
        cv: cvReducer,
    },
});