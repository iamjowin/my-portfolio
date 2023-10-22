# build
npm run build

# save the latest commit hash as a string
LOGSTRING=$(git log)
COMMIT=$(echo $LOGSTRING | awk '{print $2}')

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "deploy (commit: $COMMIT)"


git push -f https://github.com/iamjowin/my-portfolio.git master:gh-pages

cd ..