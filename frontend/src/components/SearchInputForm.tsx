import React from "react";
import { useFormik } from "formik";
import { RiSearchLine } from "react-icons/ri";
import { useAppSelector } from "../redux/hooks";
import { searchInputSchema } from "../schemas/searchInputSchema";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const SearchInputForm: React.FC = () => {
  const loader = useAppSelector((state) => state.loader);
  const queryParams = queryString.parse(useLocation().search);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      requestText: '',
    },
    onSubmit: (values) => {
      navigate(
        `/flowers-catalog?${queryString.stringify({
          ...queryParams,
          search: values.requestText,
        })}`
      );
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
