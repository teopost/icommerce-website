#!/bin/sh

quick_push() {
    git add .
    git commit -a -m "$1"
    git push
}

if [ -z "$1" ]; then 
    echo "No argument supplied"
    exit
fi

quick_push "$1" && jekyll build && ./deploy.sh 
