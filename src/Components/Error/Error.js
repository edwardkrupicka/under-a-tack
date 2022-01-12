import './Error.scss'
import error_icon from '../../svg/error_icon.svg';

const Error = ({ error }) => {

	const errors = error.map((err, index) => {
		return (
			<h1 key={index} className='error'>{err}</h1>
		)
	})


	return (
		<section key='error' className='error-container'>
			<img className='error-icon' src={error_icon}/>
			<h1 className='header-message'>Please check the server is online, refresh the page and try again.</h1>
			{errors}
		</section>
	)
}

export default Error;

