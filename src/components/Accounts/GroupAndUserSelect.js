import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { getWithToken } from "../../utils/request";
import { errorPopup, successPopup } from "../../utils/popupMsg";

const PopulateSelect = ({ options, value, onChange, placeholder, isMulti }) => {
  return (
    <div style={{ width: "40%", margin: "0 1rem" }}>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isClearable
        isMulti={isMulti === false ? false : true}
        styles={{
          control: (base) => ({
            ...base,
            padding: "6px",
            borderRadius: "12px",
          }),
        }}
      />
    </div>
  );
};

let selectAllValue = "";

export const PopulateGroupSelect = (props) => {
  // clearAll
  const { onGroupChange } = props;
  const [groups, setGroups] = useState([]);




  useEffect(() => {
    async function fetchGroups() {
      try {
        const response = await getWithToken("groups");
        const groups = response.data.data;
        setGroups(groups);
      } catch (error) {
        // console.log(error);
      }
    }
    fetchGroups();
  }, []);
  // clearAll

  const groupOptions = groups.map((group) => ({
    value: group.id,
    label: group.name,
  }));

  // Set the value of the Select All option to all the group ids separated by ,
  const handleGroupChange = (selectedOption) => {
    // console.log('selectedOption', selectedOption)
    if (
      selectedOption &&
      selectedOption.length > 0 &&
      selectedOption[0].value === "all"
    ) {
      selectAllValue = groups.map((group) => group.id);
    } else {
      selectAllValue = "";
    }
    onGroupChange(selectedOption, selectAllValue);
  };

  return (
    <PopulateSelect
      options={[{ value: "all", label: "Select All" }, ...groupOptions]}
      onChange={handleGroupChange}
      // value={selectedGroups}
      placeholder="Select Group"
    />
  );
};

export const PopulateUserSelect = ({ groupIds, onUserChange }) => {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchAccounts() {
      try {
        let url = "";
        if (groupIds.includes("all")) {
          url = `accounts?group_list=${JSON.stringify(selectAllValue)}`;
        } else {
          url = `accounts?group_list=${JSON.stringify(groupIds)}`;
        }
        const response = await getWithToken(url);
        const accounts = response.data.data;

        setAccounts(accounts);
        setError(false);
      } catch (error) {
        // console.log(error);
        setAccounts([]);
        // errorPopup(error?.message);
        if (error.response && error.response.status === 404) {
          setError(true);
        }
      }
    }
    fetchAccounts();
  }, [groupIds]);

  const accountOptions = accounts.map((account) => ({
    value: account.id,
    label: account.name,
  }));

  if (error) {
    return (
      <PopulateSelect
        options={[{ value: "", label: "No accounts found", isDisabled: true }]}
        placeholder="Select User"
      />
    );
  } else if (groupIds.length === 0) {
    return (
      <PopulateSelect
        options={[{ value: "", label: "No accounts found", isDisabled: true }]}
        placeholder="Select User"
      />
    );
  } else {
    return (
      <PopulateSelect
        options={accountOptions}
        onChange={onUserChange}
        placeholder="Select User"
      />
    );
  }
};
