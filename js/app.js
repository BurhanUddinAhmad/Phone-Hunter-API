const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = phones => {
    //Step 1: get container div
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = ``;
    
    // Display show all button if 
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12) {
      showAllContainer.classList.remove('hidden');
    } else {
      showAllContainer.classList.add('hidden');
    }

    // display only first 12 phones 
    phones = phones.slice(0,12)

    phones.forEach(phone => {
        console.log(phone);
        // 2. create div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-gray-100 shadow-md pt-5`;
        // 3. Set inner html 
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body text-center">
          <h2 class="card-title mx-auto">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button class="btn btn-sm btn-primary hover:bg-blue-600">Show Details</button>
          </div>
        </div>
        `;
        // 4. append child 
        phoneContainer.appendChild(phoneCard);
    });

    // hide loading spinner 
    toggleLoadingSpinner(false);
}

// Handle search button 
const handleSearch = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById('serch-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
}

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  } else {
    loadingSpinner.classList.add('hidden');
  }
}

// loadPhone();