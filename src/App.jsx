// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import MiCuenta from "./pages/MiCuenta";
import Viajes from "./pages/Viajes";
import Ayuda from "./pages/Ayuda";
import Pulsera from "./pages/Pulsera";
import RecargarDinero from "./pages/RecargarDinero";
import Companias from "./pages/Companias";
import Configuracion from './pages/Configuracion';

// Helpers
import PrivateRoutes from "./helpers/PrivateRoutes";

// React router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Redux
import store from "./redux/store";
import { Provider, useDispatch } from "react-redux";
import { setActiveUser } from "./redux/slices/userSlice";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<MiCuenta />} path="/mi-cuenta" exact />
            <Route element={<Viajes />} path="/viajes" exact />
            <Route element={<Ayuda />} path="/ayuda" exact />
            <Route element={<Pulsera />} path="/pulsera" exact/>
            <Route element={<RecargarDinero />} path="/recargar-dinero" exact/>
            <Route element={<Companias />} path="/companias" exact/>
            <Route element={<Configuracion />} path="/configuracion" exact />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
