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

echo "Push changes to github (master)"
quick_push "$1" 

echo "Rebuild site"
jekyll build

echo "Deploy site to github (gh-pages)"
./deploy.sh 
