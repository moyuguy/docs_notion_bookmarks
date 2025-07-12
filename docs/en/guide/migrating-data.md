# Data Migration: Moving Browser Bookmarks to Notion

If you have already accumulated a large number of bookmarks in your browser, you can easily migrate them all to Notion Bookmarks at once.

## Step 1: Export Browser Bookmarks

First, you need to export bookmarks from your browser. Almost all mainstream browsers support exporting bookmarks as HTML files.

-   **Chrome**: Go to `chrome://bookmarks`, click the menu in the top right corner, and select **Export bookmarks**.
-   **Firefox**: Press `Ctrl+Shift+O` (or `Cmd+Shift+O`) to open the bookmark library, select **Import and Backup** > **Export Bookmarks to HTML...**.
-   **Safari**: Select **File** > **Export Bookmarks...**.
-   **Edge**: Go to `edge://favorites`, click the `...` menu, and select **Export favorites**.

You will get a file named `bookmarks.html` (or similar).

## Step 2: Use Conversion Tool (Coming Soon)

To simplify the import process, we plan to provide an online tool or script that can parse your exported `bookmarks.html` file and convert it to a format that can be easily pasted into the Notion database (such as CSV).

**Temporary Solution:**

Before the official tool is released, you can look for third-party "HTML to CSV" conversion tools to process your bookmark file. After conversion, you can import the CSV file directly into your Notion database.

1.  Use an online tool or script to convert `bookmarks.html` to CSV format.
2.  Open your "Navigation Links" Notion database.
3.  Click the `...` menu in the top right corner and select **Merge with CSV**.
4.  Upload your converted CSV file and match the fields according to the prompts.

This way, you can quickly migrate years of bookmark accumulation seamlessly to your new navigation site.