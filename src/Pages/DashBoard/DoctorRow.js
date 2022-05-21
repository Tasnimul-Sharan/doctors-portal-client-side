import React from "react";

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
  const { name, specialty, img } = doctor;

  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div class="avatar">
            <div class="w-8 rounded">
              <img src={img} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{specialty}</td>
        <td>
          <label
            onClick={() => setDeletingDoctor(doctor)}
            for="delete-confirm-modal"
            class="btn btn-xs btn-error"
          >
            Delete
          </label>
        </td>
      </tr>
    </div>
  );
};

export default DoctorRow;
