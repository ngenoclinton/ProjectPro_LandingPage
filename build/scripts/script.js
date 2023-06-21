import {pricingPlans} from './data.js';

document.addEventListener('DOMContentLoaded', function(){

    const navigator = document.getElementById('mobile-nav');
    const btnMenu = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-nav');

    // retrieve pricing elements 
    const pricingContainer = document.getElementById('plans-container')

    // retrieve testimonial elements
    const faqs = document.querySelectorAll('.faq')

    // Mobile menu
    const toggleMenu= () =>{
        navigator.classList.toggle('flex');   
        navigator.classList.toggle('hidden');
        btnMenu.classList.toggle('open');
    }
    
    navigator.addEventListener('click', toggleMenu);
    btnMenu.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);

    // Testimonials
    faqs.forEach(faq => {
        faq.addEventListener('click', ()=>{
            faq.classList.toggle('active');
        })
    });


    console.log('====================================', pricingPlans);  
    // Map thought the pricingPlans data 
    // const titleElement =document.getElementById('plan-title');
    // const priceElement = document.getElementById('plan-price');

    // pricingPlans.forEach(plan => { 
    //     // set the content for each element 
    //     // Create elements for each plan
    // const planElement = document.createElement('div');
    // const titleElement = document.createElement('h2');
    // const priceElement = document.createElement('p');
    // const descriptionElement = document.createElement('p');
    // const mostPopularElement = document.createElement('p');

    //     // Set the content for the elements
    //     titleElement.textContent = plan.title;
    //     descriptionElement.textContent = `${plan.description}`;
    //     priceElement.textContent = `${plan.currency}${plan.price}${plan.frequency}`;
    //     mostPopularElement
        
    //     // Set the key (title) for the plan element
    //     planElement.dataset.key = plan.title;

    //     // Append the elements to the container
    // planElement.appendChild(titleElement);
    // planElement.appendChild(descriptionElement);
    // planElement.appendChild(priceElement);
    
    // // append to pricingContainer
    // pricingContainer.appendChild(planElement);
    
    // // Add Tailwind CSS classes to the elements
    // planElement.classList.add('plan');
    // titleElement.classList.add('text-lg', 'font-semibold','leading-5') 
    // descriptionElement.classList.add('text-sm', 'mt-4','leading-6','text-slate-700');


    // priceElement.classList.add('text', 'font-semibold');
    // });


    // Map through the pricingPlans data
  pricingPlans.forEach(plan => {
    // create elements 
    const popularElement = document.createElement('p');
    const notPopularElement = document.createElement('p');
    // Get the plan element by ID
    const planElement = document.getElementById(`plan-${plan.title.replace(/\s+/g, '-').toLowerCase()}`);
    // Add a dynamic class to the plan element based on the plan title
    planElement.classList.add(`plan-${plan.title.replace(/\s+/g, '-').toLowerCase()}`);

    // Get the title and price elements within the plan element
    const titleElement = planElement.querySelector('.plan-title');
    // const priceElement = planElement.querySelector('.plan-price');
    const descriptionElement = planElement.querySelector('.plan-description');

    const subscription = planElement.querySelector('.plan-price');
    const currencyElement = subscription.querySelector('.currency');
    const priceElement = subscription.querySelector('.price');
    const frequencyElement = subscription.querySelector('.frequency');
      
    // Set the content for the elements
    titleElement.textContent = plan.title;
    descriptionElement.textContent= plan.description;
    currencyElement.textContent = `${ plan.currency}`;
    priceElement.textContent = `${plan.price}`;    
    frequencyElement.textContent = `${ plan.frequency }`;

     // Check if plan is popular and add the popular element
     popularElement.textContent = "Most Popular";
     
     if (plan.popular) {
        planElement.appendChild(popularElement);
      }
    // add styles 
    popularElement.classList.add('plan-popular', 'font-semibold');

    // highlights map
    // Get the highlights list element by ID
        const highlightsList = planElement.querySelector('.highlights');

        // Clear the existing list items
        highlightsList.innerHTML = '';

    plan.highlights.map(highlight =>{
        
        // create list item for each highlight 
        const listItem = document.createElement('li');
    const tickElement = document.createElement('span');
    tickElement.textContent = '✓ ';
    tickElement.classList.add('tick'); // Apply the tick class
    listItem.appendChild(tickElement);
    listItem.appendChild(document.createTextNode(highlight));
        listItem.classList.add('text-sm', 'leading-6', 'text-slate-700', 'list-decimal', 'flex');

      // Append the list item to the highlights list
      highlightsList.appendChild(listItem);
    });
   
    // call to action btn 'cta'

    // Create the CTA button element
    const ctaBtn = planElement.querySelector('.cta-btn');
    const ctaButton = document.createElement('button');
   
    ctaBtn.classList.add('cta-btn');
    // Set the button text
    ctaBtn.textContent = plan.cta;

  // Check if the plan is popular and add a different class for styling
  if (plan.popular) {
    ctaBtn.classList.add('cta-btn-popular');
  } else {
    ctaBtn.classList.add('cta-btn-regular');
  }

  // Append the CTA button to the ctaBtn element
    ctaBtn.appendChild(ctaButton);
  });

})