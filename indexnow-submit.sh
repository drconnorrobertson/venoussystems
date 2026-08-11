#!/bin/bash
API_KEY="f8be6a5255257b361c5504a56bd6d060"
HOST="venoussystemsinc.com"
URL="$1"
if [ -z "$URL" ]; then echo "Usage: $0 <url>"; exit 1; fi
curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{\"host\":\"$HOST\",\"key\":\"$API_KEY\",\"keyLocation\":\"https://$HOST/$API_KEY.txt\",\"urlList\":[\"$URL\"]}"
echo "Submitted $URL to IndexNow"
