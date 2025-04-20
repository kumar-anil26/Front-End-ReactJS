/** @format */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Sidebar from "../Component/Sidebar";
import { Outlet } from "react-router-dom";
import PostListProvider from "../Store/PostLIstStore";

function App() {
	return (
		<PostListProvider>
			<div className="app-content">
				<Sidebar />
				<div className="content">
					<Header />
					<Outlet />
					<Footer />
				</div>
			</div>
		</PostListProvider>
	);
}

export default App;
