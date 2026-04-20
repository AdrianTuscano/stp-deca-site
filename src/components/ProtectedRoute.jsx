import { Navigate } from "react-router-dom";
import { getStudentId } from "../lib/auth";

export default function ProtectedRoute({ children }) {
  const studentId = getStudentId();

  if (!studentId) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
