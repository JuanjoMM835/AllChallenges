import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from "../firebase/config";

export const useCollection = (collectionName) => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState([]);

  // Escuchar cambios en la colección en tiempo real
  useEffect(() => {
    setIsPending(true);
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setDocuments(results);
        setIsPending(false);
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName]);

  const addDocument = async (docData) => {
    setIsPending(true);
    try {
      await addDoc(collection(db, collectionName), docData);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsPending(false);
    }
  };

  const updateDocument = async (id, updates) => {
    setIsPending(true);
    try {
      await updateDoc(doc(db, collectionName, id), updates);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsPending(false);
    }
  };

  const deleteDocument = async (id) => {
    setIsPending(true);
    try {
      await deleteDoc(doc(db, collectionName, id));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsPending(false);
    }
  };

  return { 
    documents, 
    addDocument, 
    updateDocument, 
    deleteDocument, 
    isPending, 
    error 
  };
};