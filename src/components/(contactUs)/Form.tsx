"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "./../ui/input";
import { FormLabel } from "../ui/form";
import Label from "./Label";
import { Button } from "../ui/button";
import { Textarea } from "@headlessui/react";
import { PhoneInput } from "../ui/PhoneInput";
import ChickBox from "./ChickBox";
import PhoneNumberInput from "./PhoneNumberInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxState {
  websiteDesign: boolean;
  contentCreation: boolean;
  uxdesign: boolean;
  strategyConsulting: boolean;
  userResearch: boolean;
  other: boolean;
}

export default function Form() {
  const {
    register,
    setValue,
    getValues,
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FieldValues>();


  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    websiteDesign: false,
    contentCreation: false,
    uxdesign: false,
    strategyConsulting: false,
    userResearch: false,
    other: false,
  });

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setValue(name, checked);
    setCheckboxState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };


  


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col form">
      <Label f="name" label="Name" />
      <Input
        id="name"
        type="text"
        {...register("name", { required: true, maxLength: 15 })}
      />

      {errors.name && (
        <div className="mt-2 text-red-500">Must be 15 characters or less</div>
      )}

      <Label f="email" label="Email" />
      <Input
        id="email"
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      {errors.email && (
        <div className="mt-2 text-red-500">Invalid email address</div>
      )}

      <Label f="phone" label="Phone" />
      <PhoneNumberInput
        control={control}
        setValue={setValue}
        id="phoneNumber"
        errors={errors}
        isSubmitted={isSubmitted}
      />
      {errors.phone && (
        <div className="mt-2 text-red-500">Invalid phone number</div>
      )}

      <Label f="message" label="How can we help?" />
      <Textarea
        id="message"
        {...register("message", { required: true })}
        cols={15}
        rows={10}
      />

      <div className="mt-10">
        <p className="font-bold font-jakarta mb-2">services</p>
        <div className="grid grid-cols-2 grid-rows-3 font-jakarta">

          <ChickBox
            onChange={(checked:boolean) => handleCheckboxChange("websiteDesign", checked)}
            checked={getValues("websiteDesign")}
            register={register("websiteDesign")}
            id="websiteDesign"
            content="Website design"
            
          />
          <ChickBox
            id="contentCreation"
            content="Content creation"
            onChange={(checked:boolean) => handleCheckboxChange("contentCreation", checked)}
            checked={getValues("contentCreation")}
            register={register("contentCreation")}
            
          />

          <ChickBox  
            id="uxdesign" 
            content="UX design" 
            onChange={(checked:boolean) => handleCheckboxChange("uxdesign", checked)}
            checked={getValues("uxdesign")}
            register={register("uxdesign")}
          />

          <ChickBox
            id="strategyConsulting"
            content="Strategy & consulting"
            onChange={(checked:boolean) => handleCheckboxChange("strategyConsulting", checked)}
            checked={getValues("strategyConsulting")}
            register={register("strategyConsulting")}
            
          />
          <ChickBox
            id="userResearch"
            content="User research"
            onChange={(checked:boolean) => handleCheckboxChange("userResearch", checked)}
            checked={getValues("userResearch")}
            register={register("userResearch")}
            
          />
          <ChickBox
            id="other"
            content="other"
            onChange={(checked:boolean) => handleCheckboxChange("other", checked)}
            checked={getValues("other")}
            register={register("other")}
            
          />
        </div>
      </div>

      <Button type="submit" className=" bg-blue-main mt-10 font-syne">
        Send a message
      </Button>
    </form>
  );
}
