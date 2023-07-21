import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import TeamManagement from "../pages/team-management";
import CreateTeam from "../pages/team-management/create-team/CreateTeam";
import EditTeam from "../pages/team-management/edit-team/EditTeam";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/team-management" element={<Layout />}>
          <Route index element={<TeamManagement />} />
          <Route path="create" element={<CreateTeam />} />
          <Route path="edit" element={<EditTeam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
