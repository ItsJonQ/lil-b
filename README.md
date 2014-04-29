# Bootstrap - Lil' B #
A Bootstrap for Bootstrap

![Lil B Logo](https://raw.githubusercontent.com/ItsJonQ/bootstrap-lil-b/master/images/bootstrap-lil-b-banner.jpg)

Lil' B is a Bootstrap Reset Stylesheet. It was created to "fix" spacing inconsistencies and various nuances of Bootstrap. Lil' B also has a handful of helper classes to make bootstrappin' your site that much easier.

### How To Use ###
- Download the b.css file (located in dist/css/b.css) and add it to your project
- Load it up **after** you add bootstrap to your project

#####Example#####
```
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/b.css">
```

#### Helper Classes ####

#####"Solo" Column#####
*.col-solo*

```
<div class="container">
    <div class="row">
        <div class="col-md-8 col-solo">
            Content here
        </div>
    </div>
</div>
```

This is designed to be added to "column" sized elements where you wish to have a desired size (e.g. col-md-8 for width of 66.6667%), but you don't it to float or to have any elements next to it.

This is useful for single-page type layouts where content blocks need to be slightly narrower instead of col-md-12 or container width (default-max 1170px)


#####Responsive Video Embeds#####
*.flex-video*

```
<div class="flex-video">
    * Insert your video embed here *
</div>
```

This helper class allows for video embeds to be responsive. Most videos these days have a 16:9 (HD) ratio. If your video embed is of a 4:3 (SD) ratio, add .sd along with the .flex-video class.


#####"Position:Fixed" Optimizer#####
*.fixed-z*

```
<div class="floating-content fixed-z">
    Fixed floating content
</div>
```

This helper class adds the "translateZ" hack for selectors that are set as position: fixed to help prevent brower repaints on browser scrolls/resize.


#####Disable Selection (No-Select)#####
*.no-select*

```
<div class="some-nav no-select">
    ...
</div>
```

This helper class disables selection for selectors. This is handy for navigations, links, headers, buttons, etc..


#####Text: Lowercase#####
*.text-lowercase*

```
<div class="mini-content-area text-lowercase">
    i am now lowercase text! EVEN THOUGH THIS PART IS WRITTEN IN UPPERCASE.
</div>
```

This helper class transforms the text within to all lowercase.


#####Text: Uppercase#####
*.text-uppercase*

```
<div class="mini-content-area text-uppercase">
    i am now uppercase text! even though.. I am written in lowercase.
</div>
```

This helper class transforms the text within to all lowercase.

#####Vertical Align Center#####
*.v-center*

```
<div class="v-center text-center">
    <!-- you don't need to add a class to the child div,
         but you can if you want -->
    <div>
        <h3>I'm vertically aligned!</h3>
    </div>
</div>
```

This helper class helps vertically align elements.
In order to get .v-center to work properly, you have to have a child div within the parent .v-center selector.

It is recommended that you add some sort of height to your .v-center selector to get the desired effect.


**Enjoy! :)**

P.S. Feedback welcome!

### Updates ###
#### April 24, 2014 ####
- Split up core functions of Lil B into individual files and relocated them to src/css (e.g. src/css/b.control.css)
- Relocated compiled files to dist/css. There you'll find b.css and b.min.css
- The "optimization" (aka repaint fixes) have been submitted to Bootstrap for approval. Hopefully they'll add it into core! :)
