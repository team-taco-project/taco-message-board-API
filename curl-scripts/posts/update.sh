#!/bin/bash

API="http://localhost:4741"
URL_PATH="/update-post/:id"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
