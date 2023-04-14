import React from "react";
import { useFormik } from "formik";
import { RiSearchLine } from "react-icons/ri";
import { useAppSelector } from "../redux/hooks";
import { searchInputSchema } from "../schemas/searchInputSchema";

const SearchInputForm: React.FC = () => {
  const loader = useAppSelector((state) => state.loader);
  const formik = useFormik({
    initialValues: {
      requestText: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values.requestText, null, 2));
    },
    validationSchema: searchInputSchema,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative my-auto text-[#E1E1E6] w-8/12"
    >
      <button
        type="submit"
        disabled={loader}
        className="absolute inset-y-0 p-2 left-2 hover:text-cyan-500"
      >
        <RiSearchLine size={21} />
      </button>
      <input
        placeholder="Search your flower"
        type={"text"}
        name="requestText"
        minLength={3}
        maxLength={250}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.requestText}
        className="block bg-[#0D1D25] w-full rounded-3xl py-4 px-14 focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1"
      />
    </form>
  );
};

export default SearchInputForm;
