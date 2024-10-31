# word-counter-js

A simple NodeJS project to count words in .txt files.<br><br>
 It takes a .txt filepath as `-tfp` arguent and a result dir as `-rfp` argument.<br>
 It returns a .txt file listing repeated words in each paragraph of the input file, if there is no repeated words in the paragraph it is skiped in the result.<br>
 It is important to notice that the app only counts words greater than 3 letters lenght.

 ### What is needed
 
 You will need to have Node installed, it was developed with v23 (the current lts version). But it can be run with olders Node versions - it was tested with v18 and ruuned well.

 ### How to run

 - clone the repo
 - install dependencies with `npm install`
 - run it with `node cli.js -tfp <text-file-path> -rfp <result-file-path>`

 ### Final considerations

 It was made with love wile I am studying JavaScript following Alura curriculum. I am a software developer foccused on backend and I work mainly with Python, but used JS with React and I am studying other techologies like Google`s Golang.
<br>
<br>
Thanks for taking the time to visit this project!