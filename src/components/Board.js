const Board = (props) => {
	// Destructure props to get avatar, name, numQanswered, and numQasked
	const { avatar, name, numQanswered, numQasked } = props;
  
	return (
	  <div className="board-entry">
		<div className="board-left">
		  {/* Display user avatar */}
		  <img
			src={avatar}
			alt={`${name.toLowerCase()} avatar`}
			width="40"
			height="40"
		  />
		  {/* Display user's name */}
		  <p className="board-entry-name">{name}</p>
		</div>
		<div className="board-right">
		  {/* Display the number of questions asked by the user */}
		  <p>Questions Asked: {numQasked}</p>
		  {/* Display the number of questions answered by the user */}
		  <p>Questions Answered: {numQanswered}</p>
		</div>
	  </div>
	);
  };
  
  export default Board;
  