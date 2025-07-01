/** @format */

import React from "react";
import { useParams,Link } from "react-router-dom";

export default function User(props) {
	const { users } = props;
    const { userid } = useParams();
   
	const userData = users.find((user) => userid == user.id);
	if (!userData) {
		return (
			<h2>Sorry ! This user id no {userid} doesn't have in the DataBase</h2>
		);
	} else {
		return (
			<>
				<h2>User : {userData.id}</h2>
				<div>
					<p>
						<b>Name : </b>
						{userData.name}
					</p>
					<p>
						<b>Gender : </b>
						{userData.gender}
                    </p>
                    <Link to='/Users'>Go to Users</Link>
				</div>
			</>
		);
	}
}
