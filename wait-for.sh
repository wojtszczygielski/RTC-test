#!/bin/sh

host="$1"
port="$2"

echo "Waiting for $host:$port..."

until nc -z "$host" "$port"; do
  sleep 1
done

shift 2
exec "$@"
