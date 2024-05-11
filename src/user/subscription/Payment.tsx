import React, { useState } from "react";
import { LabelInput } from "../../components/Label";
import Input from "../../components/Input";
import {
  FaArrowLeft,
  FaBandAid,
  FaCalendarAlt,
  FaCcMastercard,
  FaCheck,
  FaCreditCard,
  FaEnvelope,
  FaLock,
  FaPaypal,
  FaUniversalAccess,
  FaUser,
  FaVial,
  FaWallet,
} from "react-icons/fa";
import AppLayout from "../../layout/AppLayout";
import { ButtonAction } from "../../components/Button";
import { useParams } from "react-router-dom";

interface PaymentForm {
  cardNumber: string;
  expiry: string;
  cvv: string;
  name: string;
}
const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const params = useParams<{ plan: string }>();
  const { plan } = params;

  const handleChange = (inputType: keyof PaymentForm, newValue: string) => {
    setFormData({
      ...formData,
      [inputType]: newValue,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add payment processing logic here
  };

  return (
    <AppLayout>
      <div className="flex flex-col w-2/6 m-auto">
        <a href="/subscription" className="absolute left-10">
          <FaArrowLeft />
        </a>
        <span className="mb-2 flex items-center space-x-4 border px-2 border-aprimary bg-aprimary">
          <FaCheck className="bg-transparent" />
          <p className="bg-transparent">
            You have been select with{" "}
            <span className="text-yellow-500 font-bold bg-transparent">
              {plan}
            </span>{" "}
            plan.
          </p>
        </span>

        <span className="flex items-center justify-between pb-2 border-b  border-aprimary">
          <p className="font-bold text-2xl">Total</p>
          <p className="font-bold text-2xl">
            $1.5
            <span className="text-sm text-gray-500">/month</span>
          </p>
        </span>
        <div className="flex justify-between items-center">
          <span className="flex items-center space-x-2 my-2 ">
            <FaEnvelope fill="gray" />
            <p className="flex items-center text-gray-500">exmaple@gmail.com</p>
          </span>
          <span className="flex items-center space-x-2 my-2 ">
            <FaUser fill="gray" />
            <p className="flex items-center text-gray-500">Usrename</p>
          </span>
        </div>
        <div className="flex items-center space-x-4 my-2">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
            alt=""
          />

          <img
            className="h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPkrXl2UNqKdOlijbtcwzD4LG5DgGiY25i6tqarWsbQ&s"
            alt=""
          />
          <img
            className="h-8"
            src="https://bacsociety.com/wp-content/uploads/2023/08/logo-Paypal-1.png"
            alt=""
          />
          <img
            className="h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_FRK-e2VsvOhbMvo5YtSH61LTHWtmZBiPLJv-xzLAA&s"
            alt=""
          />
          <img
            className="h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMfBk43FayavSntfZpvuPE714Q4-DYibTqE5-Yl12Nw&s"
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <LabelInput textLabel="Card Number" />
            <Input
              id="cardNumber"
              type="text"
              value={formData.cardNumber}
              onChange={(value) => handleChange("cardNumber", value)}
              placeholder="Enter Card Number"
              icon={<FaCreditCard />}
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-1/3">
              {/* <label htmlFor="expiry" className="block mb-1">
                Expiry
              </label> */}
              <LabelInput textLabel="Expiry" />

              <Input
                id="expiry"
                type="text"
                value={formData.expiry}
                onChange={(value) => handleChange("expiry", value)}
                placeholder="MM/YY"
                icon={<FaCalendarAlt />}
              />
            </div>
            <div>
              {/* <label htmlFor="cvv" className="block mb-1">
                CVV
              </label> */}
              <LabelInput textLabel="CVV" />

              <Input
                id="cvv"
                type="text"
                value={formData.expiry}
                onChange={(value) => handleChange("cvv", value)}
                placeholder="CVV"
                icon={<FaLock />}
              />
            </div>
          </div>
          <div className="mb-4">
            {/* <label htmlFor="name" className="block mb-1">
              Cardholder's Name
            </label> */}
            <LabelInput textLabel="Cardholder's Name" />
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(value) => handleChange("name", value)}
              placeholder="Cardholder's Name"
              icon={<FaUser />}
            />
          </div>
          <ButtonAction
            text="Payment Confirm"
            icon={<FaWallet className="bg-transparent" />}
          />
        </form>
      </div>
    </AppLayout>
  );
};

export default PaymentForm;
