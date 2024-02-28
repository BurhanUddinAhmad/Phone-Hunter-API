const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)

}

const displayPhones = phones => {
    //Step 1: get container div
    const phoneContainer = document.getElementById('phone-container');
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
}
loadPhone();