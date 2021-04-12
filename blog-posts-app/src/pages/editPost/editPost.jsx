import { useState } from "react";
import Heading from "../../components/heading";
import { useForm, Controller } from "react-hook-form";
import InputField from "../../components/inputField";
import { editPost } from "../../API/posts/editPost";
import { useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { Helmet } from "react-helmet";

const EditPost = ({ post }) => {
  const { handleSubmit, control, formState, trigger } = useForm();
  const { errors } = formState;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const postId = post.id;
  const onSubmit = (data) => {
    if (data) {
      editPost(data, postId, setLoading, dispatch);
    }
  };
  const title = post.title.replace(/\s+/g, "-");
  const path = `${title}_id-${post.id}`;
  return (
    <div className={`edit-post container form-container`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Post {post.title}</title>
        <link rel="canonical" href={`/edit/${path}}`} />
      </Helmet>
      <Heading text={`Edit Post : ${post.title}`} />
      <form id={`create-new-post-form`} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name={`title`}
          defaultValue={post.title ? post.title : ""}
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
          defaultValue={post.body ? post.body : ""}
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

export default EditPost;
