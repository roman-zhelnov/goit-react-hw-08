import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { useEffect } from "react";
import { selectIsRefreshing } from "./redux/auth/selector";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
