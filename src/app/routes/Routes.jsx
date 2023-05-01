import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";
import * as URL from "../constants/urls/urlFrontEnd";

import HomeView from "../views/HomeView";
import SpaceTripView from "../views/SpacetripView";
import ErrorView from "../views/ErrorView";
import ProfilView from "../views/ProfilView";


const Routes = () => {
   
   return (
      <RoutesContainer>
         <Route path='*' element={<ErrorView />}/>
         <Route index element={<HomeView />} />
         <Route path={URL.URL_HOME} element={<HomeView />} />
         <Route path={URL.URL_SPACETRIP} element={<SpaceTripView />} />
         <Route path={URL.URL_PROFIL} element={<ProfilView />} />
      </RoutesContainer>
   );
};

export default Routes;