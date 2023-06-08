## <center> CSS </center>

1. What does `css` stands for
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#1-what-does-css-stands-for)

2. What are CSS selectors?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#2--what-are-css-selectors)

3. What are CSS variables?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#3-what-are-css-variables)

4. What is the difference between position absolute and relative?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#4-what-is-the-difference-between-position-absolute-and-relative)

5. What is Box Model?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#5-what-is-box-model)

6. What is a flex-box?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#6-what-is-a-flexbox)

7. What does `justify-content, justify Items, justify Self` mean?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#7-what-does-justify-content-justify-items-and-justify-self-mean)

8. What do `AlignItems, AlignContent, and AlignSelf` mean?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#8-what-do-align-items-align-content-and-align-self-mean)

9. What are grids?
   - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#9-what-are-grids)

10. What are the differences between Flex and Grids?
    - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#10-what-are-the-differences-between-flexbox-and-grids)

11. What is specificity, and how do you calculate it?
    - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#11-what-is-specificity-and-how-do-you-calculate-it)

12. What are media queries?
    - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#12-what-are-media-queries)

13. What is the difference between min-width and max-width in media queries?
    - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#13-what-is-the-difference-between-min-width-and-max-width-in-media-queries)

14. What are animation and keyframe
    - [Ans](https://github.com/alalUDDIN123/interview_preparation/tree/css#14-what-are-animations-and-keyframes)
---
# 1. What does `css` stands for
   - `Case Cading Stylesheet`
---
# 2.  What are CSS selectors?
 - CSS selectors are patterns used to select and target HTML elements on a web page that we want to apply styling.
   - There are several types of CSS selectors, including:
      - Element selectors: 
         - `p,h1,div`
      - Class selectors: 
         - .head
      - ID selectors: 
         - #head
      - Attribute selectors: 
         - a
      - Pseudo-selectors:
         - :hover
         - :focus
         - :first-child
         - and :last-child.   
---
# 3. What are CSS variables?
  - CSS variables (or custom properties) are a way to define reusable values in CSS that can be set once and then used throughout a stylesheet.  

  **`Example`** 

  ```html
  :root {
  --primary-color: blue;
  --secondary-color: red;
}

.box {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
```   

---

# 4. What is the difference between position absolute and relative?

   - `position: relative`: When an element is positioned relative, it is positioned relative to its normal position in the document flow. It can be moved using the CSS `top`, `right`, `bottom`, and `left` properties. Other elements on the page will still respect the space occupied by the relatively positioned element.

   - `position: absolute`: When an element is positioned absolute, it is removed from the normal document flow and positioned relative to its closest positioned ancestor (or the initial containing block if there is no positioned ancestor). It can be moved using the CSS `top`, `right`, `bottom`, and `left` properties. Other elements on the page will not reserve space for the absolutely positioned element.

   
  **`Example`** 

   ```html
   .relative-box {
   position: relative;
   top: 20px;
   left: 30px;
   }

   .absolute-box {
   position: absolute;
   top: 50px;
   right: 0;
   }
   ```

# 5. What is Box Model?

   - The Box Model is a fundamental concept in CSS that describes how elements are rendered and how their dimensions are calculated. It consists of four layers: content, padding, border, and margin.

   - The content layer is the actual content of the element, such as text or images. It has dimensions determined by the width and height properties.

   - The padding layer surrounds the content and provides space between the content and the border. It can be set using the `padding` property.

   - The border layer surrounds the padding and content and defines the visual boundary of the element. It can be set using the `border` property.

   - The margin layer is the outermost layer and provides space between the element and other elements. It can be set using the `margin` property.

   - Understanding the Box Model is crucial for accurately positioning and sizing elements on a web page.

   
  **`Example`** 

  ```html
    .box {
      width: 200px;
      height: 150px;
      padding: 20px;
      border: 1px solid black;
      margin: 10px;
      }
  ```

# 6. What is a flexbox?

   - Flexbox, or Flexible Box Layout, is a CSS layout module that provides a flexible way to distribute and align elements within a container. It is designed to make it easier to create responsive and flexible layouts.

   - With flexbox, the container becomes a flex container, and its child elements become flex items. Flex items can be arranged horizontally or vertically, and their size and alignment can be easily controlled using flexbox properties.

   - Flexbox introduces several properties, including `display: flex` to create a flex container, `flex-direction` to specify the direction of the flex items (row or column), `justify-content` to control the horizontal alignment, `align-items` to control the vertical alignment, and `flex` to control the growth and shrinking of flex items.

   - Flexbox is widely supported by modern browsers and has become a popular choice for creating responsive and dynamic layouts.

   **`Example`** 

   ```html
   .flex-container {
      display: flex;
      justify-content: center;
      align-items: center;
      }

    .flex-item {
      flex: 1;
    }
   ```

# 7. What does `justify-content`, `justify-items`, and `justify-self` mean?

   - `justify-content`: This property is used in flexbox to control how flex items are horizontally aligned within the flex container. It applies to the flex container and accepts values such as `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, and `space-evenly`.

   - `justify-items`: This property is used in grid layout to align grid items horizontally within their grid cells. It applies to the grid container and accepts values such as `start`, `end`, `center`, `stretch`, and `baseline`.

   - `justify-self`: This property is used in grid layout to align an individual grid item horizontally within its grid cell. It applies to grid items and accepts values such as `start`, `end`, `center`, `stretch`, and `baseline`.

   
   **`Example`** 

   ```html
   .flex-container {
  display: flex;
  justify-content: space-between;
   }

   .grid-container {
   display: grid;
   justify-items: center;
   }

   .grid-item {
   justify-self: end;
   }

   ```

# 8. What do `align-items`, `align-content`, and `align-self` mean?

   - `align-items`: This property is used in flexbox

 to control how flex items are vertically aligned within the flex container. It applies to the flex container and accepts values such as `flex-start`, `flex-end`, `center`, `baseline`, and `stretch`.

   - `align-content`: This property is used in flexbox to control how flex lines are vertically aligned within the flex container when there is extra space. It applies to the flex container and accepts values such as `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, and `stretch`.

   - `align-self`: This property is used in flexbox to override the alignment set by `align-items` for an individual flex item. It applies to flex items and accepts values such as `auto`, `flex-start`, `flex-end`, `center`, `baseline`, and `stretch`.

      **`Example`** 

      ```html
      .flex-container {
      display: flex;
      align-items: center;
      align-content: space-around;
      }

      .grid-container {
      display: grid;
      align-items: end;
      }

      .grid-item {
      align-self: start;
      }
      ```

# 9. What are grids?

   - CSS Grid Layout, or simply Grid, is a two-dimensional layout system that allows you to create complex grid-based layouts with ease. It introduces a new way of designing web page layouts by dividing the available space into rows and columns.

   - With CSS Grid, you define a grid container and specify the number of rows and columns it should have. You can then place grid items (elements) into specific cells of the grid, controlling their size, position, and alignment.

   - Grid provides powerful features such as the ability to define grid tracks (rows and columns) with fixed or flexible sizes, control the placement of grid items using grid lines and grid areas, create responsive layouts with media queries, and easily reorder grid items.

   - CSS Grid is well-supported in modern browsers and offers a flexible and efficient way to create both simple and complex grid-based layouts.

    **`Example`** 

   ```html
   .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
      }

      .grid-item {
      background-color: gray;
      padding: 20px;
      }
   ```

# 10. What are the differences between Flexbox and Grids?

    - Flexbox and CSS Grid are both CSS layout modules but serve different purposes.

    - Flexbox is designed for one-dimensional layouts, either in a row or a column. It provides a flexible way to distribute and align elements along the main axis (horizontal for row and vertical for column) and the cross axis. It is ideal for creating flexible and responsive layouts within a single row or column.

    - CSS Grid is designed for two-dimensional layouts, allowing you to create grid-based structures with rows and columns. It provides a powerful grid system for precise placement and alignment of elements within the grid. Grid is suitable for creating complex, multi-column, and multi-row layouts.

    - Flexbox is more suitable for controlling the layout of items within a container, while Grid is more suitable for creating overall page layouts.

   **`Example`** 

     - Flex box

    ```html
    .flex-container {
      display: flex;
      justify-content: center;
      }

      .flex-item {
      flex: 1;
      }

    ```
  --- 
     - Grid

    ```html
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      }

      .grid-item {
      background-color: gray;
      padding: 20px;
      }

    ```

# 11. What is specificity, and how do you calculate it?

    - Specificity is a concept in CSS that determines which styles are applied to an element when multiple selectors target the same element. It is a way of resolving conflicts when different styles have conflicting rules.

    - Specificity is calculated based on the selectors used in a CSS rule. Each selector has a specific value assigned to it, and the values are combined to determine the specificity of the rule.

    - The calculation is based on four categories: inline styles (highest specificity), IDs, classes/attributes/pseudo-classes, and elements/pseudo-elements (lowest specificity). The more specific a selector is, the higher its specificity value.

    - When comparing two rules that target the same element, the rule with the higher specificity will override the rule with lower specificity.

    - The exact calculation of specificity can be complex, but a common shorthand representation is using four numbers separated by commas. For example, `0, 1, 2, 0` represents a selector with one ID, two classes/attributes/pseudo-classes, and no elements.

   **`Example`** 

   ```html
   <style>
  /* Specificity: 0, 0, 1, 0 */
   p {
      color: blue;
   }
   
   /* Specificity: 0, 1, 0, 0 */
   .red-text {
      color: red;
   }
   
   /* Specificity: 0, 1, 1, 0 */
   p.red-text {
      color: green;
   }
   </style>

   <p class="red-text">This text will be green.</p>
  ```

# 12. What are media queries?

   - Media queries are a CSS feature that allows you to apply different styles based on specific device characteristics or viewport dimensions. They are commonly used for creating responsive designs that adapt to different screen sizes and devices.

   - Media queries consist of a media type and one or more expressions that define the conditions for the styles to apply. The media type can be `all`, `screen`, `print`, or other specific media types. The expressions can include properties such as `width`, `height`, `aspect-ratio`, `orientation`, and more.

   - Media queries can be used to apply different stylesheets or override specific styles within a single stylesheet. They are commonly used to adjust layout, font sizes, images, and other design aspects to provide an optimal user experience on different devices.

   **`Example`** 

   ```html
   @media screen and (max-width: 600px) {
   body {
      font-size: 14px;
   }
   }

   @media (min-width: 768px) and (max-width: 1024px) {
   .container {
      width: 80%;
      margin: 0 auto;
   }
   }

   ```

# 13. What is the difference between `min-width` and `max-width` in media queries?

   - `min-width` and `max-width` are two common properties used in media queries to target specific viewport dimensions.

   - `min-width` defines the minimum width at which the styles within the media query will be applied. If the viewport width is equal to or greater than the specified `min-width` value, the styles will take effect.

   - `max-width` defines the maximum width at which the styles within the media query will be applied. If the viewport width is less than or equal to the specified `max-width` value, the styles will be applied.

   - In other words, `min-width` targets viewports that are equal to or wider than the specified value, while `max-width` targets viewports that are equal to or narrower than the specified value.

   
   **`Example`** 

   ```html
   @media screen and (min-width: 600px) {
  /* Styles applied when the viewport width is 600px or greater */
   }

   @media screen and (max-width: 1024px) {
   /* Styles applied when the viewport width is 1024px or smaller */
   }

   ```

# 14. What are animations and keyframes?

   - Animations in CSS allow you to create dynamic and interactive effects by changing an element's properties over time. Keyframes define the intermediate states or steps of an animation, specifying how an element should appear at specific points during the animation.

   - Animations are created using the `@keyframes` rule, which defines a set of named keyframes and their associated properties at specific percentages of the animation's duration. Each keyframe specifies the CSS properties to apply at a certain point in time.

   - The animation is then applied to an element using the `animation` property, specifying the name of the keyframes and the animation's duration, timing function, delay, and other optional properties.

   - CSS animations provide a powerful way to add movement, transitions, and effects to elements on a web page without the need for JavaScript or external libraries. They can be used to create subtle hover effects, loading spinners, complex transitions, and more.   

      
   **`Example`**   

   ```html
   @keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
   }

   .box {
   animation: slide-in 1s ease-in-out;
   }
```
