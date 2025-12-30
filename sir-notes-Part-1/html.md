# HTML (Hyper Text Markup Language)

## Basics
*   **Extension**: `.html` or `.htm`.
*   **Construction**: Tags (Start & End), Elements (Simple & Complex), Attributes, Entity References.
*   **Sample Structure**:
    ```html
    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Simple Tags Demo</title>
      </head>
      <body>
        <a href="..." title="PGDAC">Link</a>
        <img src="logo.gif" alt="logo" />
        <strong>Bold</strong> and <em>italic</em> text.
      </body>
    </html>
    ```


## Elements and Layout
*   **Block Elements**: Add a line break before and after. Examples: `<div>`, `<table>`, `<hr>`, headings, lists, `<p>`.
*   **Inline Elements**: Do not break text. Examples: `<span>`, `<a>`.

## Formatting
*   **Headings**: `<h1>` to `<h6>`.
*   **Paragraphs**: `<p>`.
*   **Sections**: `<div>` (Block) and `<span>` (Inline).
*   **Text Styling Tags**:
    *   **Bold**: `<b>` or `<strong>`
    *   *Italic*: `<i>` or `<em>`
    *   <u>Underline</u>: `<u>`
    *   Superscript: `<sup>`
    *   Subscript: `<sub>`
    *   Preformatted: `<pre>`
    *   Quote Block: `<blockquote>`
    *   Strike through: `<del>`

## Important Tags
*   **Lists**:
    *   Ordered: `<ol type="1">` (Types: 1, I, i, a, A).
    *   Unordered: `<ul>` (Types: disc, circle, square).
    *   Definition: `<dl>`, `<dt>`, `<dd>`.
*   **Media/Scripting**: `<script>`, `<style>`, `<link rel="icon">`, `<img>`, `<video>`, `<audio>`.
*   **Meta**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

## Tables
*   **Tags**: `<table>`, `<caption>`, `<tr>`, `<th>`, `<td>`, `<thead>`, `<tbody>`, `<tfoot>`.
*   **Attributes**: `rowspan`, `colspan`, `id`, `cellspacing`, `cellpadding`.

## Forms
*   **Definition**: Collects user input via `<form action="..." method="..." enctype="...">`.
*   **Methods**: GET (URL data, length restricted) vs POST.
*   **Elements**: `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<button>`, `<textarea>`, `<select>` (with `<option>`).
*   **Input Types**:
    *   *Basic*: text, password, hidden, file, radio, checkbox, submit, reset.
    *   *Advanced*: email, number (min, max, step), date, time, range, color.
*   **Attributes**: `required`, `disabled`, `readonly`.

## Special Characters
The document lists specific HTML entities for symbols:

| Symbol | HTML Entity | Symbol Name |
| :--- | :--- | :--- |
| £ | `&pound;` | British Pound |
| € | `&#8364;` | Euro |
| " | `&quot;` | Quotation Mark |
| ₹ | `&#x20b9;` | Rupee |
| — | `&mdash;` | Em Dash |
| | `&nbsp;` | Non-breaking Space |
| & | `&amp;` | Ampersand |
| > | `&gt;` | Greater Than |
| < | `&lt;` | Less Than |
| ™ | `&trade;` | Trademark Sign |
| ® | `&reg;` | Registered Trademark Sign |
| © | `&copy;` | Copyright Sign |
