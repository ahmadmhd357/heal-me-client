import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/usersSlice.js";
import { compareAsc, format } from "date-fns";

function Appointments() {
  const { currentUser } = useSelector(selectUser);
  const navigate = useNavigate();
  let date = format(new Date(), "dd/MM/yyyy");
  let time = format(new Date(), "H:mm");

  return (
    <main className="h-full flex-1 px-10 md:px-24 py-10   gap-6  ">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {currentUser?.isTherapist ? "Client" : "Therapist"} Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentUser?.appointments.map((a, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap">
                {currentUser?.isTherapist ? a.clientName : a.therapistName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{a.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{a.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Appointments;
