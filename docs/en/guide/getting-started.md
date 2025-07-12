# Getting Started

Welcome to Notion Bookmarks! This guide will help you complete all the setup in 3 minutes and have your own personal navigation site powered by Notion.

## Prerequisites

Before getting started, please make sure you have the following accounts:

-   A **GitHub** account
-   A **Notion** account
-   A **Vercel** account (recommended to sign in with GitHub)

## Step 1: Fork Project & Copy Template

1.  Visit the [Notion Bookmarks GitHub repository](https://github.com/moyuguy/notion_bookmarks) and click the **Fork** button to copy the project to your own repository.
2.  Visit the [Notion Template](https://www.notion.so/your-template-link) and click **Duplicate** to copy it to your Notion workspace.

## Step 2: Create Notion Integration

1.  Go to [Notion's integration management page](https://www.notion.so/my-integrations) to create a new integration.
2.  Get your **Internal Integration Token** and keep it safe.
3.  Return to your copied Notion database page, click the `...` in the top right corner, select **Add connections**, then choose the integration you just created to grant access.

## Step 3: Deploy on Vercel

1.  Log in to Vercel and select **Import Project**.
2.  Select the `notion-bookmarks` project from your GitHub repository and import it.
3.  In the **Environment Variables** section, configure the following variables:
    -   `NOTION_TOKEN`: The integration token you obtained in the previous step.
    -   `NOTION_LINKS_DB_ID`: The ID of your "Navigation Links" database (can be obtained from the Notion page URL).
    -   `NOTION_WEBSITE_CONFIG_ID`: The ID of your "Website Configuration" database.
    -   `NOTION_CATEGORIES_DB_ID`: The ID of your "Categories Configuration" database.
4.  Click **Deploy** and wait for deployment to complete.

Congratulations! You now have a fully functional personal navigation site.