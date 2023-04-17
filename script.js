const segments = [
  'Compact',
  'Subcompact',
  'Midsize',
  'Full-size',
  'SUV',
  'Crossover',
  'Hatchback',
  'Sedan',
];

const brands = [
  { name: 'Toyota', segments: ['Midsize', 'Full-size', 'SUV', 'Crossover', 'Hybrid', 'Hatchback', 'Sedan'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Sustainable and eco-friendly', 'Practicality and efficiency'] },
  { name: 'Honda', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Hybrid', 'Hatchback', 'Sedan'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Sustainable and eco-friendly', 'Practicality and efficiency'] },
  { name: 'Ford', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Hybrid', 'Pickup'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Work and towing', 'Off-roading', 'Practicality and efficiency'] },
  { name: 'Chevrolet', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Hybrid', 'Pickup', 'Sedan'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Work and towing', 'Off-roading', 'Practicality and efficiency'] },
  { name: 'Nissan', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Hybrid', 'Hatchback', 'Sedan'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Sustainable and eco-friendly', 'Practicality and efficiency'] },
  { name: 'BMW', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Sedan', 'Convertible', 'Sports'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'Luxury travel', 'Business transportation', 'Performance driving', 'Convertible experience'] },
  { name: 'Mercedes-Benz', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Sedan', 'Convertible', 'Sports'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'Luxury travel', 'Business transportation', 'Performance driving', 'Convertible experience'] },
  { name: 'Audi', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Sedan', 'Convertible', 'Sports'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'Luxury travel', 'Business transportation', 'Performance driving', 'Convertible experience'] },
  { name: 'Volkswagen', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Hybrid', 'Hatchback', 'Sedan'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Sustainable and eco-friendly', 'Practicality and efficiency'] },
  { name: 'Hyundai', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Hybrid', 'Hatchback', 'Sedan'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Sustainable and eco-friendly', 'Practicality and efficiency'] },
  { name: 'Kia', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Hybrid', 'Hatchback', 'Sedan'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Sustainable and eco-friendly', 'Practicality and efficiency'] },
  { name: 'Mazda', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Hybrid', 'Hatchback', 'Sedan'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Performance driving', 'Practicality and efficiency'] },
  { name: 'Subaru', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Hybrid', 'Hatchback', 'Sedan'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Off-roading', 'Practicality and efficiency'] },
  { name: 'Tesla', segments: ['Compact', 'Midsize', 'Full-size', 'SUV', 'Crossover', 'Sedan', 'Hatchback'], useCases: ['Urban commuting', 'Family vacations', 'Long road trips', 'All-purpose family car', 'Sustainable and eco-friendly', 'Performance driving', 'Practicality and efficiency'] },
 { name: 'Apple', segments: ['Smartphones', 'Tablets', 'Laptops', 'Desktops', 'Smartwatches'], useCases: ['Mobile communication', 'Entertainment', 'Productivity', 'Health and fitness', 'Home automation'] },
  { name: 'Samsung', segments: ['Smartphones', 'Tablets', 'Laptops', 'Desktops', 'Smartwatches', 'Televisions', 'Home appliances'], useCases: ['Mobile communication', 'Entertainment', 'Productivity', 'Health and fitness', 'Home automation', 'Home entertainment', 'Home appliances'] },
  { name: 'Sony', segments: ['Smartphones', 'Tablets', 'Laptops', 'Desktops', 'Televisions', 'Cameras', 'Audio equipment', 'Gaming consoles'], useCases: ['Mobile communication', 'Entertainment', 'Productivity', 'Photography', 'Music and audio', 'Gaming', 'Home entertainment'] },
  { name: 'Microsoft', segments: ['Laptops', 'Desktops', 'Tablets', 'Gaming consoles'], useCases: ['Productivity', 'Gaming', 'Entertainment', 'Mobile communication'] },
  { name: 'LG', segments: ['Smartphones', 'Tablets', 'Laptops', 'Desktops', 'Televisions', 'Home appliances'], useCases: ['Mobile communication', 'Entertainment', 'Productivity', 'Home automation', 'Home entertainment', 'Home appliances'] },
  { name: 'Google', segments: ['Smartphones', 'Tablets', 'Laptops', 'Desktops', 'Smartwatches', 'Smart speakers'], useCases: ['Mobile communication', 'Entertainment', 'Productivity', 'Health and fitness', 'Home automation', 'Voice assistance'] },
];

const useCases = [
  'Urban commuting',
  'Family vacations',
  'Long road trips',
  'Off-roading',
  'Luxury travel',
  'Business transportation',
  'All-purpose family car',
  'Sustainable and eco-friendly',
  'Practicality and efficiency',
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getUniqueCarScenario() {
  const segment = getRandomItem(segments);
  let brand = getRandomItem(brands);
  let useCase = getRandomItem(useCases);

  // 70% chance of not being something the brand already does
  const uniqueProbability = 0.7;
  
  // Chance of selecting a consumer electronics brand
  const electronicsProbability = 1 / 6;
  
  let isUnique = false;
  
  while (!isUnique) {
    const segmentExists = brand.segments.includes(segment);
    const useCaseExists = brand.useCases.includes(useCase);

    if (segmentExists || useCaseExists) {
      if (Math.random() > uniqueProbability) {
        break;
      } else {
        brand = getRandomItem(brands);
        useCase = getRandomItem(useCases);
      }
    } else {
      isUnique = true;
    }
  }

  // Check if the brand is a consumer electronics brand
  const isElectronicsBrand = brand.category === 'Consumer Electronics';

  // If the brand is a consumer electronics brand, reroll with the specified probability
  if (isElectronicsBrand && Math.random() > electronicsProbability) {
    return getUniqueCarScenario();
  }

  return { segment, brand: brand.name, useCase };
}


function spin() {
  const columnElements = Array.from(document.getElementsByClassName('column-content'));
  columnElements.forEach((element) => {
    element.classList.add('spin-animation');
  });

  const delay = 1000; // Time between stopping each column (in milliseconds)
  const changeInterval = 100; // Interval between value changes during the spin (in milliseconds)
  let intervals = []; // Store the interval IDs

  // Start changing values during the spin
  for (let i = 0; i < columnElements.length; i++) {
    intervals[i] = setInterval(() => {
      const carScenario = getUniqueCarScenario();
      switch (i) {
        case 0:
          document.getElementById('segment').textContent = carScenario.segment;
          break;
        case 1:
          document.getElementById('brand').textContent = carScenario.brand;
          break;
        case 2:
          document.getElementById('use-case').textContent = carScenario.useCase;
          break;
      }
    }, changeInterval);
  }

  // Stop changing values and spinning for each column with delays
  for (let i = 0; i < columnElements.length; i++) {
    setTimeout(() => {
      clearInterval(intervals[i]); // Stop changing values
      columnElements[i].classList.remove('spin-animation'); // Stop spinning
    }, 2000 + delay * i);
  }
}


window.onload = spin;

