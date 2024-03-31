import React, { useState } from "react";
import { getSkills } from "../services/GetUsers";
import Select from "react-select";
import { SideBar } from "./SideBar";

const Profil = () => {
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [skills, setSkills] = useState([{}]);
  const [level, setLevel] = useState(1);

  const fetchSkill = async () => {
    const options = await getSkills(1);
    setSkills(
      options.map((domain) => {
        return {
          label: domain.name,
          value: domain.id,
        };
      })
    );
  };
  const handleSelectChange = (skill) => {
    setSelectedSkill(skill);
    console.log(skill);
  };
  return (
    <div>
      <div className="w-96">
        <label htmlFor="" className="text-gray-900 dark:text-white">
          Domaine
        </label>
        <Select
          onChange={handleSelectChange}
          options={skills}
          isMulti
          onMenuOpen={fetchSkill}
          name="domain"
          placeholder="Sélectionnez une option"
          className="outline-none"
        />
      </div>
      {selectedSkill && selectedSkill.length && (
        <div>
          {selectedSkill.map((skill) => (
            <div className="border border-red">
              <label htmlFor="skills">{skill.label} </label>
              <input
                className="border border-red-400"
                type="button"
                value={level}
                onClick={() => setLevel(level + 1)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profil;
