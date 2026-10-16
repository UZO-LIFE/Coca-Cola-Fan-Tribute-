// Centralized image asset loader
// Using ES module imports allows Vite to bundle, optimize, hash, and serve images
// consistently across both development servers and production browser environments.

import heroBottleImg from './images/coca_hero_bottle_1792176774623.jpg';
import vintageSodaFountainImg from './images/vintage_soda_fountain_1792176776553.jpg';
import cokeZeroBottleImg from './images/coke_zero_bottle_1792176776309.jpg';
import friendsSharingCokeImg from './images/friends_sharing_coke_1792176777240.jpg';
import sustainabilityImg from './images/sustainability_clean_nature_1792176777749.jpg';

export const APP_IMAGES = {
  heroBottle: heroBottleImg,
  vintageSodaFountain: vintageSodaFountainImg,
  cokeZeroBottle: cokeZeroBottleImg,
  friendsSharingCoke: friendsSharingCokeImg,
  sustainability: sustainabilityImg,
};
