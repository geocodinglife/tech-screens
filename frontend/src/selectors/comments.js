import { useSelector } from "react-redux";

export const useComments = () => {
  const comments = useSelector(({ comments: c }) => c);

  return comments;
};
