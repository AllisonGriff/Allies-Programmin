# This is a Dumping Ground.
This is the first repository I ever made and I am learning the proper way to utalize GitHub. 



## How to Connect Git Repository with VS Code

### Part 1-- Create the GitHub Repository
  1. Open your browser and go to https://github.com
  2. Log in
  3. In the top-right corner, click the + plus icon
  4. Click New Repository
On the "Create a new repository" page:
  5. Name the repository
  6. Description (optional)
  7.  Choose Public or Private
  8.  **Important** we want the  repo completely empty
  9.  Click "**Create Repository**"


### Part 2-- Adding Git to VS Code
  1. Open project in VS Code
  2. In VS Code open a new terminal
  3. ```bash
     git init
     ```
     you should see a message confirming the inialized Git repository.
  4. in the terminal add
      ```bash
     git add .
     ```
  5. then commit files:
    ```bash
    git commit -m " initial Commit"
    ```
  6. If this is your first time running git you may need to add your account info
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "you@example.com"
     ```

  7. Connect your local folder to GitHub
     Go back to the Github page that you left open.

     You should see a section called "**... or push an existing repository from the command line**"
     Copy only the line that looks like this (example):
     ```bash
     git remote add origin https://github.com/yourusername/my-first-project.git
     ```
     Paste in the VS Code terminal and press **Enter**
  
  9. Push your code to GitHub
      ```bash
      git branch -M main
      ```
      ```bash
      git push -u origin main
      ```
      -GitHub may open a browser window asking you to log in
      -approve the conection
     
  ### Part 3-- Verify it worked
  1. Go back to your GitHub repo page
  2. Refresh the page
     **Your files Should now be there!**

  ### Part 4- Future Updates (Super Important)
  ```bash
git add .
git commit -m "Describe what you changed"
git push
```
