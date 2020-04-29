# Modal Specifications

Your aim is to create a React component that displays a modal. A Modal is an overlay on the web-page as shown in the picture below.

![sample.png](sample.png)

## Requirements

- The Modal component should be re-usable and a module that can be shared.
  - You component should be able to render multiple modals by calling the component multiple times.
  - It should have a defined input interface and a defined output.
  - You need to design an API letting the user override in-built functionalities as they please.
  - All the over-ridable APIs need to have sensible defaults.
- The modal should be accessible according to the modern web accessibility practices. Read more [here](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal).
- **Make sure to write functional test cases.**

## Workflow

- **The main aim of this task is to able to pair program and collaborate with a buddy.**
- Each person will be assigned a buddy.
- Choose either your's or your buddy's repo to work on this exercise.
  - Don't worry if it's not your own repo. We will give write permissions to both you and your buddy for the question. So your commits will be preserved.
- All work should be submitted via pull requests.
- Make sure that your buddy reviews your PR and vice-versa you review your buddy's PR. 
- You can use VS Code Live Share or Zoom for collaboration.
 - Try sharing your screen and coding while the other person watches. This is a good habit as it will prepare you to do well in interviews as well. Also, keep explaining what you are coding to your buddy. This will help you in writing bug-free code. 

## After Modal is constructed

- Make a small application where you import your modal.
- Create login and signup forms.
  - Show the forms in their respective modals.
  - When the user clicks **Submit on the login modal**, navigate to a page "Displaying Dashboard"
  - When the user clicks Submit on Signup modal, navigate to a page "Displaying Dashboard"
  - You can use [Reach Router](https://reach.tech/router) for navigating between pages.
  - You don't need to write test cases for the App.
- Don't worry about styling.

## Restrictions

- Don't copy code from any GitHub repository.
