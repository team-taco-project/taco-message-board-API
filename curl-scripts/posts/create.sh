#!/bin/bash

API="http://localhost:4741"
URL_PATH="/create-post"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "post": {
      "title": "'"${TITLE}"'",
      "subject": "'"${SUBJECT}"'",
      "content": "'"${CONTENT}"'",
      "image": "'"${IMAGE}"'"
    }
  }'

echo
