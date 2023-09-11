import { useState } from 'react'
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Poll from './Poll';

const Dashboard = (props) => {
  	// Destructure props to get authedUser, questionIds, and questions
  	const { authedUser, questionIds, questions } = props

	// Create an array to store question objects
	let questionsArr = []
	// Iterate through questionIds and push corresponding questions into questionsArr
	for (let i = 0; i < questionIds.length; i++) {
		questionsArr.push(questions[questionIds[i]])
	}

	// Filter questions to get answered questions
	const answeredQuestions = questionsArr.filter(
		(q) =>
			q.optionOne.votes.includes(authedUser) ||
			q.optionTwo.votes.includes(authedUser)
	)

	// Filter questions to get unanswered questions
	const unansweredQuestions = questionsArr.filter(
		(q) =>
			!q.optionOne.votes.includes(authedUser) &&
			!q.optionTwo.votes.includes(authedUser)
	)

	// Initialize state for questionsToDisplay and active
	const [questionsToDisplay, setQuestionsToDisplay] = useState(unansweredQuestions);
	const [active, setActive] = useState(true)

	// Function to show answered questions
	const showAnswered = () => {
		setQuestionsToDisplay(answeredQuestions)
		setActive(false)
	}

	// Function to show unanswered questions
	const showUnanswered = () => {
		setQuestionsToDisplay(unansweredQuestions)
		setActive(true)
	}

  	return (
		<div id="dashboard-container">
			<h1 className="dashboard-heading">
				<button
					className={active ? 'button active' : 'button'}
					onClick={showUnanswered}
				>
					Unanswered
				</button>
				<button
					className={!active ? 'button active' : 'button'}
					onClick={showAnswered}
				>
					Answered
				</button>
			</h1>	

			<ul>
    			{questionsToDisplay.length > 0 ? (
					questionsToDisplay.map((q) => (
						<li id="each-poll" key={q.id}>
							<Link to={`/questions/:question_${q.id}`} className="none">
								<Poll id={q.id} />
							</Link>
						</li>
					))
				) : (
					<div>no polls available</div>
				)}
			</ul>
		</div>
	)
};

// MapStateToProps function to get necessary data from the Redux store
const mapStateToProps = ({ questions, authedUser }) => ({
	questionIds: Object.keys(questions).sort(
		(a, b) => questions[b].timestamp - questions[a].timestamp
	),
	authedUser,
	questions,
})

export default connect(mapStateToProps)(Dashboard)
