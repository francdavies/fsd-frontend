import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#eef3f1]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#1c5c47] border-t-transparent rounded-full animate-spin" />
          <p className="text-[13px] text-[#6b7f78]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return <Navigate to="/SignInPage" replace />;

  return children;
};

export default ProtectedRoute;