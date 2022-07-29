import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import "../styles/sass/style.scss";
import { userData } from '../services/API/logInUser';
import { useState } from 'react';
import UserContext from '../context/userContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [userName, setUserName] 	= useState<string>(userData?.name);
	const [userPhoto, setUserPhoto] = useState<string>(userData?.photo);

  	return (
		<UserContext.Provider value={{ userName, userPhoto }}>
			<Component {...pageProps} />
		</UserContext.Provider>
	)
}

export default MyApp;
