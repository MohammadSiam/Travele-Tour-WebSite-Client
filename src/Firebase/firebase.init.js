import firebaseConfig from './firebase.config'
import { initializeApp } from '@firebase/app';


const firebseInitialize = () => {
    initializeApp(firebaseConfig);
}
export default firebseInitialize;