// This function takes a timestamp as input and returns a formatted date string.
function formatDate(timestamp) {
  // Create a Date object from the provided timestamp.
  const date = new Date(timestamp);

  // Define the date formatting options.
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

  // Convert the Date object to a localized date string using the specified options.
  return date.toLocaleDateString(undefined, options);
}

// Export the formatDate function to make it available for use in other modules.
export default formatDate;
