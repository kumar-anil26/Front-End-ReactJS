/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./Component/CreatePost.jsx";
import PostList from "./Component/PostList.jsx";
import App from "./Router/App.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <PostList /> },
			{ path: "/create-post", element: <CreatePost /> },
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
