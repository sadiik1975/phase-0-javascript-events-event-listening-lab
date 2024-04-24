function addingEventListener() {
    // Inside the addingEventListener() function
  
    // Step 1: Get the element by its ID
    const input = document.getElementById('button');
  
    // Step 2: Define the function to be called when the event occurs
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Step 3: Add event listener to the element
    input.addEventListener('click', clickAlert);
  }
  