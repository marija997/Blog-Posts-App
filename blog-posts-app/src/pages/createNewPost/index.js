import { useState } from "react";
import Heading from "../../components/heading";
import { useForm, Controller } from "react-hook-form";
import InputField from "../../components/inputField";
import { createPost } from "../../API/posts/createPost";

const CreateNewPost = () => {
  const { handleSubmit, control, formState, trigger } = useForm();
  const { errors } = formState;
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    if (data) {
      createPost(data, setLoading);
    }
  };

  return (
    <div className={`create-new-post container`}>
      <Heading text={`Create New Post`} />
      <form id={`create-new-post-form`} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name={`title`}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <InputField
              onBlur={() => trigger(name)}
              placeholder={`Title *`}
              onChange={onChange}
              ref={ref}
              value={value}
              name={name}
              label={errors[name] && "Title is required field. *"}
            />
          )}
        />
        <Controller
          control={control}
          name={`content`}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <InputField
              onBlur={() => trigger(name)}
              type={`textarea`}
              placeholder={`Content *`}
              onChange={onChange}
              ref={ref}
              value={value}
              name={name}
              label={errors[name] && "Content is required field. *"}
            />
          )}
        />
        <button type={`submit`} className={`button`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateNewPost;
