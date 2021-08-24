#!/bin/bash

API="http://localhost:4741"
URL_PATH="/comment"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "comment": {
      "text": "'"${TEXT}"'",
      "image": "'"${IMAGE}"'",
      "postId": "'"${ID}"'"
    }
  }'

echo
