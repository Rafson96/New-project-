import PropTypes from 'prop-types'
export default function Button({ content, className, ...props }) {

	return <button {...props }className={`rounded-lg px-4 py-2 mt-10 bg-stone-700 text-white ${className}`}>{content}</button>
}

Button.propTypes = {
	content: PropTypes.string.isRequired,
	className: PropTypes.string,
	color: PropTypes.string, // D
}
