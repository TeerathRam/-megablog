import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
	const [error, setError] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();

	const create = async (data) => {
		setError("");
		try {
			const userData = await authService.createAccount(data);
			if (userData) {
				const userData = await authService.getCurrentUser();
				if (userData) dispatch(login(userData));
				navigate("/");
			}
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="w-full bg-transparent flex items-center justify-center">
			<div
				className={`m-2 w-full bg-white rounded-xl p-10 border border-black/10 md:max-w-xl md:mx-auto md:my-8`}
			>
				<div className="mb-2 flex justify-center">
					<span className="inline-block w-full max-w-[100px]">
						<Logo width="100%" />
					</span>
				</div>
				<h2 className="text-center text-2xl font-bold leading-tight">
					Sign up to create account
				</h2>
				<p className="mt-2 text-center text-base text-black/60">
					Already have an account?&nbsp;
					<Link
						to="/login"
						className="font-medium text-primary transition-all duration-200 hover:underline"
					>
						Sign In
					</Link>
				</p>
				{error && <p className="text-red-600 mt-8 text-center">{error}</p>}

				<form onSubmit={handleSubmit(create)}>
					<div className="space-y-5">
						<Input
							label="Full Name: "
							placeholder="Enter your full name"
							{...register("name", {
								required: true,
							})}
						/>
						<Input
							label="Email: "
							placeholder="Enter your email"
							type="email"
							{...register("email", {
								required: true,
								validate: {
									matchPatern: (value) =>
										/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
										"Email address must be a valid address",
								},
							})}
						/>
						<Input
							label="Password: "
							type="password"
							placeholder="Enter your password"
							{...register("password", {
								required: true,
							})}
						/>
						<Button
							type="submit"
							classname="font-medium font-sans w-full hover:bg-gradient-to-b from-blue-300 to-blue-600 tracking-tight"
							textColor="text-black-900"
						>
							Create Account
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
