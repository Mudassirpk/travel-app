import Comment from "./Comment";
import { CommentType } from "../../../types/types";
import { useState, useEffect } from "react";

type Props = {
  comments: Array<CommentType>;
  isLoading: boolean;
};

import Loader from "../../../Helper/Loader";

const Comments: React.FC<Props> = ({ comments, isLoading }) => {
  // const [comments, setComments] = useState<Array<object>>([]);
  const [visibleNumber, setVisibleNumber] = useState<number>(3);
  const utility_array = [...Array(visibleNumber)];

  function adjustVisibleNumber() {
    if (visibleNumber + 3 < comments.length) {
      setVisibleNumber(visibleNumber + 3);
    } else if (visibleNumber + 3 > comments.length) {
      setVisibleNumber(visibleNumber + (comments.length - visibleNumber));
    }
  }

  if (comments.length > 0) {
    return (
      <div className="flex flex-col gap-10 mt-10 xsm:px-5">
        <p className="text-2xl text-slate-900 font-semibold">Comments</p>
        {isLoading ? <Loader size={2} wait={true} fill={true} /> : null}
        {utility_array.map((comment: any, index: any) => {
          return comments[index] ? (
            <Comment
              content={comments[index].text}
              name={comments[index].commentor_name}
              commentor_image={comments[index].commentor_photo}
            />
          ) : null;
        })}
        {!(visibleNumber === comments.length) ? (
          <p
            onClick={adjustVisibleNumber}
            className="text-xl mb-4 font-semibold cursor-pointer text-slate-700 hover:underline"
          >
            View more comments
          </p>
        ) : null}
      </div>
    );
  } else {
    return <p>No comments available.</p>;
  }
};

export default Comments;
