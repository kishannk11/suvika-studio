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