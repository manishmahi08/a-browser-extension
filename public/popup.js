document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch data from the 3rd party API
    const api_endpoint = "https://api.chucknorris.io/jokes/random";
  
    async function fetchData() {
      try {
        const response = await fetch(api_endpoint);
        const data = await response.json();
        // Process the data and display it in the popup
        displayData(processData(data)); // Call processData before passing it to displayData
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    // Function to process the data
    function processData(data) {
      // Add your data processing logic here
      // For example, you can format the data as needed before displaying it in the popup
      return data.value; // For Chuck Norris jokes, we can return the 'value' property
    }
  
    // Function to display data in the popup
    function displayData(data) {
      const dataContainer = document.getElementById("dataContainer");
      // Create HTML elements to display the data
      const dataElement = document.createElement("p");
      dataElement.textContent = data;
      dataContainer.innerHTML = ""; // Clear previous data
      // Append the data to the popup
      dataContainer.appendChild(dataElement);
    }

    // Add event listener to the "Refresh Joke" button
    const refreshButton = document.getElementById("refreshButton");
    refreshButton.addEventListener("click", function () {
      fetchData(); // Call fetchData when the button is clicked
    });
  
    // Call the fetchData function when the popup is loaded
    fetchData();
  });
  
  