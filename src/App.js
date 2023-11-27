import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomeLayout } from "./layout/HomeLayout";
import { MemberSignup } from "./page/member/MemberSignup";
import { Box } from "@chakra-ui/react";
import { MemberList } from "./page/member/MemberList";
import { MemberLogin } from "./page/member/MemberLogin";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<MemberList />} />
      <Route path="signup" element={<MemberSignup />} />
      <Route path="login" element={<MemberLogin />} />
    </Route>,
  ),
);

function App(props) {
  return (
    <Box>
      <RouterProvider router={routes} />
    </Box>
  );
}

export default App;
