#!/bin/bash

API="http://localhost:4741"
URL_PATH="/comments/:postId/:commentId"

curl "${API}${URL_PATH}/${POSTID}/${COMMENTID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo