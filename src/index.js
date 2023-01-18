import './style.css';
import { formatDistance, subDays } from 'date-fns';

console.log(formatDistance(subDays(new Date(), 6), new Date(), { addSuffix: true }));
