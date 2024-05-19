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

export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .required("Required"),
      phone: Yup.string().required("Phone number is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col form">
      <Label f="name" label="Name" />
      <Input id="name" type="text" {...formik.getFieldProps("name")} />
      {formik.touched.name && formik.errors.name ? (
        <div className="mt-2 text-red-500">{formik.errors.name}</div>
      ) : null}

      <Label f="email" label="Email" />
      <Input id="email" type="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div className="mt-2 text-red-500">{formik.errors.email}</div>
      ) : null}

      <Label f="phone" label="Phone" />
      <PhoneInput    id="phone" type="phone" {...formik.getFieldProps("phone")}/>
      {formik.touched.phone && formik.errors.phone ? (
        <div className="mt-2 text-red-500">{formik.errors.phone}</div>
      ) : null}




      <Label f="message" label="How can we help?" />
      <Textarea id="message" {...formik.getFieldProps("message")} cols={15} rows={10} />
      


      <div className="mt-10">
        <p className="font-bold font-jakarta mb-2">services</p>
        <div className="grid grid-cols-2 grid-rows-3 font-jakarta">
        <ChickBox id="websiteDesign" content="Website design"/>
        <ChickBox id="contentCreation" content="Content creation"/>
        <ChickBox id="uxdesign" content="UX design"/>
        <ChickBox id="Strategy&consulting" content="Strategy & consulting"/>
        <ChickBox id="userResearch" content="User research"/>
        <ChickBox id="other" content="other"/>
        </div>
      </div>

      <Button type="submit" className=" bg-blue-main mt-10 font-syne">
      Send a message
      </Button>
    </form>
  );
}
