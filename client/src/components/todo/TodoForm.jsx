import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Button from "../common/Button";
import Input from "../common/Input";

const TodoForm = ({
  onSubmit,
  initialValues,
  isEditing,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (initialValues) {
      reset({
        title: initialValues.title,
        description: initialValues.description,
      });
    } else {
      reset({
        title: "",
        description: "",
      });
    }
  }, [initialValues, reset]);

  const submitHandler = (data) => {
    onSubmit(data);

    if (!isEditing) {
      reset();
    }
  };

  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold text-slate-800">
        {isEditing ? "Edit Todo" : "Add New Todo"}
      </h2>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-5"
      >
        <Input
          label="Title"
          placeholder="Learn Redux Toolkit..."
          error={errors.title?.message}
          {...register("title", {
            required: "Title is required.",
          })}
        />

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Description
          </label>

          <textarea
            rows={4}
            placeholder="Write something..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            {...register("description")}
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isEditing ? "Update Todo" : "Add Todo"}
        </Button>
      </form>
    </section>
  );
};

export default TodoForm;