// const handleSubmit = async (e) => {
//   e.preventDefault();

// const formDataToSend = new FormData();
// formDataToSend.append("name", formData.name);
// formDataToSend.append("email", formData.email);
// formDataToSend.append("password", formData.password);

// try {
//   // Adjust the URL to match your backend server's address and port
//   const response = await fetch(
//     isloggedIn
//       ? "http://localhost:4000/api/login"
//       : "http://localhost:4000/api/signup",
//     {
//       method: "post",
//       body: JSON.stringify(formData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const data = await response.json();
//   localStorage.setItem("token", data.token);
//   // Redirect to the home page
//   navigate("/");
//   console.log("Data sent successfully:", data);
//   setErrors([]);
//   window.location.reload();
// } catch (error) {
//   console.error("Error while submitting form data:", error);
//   setErrors([...errors, error]);
// }
// const formDataToSend = {
//   name: formData.name,
//   email: formData.email,
//   password: formData,
// };

// const response = await signupService.signup(formDataToSend);
// console.log(response);
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//     });

// const data = await signupService.login(formDataToSend);
// console.log(data);
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//     });

// };
