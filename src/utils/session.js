import { toast } from 'react-toastify';
//import { useHistory } from 'react-router-dom'; // This will be used in a React component, not here directly.

export const checkSession = () => {
	const token = localStorage.getItem('token');
	if (!token) {
		toast.error('Session Expired. Please log in again.', {
			onClose: () => {
				window.location = '/'; // Redirect using window.location
			}
		});
		return false;
	}

	try {
		const payload = JSON.parse(atob(token.split('.')[1]));
		if (payload.exp > Date.now()) {
			localStorage.removeItem('token');
			toast.error('Your session has expired. Please log in again.', {
				onClose: () => {
					window.location = '/';
				}
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
			toast.error(`Unauthorized: ${errorMessage}`, {
				onClose: () => {
					window.location.href = '/';
				}
			});
			break;
		case 404:
			toast.error(`Not Found: ${errorMessage}`);
			break;
		case 500:
			toast.error(`Server Error: ${errorMessage}`);
			break;
		case 400:
			toast.error(`Bad Request: ${errorMessage}`);
			break;
		default:
			toast.error(`Error: ${errorMessage}`);
	}
};
