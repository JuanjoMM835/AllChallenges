import { db, onValue, push, ref, set } from './confing';
import { setData, setLoading } from './firebaseSlice';

export const fetchFirebaseData = () => (dispatch) => {
    dispatch(setLoading());
    const dbRef = ref(db, 'datos');
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(setData(data ? Object.values(data) : []));
    });
};

export const addDataToFirebase = (newData) => () => {
    const dbRef = ref(db, 'datos');
    const newEntry = push(dbRef);
    set(newEntry, newData);
};