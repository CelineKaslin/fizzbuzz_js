# Javascript-Fizzbuzz #

Following a strict process of TDD to build a FizzBuzz challenge in JavaScript, using the Jasmine testing framework.<br/>
All the test have been build first. They have failed, and then I built the code to make them pass.<br/>
The program is doing as following :<br/>

* The program can be passed a number
* When passed a number that is a multiple of 3, the program returns the message 'Fizz'.
* When passed a number that is a multiple of 5, the program returns the message 'Buzz'.
* When passed a number that is a multiple of both 3 and 5, the program ignores the previous 2 rules and returns the message 'Fizzbuzz'.
* In all other cases, the program simply returns the given number.

## How to use ##

1. clone the repo<br/>
Under the repo name click *clone or download*<br/>
Click on *use HTTPs*, copy the clone URL of the repo<br/>
In the terminal go on the working directory where you want the cloned directory to be<br/>
Use the `git clone` command and paste the clone URL then press enter :

```shell
$ git clone https://github.com/your-username/your-repositary.git
```

2. On your local machine go inside of the *fizzbuzz_Js* directory :

```shell
$ cd fizzbuzz_Js
```
3. You can see the different files by using the `ls` command :<br/>

```shell
$ ls
```

4. You can open the *.js* file that you want to read and change the code in your text editor or using `vim` :

```shell
$ vim wanted_file.js
```
Or you can just read the contains of it from the command line with `cat` :

```shell
$ cat wanted_file.js
```

## Run the tests ##

1. On your command line, from your root directory, use the `pwd` command to see the path of your *html* file:

```shell
$ pwd
$ /Users/yourUsername/Desktop/directory-of-your-project/fizzbuzz_Js
```

2. In your browser copy and past this path, and add at the end of it */SpecRunner.html* <br/>
The page will be displayed on your browser.

3. If you use google chrome you can also open the page on your browser directly from your command line from your root directory, by using the command `open -a “Google Chrome” SpecRunner.html` :

```shell
$ open -a “Google Chrome” SpecRunner.html
```
The page with the test results will be opened on your browser.
