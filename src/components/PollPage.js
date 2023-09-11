import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Poll from './Poll';
import NotFound from './ErrorPage';

const PollPage = (props) => {
	// Destructure the idsArr from props
	const { idsArr } = props;

	// Get the question_id parameter from the URL
	const { question_id } = useParams();
	// Extract the question ID from the URL parameter
	const id = question_id.replace(':question_', '');

	return (
		<div className="poll-page-container">
			{/* Render either the Poll component or NotFound based on ID existence */}
			{renderPollOrNotFound(idsArr, id)}
		</div>
	);
};

// Function to render either Poll or NotFound component
const renderPollOrNotFound = (idsArr, id) => {
	if (idsArr.includes(id)) {
		return <Poll id={id} />;
	} else {
		return <NotFound page="poll" />;
	}
};

// Map the IDs array from the Redux store to props
const mapStateToProps = ({ questions }) => {
	// Get an array of all question IDs
	const idsArr = Object.keys(questions);
	return {
		idsArr,
	};
};

// Connect the component to the Redux store and export it
export default connect(mapStateToProps)(PollPage);
