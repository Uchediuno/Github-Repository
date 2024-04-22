import axios from "axios";
import AllRepos from "./pages/AllRepos";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import SingleRepo from "./pages/SingleRepo";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<BrowserRouter>
    <Routes>
			<Route path="/" element={<AllRepos />} />
			<Route path=":name" element={<SingleRepo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
		</BrowserRouter>
	);
}

export default App;
