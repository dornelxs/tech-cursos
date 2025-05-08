import { addDoc, collection, doc, getDocs, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig'; 

const cursosRef= collection(db, 'Cursos');

// Busca todos os cursos 
export const getCursos = async () => { 
  const snapshot = await getDocs(cursosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Adicionar um novo curso
export const adicionarCurso = async (curso) => {
  const docRef = await addDoc(cursosRef, curso)
  return docRef.id;
}

// Atualizar um curso 
export const atualizarCurso = async (id, novosDados) => {
  const cursoRef = doc(db, 'Cursos', id);
  await updateDoc(cursoRef, novosDados);
}

// Deletar curso por ID
export const deletarCurso = async (id) => {
  const cursoRef = doc(db, 'Cursos', id);
  await deleteDoc(cursoRef);
} 