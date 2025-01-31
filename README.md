# **React Router Color Factory**

## [Live](https://blinter.github.io/React-Router-ColorFactory)

---

## **Part 2: React Router Color Factory**

The goal of this exercise will be to use React Router to build an app that lets you view colors and add new colors.

### **User Stories**

    1. As a user, I can go to /colors to see a list of all available colors.
    2. As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory.
(The route here should be /colors/:color)
    3. As a user, I can click on a button to show a form that will let me add a new color.
Note that you can give an *input* a type of *color* if you’re trying to select a color.
(The route here should be */colors/new*)
    4. As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.
    5. As a user, if I try to navigate to a color page that does not exist (eg, /colors/nope), I am redirected to the colors index page.
    6. As a user, if I try to navigate to an invalid url (eg, /this-is-not-valid), I am redirected to the colors index page.

---

### TODO

---

Further Study
    1. Write tests for these applications!
    2. Persist your colors data in localStorage. (You should use useEffect for this).
    3. Add nice styling to your apps.

---

## **Further Study: React Router Calculator**

It’s time to build another routing-based calculator, but this time with React Router!

Build a calculator that supports routes like:

***/add/1/2*** should render a component that displays 3.

***/subtract/3/2*** should render a component that displays 1.

***/multiply/6/4*** should render a component that displays 24.

***/divide/20/5*** should render a component that displays 4.

As a bonus, try to do this without using a different component for each of the four math operations.

