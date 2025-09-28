export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: 'bike' | 'scooter' | 'ev';
  fuelType: 'petrol' | 'electric' | 'diesel';
  price: number;
  image: string;
  rating: number;
  mileage: number;
  engine: string;
  power: string;
  torque: string;
  topSpeed: number;
  features: string[];
  colors: string[];
  specifications: {
    engine: string;
    displacement: string;
    maxPower: string;
    maxTorque: string;
    mileage: string;
    fuelCapacity: string;
    transmission: string;
    brakes: string;
    tyres: string;
    weight: string;
    dimensions: string;
  };
  showroom: {
    name: string;
    location: string;
    contact: string;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    category: 'bike',
    fuelType: 'petrol',
    price: 195000,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.3,
    mileage: 35,
    engine: '349cc',
    power: '20.2 bhp',
    torque: '27 Nm',
    topSpeed: 110,
    features: ['ABS', 'Digital Speedometer', 'LED Tail Light', 'Electric Start'],
    colors: ['Black', 'Red', 'Blue', 'Green'],
    specifications: {
      engine: 'Single Cylinder, 4-Stroke, SOHC',
      displacement: '349cc',
      maxPower: '20.2 bhp @ 6100 rpm',
      maxTorque: '27 Nm @ 4000 rpm',
      mileage: '35-40 km/l',
      fuelCapacity: '13 Litres',
      transmission: '5-Speed Manual',
      brakes: 'Disc (Front), Drum (Rear)',
      tyres: '90/90-19 (Front), 110/90-18 (Rear)',
      weight: '195 kg',
      dimensions: '2160mm x 800mm x 1090mm'
    },
    showroom: {
      name: 'Royal Enfield Delhi',
      location: 'Connaught Place, Delhi',
      contact: '+91-9876543210'
    }
  },
  {
    id: '2',
    name: 'Honda Activa 6G',
    brand: 'Honda',
    category: 'scooter',
    fuelType: 'petrol',
    price: 75000,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    mileage: 60,
    engine: '109.51cc',
    power: '7.68 bhp',
    torque: '8.79 Nm',
    topSpeed: 83,
    features: ['LED Headlight', 'Digital Speedometer', 'Mobile Charging Socket', 'Alloy Wheels'],
    colors: ['White', 'Black', 'Red', 'Blue'],
    specifications: {
      engine: 'Single Cylinder, 4-Stroke, OHC',
      displacement: '109.51cc',
      maxPower: '7.68 bhp @ 8000 rpm',
      maxTorque: '8.79 Nm @ 6500 rpm',
      mileage: '60 km/l',
      fuelCapacity: '5.3 Litres',
      transmission: 'CVT Automatic',
      brakes: 'Drum (Front & Rear)',
      tyres: '90/100-10 (Front & Rear)',
      weight: '109 kg',
      dimensions: '1833mm x 697mm x 1156mm'
    },
    showroom: {
      name: 'Honda Two Wheelers',
      location: 'Karol Bagh, Delhi',
      contact: '+91-9876543211'
    }
  },
  {
    id: '3',
    name: 'Ather 450X',
    brand: 'Ather',
    category: 'ev',
    fuelType: 'electric',
    price: 145000,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    mileage: 116,
    engine: 'Electric Motor',
    power: '6.4 kW',
    torque: '26 Nm',
    topSpeed: 90,
    features: ['Touchscreen Dashboard', 'Google Maps', 'OTA Updates', 'Remote Diagnostics'],
    colors: ['White', 'Black', 'Green'],
    specifications: {
      engine: 'Permanent Magnet Synchronous Motor',
      displacement: 'N/A',
      maxPower: '6.4 kW (8.58 bhp)',
      maxTorque: '26 Nm',
      mileage: '116 km per charge',
      fuelCapacity: '3.7 kWh Battery',
      transmission: 'Direct Drive',
      brakes: 'Disc (Front & Rear)',
      tyres: '90/80-17 (Front), 100/80-17 (Rear)',
      weight: '108 kg',
      dimensions: '1846mm x 720mm x 1264mm'
    },
    showroom: {
      name: 'Ather Space',
      location: 'Cyber City, Gurgaon',
      contact: '+91-9876543212'
    }
  },
  {
    id: '4',
    name: 'Yamaha MT-15',
    brand: 'Yamaha',
    category: 'bike',
    fuelType: 'petrol',
    price: 160000,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    mileage: 48,
    engine: '155cc',
    power: '18.4 bhp',
    torque: '14.1 Nm',
    topSpeed: 131,
    features: ['ABS', 'LED Headlight', 'Digital Display', 'Slipper Clutch'],
    colors: ['Black', 'Blue', 'Red'],
    specifications: {
      engine: 'Single Cylinder, 4-Stroke, SOHC',
      displacement: '155cc',
      maxPower: '18.4 bhp @ 10000 rpm',
      maxTorque: '14.1 Nm @ 7500 rpm',
      mileage: '48-52 km/l',
      fuelCapacity: '10 Litres',
      transmission: '6-Speed Manual',
      brakes: 'Disc (Front & Rear)',
      tyres: '100/80-17 (Front), 140/70-17 (Rear)',
      weight: '142 kg',
      dimensions: '1990mm x 800mm x 1065mm'
    },
    showroom: {
      name: 'Yamaha Showroom',
      location: 'Lajpat Nagar, Delhi',
      contact: '+91-9876543213'
    }
  },
  {
    id: '5',
    name: 'TVS iQube Electric',
    brand: 'TVS',
    category: 'ev',
    fuelType: 'electric',
    price: 120000,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.2,
    mileage: 75,
    engine: 'Electric Motor',
    power: '4.4 kW',
    torque: '140 Nm',
    topSpeed: 78,
    features: ['Smart Connectivity', 'Navigation', 'Call & SMS Alerts', 'Fast Charging'],
    colors: ['White', 'Blue', 'Red'],
    specifications: {
      engine: 'Hub Motor',
      displacement: 'N/A',
      maxPower: '4.4 kW',
      maxTorque: '140 Nm',
      mileage: '75 km per charge',
      fuelCapacity: '4.56 kWh Battery',
      transmission: 'Direct Drive',
      brakes: 'Disc (Front), Drum (Rear)',
      tyres: '90/90-12 (Front & Rear)',
      weight: '118 kg',
      dimensions: '1834mm x 650mm x 1150mm'
    },
    showroom: {
      name: 'TVS Motors',
      location: 'Nehru Place, Delhi',
      contact: '+91-9876543214'
    }
  },
  {
    id: '6',
    name: 'Bajaj Pulsar NS200',
    brand: 'Bajaj',
    category: 'bike',
    fuelType: 'petrol',
    price: 140000,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.1,
    mileage: 35,
    engine: '199.5cc',
    power: '24.13 bhp',
    torque: '18.5 Nm',
    topSpeed: 136,
    features: ['ABS', 'LED DRL', 'Digital Console', 'Liquid Cooled Engine'],
    colors: ['Black', 'Red', 'White', 'Blue'],
    specifications: {
      engine: 'Single Cylinder, 4-Stroke, DTS-i',
      displacement: '199.5cc',
      maxPower: '24.13 bhp @ 9750 rpm',
      maxTorque: '18.5 Nm @ 8000 rpm',
      mileage: '35-40 km/l',
      fuelCapacity: '12 Litres',
      transmission: '6-Speed Manual',
      brakes: 'Disc (Front & Rear)',
      tyres: '100/80-17 (Front), 130/70-17 (Rear)',
      weight: '154 kg',
      dimensions: '2018mm x 813mm x 1070mm'
    },
    showroom: {
      name: 'Bajaj Showroom',
      location: 'Rajouri Garden, Delhi',
      contact: '+91-9876543215'
    }
  }
];

