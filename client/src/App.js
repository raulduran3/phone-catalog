import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationComp from "./components/Navigation";
import CreatePhoneView from "./views/CreatePhoneView";
import EditPhoneView from "./views/EditPhoneView";
import PhonesView from "./views/PhonesView";
import PhoneView from "./views/PhoneView";

function App() {
  return (
    <BrowserRouter>
      <NavigationComp />
      <Routes>
        <Route path="/" element={<PhonesView />} />
        <Route path="/create" element={<CreatePhoneView />} />
        <Route path="/phone" element={<PhoneView />} />
        <Route path="/edit" element={<EditPhoneView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
