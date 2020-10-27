import React from "react";
import AdminNav from "../../components/nav/AdminNav";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-md-2"> */}
        <div>
          <AdminNav />
        </div>
        <div className="col">admin dashbaord page</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
