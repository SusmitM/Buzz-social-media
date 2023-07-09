import axios from "axios";

export const deleteCommentService = async (postId, commentId, loginToken) =>
  await axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    { headers: { authorization: loginToken } }
  );