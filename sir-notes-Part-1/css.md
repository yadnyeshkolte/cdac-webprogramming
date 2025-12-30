
# CSS (Cascaded Style Sheet)

## Introduction
*   **Purpose**: Styling HTML (appearance, layout).
*   **Application Methods**:
    *   External: `<link href="file.css">`
    *   Internal: `<style></style>`
    *   Inline: `<div style=""></div>`
*   **Syntax**: `Selector { property: value; }` (e.g., `div { color: red; }`).

## Selectors
*   **Simple**: Name (`div`, `p`), ID (`#myDiv`), Class (`.chatbox`).
*   **Combinator**:
    *   Descendent: `div p`
    *   Child: `div > p`
    *   Adjacent sibling: `div + p`
    *   Any sibling: `div ~ p`
*   **Pseudo Class**: `:focus`, `:active`, `:first-child`, `:not(p)`, `:hover`, `a:link`, `a:visited`.
*   **Pseudo Element**: `::first-line`, `::first-letter`, `::before`, `::after`, `::selection`.
*   **Attribute Selector**:
    *   `input[type="text"]`
    *   `[attribute^="value"]` (Starts with)
    *   `[attribute$="value"]` (Ends with)
    *   `[attribute*="value"]` (Contains substring)
    *   `[attribute~="value"]` (Contains word)
    *   `[attribute|="value"]` (Starts with word)

## Properties & Inheritance
*   **Inherited**: Text and list properties (color, font-size, font-family, line-height, text-align, list-style).
    *   *Note*: `<a>` elements do not inherit color and text-decoration.
*   **Not Inherited**: Box and positioning styles (width, height, border, margin, padding, position, float).

### Specific Property Categories
*   **Background**: `background-color` (hex, rgba), `background-image`.
*   **Border**: `border: 2px solid red;`, `border-radius`, style, color, width.
*   **Box Model**: Height, width, padding, border, outline, margin.
*   **Text**: Color, text-align, vertical-align, text-transform, text-indent.
*   **Font**: Style, variant, weight, size/line-height, family.
*   **Display**: `inline`, `block`, `none`, `inline-block`.
*   **Float**: `left`, `right`.



