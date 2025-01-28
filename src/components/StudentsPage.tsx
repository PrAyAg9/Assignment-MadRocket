

import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase/firebase';
import AddStudentModal from './AddStudentModal';
import { Student } from '../types/student';
import { FaEye, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const StudentsPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchStudents = async () => {
        const querySnapshot = await getDocs(collection(db, 'students'));
        const studentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Student),
        }));
        setStudents(studentsData);
      };
      fetchStudents();
    }
  }, [showModal, user]);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'students', id));
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleAddStudentClick = () => {
    if (user) {
      setShowModal(true);
    } else {
      navigate('/login');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 mt-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Students List</h1>
        <button
          onClick={handleAddStudentClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
        >
          <FaPlus className="mr-2" /> Add Student
        </button>
      </div>
      {user ? (
        <>
          <table className="w-full table-auto bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Class</th>
                <th className="py-3 px-6 text-left">Section</th>
                <th className="py-3 px-6 text-left">Roll Number</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{student.id}</td>
                  <td className="py-3 px-6">{student.name}</td>
                  <td className="py-3 px-6">{student.class}</td>
                  <td className="py-3 px-6">{student.section}</td>
                  <td className="py-3 px-6">{student.rollNumber}</td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center space-x-4">
                      <FaEye className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                      <FaEdit className="text-gray-600 hover:text-yellow-600 cursor-pointer" />
                      <FaTrash
                        className="text-gray-600 hover:text-red-600 cursor-pointer"
                        onClick={() => handleDelete(student.id!)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showModal && <AddStudentModal onClose={() => setShowModal(false)} />}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-lg text-gray-700 mb-4">
            Please sign in to view student information.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