export const brands = ['Royal Enfield', 'Honda', 'Ather', 'Yamaha', 'TVS', 'Bajaj', 'Hero', 'Suzuki', 'KTM'];

export const upcomingLaunches = [
  {
    id: '1',
    name: 'Honda CB350RS',
    brand: 'Honda',
    launchDate: 'March 2024',
    expectedPrice: '₹2,15,000',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'bike'
  },
  {
    id: '2',
    name: 'Ather 450S',
    brand: 'Ather',
    launchDate: 'April 2024',
    expectedPrice: '₹1,25,000',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'ev'
  },
  {
    id: '3',
    name: 'TVS Apache RR 310',
    brand: 'TVS',
    launchDate: 'May 2024',
    expectedPrice: '₹2,80,000',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'bike'
  }
];

export const showrooms = [
  {
    id: '1',
    name: 'Vahan Bazar Central Delhi',
    address: 'Connaught Place, New Delhi - 110001',
    phone: '+91-9876543210',
    email: 'delhi@vahanbazar.app',
    brands: ['Honda', 'Royal Enfield', 'Yamaha', 'Bajaj'],
    timing: '10:00 AM - 8:00 PM',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Vahan Bazar Gurgaon',
    address: 'Cyber City, Gurgaon - 122002',
    phone: '+91-9876543211',
    email: 'gurgaon@vahanbazar.app',
    brands: ['Ather', 'TVS', 'Hero', 'KTM'],
    timing: '9:00 AM - 9:00 PM',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Vahan Bazar Noida',
    address: 'Sector 18, Noida - 201301',
    phone: '+91-9876543212',
    email: 'noida@vahanbazar.app',
    brands: ['Suzuki', 'Honda', 'Yamaha', 'TVS'],
    timing: '10:00 AM - 8:30 PM',
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];