# todo
![image](https://user-images.githubusercontent.com/115970252/215251210-3e957ffe-d42f-413a-ad35-decc51521ef5.png)

This project was an assignment for The Odin Project. The goal of the assignment was to practice Object Oriented Programming principles including creating funcitons with a single responsibility and avoiding tightly coupled objects.

## Technologies Used
- HTML
- CSS
- Javascript
- webpack

## Live Site
(https://singhalex.github.io/todo/)

## How it Works
This is a single page app that is built using modules to handle the various aspects of the app. There is a module to handle the UI, the projects, the tasks, and local storage.
I attempted to make each module responsible for only one aspect of the application. There is a master list of projects and each project object contains an array of task objects. The DOM is updated to show the appropriate tasks whenever a new project is selected or when a new task is created. The task elements on the page have a delete button that also removes the associated project or tast from the array.
Each task can contain a due date and there is a filter to show each task that is due today or within a week.
