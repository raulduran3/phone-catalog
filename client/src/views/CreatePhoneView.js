import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPhone } from "../actions/phones";
import { useNavigate } from "react-router-dom";
import FormComp from "../components/Form";

const CreatePhoneView = () => {
  const [phoneData, setPhoneData] = useState({
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: 0,
    imageFileName: "",
    screen: "",
    processor: "",
    ram: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createPhone(phoneData, setLoading));
    navigate("/");
  };

  return (
    <FormComp
      type={"create"}
      phoneData={phoneData}
      setPhoneData={setPhoneData}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default CreatePhoneView;
