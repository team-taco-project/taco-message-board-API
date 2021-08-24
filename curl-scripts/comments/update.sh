#!/bin/bash

API="http://localhost:4741"
URL_PATH="/comments/:id"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "comment": {
      "text": "'"${TEXT}"'",
      "image": "'"${IMAGE}"'",
      "postId": "'"${ID}"'"
    }
  }'

echo
