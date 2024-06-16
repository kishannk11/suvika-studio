import Swal from 'sweetalert2';
//import { useHistory } from 'react-router-dom'; // This will be used in a React component, not here directly.

export const checkSession = () => {
	const token = localStorage.getItem('token');
	if (!token) {
		Swal.fire({
			icon: 'error',
			title: 'Session Expired',
			text: 'Please log in again.',
			confirmButtonText: 'OK'
		}).then((result) => {
			if (result.isConfirmed) {
				window.location = '/'; // Redirect using window.location
			}
		}).catch((error) => {
			console.error('Error handling session expiration:', error);
		});
		return false;
	}

	try {
		const payload = JSON.parse(atob(token.split('.')[1]));
		if (payload.exp > Date.now()) {
			localStorage.removeItem('token');
			Swal.fire({
				icon: 'error',
				title: 'Session Expired',
				text: 'Your session has expired. Please log in again.',
				confirmButtonText: 'OK'
			}).then((result) => {
				if (result.isConfirmed) {
					window.location = '/';
				}
			}).catch((error) => {
				console.error('Error handling session expiration:', error);
			});
			return false;
		}
		return true;
	} catch (error) {
		console.error('Failed to check session:', error);
		return false;
	}
};

export const handleNon200Response = (response) => {
	console.log("Handling non-200 response:", response);

	let errorMessage;

	if (response.data && response.data.message) {
		errorMessage = response.data.message;
	} else if (response.data && response.data.errors && Array.isArray(response.data.errors) && response.data.errors.length > 0) {

		errorMessage = response.data.errors[0].msg;
	} else {
		errorMessage = "An unexpected error occurred";
	}

	switch (response.status) {
		case 401:
			Swal.fire({
				icon: 'error',
				title: 'Unauthorized',
				text: errorMessage
			}).then((result) => {
				if (result.isConfirmed) {
					window.location.href = '/';
				}
			});
			break;
		case 404:
			Swal.fire({
				icon: 'error',
				title: 'Not Found',
				text: errorMessage

			});
			break;
		case 500:
			Swal.fire({
				icon: 'error',
				title: 'Server Error',
				text: errorMessage
			});
			break;
		case 400:
			Swal.fire({
				icon: 'error',
				title: 'Bad Request',
				text: errorMessage

			});
			break;
		default:
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: errorMessage
			});
	}
};