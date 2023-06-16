// index.js

const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
  ];
  
  const gallery = document.getElementById("gallery");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  
  let currentIndex = 0;
  const imagesPerLoad = 4;
  
  
  // Initial load

  // Fetch data and display it when the page loads
  window.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchData();
    displayData(data);
  });
  function loadImages() {
    const endIndex = Math.min(currentIndex + imagesPerLoad, images.length);
    for (let i = currentIndex; i < endIndex; i++) {
      // Create image container
      const imageContainer = document.createElement("div");
      imageContainer.className = "image-container";
  
      // Create image element
      const imageprofile = document.createElement("img");
      imageprofile.src = images[i];
      imageContainer.appendChild(imageprofile);
      
  
      // Create caption element
      const caption = document.createElement("p");
      caption.textContent = "Caption " + (i + 1);
      imageContainer.appendChild(caption);
  
      // Append image container to the gallery
      gallery.appendChild(imageContainer);
    }
    currentIndex += imagesPerLoad;
  
    if (currentIndex >= images.length) {
      loadMoreBtn.style.display = "none"; // Hide the load more button when all images are loaded
    }
  }
  
  loadMoreBtn.addEventListener("click", loadImages);
  
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });
  
  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });
// Function to fetch JSON data from a file
async function fetchData() {
    try {
      const response = await fetch('data.json'); // Replace 'data.json' with the path to your JSON file
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching JSON data:', error);
      return null;
    }
  }
  // Function to display the JSON data in the HTML document
function displayData(data) {
    if (!data) {
      console.log('No data to display');
      return;
    }
    
  
    const container = document.getElementById('data-container'); // Replace 'data-container' with the ID of the HTML element where you want to display the data
  
    // Clear any existing content
    container.innerHTML = '';
  
    // Iterate over the data and create HTML elements to display the information
    data.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const image = document.createElement('img');
      image.src = item.profile_image;
       // Replace 'profile_image' with the property name in your JSON data that contains the image URL
      card.appendChild(image);
  
      const name = document.createElement('h2');
      name.textContent = item.name;
      card.appendChild(name);
  
  
      const likes = document.createElement('p');
      likes.textContent = `Likes: ${item.likes}`; // Replace 'likes' with the property name in your JSON data that contains the likes
      card.appendChild(likes);
  
      container.appendChild(card);
    });
  }
  function displayData(data) {
    if (!data) {
      console.log('No data to display');
      return;
    }
  
    const container = document.getElementById('data-container'); // Replace 'data-container' with the ID of the HTML element where you want to display the data
  
    // Clear any existing content
    container.innerHTML = '';
  
    // Iterate over the data and create HTML elements to display the information
    data.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'card';
     
      const profileImage = document.createElement('img');
      profileImage.src = item.profile_image;
      profileImage.alt = 'Profile Picture';
      card.appendChild(profileImage);

      const name = document.createElement('h2');
      name.textContent = item.name;
      card.appendChild(name);


      const image = document.createElement('img');
      image.src=item.image;
      card.appendChild(image);
  
      const caption = document.createElement('p');
      caption.textContent = item.caption; // Replace 'caption' with the property name in your JSON data that contains the caption
      card.appendChild(caption);
  
      const likes = document.createElement('p');
      likes.textContent = `Likes: ${item.likes}`; // Replace 'likes' with the property name in your JSON data that contains the likes
      card.appendChild(likes);

      const date = document.createElement('p');
      const postDate = new Date(item.date); // Replace 'date' with the property name in your JSON data that contains the date
      date.textContent = `Posted on: ${postDate.toLocaleString()}`;
    
      
      card.appendChild(date);
  
      container.appendChild(card);

    });
  }