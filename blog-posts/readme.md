[Week 2 Home](../)

# U1.W2: Responsive Web Design - Pairing Challenge!

## Learning Competencies
- Describe responsive design
- Determine good and bad practices in responsive design
- Convert a small site to responsive design
- Compare responsive design and fluid layouts


## Summary

It is almost impossible to ignore responsive design in today's web development scene. It is a very popular buzzword and for good reason. With the mobile and tablet market rising and more people accessing the web via mobile devices, according to the [Pew survey on cell phone access and usage](http://www.pewinternet.org/fact-sheets/mobile-technology-fact-sheet/), it is important that your website be usable on screens of all sizes.

The key to this is something call media queries, which allow you to change CSS styles based on screen width and height, color, aspect ratios an many others [MDN media queries resource](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries).


## Release 0: Research

Let's get a good foundation by looking at some good resources available about responsive and fluid design:

- [Beginners guide to responsive web design](http://blog.teamtreehouse.com/beginners-guide-to-responsive-web-design) - Team Treehouse has a great series about building a responsive website if you want to start a subscription with them.
- [UXer asks the difference between fluid and responsive design](http://ux.stackexchange.com/questions/24406/what-is-the-exact-difference-between-fluid-and-responsive-design)
- [Fluid layout project](http://www.creativebloq.com/css3/create-fluid-layouts-html5-and-css3-3142768)
- [Liquidapsive](http://liquidapsive.com/) allows you to switch what kind of layout format you would like to use. Liquid, Adaptive, Respnosive or Static. It is a great integration of all you have read so far.
- [Chrome mobile emulation](https://developer.chrome.com/devtools/docs/mobile-emulation) Chrome allows you to change the user agent so you can see what the website looks like with different devices.

## Release 1: Apply

Now that we have a good base in theory, lets put it to use in converting this sample static webpage to a more modern web friendly format.

Open the starting-point.html in your browser and see what it looks like. Resize the screen and see how it looks when you go to different screen resolutions. If you open your chrome dev tools when you do this, you can see the pixel dimensions as you resize. Notice where things start to fall apart

## Release 2: Responsify with your pair

With such a multitude of devices with different screen sizes, it is important to create a web layout that is not tied to a certian screen resolution.

Think about how you want the website to look from a desktop monitor, a cell phone, and a tablet. Resize your screen to mimic those sizes and see where the layout falls apart. Then you can use media queries to target these pixel dimensions.

If you are using chrome, you can open the Chrome Dev Tools and start resizing the browser window. This will display the pixel dimensions in the top right of the screen.

Here is a checklist to get you started:

  - change static pixel dimensions to percentages
  - move navigation links (Home, Profile, Stuff, Pictures) from side bar to top bar under header
  - Optimize Picture width for smaller screen sizes. We should be able to see the whole picture and not scroll
  - make the text centered and with good spacing on either side to facilitate reading on the mobile screen
  - Make the title HEADER fit smaller screens

This is my example!

Desktop size:

![desktop](http://i.imgur.com/ICS4jYi.png)

Mobile:

![mobile](http://i.imgur.com/78f8fF3.png)



Here is a comprehensive resource on media queries: [MDN docs on media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)

Here is a website that compiles examples of great usage of media queries: [mediaqueri.es](http://mediaqueri.es/)

Here is a more practical guide: [alistapart on media queries](http://alistapart.com/article/responsive-web-design) It is old but there is still a lot of good info there.

## Release 3: Reflect (individually)
Reflect on your learning in the "reflection" div on your site. This section should be completed on your own, but you should style it with your pair.

## Release 4: Commit and push your changes
This site should be initially kept in your phase-0-unit-1 repository, but we also want you to make it live on your github.io site.

## Release 5: Publish
Using the terminal, practice copying the html and css sheets into a new folder in your [USERNAME]github.io site. Commit and push your changes to your github.io site. Double check that everything is displaying  properly. Then add a link on the index of your site to make sure people can learn from your example!

## Helpful Resources
If you want more resources or time to build a responsive site, consider going through any of these additional resources (which take a couple of hours each):
- [Treehouse: Build a Responsive Website](http://teamtreehouse.com/library/build-a-responsive-website)
- [16 really useful responsive design tutorials](http://www.creativebloq.com/netmag/16-really-useful-responsive-design-tutorials-71410085).


