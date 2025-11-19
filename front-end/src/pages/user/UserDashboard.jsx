import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import Layout from "../../components/layout/Layout";

export default function UserDashboard() {
  const { backEndUrl } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${backEndUrl}/user/dashboard`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(response.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };

    fetchData();
  }, [backEndUrl]);

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Welcome User 👋</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Layout>
  );
}
