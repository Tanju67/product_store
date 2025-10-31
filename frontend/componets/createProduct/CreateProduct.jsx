import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Input from "../../shared/formElements/Input";
import { useForm } from "../../shared/hooks/useForm";
import { useSubmit } from "../../shared/hooks/useSubmit";

const initialState = {
  name: "",
  price: "",
  description: "",
  image: "",
};

function CreateProduct() {
  const [formKey, setFormKey] = useState(0);
  const { formState, onInput, setFormState } = useForm(initialState);
  const { submit, isLoading } = useSubmit();

  const submitHandler = async (e) => {
    e.preventDefault();

    submit("/api/v1/products", "POST", formState, () => {
      setFormState({ name: "", price: "", image: "", description: "" });
      setFormKey((prev) => prev + 1);
    });
  };
  return (
    <div className="mx-auto max-w-[1154px]">
      <h1 className="mb-8 text-center text-lg md:text-xl lg:text-2xl">
        Create New Product
      </h1>
      <form
        key={formKey}
        className="mx-auto flex flex-col gap-2 bg-gray-300 p-10 md:w-1/2 dark:bg-gray-600"
        onSubmit={submitHandler}
      >
        <Input
          id="name"
          label="Name"
          type="text"
          element="input"
          onInput={onInput}
          className="bg-gray-200 px-2 py-1 text-gray-800 outline-0"
          parentClass="mb-2 flex flex-col gap-1"
        />

        <Input
          id="price"
          label="Price"
          type="number"
          element="input"
          onInput={onInput}
          className="bg-gray-200 px-2 py-1 text-gray-800 outline-0"
          parentClass="mb-2 flex flex-col gap-1"
        />

        <Input
          id="image"
          label="Image"
          type="text"
          element="input"
          onInput={onInput}
          className="bg-gray-200 px-2 py-1 text-gray-800 outline-0"
          parentClass="mb-2 flex flex-col gap-1"
        />

        <Input
          id="description"
          label="Description"
          type="text"
          element="textarea"
          onInput={onInput}
          className="bg-gray-200 px-2 py-1 text-gray-800 outline-0"
          parentClass="mb-2 flex flex-col gap-1"
        />
        <button
          disabled={isLoading}
          className={`w-full bg-amber-500 py-2 text-white transition-all duration-300 hover:bg-amber-600 ${isLoading ? "bg-gray-700" : "bg-amber-500"}`}
        >
          {isLoading ? "Loading..." : "Create Product"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default CreateProduct;
