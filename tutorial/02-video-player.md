# Add a video player to the app

We are going to replace the Hello-World component in the app with a videojs video player component and configure some new settings for the player.

## Add a router to the app

First, we are going to add a router to the app.  A router will enable us to serve test videos from within the project and will let us have multiple views within the single page app.

1. Use the vue-cli add command to add a router to the project.

    ```
    vue add router
    ```

2. Take a moment to explore the changes to the app. The app now has two views 1) **About** and 2) **Home** that you can load using the links at the top of the web page.

    ![app with two available views: About and Home](../images/02-vue-router.png)

## Add a VideoPlayer component

1. Install the video.js package 

    ```
    npm install video.js
    ```

2. Replace the Hello-World compnent with the VideoPlayer component in Home.vue

<add a diff here>

## Add vuex to keep track of the player state when we change between routes

We want out video player to clean up when we are not looking at it in the app.  This will avoid consuming alot of memory for videos as we navigte to views in the app that don't include a video player.

```
    vue add vuex
```

## Add code to remember the player state when we mount and unmount views that include it

<diff here>



