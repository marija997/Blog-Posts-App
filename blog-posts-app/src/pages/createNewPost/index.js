import { useState } from "react";
import Heading from "../../components/heading";
import { useForm, Controller } from "react-hook-form";
import InputField from "../../components/inputField";
import { createPost } from "../../API/posts/createPost";
import { useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { Helmet } from "react-helmet";

const CreateNewPost = () => {
  const { handleSubmit, control, formState, trigger } = useForm();
  const { errors } = formState;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data) {
      createPost(data, setLoading, dispatch);
    }
  };

  return (
    <div className={`create-new-post container form-container`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create New Post</title>
        <link rel="canonical" href={`/create-new-post}`} />
      </Helmet>
      <Heading text={`Create New Post`} />
      <form id={`create-new-post-form`} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name={`title`}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field: { onChange, value, name, ref } }) => (
            <InputField
              onBlur={() => trigger(name)}
              placeholder={`Title *`}
              onChange={onChange}
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
          render={({ field: { onChange, value, name, ref } }) => (
            <InputField
              onBlur={() => trigger(name)}
              type={`textarea`}
              placeholder={`Content *`}
              onChange={onChange}
              value={value}
              name={name}
              label={errors[name] && "Content is required field. *"}
            />
          )}
        />
        <button type={`submit`} className={`button`}>
          {loading ? (
            <Loader
              type={"Rings"}
              color={"#fff"}
              height={100}
              width={100}
              timeout={3000}
            />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateNewPost;
