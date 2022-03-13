import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePhone } from "../actions/phones";
import { useNavigate, useLocation } from "react-router-dom";
import FormComp from "../components/Form";

const EditPhoneView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state;
  const [phoneData, setPhoneData] = useState({
    name: from.name,
    manufacturer: from.manufacturer,
    description: from.description,
    color: from.color,
    price: from.price,
    imageFileName: from.imageFileName,
    screen: from.screen,
    processor: from.processor,
    ram: from.ram,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updatePhone(from._id, phoneData, setLoading));
    navigate("/");
  };

  return (
    <FormComp
      type={"edit"}
      phoneData={phoneData}
      setPhoneData={setPhoneData}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default EditPhoneView;
